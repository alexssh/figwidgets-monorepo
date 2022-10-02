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

import { meta, EntryTypes, EntryActions } from './config'

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
import tokens from 'src/utils/tokens'
import uuid from 'src/utils/uuid'

/* --- */

function Widget() {
  const [data, setData] = useSyncedState('data', {
    title: 'My checklist',
    description: '',
    colorTheme: 'light',
    isDescriptionVisible: true,
    isEditingVisible: true,
    isChecksAllowed: true,
    isCompletedVisible: true,
    isActorsVisible: false
  })

  const [entryType, setEntryType] = useSyncedState('entryType', Object.keys(EntryTypes)[0])

  const [entries, setEntries] = useSyncedState(
    'entries',
    new Array<ChecklistCheckboxEntry | ChecklistTitleEntry>(
      {
        uuid: uuid(3),
        position: 0,
        type: Object.keys(EntryTypes)[1],
        content: 'Today'
      },
      {
        uuid: uuid(5),
        position: 1,
        type: Object.keys(EntryTypes)[0],
        value: false,
        content: '',
        actor: 'Anonymous',
        timestamp: new Date().toLocaleString('en-US'),
        action: 'created'
      }
    )
  )

  useEffect(() => {
    // Compatibility with previous versions
    if (data.isCompletedVisible === undefined || data.isActorsVisible === undefined) {
      setData({
        ...data,
        ...(data.isCompletedVisible === undefined ? { isCompletedVisible: true } : {}),
        ...(data.isActorsVisible === undefined ? { isActorsVisible: false } : {})
      })
    }
  })

  usePropertyMenu(
    [
      {
        itemType: 'link',
        tooltip: 'Help & Documentation',
        propertyName: 'help',
        href: `${meta.website}?utm_superlink=widget_${meta.name}_propertyMenu_${meta.version}`,
        icon: glyphs.info(tokens.themes.light.txt.minor.default.color as string)
      },
      {
        itemType: 'separator'
      },
      {
        itemType: 'toggle',
        tooltip: 'Enable/disable editing',
        propertyName: 'isEditingVisible',
        isToggled: !data.isEditingVisible,
        icon: glyphs.editingNo(
          (data.isEditingVisible
            ? tokens.themes.light.txt.minor.default.color
            : tokens.themes.light.txt.primary.inverted.color) as string
        )
      },
      {
        itemType: 'toggle',
        tooltip: 'Enable/disable checkboxes',
        propertyName: 'isChecksAllowed',
        isToggled: !data.isChecksAllowed,
        icon: glyphs.checkNo(
          (data.isChecksAllowed
            ? tokens.themes.light.txt.minor.default.color
            : tokens.themes.light.txt.primary.inverted.color) as string
        )
      },
      ...(data.isEditingVisible
        ? ([
            {
              itemType: 'separator'
            },
            {
              itemType: 'toggle',
              tooltip: 'Switch color theme',
              propertyName: 'colorTheme',
              isToggled: data.colorTheme === 'dark',
              icon: glyphs.darkmode(
                (data.colorTheme === 'dark'
                  ? tokens.themes.light.txt.primary.inverted.color
                  : tokens.themes.light.txt.minor.default.color) as string
              )
            },
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
              icon: glyphs.plus(tokens.themes.light.txt.minor.default.color as string)
            }
          ] as WidgetPropertyMenuItem[])
        : [])
    ],
    ({ propertyName, propertyValue }) => {
      if (propertyName === 'isDescriptionVisible') {
        switchDescriptionVisibility()
      }

      if (propertyName === 'isEditingVisible') {
        switchEditingVisibility()
      }

      if (propertyName === 'isChecksAllowed') {
        switchChecks()
      }

      if (propertyName === 'colorTheme') {
        switchTheme()
      }

      if (propertyName === 'entryType') {
        setEntryType(propertyValue as string)
      }

      if (propertyName === 'addEntry') {
        addEntry(entryType)
      }
    }
  )

  /* General */

  const switchDescriptionVisibility = () => {
    setData({
      ...data,
      isDescriptionVisible: !data.isDescriptionVisible
    })
  }

  const switchEditingVisibility = () => {
    setData({
      ...data,
      isEditingVisible: !data.isEditingVisible
    })
  }

  const switchChecks = () => {
    setData({
      ...data,
      isChecksAllowed: !data.isChecksAllowed
    })
  }

  const switchTheme = () => {
    setData({
      ...data,
      colorTheme: data.colorTheme === 'dark' ? 'light' : 'dark'
    })
  }

  const switchCompletedVisibility = () => {
    setData({
      ...data,
      isCompletedVisible: !data.isCompletedVisible
    })
  }

  const switchActorsVisibility = () => {
    setData({
      ...data,
      isActorsVisible: !data.isActorsVisible
    })
  }

  /* Entries */

  const addEntry = (type: string) => {
    const id = uuid()

    if (!entries.filter((entry) => entry.uuid === id).length) {
      setEntries([
        ...entries,
        {
          uuid: id,
          position: entries.length === 0 ? 0 : entries[entries.length - 1].position + 1,
          type,
          content: '',
          actor: figma.currentUser?.name ?? 'Anonymous',
          timestamp: new Date().toLocaleString('en-US'),
          action: 'created'
        }
      ])
    } else {
      addEntry(type)
    }
  }

  const sortEntry = (entry: ChecklistCheckboxEntry | ChecklistTitleEntry, direction: string) => {
    const currIndex = entries.findIndex((e) => e.uuid === entry.uuid)
    const toPosition = direction === 'up' ? currIndex - 1 : currIndex + 1

    let array = [...entries]

    const selectedEntry = array.splice(currIndex, 1)[0]
    array.splice(toPosition, 0, selectedEntry)

    setEntries(array.map((entry, i) => ({ ...entry, position: i })))
  }

  const removeEntry = (entry: ChecklistCheckboxEntry | ChecklistTitleEntry) => {
    setEntries([...entries.filter((e) => e.uuid !== entry.uuid)].map((entry, i) => ({ ...entry, position: i })))
  }

  const editEntry = (entry: ChecklistCheckboxEntry | ChecklistTitleEntry, content: string) => {
    setEntries([
      ...entries.filter((e) => e.uuid !== entry.uuid),
      {
        ...entry,
        content: content,
        actor: figma.currentUser?.name ?? 'Anonymous',
        timestamp: new Date().toLocaleString('en-US'),
        action: 'modified'
      }
    ])
  }

  const toggleCheckbox = (entry: ChecklistCheckboxEntry) => {
    setEntries([
      ...entries.filter((e) => e.uuid !== entry.uuid),
      {
        ...entry,
        value: !entry.value,
        actor: figma.currentUser?.name ?? 'Anonymous',
        timestamp: new Date().toLocaleString('en-US'),
        action: entry.value ? 'modified' : 'completed'
      }
    ])
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

  return (
    <AutoLayout
      name="Widget"
      verticalAlignItems="center"
      direction="vertical"
      spacing={0}
      padding={0}
      cornerRadius={tokens.themes[data.colorTheme].radius.container.cornerRadius}
      fill={tokens.themes[data.colorTheme].layer.default.fill}
      width={800}
      effect={tokens.themes[data.colorTheme].shadow.container}
    >
      <Header
        theme={data.colorTheme}
        title={data.title}
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
      <Divider theme={data.colorTheme} />
      <AutoLayout
        name="Widget__list"
        verticalAlignItems="center"
        direction="vertical"
        spacing={0}
        padding={{ left: 0, right: 0, top: 16, bottom: 16 }}
        width="fill-parent"
      >
        {Boolean(entries.length) ? (
          entries
            .filter((entry) => (data.isCompletedVisible ? true : !entry.value))
            .sort((a, b) => a.position - b.position)
            .map((entry, i) => {
              // Checkbox
              if (entry.type === Object.keys(EntryTypes)[0]) {
                return (
                  <Item
                    key={entry.uuid}
                    theme={data.colorTheme}
                    positionUp={data.isEditingVisible ? entry.position !== 0 : undefined}
                    positionDown={data.isEditingVisible ? entry.position !== entries.length - 1 : undefined}
                    deleting={!data.isEditingVisible}
                    padding={{
                      vertical: 8,
                      horizontal: tokens.themes[data.colorTheme].layout.item.horizontal
                    }}
                    onPositionChange={(e: IItemPositionChangeEvent) => sortEntry(entry, e.direction)}
                    onDelete={() => removeEntry(entry)}
                  >
                    <ItemCheckbox
                      key={entry.uuid}
                      theme={data.colorTheme}
                      value={Boolean(entry.value)}
                      contentBody={entry.content}
                      contentMeta={data.isActorsVisible ? getEntryCheckMeta(entry) : undefined}
                      placeholderBody={'Type something...'}
                      disabled={!data.isEditingVisible}
                      disabledCheckbox={!data.isChecksAllowed}
                      onEditEnd={(e: TextEditEvent) => editEntry(entry, e.characters)}
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
                    positionUp={data.isEditingVisible ? entry.position !== 0 : undefined}
                    positionDown={data.isEditingVisible ? entry.position !== entries.length - 1 : undefined}
                    deleting={!data.isEditingVisible}
                    padding={{
                      top: i === 0 ? 8 : 24,
                      bottom: 8,
                      horizontal: tokens.themes[data.colorTheme].layout.item.horizontal
                    }}
                    onPositionChange={(e: IItemPositionChangeEvent) => sortEntry(entry, e.direction)}
                    onDelete={() => removeEntry(entry)}
                  >
                    <ItemTitle
                      key={entry.uuid}
                      theme={data.colorTheme}
                      contentBody={entry.content}
                      placeholderBody={'Type something...'}
                      disabled={!data.isEditingVisible}
                      onEditEnd={(e: TextEditEvent) => editEntry(entry, e.characters)}
                    />
                  </Item>
                )
              }
            })
        ) : (
          <Fragment />
        )}
        {entries.filter((entry) => (data.isCompletedVisible ? true : !entry.value)).length === 0 && entries.length > 0 && (
          <Text
            {...tokens.themes[data.colorTheme].typo.p5}
            fill={tokens.themes[data.colorTheme].txt.secondary.default.color}
            width={'fill-parent'}
            height={48}
            horizontalAlignText="center"
            verticalAlignText="center"
          >
            All done. Enjoy your time!
          </Text>
        )}
        {entries.length === 0 && (
          <Text
            {...tokens.themes[data.colorTheme].typo.p5}
            fill={tokens.themes[data.colorTheme].txt.secondary.default.color}
            width={'fill-parent'}
            height={48}
            horizontalAlignText="center"
            verticalAlignText="center"
          >
            What is your next challenge?
          </Text>
        )}
      </AutoLayout>
      <Divider theme={data.colorTheme} />
      <Footer theme={data.colorTheme}>
        {entries.length > 0 && (
          <Text
            key={'Footer__content'}
            {...tokens.themes[data.colorTheme].typo.p6}
            fill={tokens.themes[data.colorTheme].txt.secondary.default.color}
            width="fill-parent"
            horizontalAlignText="left"
            height={32}
            verticalAlignText="center"
          >
            Completed {entries.filter((entry) => entry.type === Object.keys(EntryTypes)[0] && entry.value).length} of{' '}
            {entries.filter((entry) => entry.type === Object.keys(EntryTypes)[0]).length}
          </Text>
        )}
        {data.isEditingVisible && (
          <Fragment key={'Footer__actions'}>
            <ButtonGhost
              key="Footer__action_showDescription"
              theme={data.colorTheme}
              variant="secondary"
              glyph={data.isDescriptionVisible ? 'visible' : 'hidden'}
              content="Description"
              onClick={() => switchDescriptionVisibility()}
            />
            <ButtonGhost
              key="Footer__action_showActors"
              theme={data.colorTheme}
              variant="secondary"
              glyph={data.isActorsVisible ? 'visible' : 'hidden'}
              content="Actors"
              onClick={() => switchActorsVisibility()}
            />
            <ButtonGhost
              key="Footer__action_hideCompleted"
              theme={data.colorTheme}
              variant="secondary"
              glyph={data.isCompletedVisible ? 'visible' : 'hidden'}
              content="Completed tasks"
              onClick={() => switchCompletedVisibility()}
            />
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
    </AutoLayout>
  )
}

widget.register(Widget)
