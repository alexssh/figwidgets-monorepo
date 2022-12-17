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

import { EntryPresets } from './config'

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
    selectedEntry: undefined,
    isUIopen: false,
    title: 'Entity name',
    description: '',
    isEditingVisible: true,
    colorTheme: 'light',
    colorRibbon: tokens.themes.light.status.dark.fill,

    isTitleVisible: true,
    isDescriptionVisible: false,
    isRibbonVisible: true,
    isFooterVisible: true,

    width: 800,
    isBackgroundVisible: true,

    isTableTypeVisible: true,
    isTableDefaultValueVisible: true,
    isTableDescriptionVisible: true
  })

  const [tableConfig, setTableConfig] = useSyncedState('tableConfig', [
    { title: 'Name', width: 120, visibility: true, style: { fontWeight: 600 } },
    {
      title: 'Type',
      width: 120,
      visibility: true,
      style: { fill: tokens.themes[data.colorTheme].txt.status.success.color }
    },
    { title: 'Default value', width: 160, visibility: true },
    {
      title: 'Description',
      width: 'fill-parent',
      visibility: true,
      style: { fill: tokens.themes[data.colorTheme].txt.secondary.default.color }
    }
  ])

  const [entryType, setEntryType] = useSyncedState('table', Object.keys(EntryPresets)[0])

  const entries = useSyncedMap<TableModelerEntry>('entries')

  usePropertyMenu(
    [
      ...(data.isEditingVisible
        ? ([
            {
              itemType: 'action',
              tooltip: 'Settings',
              propertyName: 'openSettings',
              icon: glyphs.settings(tokens.themes.light.txt.minor.default.color as string)
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
              itemType: 'color-selector',
              propertyName: 'colorRibbon',
              tooltip: 'Header color',
              selectedOption: data.colorRibbon,
              options: [
                { option: tokens.themes[data.colorTheme].status.error.fill, tooltip: 'Red' },
                { option: tokens.themes[data.colorTheme].status.warning.fill, tooltip: 'Orange' },
                { option: tokens.themes[data.colorTheme].status.important.fill, tooltip: 'Yellow' },
                { option: tokens.themes[data.colorTheme].status.success.fill, tooltip: 'Green' },
                { option: tokens.themes[data.colorTheme].status.secondary.fill, tooltip: 'Cyan' },
                { option: tokens.themes[data.colorTheme].status.primary.fill, tooltip: 'Blue' },
                { option: tokens.themes[data.colorTheme].status.info.fill, tooltip: 'Purple' },
                { option: tokens.themes[data.colorTheme].status.dark.fill, tooltip: 'Black' },
                { option: tokens.themes[data.colorTheme].status.disabled.fill, tooltip: 'Grey' },
                { option: tokens.themes[data.colorTheme].status.white.fill, tooltip: 'White' }
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
      if (propertyName === 'openSettings') {
        return new Promise((resolve) => {
          openUI('settings', { data, entry: undefined })
        })
      }

      if (propertyName === 'isEditingVisible') {
        switchEditingVisibility()
      }

      if (propertyName === 'colorTheme') {
        switchTheme()
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
      if (message.action === 'table_type') {
        setTableTypeVisibility()
      }

      if (message.action === 'table_default_value') {
        setTableDefaultValueVisibility()
      }

      if (message.action === 'table_description') {
        setTableDescriptionVisibility()
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

      if (message.action === 'footer') {
        setFooterVisiblity()
      }

      if (message.action.indexOf('width') > -1) {
        setWidth(message.action)
      }

      if (message.action === 'background') {
        setBackgroundVisiblity()
      }

      if (message.action.indexOf('color') > -1) {
        setEntryTypeColor(entries.get(message.uuid) as TableModelerEntry, message.action)
      }

      if (message.action === 'move_up') {
        moveEntry(entries.get(message.uuid) as TableModelerEntry, 'up')
      }

      if (message.action === 'move_down') {
        moveEntry(entries.get(message.uuid) as TableModelerEntry, 'down')
      }

      if (message.action === 'duplicate') {
        const entry = entries.get(message.uuid) as TableModelerEntry

        addEntry(null, {
          position: entry.position + 0.5,
          row: entry.row
        })

        figma.closePlugin()
      }

      if (message.action === 'delete') {
        removeEntry(entries.get(message.uuid) as TableModelerEntry)
        figma.closePlugin()
      }
    }
  })

  /* UI */

  const updateUI = () => {
    figma.ui.postMessage({
      data,
      entries: entries.values()
    })
  }

  const openUI = (view: string, options: any) => {
    if (view === 'settings') {
      return new Promise((resolve) => {
        figma.showUI(__uiFiles__.settings, { themeColors: true, title: 'Settings', width: 240, height: 454 })

        setData({ ...data, isUIopen: true, selectedEntry: undefined })
      })
    }

    if (view === 'more') {
      return new Promise((resolve) => {
        figma.showUI(__uiFiles__.more, {
          themeColors: true,
          title: `Property: ${options.entry.row[0].content.length ? options.entry.row[0].content : '...'}`,
          width: 240,
          height: 259
        })
        setData({ ...data, isUIopen: true, selectedEntry: options.entry.uuid })
      })
    }
  }

  /* General */

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

  const setTableTypeVisibility = () => {
    setData({
      ...data,
      isTableTypeVisible: !data.isTableTypeVisible
    })
    updateTableConfig(1, { visibility: !tableConfig[1].visibility })
  }

  const setTableDefaultValueVisibility = () => {
    setData({
      ...data,
      isTableDefaultValueVisible: !data.isTableDefaultValueVisible
    })
    updateTableConfig(2, { visibility: !tableConfig[2].visibility })
  }

  const setTableDescriptionVisibility = () => {
    setData({
      ...data,
      isTableDescriptionVisible: !data.isTableDescriptionVisible
    })
    updateTableConfig(3, { visibility: !tableConfig[3].visibility })
  }

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
    preset: string | null,
    options?: {
      position?: number
      row: any
    }
  ) => {
    const id = uuid()

    if (!entries.get(id)) {
      entries.set(id, {
        uuid: id,
        position: entries.values().length === 0 ? 0 : entries.values().length,
        row:
          preset !== null
            ? EntryPresets[preset].row.map(
                (cell, i) =>
                  ({
                    ...tableConfig[i],
                    ...cell
                  } as TableCell)
              )
            : [],

        ...options
      })
      sortPositions()
    } else {
      addEntry(preset)
    }
  }

  const moveEntry = (entry: TableModelerEntry, direction: string) => {
    let targetEntry = entries.get(entry.uuid) as TableModelerEntry

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

  const removeEntry = (entry: TableModelerEntry) => {
    entries.delete(entry.uuid)
    sortPositions()
  }

  const editEntry = (entry: TableModelerEntry, event: IItemTableRowEditEnd) => {
    entries.set(entry.uuid, {
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
    })
  }

  const setEntryTypeColor = (entry: TableModelerEntry, color: string) => {
    entries.set(entry.uuid, {
      ...entry,
      row: entry.row.map((cell, i) => {
        if (i === 1) {
          return {
            ...cell,
            style: {
              ...cell.style,
              fill: color.split('_')[1]
            }
          }
        } else {
          return cell
        }
      })
    })
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

  /* Render */

  return (
    <AutoLayout
      name="Widget"
      verticalAlignItems="center"
      direction="vertical"
      spacing={0}
      padding={0}
      cornerRadius={data.isBackgroundVisible ? tokens.themes[data.colorTheme].radius.container.cornerRadius : 0}
      fill={data.isBackgroundVisible ? tokens.themes[data.colorTheme].layer.default.fill : { r: 0, g: 0, b: 0, a: 0 }}
      width={data.width}
      effect={tokens.themes[data.colorTheme].shadow[data.isBackgroundVisible ? 'container' : 'transparent']}
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

      <ItemTableHeader key={'Widget__tableHeader'} theme={data.colorTheme} row={tableConfig as TableCell[]} />

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
                      ...tableConfig[i],
                      ...cell
                    } as TableCell)
                )}
                onEditEnd={(e: IItemTableRowEditEnd) => editEntry(entry, e)}
              />
            </Item>
          ))}
        {entries.values().length === 0 && (
          <Text
            {...tokens.themes[data.colorTheme].typo.p5}
            fill={tokens.themes[data.colorTheme].txt.secondary.default.color}
            width={'fill-parent'}
            height={48}
            horizontalAlignText="center"
            verticalAlignText="center"
          >
            What is your next data structure?
          </Text>
        )}
      </AutoLayout>

      {data.isFooterVisible && (
        <Fragment>
          <Divider theme={data.colorTheme} />
          <Footer theme={data.colorTheme}>
            {entries.values().length === 0 && (
              <AutoLayout key={'Footer__left'} width={'fill-parent'} height={1}></AutoLayout>
            )}
            {entries.values().length > 0 && (
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
                  {...tokens.themes[data.colorTheme].typo.p6}
                  fill={tokens.themes[data.colorTheme].txt.secondary.default.color}
                  width="fill-parent"
                  horizontalAlignText="left"
                  height={32}
                  verticalAlignText="center"
                >
                  {entries.values().length > 1
                    ? `${entries.values().length} properties`
                    : `${entries.values().length} property`}
                </Text>
              </AutoLayout>
            )}
            {data.isEditingVisible && (
              <Fragment key={'Footer__actions'}>
                <ButtonGhost
                  key="Footer__action_addProperty"
                  theme={data.colorTheme}
                  variant="primary"
                  glyph="plus"
                  content="Add property"
                  onClick={() => addEntry('custom')}
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
