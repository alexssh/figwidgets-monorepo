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

import tokens from './tokens'
import EntryItem from './components/EntryItem'
import Icon, { glyphs } from './components/Icon'
import guid from './utils/uuid'

import type { Entry } from 'types.d'
import { IEntryItemPositionChangeEvent } from './components/interfaces.d'

function Widget() {
  const [data, setData] = useSyncedState('data', {
    title: '1.0.0',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    description: '',
    colorTheme: 'light'
  })

  const [entryType, setEntryType] = useSyncedState('entryType', Object.keys(tokens.colors.light.status)[0])

  const [entries, setEntries] = useSyncedState(
    'entries',
    new Array<Entry>({
      uuid: guid(),
      position: 0,
      type: Object.keys(tokens.colors.light.status)[0],
      content: ''
    })
  )

  usePropertyMenu(
    [
      {
        itemType: 'toggle',
        tooltip: 'Switch color theme',
        propertyName: 'colorTheme',
        isToggled: data.colorTheme === 'dark',
        icon: glyphs.darkmode(
          data.colorTheme === 'dark'
            ? tokens.colors.light.txt.primary.inverted.fill
            : tokens.colors.light.txt.minor.default.fill
        )
      },
      {
        itemType: 'separator'
      },
      {
        itemType: 'dropdown',
        tooltip: 'Select entry type',
        propertyName: 'entryType',
        options: Object.keys(tokens.colors.light.status).map((s) => ({
          option: s,
          label: tokens.colors.light.status[s as string].label
        })),
        selectedOption: entryType
      },
      {
        itemType: 'action',
        tooltip: 'Add a new entry',
        propertyName: 'addEntry',
        icon: glyphs.plus(tokens.colors.light.txt.minor.default.fill)
      }
    ],
    ({ propertyName, propertyValue }) => {
      if (propertyName === 'entryType') {
        setEntryType(propertyValue as string)
      }

      if (propertyName === 'addEntry') {
        addEntry(entryType)
      }

      if (propertyName === 'colorTheme') {
        switchTheme()
      }
    }
  )

  /* General */

  const switchTheme = () => {
    setData({
      ...data,
      colorTheme: data.colorTheme === 'dark' ? 'light' : 'dark'
    })
  }

  /* Data */

  const editData = (key: string, content: string) => {
    setData({
      ...data,
      [key]: content
    })
  }

  /* Entries */

  const addEntry = (type: string) => {
    const uuid = guid()

   if (!entries.filter(entry => entry.uuid === uuid).length){
      setEntries([
        ...entries,
        {
          uuid: uuid,
          position: entries[entries.length - 1].position + 1,
          type,
          content: ''
        }
      ])
    } else {
      addEntry(type)
    }
  }

  const removeEntry = (entry: Entry) => {
    setEntries([...entries.filter((e) => e.uuid !== entry.uuid)].map((entry, i) => ({ ...entry, position: i })))
  }

  const sortEntry = (entry: Entry, direction: string) => {
    const currIndex = entries.findIndex((e) => e.uuid === entry.uuid)
    const toPosition = direction === 'up' ? currIndex - 1 : currIndex + 1

    let array = [...entries]

    const selectedEntry = array.splice(currIndex, 1)[0]
    array.splice(toPosition, 0, selectedEntry)

    setEntries(array.map((entry, i) => ({ ...entry, position: i })))
  }

  const editEntry = (entry: Entry, content: string) => {
    setEntries([
      ...entries.filter((e) => e.uuid !== entry.uuid),
      {
        ...entry,
        content: content
      }
    ])
  }

  /* Render */

  return (
    <AutoLayout
      name="Widget"
      verticalAlignItems="center"
      direction="vertical"
      spacing={24}
      padding={{ vertical: 16 }}
      cornerRadius={8}
      width={800}
      {...tokens.colors[data.colorTheme as string].background.default}
    >
      <AutoLayout
        name="Widget__header"
        verticalAlignItems="center"
        direction="vertical"
        spacing={8}
        padding={{ horizontal: 32, top: 8 }}
        width="fill-parent"
      >
        <AutoLayout
          name="Widget__row"
          verticalAlignItems="center"
          direction="horizontal"
          spacing={24}
          padding={0}
          width="fill-parent"
        >
          <Input
            name="Widget__title"
            value={data.title}
            placeholder="Title"
            inputBehavior="wrap"
            placeholderProps={{
              ...tokens.typo.h4,
              fill: tokens.colors[data.colorTheme as string].txt.minor.default.fill,
              opacity: 1
            }}
            width="fill-parent"
            onTextEditEnd={(e) => editData('title', e.characters)}
            hoverStyle={tokens.colors[data.colorTheme as string].state.hover.input}
            {...tokens.colors[data.colorTheme as string].txt.primary.default}
            {...tokens.typo.h4}
          />
          <Input
            name="Widget__date"
            value={data.date}
            placeholder="..."
            inputBehavior="wrap"
            placeholderProps={{
              ...tokens.typo.p4,
              fill: tokens.colors[data.colorTheme as string].txt.minor.default.fill,
              opacity: 1
            }}
            horizontalAlignText="right"
            width={120}
            onTextEditEnd={(e) => editData('date', e.characters)}
            hoverStyle={tokens.colors[data.colorTheme as string].state.hover.input}
            {...tokens.colors[data.colorTheme as string].txt.secondary.default}
            {...tokens.typo.p4}
          />
        </AutoLayout>
        <Input
          name="Widget__description"
          value={data.description}
          placeholder="Add any description..."
          inputBehavior="multiline"
          placeholderProps={{
            ...tokens.typo.p4,
            fill: tokens.colors[data.colorTheme as string].txt.minor.default.fill,
            opacity: 1
          }}
          width="fill-parent"
          onTextEditEnd={(e) => editData('description', e.characters)}
          hoverStyle={tokens.colors[data.colorTheme as string].state.hover.input}
          {...tokens.colors[data.colorTheme as string].txt.secondary.default}
          {...tokens.typo.p4}
        />
      </AutoLayout>
      <Rectangle width="fill-parent" height={1} {...tokens.colors[data.colorTheme as string].border.default} />
      <AutoLayout
        name="Widget__entries"
        verticalAlignItems="center"
        direction="vertical"
        spacing={0}
        padding={0}
        width="fill-parent"
      >
        {entries
          .sort((a, b) => a.position - b.position)
          .map((entry) => (
            <EntryItem
              key={entry.uuid}
              colorTheme={data.colorTheme}
              type={entry.type}
              contentParagraph={entry.content}
              contentTagTitle={tokens.colors[data.colorTheme as string].status[entry.type].label}
              onEditEnd={(e: TextEditEvent) => editEntry(entry, e.characters)}
              onPositionChange={(e: IEntryItemPositionChangeEvent) => sortEntry(entry, e.direction)}
              onDelete={() => removeEntry(entry)}
              actions={{
                up: entry.position !== 0,
                down: entry.position !== entries.length - 1,
                delete: entry.position === 0 && entries.length === 1
              }}
            />
          ))}
      </AutoLayout>
    </AutoLayout>
  )
}

widget.register(Widget)
