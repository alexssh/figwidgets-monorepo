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
import ItemTag from 'src/patterns/ItemTag'
import Item from 'src/components/Item'
import { glyphs } from 'src/components/Icon'
import InputGhost from 'src/components/InputGhost'
import Divider from 'src/components/Divider'

/* Utils */
import tokens from 'src/utils/tokens'
import uuid from 'src/utils/uuid'

/* --- */

function Widget() {
  const [data, setData] = useSyncedState('data', {
    title: '1.0.0',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    isDescriptionVisible: true,
    isEditingVisible: true,
    description: '',
    colorTheme: 'light'
  })

  const [entryType, setEntryType] = useSyncedState('entryType', Object.keys(EntryTypes)[0])

  const [entries, setEntries] = useSyncedState(
    'entries',
    new Array<Entry>({
      uuid: uuid(),
      position: 0,
      type: Object.keys(EntryTypes)[0],
      content: ''
    })
  )

  useEffect(() => {
    // Compatibility with previous versions

    if (data.isDescriptionVisible === undefined || data.isEditingVisible === undefined) {
      setData({
        ...data,
        ...(data.isDescriptionVisible === undefined ? { isDescriptionVisible: true } : {}),
        ...(data.isEditingVisible === undefined ? { isSortingVisible: true } : {})
      })
    }
  })

  usePropertyMenu(
    [
      {
        itemType: 'toggle',
        tooltip: 'Show/hide description',
        propertyName: 'isDescriptionVisible',
        isToggled: !data.isDescriptionVisible,
        icon: glyphs.descriptionNo(
          (data.isDescriptionVisible
            ? tokens.themes.light.txt.minor.default.color
            : tokens.themes.light.txt.primary.inverted.color) as string
        )
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
        tooltip: 'Type of new entry',
        propertyName: 'entryType',
        options: Object.keys(EntryTypes).map((s) => ({
          option: s,
          label: EntryTypes[s as keyof EntryTypesMapping].label
        })),
        selectedOption: entryType
      },
      {
        itemType: 'action',
        tooltip: 'Add entry',
        propertyName: 'addEntry',
        icon: glyphs.plus(tokens.themes.light.txt.minor.default.color as string)
      }
    ],
    ({ propertyName, propertyValue }) => {
      if (propertyName === 'isDescriptionVisible') {
        switchDescriptionVisibility()
      }

      if (propertyName === 'isEditingVisible') {
        switchEditingVisibility()
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

  const switchTheme = () => {
    setData({
      ...data,
      colorTheme: data.colorTheme === 'dark' ? 'light' : 'dark'
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
          position: entries[entries.length - 1].position + 1,
          type,
          content: ''
        }
      ])
    } else {
      addEntry(type)
    }
  }

  /* Data */

  const editData = (key: string, content: string) => {
    setData({
      ...data,
      [key]: content
    })
  }

  const sortEntry = (entry: Entry, direction: string) => {
    const currIndex = entries.findIndex((e) => e.uuid === entry.uuid)
    const toPosition = direction === 'up' ? currIndex - 1 : currIndex + 1

    let array = [...entries]

    const selectedEntry = array.splice(currIndex, 1)[0]
    array.splice(toPosition, 0, selectedEntry)

    setEntries(array.map((entry, i) => ({ ...entry, position: i })))
  }

  const removeEntry = (entry: Entry) => {
    setEntries([...entries.filter((e) => e.uuid !== entry.uuid)].map((entry, i) => ({ ...entry, position: i })))
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

  const editEntryType = (entry: Entry, type: string) => {
    const keys = Object.keys(EntryTypes)
    let newKey = keys.indexOf(type) + 1

    if (newKey === keys.length) {
      newKey = 0
    }

    setEntries([
      ...entries.filter((e) => e.uuid !== entry.uuid),
      {
        ...entry,
        type: keys[newKey]
      }
    ])
  }

  /* Render */

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
      <AutoLayout
        name="Widget__header"
        verticalAlignItems="center"
        direction="vertical"
        spacing={8}
        padding={tokens.themes[data.colorTheme].layout.container}
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
          <InputGhost
            theme={data.colorTheme}
            variant={{ typo: 'h4', txt: 'primary' }}
            content={data.title}
            placeholder="Title"
            disabled={!data.isEditingVisible}
            onEditEnd={(e: TextEditEvent) => editData('title', e.characters)}
          />

          <InputGhost
            theme={data.colorTheme}
            variant={{ typo: 'p5', txt: 'secondary' }}
            content={data.date}
            placeholder="..."
            disabled={!data.isEditingVisible}
            onEditEnd={(e: TextEditEvent) => editData('date', e.characters)}
            style={{ width: 200, textAlign: 'right' }}
          />
        </AutoLayout>
        {data.isDescriptionVisible && (
          <InputGhost
            theme={data.colorTheme}
            variant={{ typo: 'p5', txt: 'secondary' }}
            type={'multiline'}
            content={data.description}
            placeholder="Add any description..."
            disabled={!data.isEditingVisible}
            onEditEnd={(e: TextEditEvent) => editData('description', e.characters)}
          />
        )}
      </AutoLayout>
      <Divider theme={data.colorTheme} />
      <AutoLayout
        name="Widget__list"
        verticalAlignItems="center"
        direction="vertical"
        spacing={0}
        padding={{ left: 0, right: 0, top: 16, bottom: 16 }}
        width="fill-parent"
      >
        {entries
          .sort((a, b) => a.position - b.position)
          .map((entry) => (
            <Item
              key={entry.uuid}
              theme={data.colorTheme}
              positionUp={data.isEditingVisible ? entry.position !== 0 : undefined}
              positionDown={data.isEditingVisible ? entry.position !== entries.length - 1 : undefined}
              deleting={data.isEditingVisible ? entry.position === 0 && entries.length === 1 : undefined}
              onPositionChange={(e: IItemPositionChangeEvent) => sortEntry(entry, e.direction)}
              onDelete={() => removeEntry(entry)}
            >
              <ItemTag
                key={entry.uuid}
                theme={data.colorTheme}
                type={EntryTypes[entry.type].status}
                contentBody={entry.content}
                placeholderBody={'Type something...'}
                disabled={!data.isEditingVisible}
                contentTag={EntryTypes[entry.type].label}
                onEditEnd={(e: TextEditEvent) => editEntry(entry, e.characters)}
                onTypeChange={() => (data.isEditingVisible ? editEntryType(entry, entry.type) : null)}
              />
            </Item>
          ))}
      </AutoLayout>
    </AutoLayout>
  )
}

widget.register(Widget)
