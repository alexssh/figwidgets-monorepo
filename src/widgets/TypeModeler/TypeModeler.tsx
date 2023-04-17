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

import { EntryPresets, KeyPresets } from './config'

/* Components */
import Header from 'src/patterns/Header'
import ItemTableHeader from 'src/patterns/ItemTableHeader'
import ItemTableRow from 'src/patterns/ItemTableRow'
import Item from 'src/components/Item'
import { glyphs } from 'src/components/Icon'

/* Utils */
import link from 'src/utils/link'
import tokens from 'src/utils/tokens'
import uuid from 'src/utils/uuid'

/* --- */

function Widget() {
  const [data, setData] = useSyncedState('data', {
    colorTheme: 'light',
    preset: Object.keys(EntryPresets)[0],

    title: 'Entity name',
    description: '',
    colorRibbon: tokens.themes.status.dark.light.fill,
    isDescriptionVisible: false,
    isRibbonVisible: true,
    isLinkVisible: false,
    link: {
      src: '',
      valid: false
    },

    key: Object.keys(KeyPresets)[0],
    name: 'name',
    type: 'type',
    mandatory: false,
    colorType: tokens.themes.status.success.light.fill,
    defaultValue: '',
    comment: '',

    width: 960
  })

  const [entryType, setEntryType] = useSyncedState('entryType', Object.keys(EntryPresets)[1])

  const [tableConfig, setTableConfig] = useSyncedState('tableConfig', [
    {
      title: 'Key',
      disabled: true,
      width: 60,
      style: { fill: tokens.themes.txt.secondary.default[data.colorTheme].color, textCase: 'upper' }
    },
    { title: 'Name', disabled: false, width: 120, style: { fontWeight: 600, tooltip: 'Name' } },
    {
      title: 'Type',
      width: 120,
      disabled: false,
      style: {
        fontSize: (tokens.themes.typo.p5.fontSize as number) - 1,
        fontFamily: 'Spline Sans Mono',
        tooltip: 'Type'
      }
    },
    {
      title: 'Mandatory',
      disabled: true,
      tooltip: 'Mandatory',
      width: 80,
      icon: 'asterisk',
      style: { fill: tokens.themes.txt.secondary.default[data.colorTheme].color }
    },
    { title: 'Default value', disabled: false, width: 160, style: { tooltip: 'Default value' } },
    {
      title: 'Description',
      width: 'fill-parent',
      disabled: false,
      style: { fill: tokens.themes.txt.secondary.default[data.colorTheme].color, tooltip: 'Description' }
    }
  ])

  usePropertyMenu(
    [
      ...(data.preset === Object.keys(EntryPresets)[0]
        ? ([
            {
              itemType: 'action',
              tooltip: 'Settings',
              propertyName: 'openSettings',
              icon: glyphs.settings(tokens.themes.txt.minor.default.light.color as string)
            }
          ] as WidgetPropertyMenuItem[])
        : []),
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
        itemType: 'separator'
      },
      ...(data.preset === Object.keys(EntryPresets)[0]
        ? ([
            {
              itemType: 'color-selector',
              propertyName: 'colorRibbon',
              tooltip: 'Ribbon color',
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
            }
          ] as WidgetPropertyMenuItem[])
        : []),
      ...(data.preset === Object.keys(EntryPresets)[1]
        ? ([
            {
              itemType: 'color-selector',
              propertyName: 'colorType',
              tooltip: 'Type color',
              selectedOption: data.colorType,
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
            }
          ] as WidgetPropertyMenuItem[])
        : []),
      ...(data.preset === Object.keys(EntryPresets)[1]
        ? ([
            {
              itemType: 'dropdown',
              tooltip: 'Key attribute type',
              propertyName: 'key',
              selectedOption: data.key,
              options: [
                { option: Object.keys(KeyPresets)[0], label: KeyPresets[Object.keys(KeyPresets)[0]].label },
                { option: Object.keys(KeyPresets)[1], label: KeyPresets[Object.keys(KeyPresets)[1]].label },
                { option: Object.keys(KeyPresets)[2], label: KeyPresets[Object.keys(KeyPresets)[2]].label },
                { option: Object.keys(KeyPresets)[3], label: KeyPresets[Object.keys(KeyPresets)[3]].label },
                { option: Object.keys(KeyPresets)[4], label: KeyPresets[Object.keys(KeyPresets)[4]].label },
                { option: Object.keys(KeyPresets)[5], label: KeyPresets[Object.keys(KeyPresets)[5]].label },
                { option: Object.keys(KeyPresets)[6], label: KeyPresets[Object.keys(KeyPresets)[6]].label },
                { option: Object.keys(KeyPresets)[7], label: KeyPresets[Object.keys(KeyPresets)[7]].label }
              ]
            }
          ] as WidgetPropertyMenuDropdownItem[])
        : []),
      ...(data.preset === Object.keys(EntryPresets)[1]
        ? ([
            {
              itemType: 'toggle',
              tooltip: 'Mandatory attribute',
              propertyName: 'mandatory',
              isToggled: data.mandatory,
              icon: glyphs.asterisk(
                data.mandatory
                  ? (tokens.themes.txt.primary.inverted.light.color as string)
                  : (tokens.themes.txt.minor.default.light.color as string)
              ) as string
            }
          ] as WidgetPropertyMenuItem[])
        : []),
      {
        itemType: 'separator'
      },
      {
        itemType: 'action',
        tooltip: 'Duplicate',
        propertyName: 'duplicate',
        icon: glyphs.duplicate(tokens.themes.txt.minor.default.light.color as string)
      },
      {
        itemType: 'separator'
      },
      {
        itemType: 'dropdown',
        tooltip: 'Type of new object to be added',
        propertyName: 'entryType',
        options: Object.keys(EntryPresets).map(
          (s) =>
            ({
              option: s,
              label: EntryPresets[s as keyof TableModelerEntryPresetsMapping].label
            } as WidgetPropertyMenuDropdownOption)
        ),
        selectedOption: entryType
      },
      {
        itemType: 'action',
        tooltip: 'Add',
        propertyName: 'addEntry',
        icon: glyphs.plus(tokens.themes.txt.minor.default.light.color as string)
      }
    ],
    ({ propertyName, propertyValue }) => {
      if (propertyName === 'openSettings') {
        return new Promise((resolve) => {
          openUI('settings', { data })
        })
      }

      if (propertyName === 'key') {
        setKey(propertyValue as string)
      }

      if (propertyName === 'colorTheme') {
        switchTheme()
      }

      if (propertyName === 'colorRibbon') {
        setRibbonColor(propertyValue)
      }

      if (propertyName === 'mandatory') {
        toggleMandatory()
      }

      if (propertyName === 'colorType') {
        setTypeColor(propertyValue)
      }

      if (propertyName === 'duplicate') {
        duplicateEntry()
      }

      if (propertyName === 'entryType') {
        setEntryType(propertyValue as string)
      }

      if (propertyName === 'addEntry') {
        addEntry(data, entryType)
      }
    }
  )

  useEffect(() => {
    figma.clientStorage.getAsync('isUIopen').then((isUIopen) => {
      if (isUIopen === undefined) {
        figma.clientStorage.setAsync('isUIopen', false)
      } else {
        if (isUIopen) {
          updateUI()
        }
      }
    })

    figma.on('close', () => {
      figma.clientStorage.setAsync('isUIopen', false)
    })

    figma.ui.onmessage = (message) => {
      if (message.action === 'ribbon') {
        toggleRibbonVisibility()
      }

      if (message.action === 'description') {
        toggleDescriptionVisiblity()
      }

      if (message.action === 'link') {
        toggleLinkVisibility()
      }
    }
  })

  /* UI */

  const updateUI = () => {
    figma.ui.postMessage({ data })
  }

  const openUI = (view: string, options: any) => {
    if (view === 'settings') {
      return new Promise((resolve) => {
        figma.showUI(__uiFiles__.settings, { themeColors: true, title: 'Settings', width: 240, height: 124 })
        setData({ ...data })
        figma.clientStorage.setAsync('isUIopen', true)
      })
    }
  }

  /* General */

  const setKey = (key: string) => {
    setData({
      ...data,
      key
    })
  }

  const switchTheme = () => {
    setData({
      ...data,
      colorTheme: data.colorTheme === 'dark' ? 'light' : 'dark'
    })
  }

  const setRibbonColor = (color: HexCode | undefined) => {
    if (color) {
      setData({
        ...data,
        colorRibbon: color
      })
    }
  }

  const setTypeColor = (color: HexCode | undefined) => {
    if (color) {
      setData({
        ...data,
        colorType: color
      })
    }
  }

  const toggleRibbonVisibility = () => {
    setData({
      ...data,
      isRibbonVisible: !data.isRibbonVisible
    })
  }

  const toggleDescriptionVisiblity = () => {
    setData({
      ...data,
      isDescriptionVisible: !data.isDescriptionVisible
    })
  }

  const toggleLinkVisibility = () => {
    setData({
      ...data,
      isLinkVisible: !data.isLinkVisible
    })
  }

  const toggleMandatory = () => {
    setData({
      ...data,
      mandatory: !data.mandatory
    })
  }

  /* Entries */

  const duplicateEntry = () => {
    const selectedNode = figma.currentPage.selection[0] as WidgetNode
    const parentNode = selectedNode.parent as PageNode | FrameNode | SectionNode | GroupNode

    const newNode = selectedNode.clone()

    let id = getCurrentStackID(selectedNode, newNode)

    const newNodePosition = calculateNewNodePosition(selectedNode, newNode as any, parentNode, id, 8)
    insertNewNode(newNode, newNodePosition, parentNode, parentNode.children.indexOf(selectedNode) + 1)
  }

  const addEntry = (current: typeof data, type: string) => {
    const selectedNode = figma.currentPage.selection[0] as WidgetNode
    const parentNode = selectedNode.parent as PageNode | FrameNode | SectionNode | GroupNode

    const newNode = selectedNode.cloneWidget({
      ...selectedNode.widgetSyncedState,
      data: {
        ...selectedNode.widgetSyncedState.data,
        isUIopen: false,
        // colorTheme: 'light',
        preset: type,

        title: 'Entity name',
        description: '',
        colorRibbon: tokens.themes.status.dark.light.fill,
        isDescriptionVisible: false,
        isRibbonVisible: true,
        isLinkVisible: false,
        link: {
          src: '',
          valid: false
        },

        key: Object.keys(KeyPresets)[0],
        name: 'name',
        type: 'type',
        mandatory: false,
        colorType: tokens.themes.status.success.light.fill,
        defaultValue: '',
        comment: ''

        // width: 800
      },
      entryType: Object.keys(EntryPresets)[1]
    })

    let id = getCurrentStackID(selectedNode, newNode)

    const newNodePosition = calculateNewNodePosition(selectedNode, newNode, parentNode, id, 8)
    insertNewNode(newNode, newNodePosition, parentNode, parentNode.children.indexOf(selectedNode) + 1)
  }

  const getCurrentStackID = (selectedNode: any, newNode: any) => {
    let id

    if (Boolean(selectedNode.getPluginData('position').length)) {
      const position = JSON.parse(selectedNode.getPluginData('position'))

      if (selectedNode.x !== position.x || selectedNode.y !== position.y) {
        id = uuid()
        updateNodePosition(selectedNode)
      } else {
        id = selectedNode.getPluginData('stackID')
      }
    } else {
      id = uuid()
      updateNodePosition(selectedNode)
    }

    selectedNode.setPluginData('stackID', id)
    newNode.setPluginData('stackID', id)

    return id
  }

  const calculateNewNodePosition = (
    selectedNode: WidgetNode,
    newNode: WidgetNode,
    parentNode: any,
    id: string,
    spacing: number
  ) => {
    const siblings = parentNode.children
      .filter((i: any) => i.name === 'ERD Modeler' && i.getPluginData('stackID') === id)
      .sort((a: any, b: any) => b.y - a.y)

    let maxBottomPosition

    for (let i = 0; i < siblings.length - 1; i++) {
      if (siblings[i].y - (siblings[i + 1].y + siblings[i + 1].height) - spacing * 2 >= newNode.height) {
        maxBottomPosition = siblings[i + 1].y + siblings[i + 1].height + spacing
        console.log('BREAK', {
          curr: siblings[i].y,
          next: siblings[i + 1].y,
          node: newNode.height,
          spacing: spacing * 2
        })
        break
      } else {
        maxBottomPosition = siblings[0].y + siblings[0].height + spacing
      }
    }

    return {
      x: selectedNode.x,
      y: maxBottomPosition
    }
  }

  const insertNewNode = (newNode: any, newNodePosition: any, parentNode: any, index: number) => {
    newNode.x = newNodePosition.x
    newNode.y = newNodePosition.y

    updateNodePosition(newNode)
    parentNode.insertChild(index, newNode)
  }

  const updateNodePosition = (selectedNode: any) => {
    selectedNode.setPluginData(
      'position',
      JSON.stringify({
        x: selectedNode.x,
        y: selectedNode.y
      })
    )
  }

  /* Data */

  const editData = (key: string, content: string) => {
    if (key !== 'link') {
      setData({
        ...data,
        [key]: content
      })
    }

    if (key === 'link') {
      setData({
        ...data,
        link: {
          src: content,
          valid: link(content)
        }
      })
    }
  }

  const editEntry = (index: number, content: string) => {
    if (index === 1) {
      setData({
        ...data,
        name: content
      })
    }
    if (index === 2) {
      setData({
        ...data,
        type: content
      })
    }
    if (index === 4) {
      setData({
        ...data,
        defaultValue: content
      })
    }
    if (index === 5) {
      setData({
        ...data,
        comment: content
      })
    }
  }

  /* Render */

  const renderHeader = (current: typeof data, config: typeof tableConfig) => (
    <>
      {current.isRibbonVisible && (
        <Frame name="Widget__ribbon" fill={current.colorRibbon} width="fill-parent" height={8} />
      )}

      <Header
        theme={current.colorTheme}
        title={current.title}
        isTitleVisible={true}
        isDescriptionVisible={current.isDescriptionVisible}
        description={current.description}
        disabled={false}
        link={current.isLinkVisible ? current.link : undefined}
        onEditEnd={(e: IItemHeaderOnEditEndEvent) => editData(e.property, e.value.characters)}
      />

      <ItemTableHeader key={'Widget__tableHeader'} theme={current.colorTheme} row={config as TableCell[]} />
    </>
  )

  const renderEntry = (current: typeof data, config: typeof tableConfig) => (
    <Item
      theme={data.colorTheme}
      positionUp={undefined}
      positionDown={undefined}
      more={undefined}
      hideHeightFix={true}
      padding={{
        vertical: 16,
        horizontal: tokens.themes.layout.item.horizontal
      }}
    >
      <ItemTableRow
        theme={current.colorTheme}
        disabled={false}
        row={
          [
            {
              ...config[0],
              content: current.key === 'none' ? '' : current.key,
              style: {
                ...config[0].style,
                tooltip: KeyPresets[current.key].label
              }
            },
            {
              ...config[1],
              content: current.name,
              style: {
                ...config[1].style
              }
            },
            {
              ...config[2],
              content: current.type,
              style: {
                ...config[2].style,
                fill: current.colorType
              }
            },
            {
              ...config[3],
              content: '',
              icon: current.mandatory ? config[3].icon : undefined,
              style: {
                ...config[3].style
              }
            },
            {
              ...config[4],
              content: current.defaultValue,
              style: {
                ...config[4].style
              }
            },
            {
              ...config[5],
              content: current.comment,
              style: {
                ...config[5].style
              }
            }
          ] as TableCell[]
        }
        onEditEnd={(e: IItemTableRowEditEnd) => editEntry(e.index, e.characters)}
      />
    </Item>
  )

  return (
    <AutoLayout
      name="Widget"
      verticalAlignItems="center"
      direction="vertical"
      spacing={0}
      padding={0}
      cornerRadius={tokens.themes.radius.container.cornerRadius}
      fill={tokens.themes.layer.default[data.colorTheme].fill}
      width={data.width}
      effect={tokens.themes.shadow.container[data.colorTheme]}
      stroke={tokens.themes.border.container[data.colorTheme].fill}
      strokeWidth={1}
    >
      {data.preset === Object.keys(EntryPresets)[0] ? renderHeader(data, tableConfig) : <></>}
      {data.preset === Object.keys(EntryPresets)[1] ? renderEntry(data, tableConfig) : <></>}
    </AutoLayout>
  )
}

widget.register(Widget)
