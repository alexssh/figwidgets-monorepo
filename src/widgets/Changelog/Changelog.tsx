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

import { EntryTypes } from './config'

/* Components */
import Header from 'src/patterns/Header'
import Footer from 'src/patterns/Footer'
import ItemTag from 'src/patterns/ItemTag'
import Item from 'src/components/Item'
import { glyphs } from 'src/components/Icon'
import ButtonGhost from 'src/components/ButtonGhost'
import InputGhost from 'src/components/InputGhost'
import Divider from 'src/components/Divider'

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
    title: '1.0.0',
    date: datetime().date,
    description: '',
    colorTheme: 'light',
    colorRibbon: tokens.themes.status.dark.light.fill,
    isRibbonVisible: true,
    isTitleVisible: true,
    isDescriptionVisible: false,
    isDateVisible: true,
    isFooterVisible: true,
    isBackgroundVisible: true,
    isEditingVisible: true
  })

  const [entryType, setEntryType] = useSyncedState('entryType', Object.keys(EntryTypes)[0])

  const entries = useSyncedMap<ChangelogEntry>('entries')

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
                label: EntryTypes[s as keyof ChangelogEntryMapping].label
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
      if (message.action === 'ribbon') {
        setRibbonVisibility()
      }

      if (message.action === 'title') {
        setTitleVisiblity()
      }

      if (message.action === 'description') {
        setDescriptionVisiblity()
      }

      if (message.action === 'date') {
        setDateVisiblity()
      }

      if (message.action === 'footer') {
        setFooterVisiblity()
      }

      if (message.action === 'background') {
        setBackgroundVisiblity()
      }

      if (message.action.indexOf('type') > -1) {
        editEntryType(entries.get(message.uuid) as ChangelogEntry, message.action)
      }

      if (message.action === 'move_up') {
        moveEntry(entries.get(message.uuid) as ChangelogEntry, 'up')
      }

      if (message.action === 'move_down') {
        moveEntry(entries.get(message.uuid) as ChangelogEntry, 'down')
      }

      if (message.action === 'show_link') {
        toggleLinkVisibility(entries.get(message.uuid) as ChangelogEntry)

        figma.closePlugin()
      }

      if (message.action === 'hide_link') {
        toggleLinkVisibility(entries.get(message.uuid) as ChangelogEntry)

        figma.closePlugin()
      }

      if (message.action === 'duplicate') {
        const entry = entries.get(message.uuid) as ChangelogEntry

        addEntry(entry.type, {
          position: entry.position + 0.5,
          content: entry.content,
          type: entry.type,
          isLinkVisible: entry.isLinkVisible,
          link: entry.link
        })

        figma.closePlugin()
      }

      if (message.action === 'delete') {
        removeEntry(entries.get(message.uuid) as ChangelogEntry)

        figma.closePlugin()
      }
    }
  })

  /* UI */

  const updateUI = () => {
    figma.ui.postMessage({
      data,
      entries: entries.values(),
      entryTypes: EntryTypes,
      tokens
    })
  }

  const openUI = (view: string, options: any) => {
    if (view === 'settings') {
      return new Promise((resolve) => {
        figma.showUI(__uiFiles__.settings, { themeColors: true, title: 'Settings', width: 240, height: 325 })
        setData({ ...data, isUIopen: true, selectedEntry: undefined })
      })
    }

    if (view === 'more') {
      return new Promise((resolve) => {
        figma.showUI(__uiFiles__.more, {
          themeColors: true,
          title: `Entry: ${options.entry.content.length ? options.entry.content : '...'}`,
          width: 240,
          height: 295
        })
        setData({ ...data, isUIopen: true, selectedEntry: options.entry.uuid })
      })
    }
  }

  /* General */

  const setRibbon = (color: HexCode | undefined) => {
    if (color) {
      setData({
        ...data,
        colorRibbon: color
      })
    }
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

  const setDateVisiblity = () => {
    setData({
      ...data,
      isDateVisible: !data.isDateVisible
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

  const setEditingVisibility = () => {
    setData({
      ...data,
      isEditingVisible: !data.isEditingVisible
    })
  }

  const setTheme = () => {
    setData({
      ...data,
      colorTheme: data.colorTheme === 'dark' ? 'light' : 'dark'
    })
  }

  /* Entries */

  const addEntry = (
    type: string,
    options?: {
      position?: number
      content?: string
      type?: string
      link?: Link
      isLinkVisible: boolean
    }
  ) => {
    const id = uuid()

    if (!entries.get(id)) {
      entries.set(id, {
        uuid: id,
        position: entries.values().length === 0 ? 0 : entries.values().length,
        type,
        content: '',
        isLinkVisible: true,
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

  const toggleLinkVisibility = (entry: ChangelogEntry) => {
    entries.set(entry.uuid, {
      ...entry,
      isLinkVisible: !entry.isLinkVisible
    })
  }

  /* Data */

  const editData = (key: string, content: string) => {
    setData({
      ...data,
      [key]: content
    })
  }

  const moveEntry = (entry: ChangelogEntry, direction: string) => {
    let targetEntry = entries.get(entry.uuid) as ChangelogEntry

    entries.set(entry.uuid, {
      ...entry,
      position: direction === 'up' ? targetEntry.position - 1.5 : targetEntry.position + 1.5
    })

    sortPositions()
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

  const removeEntry = (entry: ChangelogEntry) => {
    entries.delete(entry.uuid)
    sortPositions()
  }

  const editEntry = (entry: ChangelogEntry, event: IItemTagOnEditEndEvent) => {
    if (event.property === 'body') {
      entries.set(entry.uuid, {
        ...entry,
        content: event.value.characters
      })
    }

    if (event.property === 'link') {
      entries.set(entry.uuid, {
        ...entry,
        link: {
          src: event.value.characters,
          valid: link(event.value.characters)
        }
      })
    }
  }

  const editEntryType = (entry: ChangelogEntry, type: string) => {
    entries.set(entry.uuid, {
      ...entry,
      type: type.split('_')[1]
    })
  }

  /* Render */

  return (
    <AutoLayout
      name="Widget"
      verticalAlignItems="center"
      direction="vertical"
      spacing={0}
      padding={0}
      cornerRadius={data.isBackgroundVisible ? tokens.themes.radius.container.cornerRadius : 0}
      fill={data.isBackgroundVisible ? tokens.themes.layer.default[data.colorTheme].fill : { r: 0, g: 0, b: 0, a: 0 }}
      width={800}
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
        suffix={
          (data.isEditingVisible || Boolean(data.date.length)) && data.isDateVisible ? (
            <InputGhost
              theme={data.colorTheme}
              variant={{ typo: 'p5', txt: 'secondary' }}
              content={data.date}
              placeholder="..."
              disabled={!data.isEditingVisible}
              onEditEnd={(e: TextEditEvent) => editData('date', e.characters)}
              style={{ width: 200, textAlign: 'right' }}
            />
          ) : undefined
        }
      />
      <AutoLayout
        name="Widget__list"
        verticalAlignItems="center"
        direction="vertical"
        spacing={0}
        padding={{ left: 0, right: 0, top: 16, bottom: 16 }}
        width="fill-parent"
      >
        {entries
          .values()
          .sort((a, b) => a.position - b.position)
          .map((entry) => (
            <Item
              key={entry.uuid}
              theme={data.colorTheme}
              positionUp={data.isEditingVisible ? entry.position !== 0 : undefined}
              positionDown={data.isEditingVisible ? entry.position !== entries.values().length - 1 : undefined}
              more={data.isEditingVisible ? !data.isEditingVisible : undefined}
              onPositionChange={(e: IItemPositionChangeEvent) => moveEntry(entry, e.direction)}
              onMore={() => openUI('more', { data, entry })}
            >
              <ItemTag
                key={entry.uuid}
                theme={data.colorTheme}
                type={EntryTypes[entry.type].status}
                contentBody={entry.content}
                placeholderBody={'Type something...'}
                disabled={!data.isEditingVisible}
                contentTag={EntryTypes[entry.type].label}
                link={entry.isLinkVisible ? entry.link : undefined}
                onEditEnd={(e: IItemTagOnEditEndEvent) => editEntry(entry, e)}
              />
            </Item>
          ))}
        {entries.values().length === 0 && (
          <Text
            {...tokens.themes.typo.p5}
            fill={tokens.themes.txt.secondary.default[data.colorTheme].color}
            width={'fill-parent'}
            height={48}
            horizontalAlignText="center"
            verticalAlignText="center"
          >
            What is your next update?
          </Text>
        )}
      </AutoLayout>

      {data.isFooterVisible && (
        <Fragment>
          <Divider theme={data.colorTheme} />
          <Footer theme={data.colorTheme}>
            <Fragment key={'Footer__actions'}>
              <AutoLayout
                key="Footer__left"
                direction="horizontal"
                horizontalAlignItems="start"
                width={'fill-parent'}
                verticalAlignItems="center"
                padding={{
                  left: 16
                }}
              >
                <Text
                  key={'Footer__content'}
                  {...tokens.themes.typo.p6}
                  fill={tokens.themes.txt.secondary.default[data.colorTheme].color}
                  width="fill-parent"
                  horizontalAlignText="left"
                  height={32}
                  verticalAlignText="center"
                >
                  {entries.values().length === 0
                    ? 'No entries'
                    : entries.values().length > 1
                    ? `${entries.values().length} entries`
                    : `${entries.values().length} entry`}
                </Text>
              </AutoLayout>

              {data.isEditingVisible && (
                <ButtonGhost
                  key="Footer__action_addEntry"
                  theme={data.colorTheme}
                  variant="primary"
                  glyph="plus"
                  content="Add entry"
                  onClick={() => addEntry('added')}
                />
              )}
            </Fragment>
          </Footer>
        </Fragment>
      )}
    </AutoLayout>
  )
}

widget.register(Widget)
