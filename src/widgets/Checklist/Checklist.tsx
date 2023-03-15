/* Core */
const { widget } = figma
const {
  // Components
  AutoLayout,
  Frame,
  Text,
  Input,
  Rectangle,
  Image,
  SVG,
  Ellipse,
  Line,
  Fragment,

  // Hooks
  useSyncedState,
  useSyncedMap,
  usePropertyMenu,
  useEffect,
  useStickable,
  useStickableHost,
  useWidgetId,

  // Functions
  register,
  waitForTask
} = widget

import { EntryTypes, EntryActions } from './config'

/* Components */
import Header from 'src/patterns/Header'
import ItemCheckbox from 'src/patterns/ItemCheckbox'
import ItemTitle from 'src/patterns/ItemTitle'
import ButtonGhost from 'src/components/ButtonGhost'
import Item from 'src/components/Item'
import { glyphs } from 'src/components/Icon'
import Divider from 'src/components/Divider'
import Footer from 'src/patterns/Footer'

/* Utils */
import link from 'src/utils/link'
import datetime from 'src/utils/datetime'
import tokens from 'src/utils/tokens'
import uuid from 'src/utils/uuid'

/* --- */

function Widget() {
  const [data, setData] = useSyncedState('data', {
    selectedEntry: undefined,
    isUIopen: false,
    title: 'My checklist',
    description: '',
    colorRibbon: tokens.themes.status.dark.light.fill,
    colorTheme: 'light',
    width: 800,
    isRibbonVisible: true,
    isTitleVisible: true,
    isDescriptionVisible: false,
    isEditingVisible: true,
    isChecksAllowed: true,
    isCompletedVisible: true,
    isMetadataVisible: false,
    isFooterVisible: true,
    isBackgroundVisible: true
  })

  const [entryType, setEntryType] = useSyncedState('entryType', Object.keys(EntryTypes)[0])

  const entries = useSyncedMap<ChecklistCheckboxEntry | ChecklistTitleEntry>('entries')

  usePropertyMenu(
    [
      ...(data.isEditingVisible
        ? ([
            {
              itemType: 'action',
              tooltip: 'Settings',
              propertyName: 'openSettings',
              icon: glyphs.settings(tokens.themes.txt.minor.default.light.color as string)
            },
            {
              itemType: 'toggle',
              tooltip: 'Switch color theme',
              propertyName: 'colorTheme',
              isToggled: data.colorTheme === 'dark',
              icon: glyphs.darkmode(
                (data.colorTheme === 'dark'
                  ? tokens.themes.txt.primary.inverted.light.color
                  : tokens.themes.txt.minor.default.light.color) as string
              )
            },
            {
              itemType: 'color-selector',
              propertyName: 'colorRibbon',
              tooltip: 'Header color',
              selectedOption: data.colorRibbon,
              options: [
                { option: tokens.themes.status.error[data.colorTheme].fill, tooltip: 'Red' },
                { option: tokens.themes.status.warning[data.colorTheme].fill, tooltip: 'Orange' },
                { option: tokens.themes.status.important[data.colorTheme].fill, tooltip: 'Yellow' },
                { option: tokens.themes.status.success[data.colorTheme].fill, tooltip: 'Green' },
                { option: tokens.themes.status.secondary[data.colorTheme].fill, tooltip: 'Cyan' },
                { option: tokens.themes.status.primary[data.colorTheme].fill, tooltip: 'Blue' },
                { option: tokens.themes.status.info[data.colorTheme].fill, tooltip: 'Purple' },
                { option: tokens.themes.status.dark[data.colorTheme].fill, tooltip: 'Black' },
                { option: tokens.themes.status.disabled[data.colorTheme].fill, tooltip: 'Grey' },
                { option: tokens.themes.status.white[data.colorTheme].fill, tooltip: 'White' }
              ]
            },
            {
              itemType: 'separator'
            }
          ] as WidgetPropertyMenuItem[])
        : []),
      {
        itemType: 'toggle',
        tooltip: 'Enable/disable editing',
        propertyName: 'isEditingVisible',
        isToggled: !data.isEditingVisible,
        icon: glyphs.editingNo(
          (data.isEditingVisible
            ? tokens.themes.txt.minor.default.light.color
            : tokens.themes.txt.primary.inverted.light.color) as string
        )
      },
      {
        itemType: 'toggle',
        tooltip: 'Enable/disable checkboxes',
        propertyName: 'isChecksAllowed',
        isToggled: !data.isChecksAllowed,
        icon: glyphs.checkNo(
          (data.isChecksAllowed
            ? tokens.themes.txt.minor.default.light.color
            : tokens.themes.txt.primary.inverted.light.color) as string
        )
      },
      ...(data.isEditingVisible
        ? ([
            {
              itemType: 'separator'
            },
            {
              itemType: 'dropdown',
              tooltip: 'New entry type',
              propertyName: 'entryType',
              options: Object.keys(EntryTypes).map((s) => ({
                option: s,
                label: EntryTypes[s as keyof ChecklistEntryMapping].label
              })),
              selectedOption: entryType
            },
            {
              itemType: 'action',
              tooltip: 'Add entry',
              propertyName: 'addEntry',
              icon: glyphs.plus(tokens.themes.txt.minor.default.light.color as string)
            }
          ] as WidgetPropertyMenuItem[])
        : [])
    ],
    ({ propertyName, propertyValue }) => {
      if (propertyName === 'openSettings') {
        return new Promise((resolve) => {
          openUI('settings', { data, entry: undefined })
        })
      }

      if (propertyName === 'isEditingVisible') {
        setEditingVisibility()
      }

      if (propertyName === 'isChecksAllowed') {
        setChecksAllowed()
      }

      if (propertyName === 'colorTheme') {
        setTheme()
      }

      if (propertyName === 'colorRibbon') {
        setRibbon(propertyValue)
      }

      if (propertyName === 'entryType') {
        setEntryType(propertyValue as string)
      }

      if (propertyName === 'addEntry') {
        addEntry(entryType)
      }
    }
  )

  useEffect(() => {
    if (data.isUIopen) {
      updateUI()
    }

    figma.on('close', () => {
      setData({
        ...data,
        isUIopen: false
      })
    })

    figma.ui.onmessage = (message) => {
      if (message.action === 'metadata') {
        setMetadataVisiblity()
      }

      if (message.action === 'completed_tasks') {
        setCompletedVisibility()
      }

      if (message.action === 'ribbon') {
        setRibbonVisibility()
      }

      if (message.action === 'title') {
        setTitleVisiblity()
      }

      if (message.action === 'description') {
        setDescriptionVisiblity()
      }

      if (message.action.indexOf('width') > -1) {
        setWidth(message.action)
      }

      if (message.action === 'footer') {
        setFooterVisiblity()
      }

      if (message.action === 'background') {
        setBackgroundVisiblity()
      }

      if (message.action === 'priority_0') {
        setPriority(entries.get(message.uuid) as ChecklistCheckboxEntry | ChecklistTitleEntry, 0)
        figma.closePlugin()
      }

      if (message.action === 'priority_1') {
        setPriority(entries.get(message.uuid) as ChecklistCheckboxEntry | ChecklistTitleEntry, 1)
        figma.closePlugin()
      }

      if (message.action === 'priority_2') {
        setPriority(entries.get(message.uuid) as ChecklistCheckboxEntry | ChecklistTitleEntry, 2)
        figma.closePlugin()
      }

      if (message.action === 'priority_3') {
        setPriority(entries.get(message.uuid) as ChecklistCheckboxEntry | ChecklistTitleEntry, 3)
        figma.closePlugin()
      }

      if (message.action === 'move_up') {
        moveEntry(entries.get(message.uuid) as ChecklistCheckboxEntry | ChecklistTitleEntry, 'up')
      }

      if (message.action === 'move_down') {
        moveEntry(entries.get(message.uuid) as ChecklistCheckboxEntry | ChecklistTitleEntry, 'down')
      }

      if (message.action === 'show_description') {
        toggleDescriptionVisibility(entries.get(message.uuid) as ChecklistCheckboxEntry | ChecklistTitleEntry)

        figma.closePlugin()
      }

      if (message.action === 'hide_description') {
        toggleDescriptionVisibility(entries.get(message.uuid) as ChecklistCheckboxEntry | ChecklistTitleEntry)

        figma.closePlugin()
      }

      if (message.action === 'show_link') {
        toggleLinkVisibility(entries.get(message.uuid) as ChecklistCheckboxEntry | ChecklistTitleEntry)

        figma.closePlugin()
      }

      if (message.action === 'hide_link') {
        toggleLinkVisibility(entries.get(message.uuid) as ChecklistCheckboxEntry | ChecklistTitleEntry)

        figma.closePlugin()
      }

      if (message.action === 'duplicate') {
        const entry = entries.get(message.uuid) as ChecklistCheckboxEntry | ChecklistTitleEntry

        addEntry(entry.type, {
          position: entry.position + 0.5,
          value: entry.value,
          title: entry.title,
          isDescriptionVisible: entry.isDescriptionVisible,
          description: entry.description,
          priority: entry.priority,
          isLinkVisible: entry.isLinkVisible,
          link: entry.link
        })

        figma.closePlugin()
      }

      if (message.action === 'delete') {
        removeEntry(entries.get(message.uuid) as ChecklistCheckboxEntry | ChecklistTitleEntry)
        figma.closePlugin()
      }
    }
  })

  /* UI */

  const updateUI = () => {
    figma.ui.postMessage({
      data,
      entries: entries.values().filter((entry) => (data.isCompletedVisible ? true : !entry.value))
    })
  }

  const openUI = (view: string, options: any) => {
    if (view === 'settings') {
      return new Promise((resolve) => {
        figma.showUI(__uiFiles__.settings, { themeColors: true, title: 'Settings', width: 240, height: 454 })

        setData({ ...data, isUIopen: true, selectedEntry: undefined })
      })
    }

    if (view === 'more-checkbox') {
      return new Promise((resolve) => {
        figma.showUI(__uiFiles__.more_checkbox, {
          themeColors: true,
          title: `Task: ${options.entry.title.length ? options.entry.title : '...'}`,
          width: 240,
          height: 373
        })
        setData({ ...data, isUIopen: true, selectedEntry: options.entry.uuid })
      })
    }

    if (view === 'more-title') {
      return new Promise((resolve) => {
        figma.showUI(__uiFiles__.more_title, {
          themeColors: true,
          title: `Section: ${options.entry.title.length ? options.entry.title : '...'}`,
          width: 240,
          height: 274
        })
        setData({ ...data, isUIopen: true, selectedEntry: options.entry.uuid })
      })
    }
  }

  /* General */

  const setEditingVisibility = () => {
    setData({
      ...data,
      isEditingVisible: !data.isEditingVisible
    })
  }

  const setChecksAllowed = () => {
    setData({
      ...data,
      isChecksAllowed: !data.isChecksAllowed
    })
  }

  const setTheme = () => {
    setData({
      ...data,
      colorTheme: data.colorTheme === 'dark' ? 'light' : 'dark'
    })
  }

  const setRibbon = (color: HexCode | undefined) => {
    if (color) {
      setData({
        ...data,
        colorRibbon: color
      })
    }
  }

  const setCompletedVisibility = () => {
    setData({
      ...data,
      isCompletedVisible: !data.isCompletedVisible
    })
  }

  const setRibbonVisibility = () => {
    setData({
      ...data,
      isRibbonVisible: !data.isRibbonVisible
    })
  }

  const setTitleVisiblity = () => {
    setData({
      ...data,
      isTitleVisible: !data.isTitleVisible
    })
  }

  const setDescriptionVisiblity = () => {
    setData({
      ...data,
      isDescriptionVisible: !data.isDescriptionVisible
    })
  }

  const setMetadataVisiblity = () => {
    setData({
      ...data,
      isMetadataVisible: !data.isMetadataVisible
    })
  }

  const setFooterVisiblity = () => {
    setData({
      ...data,
      isFooterVisible: !data.isFooterVisible
    })
  }

  const setBackgroundVisiblity = () => {
    setData({
      ...data,
      isBackgroundVisible: !data.isBackgroundVisible
    })
  }

  const setWidth = (value: string) => {
    setData({
      ...data,
      width: parseInt(value.split('_')[1])
    })
  }

  /* Entries */

  const addEntry = (
    type: string,
    options?: {
      position?: number
      value: boolean
      title: string
      isDescriptionVisible: boolean
      description: string
      priority: number
      isLinkVisible: boolean
      link: Link
    }
  ) => {
    const id = uuid()

    if (!entries.get(id)) {
      entries.set(id, {
        uuid: id,
        value: false,
        position: entries.values().length === 0 ? 0 : entries.values().length,
        type,
        title: '',
        isDescriptionVisible: false,
        description: '',
        priority: 0,
        actor: figma.currentUser?.name ?? 'Anonymous',
        timestamp: datetime().full,
        action: 'created',
        isLinkVisible: false,
        link: {
          src: '',
          valid: false
        },
        ...options
      })
      sortPositions()
    } else {
      addEntry(type)
    }
  }

  const moveEntry = (entry: ChecklistCheckboxEntry | ChecklistTitleEntry, direction: string) => {
    let targetEntry = entries.get(entry.uuid) as ChecklistCheckboxEntry | ChecklistTitleEntry

    entries.set(entry.uuid, {
      ...entry,
      position: data.isCompletedVisible
        ? direction === 'up'
          ? targetEntry.position - 1.5
          : targetEntry.position + 1.5
        : findSortPosition(
            entry.position,
            entries.values().sort((a, b) => a.position - b.position),
            direction
          )
    })
    sortPositions()
  }

  const findSortPosition = (
    currentIndex: number,
    entries: Array<ChecklistCheckboxEntry | ChecklistTitleEntry>,
    direction: string
  ) => {
    if (direction === 'up') {
      let _entries = entries.slice(0, currentIndex)
      let index = _entries.length - 1
      while (index >= 0) {
        if (_entries[index].value && _entries[index].type === 'check') {
          index--
        } else {
          break
        }
      }
      return index - 0.5
    } else {
      let _entries = entries.slice(currentIndex + 1, entries.length)
      let index = 0

      while (index < _entries.length) {
        if (_entries[index].value && _entries[index].type === 'check') {
          index++
        } else {
          index++
          break
        }
      }

      return currentIndex + index + 0.5
    }
  }

  const sortPositions = () => {
    entries
      .values()
      .sort((a, b) => a.position - b.position)
      .forEach((_entry, i) => {
        entries.set(_entry.uuid, {
          ..._entry,
          position: i
        })
      })
  }

  const removeEntry = (entry: ChecklistCheckboxEntry | ChecklistTitleEntry) => {
    entries.delete(entry.uuid)
    sortPositions()
  }

  const editEntry = (entry: ChecklistCheckboxEntry | ChecklistTitleEntry, event: IItemCheckboxOnEditEndEvent) => {
    if (event.property === 'title' || event.property === 'description') {
      entries.set(entry.uuid, {
        ...entry,
        actor: figma.currentUser?.name ?? 'Anonymous',
        timestamp: datetime().full,
        action: 'modified',
        [event.property]: event.value.characters
      })
    }
    if (event.property === 'link') {
      entries.set(entry.uuid, {
        ...entry,
        actor: figma.currentUser?.name ?? 'Anonymous',
        timestamp: datetime().full,
        action: 'modified',
        link: {
          src: event.value.characters,
          valid: link(event.value.characters)
        }
      })
    }
  }

  const toggleCheckbox = (entry: ChecklistCheckboxEntry) => {
    entries.set(entry.uuid, {
      ...entry,
      value: !entry.value,
      actor: figma.currentUser?.name ?? 'Anonymous',
      timestamp: datetime().full,
      action: entry.value ? 'unchecked' : 'checked'
    })
  }

  const setPriority = (entry: ChecklistCheckboxEntry | ChecklistTitleEntry, priority: number) => {
    entries.set(entry.uuid, {
      ...entry,
      priority: priority,
      actor: figma.currentUser?.name ?? 'Anonymous',
      timestamp: datetime().full,
      action: 'modified'
    })
  }

  const toggleDescriptionVisibility = (entry: ChecklistCheckboxEntry | ChecklistTitleEntry) => {
    entries.set(entry.uuid, {
      ...entry,
      isDescriptionVisible: !entry.isDescriptionVisible,
      actor: figma.currentUser?.name ?? 'Anonymous',
      timestamp: datetime().full,
      action: 'modified'
    })
  }

  const toggleLinkVisibility = (entry: ChecklistCheckboxEntry | ChecklistTitleEntry) => {
    entries.set(entry.uuid, {
      ...entry,
      isLinkVisible: !entry.isLinkVisible,
      actor: figma.currentUser?.name ?? 'Anonymous',
      timestamp: datetime().full,
      action: 'modified'
    })
  }

  /* Data */

  const editData = (key: string, content: string) => {
    setData({
      ...data,
      [key]: content
    })
  }

  /* Render */

  const getEntryCheckMeta = (entry: ChecklistCheckboxEntry | ChecklistTitleEntry) => {
    if (Boolean(entry.action) && Boolean(entry.actor) && Boolean(entry.timestamp)) {
      return `${EntryActions[entry.action as never].label} · ${entry.actor} · ${entry.timestamp}`
    } else {
      // Compatibility with previous versions
      return `Modify this task to update this meta info`
    }
  }

  const entriesForRender = entries
    .values()
    .filter((entry) => (data.isCompletedVisible ? true : entry.type === 'check' ? !entry.value : true))

  return (
    <AutoLayout
      name="Widget"
      verticalAlignItems="center"
      direction="vertical"
      spacing={0}
      padding={0}
      cornerRadius={data.isBackgroundVisible ? tokens.themes.radius.container.cornerRadius : 0}
      fill={data.isBackgroundVisible ? tokens.themes.layer.default[data.colorTheme].fill : { r: 0, g: 0, b: 0, a: 0 }}
      width={data.width}
      effect={tokens.themes.shadow[data.isBackgroundVisible ? 'container' : 'transparent'][data.colorTheme]}
    >
      {data.isRibbonVisible && <Frame name="Widget__ribbon" fill={data.colorRibbon} width="fill-parent" height={8} />}

      <Header
        theme={data.colorTheme}
        title={data.title}
        isTitleVisible={data.isEditingVisible ? data.isTitleVisible : data.isTitleVisible && Boolean(data.title.length)}
        isDescriptionVisible={
          data.isEditingVisible
            ? data.isDescriptionVisible
            : data.isDescriptionVisible && Boolean(data.description.length)
        }
        description={data.description}
        disabled={!data.isEditingVisible}
        onTitleEditEnd={(e: TextEditEvent) => editData('title', e.characters)}
        onDescriptionEditEnd={(e: TextEditEvent) => editData('description', e.characters)}
      />

      <AutoLayout
        name="Widget__list"
        verticalAlignItems="center"
        direction="vertical"
        spacing={0}
        padding={{ left: 0, right: 0, top: 16, bottom: 16 }}
        width="fill-parent"
      >
        {Boolean(entriesForRender.length) ? (
          entriesForRender
            .sort((a, b) => a.position - b.position)
            .map((entry, i) => {
              // Checkbox
              if (entry.type === Object.keys(EntryTypes)[0]) {
                return (
                  <Item
                    key={entry.uuid}
                    theme={data.colorTheme}
                    positionUp={data.isEditingVisible ? i !== 0 : undefined}
                    positionDown={data.isEditingVisible ? i !== entriesForRender.length - 1 : undefined}
                    more={data.isEditingVisible ? !data.isEditingVisible : undefined}
                    padding={{
                      vertical: 8,
                      horizontal: tokens.themes.layout.item.horizontal
                    }}
                    onPositionChange={(e: IItemPositionChangeEvent) => moveEntry(entry, e.direction)}
                    onMore={() => openUI('more-checkbox', { data, entry })}
                  >
                    <ItemCheckbox
                      key={entry.uuid}
                      theme={data.colorTheme}
                      value={Boolean(entry.value)}
                      contentTitle={entry.title}
                      isDescriptionVisible={entry.isDescriptionVisible}
                      contentDescription={entry.description}
                      contentMeta={data.isMetadataVisible ? getEntryCheckMeta(entry) : undefined}
                      placeholderTitle={'Title...'}
                      placeholderDescription={'Description...'}
                      disabled={!data.isEditingVisible}
                      disabledCheckbox={!data.isChecksAllowed}
                      priority={entry.priority}
                      link={entry.isLinkVisible ? entry.link : undefined}
                      onEditEnd={(e: IItemCheckboxOnEditEndEvent) => editEntry(entry, e)}
                      onCheckboxChange={() =>
                        data.isChecksAllowed ? toggleCheckbox(entry as ChecklistCheckboxEntry) : null
                      }
                    />
                  </Item>
                )
              }

              // Title
              if (entry.type === Object.keys(EntryTypes)[1]) {
                return (
                  <Item
                    key={entry.uuid}
                    theme={data.colorTheme}
                    positionUp={data.isEditingVisible ? i !== 0 : undefined}
                    positionDown={data.isEditingVisible ? i !== entriesForRender.length - 1 : undefined}
                    more={data.isEditingVisible ? !data.isEditingVisible : undefined}
                    padding={{
                      top: i === 0 ? 8 : 24,
                      bottom: 8,
                      horizontal: tokens.themes.layout.item.horizontal
                    }}
                    onPositionChange={(e: IItemPositionChangeEvent) => moveEntry(entry, e.direction)}
                    onMore={() => openUI('more-title', { data, entry })}
                  >
                    <ItemTitle
                      key={entry.uuid}
                      theme={data.colorTheme}
                      contentTitle={entry.title}
                      placeholderTitle={'Type something...'}
                      isDescriptionVisible={entry.isDescriptionVisible}
                      contentDescription={entry.description}
                      placeholderDescription={'Description...'}
                      disabled={!data.isEditingVisible}
                      link={entry.isLinkVisible ? entry.link : undefined}
                      onEditEnd={(e: IItemCheckboxOnEditEndEvent) => editEntry(entry, e)}
                    />
                  </Item>
                )
              }
            })
        ) : (
          <Fragment />
        )}
        {entries.values().filter((entry) => (data.isCompletedVisible ? true : !entry.value)).length === 0 &&
          entries.values().length > 0 && (
            <Text
              {...tokens.themes.typo.p5}
              fill={tokens.themes.txt.secondary.default[data.colorTheme].color}
              width={'fill-parent'}
              height={48}
              horizontalAlignText="center"
              verticalAlignText="center"
            >
              All done. Enjoy your time!
            </Text>
          )}
        {entries.values().length === 0 && (
          <Text
            {...tokens.themes.typo.p5}
            fill={tokens.themes.txt.secondary.default[data.colorTheme].color}
            width={'fill-parent'}
            height={48}
            horizontalAlignText="center"
            verticalAlignText="center"
          >
            What is your next challenge?
          </Text>
        )}
      </AutoLayout>

      {data.isFooterVisible && (
        <Fragment>
          <Divider theme={data.colorTheme} />
          <Footer theme={data.colorTheme}>
            <AutoLayout
              key="Footer__left"
              direction="horizontal"
              horizontalAlignItems="start"
              width={'fill-parent'}
              verticalAlignItems="center"
            >
              {entries.values().length === 0 && (
                <AutoLayout key="Footer__empty" padding={{ left: 16 }}>
                  <Text
                    key={'Footer__content'}
                    {...tokens.themes.typo.p6}
                    fill={tokens.themes.txt.secondary.default[data.colorTheme].color}
                    width="fill-parent"
                    horizontalAlignText="left"
                    height={32}
                    verticalAlignText="center"
                  >
                    {'No tasks'}
                  </Text>
                </AutoLayout>
              )}
              {entries.values().length > 0 && (
                <ButtonGhost
                  key="Footer__action_hideCompleted"
                  theme={data.colorTheme}
                  variant="secondary"
                  glyph={data.isCompletedVisible ? 'visible' : 'hidden'}
                  content={`Completed ${
                    entries.values().filter((entry) => entry.type === Object.keys(EntryTypes)[0] && entry.value).length
                  } of ${entries.values().filter((entry) => entry.type === Object.keys(EntryTypes)[0]).length}`}
                  onClick={() => setCompletedVisibility()}
                />
              )}
            </AutoLayout>

            {data.isEditingVisible && (
              <Fragment key={'Footer__actions'}>
                <ButtonGhost
                  key="Footer__action_addTask"
                  theme={data.colorTheme}
                  variant="primary"
                  glyph="plus"
                  content="Add task"
                  onClick={() => addEntry('check')}
                />
              </Fragment>
            )}
          </Footer>
        </Fragment>
      )}
    </AutoLayout>
  )
}

widget.register(Widget)
