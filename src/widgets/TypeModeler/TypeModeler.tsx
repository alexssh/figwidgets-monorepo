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

import { meta, EntryPresets } from './config'

/* Components */
import Header from 'src/patterns/Header'
import Footer from 'src/patterns/Footer'
import ItemTableHeader from 'src/patterns/ItemTableHeader'
import ItemTableRow from 'src/patterns/ItemTableRow'
import Item from 'src/components/Item'
import { glyphs } from 'src/components/Icon'
import ButtonGhost from 'src/components/ButtonGhost'
import Divider from 'src/components/Divider'

/* Utils */
import tokens from 'src/utils/tokens'
import uuid from 'src/utils/uuid'

/* --- */

function Widget() {
  const [data, setData] = useSyncedState('data', {
    title: 'Entity name',
    description: '',
    isDescriptionVisible: true,
    isEditingVisible: true,
    colorTheme: 'light'
  })

  const [tableConfig, setTableConfig] = useSyncedState('tableConfig', [
    { title: 'Name', width: 120, style: { fontWeight: 600 } },
    { title: 'Type', width: 120, style: { fill: tokens.themes[data.colorTheme].txt.status.success.color } },
    { title: 'Default value', width: 160, visibility: true },
    {
      title: 'Description',
      width: 'fill-parent',
      visibility: true,
      style: { fill: tokens.themes[data.colorTheme].txt.secondary.default.color }
    }
  ])

  const [entryType, setEntryType] = useSyncedState('table', Object.keys(EntryPresets)[0])

  const [entries, setEntries] = useSyncedState(
    'entries',
    new Array<TableModelerEntry>(
      {
        uuid: uuid(2),
        position: 0,
        row: [
          {
            ...tableConfig[0],
            content: 'id'
          } as TableCell,
          {
            ...tableConfig[1],
            content: 'uuid'
          } as TableCell,
          {
            ...tableConfig[2],
            content: 'uuid()'
          } as TableCell,
          {
            ...tableConfig[3],
            content: ''
          } as TableCell
        ]
      },
      {
        uuid: uuid(4),
        position: 1,
        row: [
          {
            ...tableConfig[0],
            content: 'likes'
          } as TableCell,
          {
            ...tableConfig[1],
            content: 'number'
          } as TableCell,
          {
            ...tableConfig[2],
            content: '0'
          } as TableCell,
          {
            ...tableConfig[3],
            content: ''
          } as TableCell
        ]
      },
      {
        uuid: uuid(6),
        position: 2,
        row: [
          {
            ...tableConfig[0],
            content: 'content?'
          } as TableCell,
          {
            ...tableConfig[1],
            content: 'string'
          } as TableCell,
          {
            ...tableConfig[2],
            content: '""'
          } as TableCell,
          {
            ...tableConfig[3],
            content: '160 symbols max'
          } as TableCell
        ]
      }
    )
  )

  useEffect(() => {
    // Compatibility with previous versions
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
              tooltip: 'New property template',
              propertyName: 'entryType',
              options: Object.keys(EntryPresets).map(
                (s) =>
                  ({
                    option: s,
                    label: EntryPresets[s as keyof ChangelogEntryMapping].label
                  } as WidgetPropertyMenuDropdownOption)
              ),
              selectedOption: entryType
            },
            {
              itemType: 'action',
              tooltip: 'Add property',
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

  const addEntry = (preset: string) => {
    const id = uuid()

    if (!entries.filter((entry) => entry.uuid === id).length) {
      setEntries([
        ...entries,
        {
          uuid: id,
          position: entries[entries.length - 1].position + 1,
          row: EntryPresets[preset].row.map(
            (cell, i) =>
              ({
                ...tableConfig[i],
                ...cell
              } as TableCell)
          )
        }
      ])
    } else {
      addEntry(preset)
    }
  }

  /* Data */

  const editData = (key: string, content: string) => {
    setData({
      ...data,
      [key]: content
    })
  }

  const updateTableConfig = (index: number, property: any) => {
    setTableConfig(
      tableConfig.map((cell, i) => {
        if (i === index) {
          return {
            ...cell,
            ...property
          }
        } else {
          return cell
        }
      })
    )
  }

  const sortEntry = (entry: TableModelerEntry, direction: string) => {
    const currIndex = entries.findIndex((e) => e.uuid === entry.uuid)
    const toPosition = direction === 'up' ? currIndex - 1 : currIndex + 1

    let array = [...entries]

    const selectedEntry = array.splice(currIndex, 1)[0]
    array.splice(toPosition, 0, selectedEntry)

    setEntries(array.map((entry, i) => ({ ...entry, position: i })))
  }

  const removeEntry = (entry: TableModelerEntry) => {
    setEntries([...entries.filter((e) => e.uuid !== entry.uuid)].map((entry, i) => ({ ...entry, position: i })))
  }

  const editEntry = (entry: TableModelerEntry, event: IItemTableRowEditEnd) => {
    setEntries([
      ...entries.filter((e) => e.uuid !== entry.uuid),
      {
        ...entry,
        row: entry.row.map((cell, i) => {
          if (i === event.index) {
            return {
              ...cell,
              content: event.characters
            }
          } else {
            return cell
          }
        })
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
      <ItemTableHeader
        key={'Widget__tableHeader'}
        theme={data.colorTheme}
        disabled={!data.isEditingVisible}
        row={tableConfig as TableCell[]}
        onVisibilityChanged={(e: IItemTableHeaderVisibilityChanged) =>
          updateTableConfig(e.index, { visibility: !tableConfig[e.index].visibility })
        }
      />

      <Divider theme={data.colorTheme} />
      <AutoLayout
        name="Widget__tableBody"
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
              padding={{
                vertical: 4,
                horizontal: tokens.themes[data.colorTheme].layout.item.horizontal
              }}
            >
              <ItemTableRow
                key={entry.uuid}
                theme={data.colorTheme}
                disabled={!data.isEditingVisible}
                row={entry.row.map(
                  (cell, i) =>
                    ({
                      ...cell,
                      ...tableConfig[i]
                    } as TableCell)
                )}
                onEditEnd={(e: IItemTableRowEditEnd) => editEntry(entry, e)}
              />
            </Item>
          ))}
      </AutoLayout>

      {data.isEditingVisible && (
        <Fragment>
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
                {entries.length > 1 ? `${entries.length} properties` : `${entries.length} property`}
              </Text>
            )}
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
                key="Footer__action_addProperty"
                theme={data.colorTheme}
                variant="primary"
                glyph="plus"
                content="Add property"
                onClick={() => addEntry('custom')}
              />
            </Fragment>
          </Footer>
        </Fragment>
      )}
    </AutoLayout>
  )
}

widget.register(Widget)
