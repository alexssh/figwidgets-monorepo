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
import { LabelPresets } from './config'

/* Components */
import Item from 'src/components/Item'
import { glyphs } from 'src/components/Icon'
import ButtonGhost from 'src/components/ButtonGhost'
import InputGhost from 'src/components/InputGhost'
import Divider from 'src/components/Divider'

/* Patterns */
import Header from 'src/patterns/Header'
import Footer from 'src/patterns/Footer'
import ItemTag from 'src/patterns/ItemTag'
import ItemTitle from 'src/patterns/ItemTitle'

/* Utils */
import link from 'src/utils/link'
import datetime from 'src/utils/datetime'
import tokens from 'src/utils/tokens'
import uuid from 'src/utils/uuid'

/* --- */

function Widget() {
  const [data, setData] = useSyncedState('data', {
    selectedEntry: undefined,
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
    isEditingVisible: true,
    isFirstRun: true
  })

  const entries = useSyncedMap<ChangelogChangeEntry | ChangelogTitleEntry>('entries')

  const [currentLabel, setCurrentLabel] = useSyncedState('currentLabel', LabelPresets[0].uuid)
  const labels = useSyncedMap<ChangelogLabelEntry>('labels')

  const [canvas, setCanvas] = useSyncedState('canvas', {
    id: '',
    layerName: '',
    valid: false
  })

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
            }
          ] as WidgetPropertyMenuItem[])
        : []),
      ...(data.isEditingVisible && data.isRibbonVisible
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
      ...(data.isEditingVisible
        ? ([
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
      ...(data.isEditingVisible && labels.entries().length
        ? ([
            {
              itemType: 'separator'
            },
            {
              itemType: 'dropdown',
              tooltip: 'New entry type',
              propertyName: 'entryType',
              options: labels
                .values()
                .sort((a, b) => a.position - b.position)
                .map((s) => ({
                  option: s.uuid,
                  label: `${tokens.themes.labels[s.variant].preview}  ${s.label}`
                }))
                .concat([
                  {
                    option: Object.keys(EntryTypes)[1],
                    label: `📎  ${EntryTypes.title.label}`
                  }
                ]),
              selectedOption: currentLabel
            }
          ] as WidgetPropertyMenuItem[])
        : []),
      ...(data.isEditingVisible
        ? ([
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
        setCurrentLabel(propertyValue as string)
      }

      if (propertyName === 'addEntry') {
        addEntry(currentLabel == Object.keys(EntryTypes)[1] ? Object.keys(EntryTypes)[1] : 'change', {
          labelID: currentLabel
        })
      }
    }
  )
  useEffect(() => {
    // Initial preset
    if (data.isFirstRun) {
      LabelPresets.forEach((value, i, array) => labels.set(value.uuid, { ...value }))

      setCurrentLabel(LabelPresets[0].uuid)
      setData({
        ...data,
        isFirstRun: false
      })
    }

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
      figma.off('selectionchange', watchCanvasSelection)
      setCanvasSelection('', '', false)

      figma.clientStorage.setAsync('isUIopen', false)
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
        editEntryType(entries.get(message.uuid) as ChangelogChangeEntry, message.action)
      }

      if (message.action === 'move_up') {
        moveEntry(entries.get(message.uuid) as ChangelogEntry, 'up')
      }

      if (message.action === 'move_down') {
        moveEntry(entries.get(message.uuid) as ChangelogEntry, 'down')
      }

      if (message.action === 'show_description') {
        toggleDescriptionVisibility(entries.get(message.uuid) as ChangelogTitleEntry)
        figma.closePlugin()
      }

      if (message.action === 'hide_description') {
        toggleDescriptionVisibility(entries.get(message.uuid) as ChangelogTitleEntry)
        figma.closePlugin()
      }

      if (message.action === 'show_link') {
        toggleLinkVisibility(entries.get(message.uuid) as ChangelogEntry)

        figma.closePlugin()
      }

      if (message.action === 'hide_link') {
        toggleLinkVisibility(entries.get(message.uuid) as ChangelogEntry)

        figma.closePlugin()
      }

      if (message.action === 'navigation_add') {
        setNavigation(entries.get(message.uuid) as ChangelogTitleEntry | ChangelogChangeEntry, canvas)
      }

      if (message.action === 'navigation_update') {
        setNavigation(entries.get(message.uuid) as ChangelogTitleEntry | ChangelogChangeEntry, canvas)
      }

      if (message.action === 'navigation_delete') {
        setNavigation(entries.get(message.uuid) as ChangelogTitleEntry | ChangelogChangeEntry, {
          id: '',
          layerName: '',
          valid: false
        })
      }

      if (message.action === 'duplicate') {
        const entry = entries.get(message.uuid) as ChangelogTitleEntry | ChangelogChangeEntry

        if (currentLabel == Object.keys(EntryTypes)[1]) {
          addEntry(Object.keys(EntryTypes)[1], {
            position: entry.position + 0.5,
            title: (entry as ChangelogTitleEntry).title,
            description: (entry as ChangelogTitleEntry).description,
            isDescriptionVisible: (entry as ChangelogTitleEntry).isDescriptionVisible,
            isLinkVisible: (entry as ChangelogEntry).isLinkVisible,
            link: (entry as ChangelogEntry).link,
            isNavigationLinkVisible: (entry as ChangelogEntry).isNavigationLinkVisible,
            navigationLink: (entry as ChangelogEntry).navigationLink
          })
        } else {
          addEntry('change', {
            position: entry.position + 0.5,
            content: (entry as ChangelogChangeEntry).content,
            labelID: (entry as ChangelogChangeEntry).labelID,
            label: (entry as ChangelogChangeEntry).label,
            variant: (entry as ChangelogChangeEntry).variant,
            isLinkVisible: (entry as ChangelogEntry).isLinkVisible,
            link: (entry as ChangelogEntry).link,
            isNavigationLinkVisible: (entry as ChangelogEntry).isNavigationLinkVisible,
            navigationLink: (entry as ChangelogEntry).navigationLink
          })
        }

        figma.closePlugin()
      }

      if (message.action === 'delete') {
        removeEntry(entries.get(message.uuid) as ChangelogEntry)

        figma.closePlugin()
      }

      if (message.action === 'label_color') {
        setLabelColor(message.uuid, message.value)
      }

      if (message.action === 'label_delete') {
        deleteLabel(message.uuid)
      }

      if (message.action === 'label_label') {
        setLabel(message.uuid, message.value)
      }

      if (message.action === 'label_position') {
        setLabelPosition(message.uuid, message.value)
      }

      if (message.action === 'label_add') {
        addLabel()
      }
    }
  })

  /* UI */

  const updateUI = () => {
    figma.ui.postMessage({
      data,
      labels: labels.values().sort((a, b) => a.position - b.position),
      entries: entries.values(),
      tokens,
      currentEntry: data.selectedEntry ? entries.get(data.selectedEntry as unknown as string) : undefined,
      currentLabel,
      canvas
    })
  }

  const openUI = (view: string, options: any) => {
    figma.on('selectionchange', watchCanvasSelection)

    if (view === 'settings') {
      return new Promise((resolve) => {
        figma.showUI(__uiFiles__.settings, { themeColors: true, title: 'Settings', width: 280, height: 750 })
        setData({ ...data, selectedEntry: undefined })
        figma.clientStorage.setAsync('isUIopen', true)
      })
    }

    if (view === 'more-change') {
      return new Promise((resolve) => {
        figma.showUI(__uiFiles__.more_change, {
          themeColors: true,
          title: `Entry: ${options.entry.content.length ? options.entry.content : '...'}`,
          width: 240,
          height: 388
        })
        setData({ ...data, selectedEntry: options.entry.uuid })
        figma.clientStorage.setAsync('isUIopen', true)
      })
    }

    if (view === 'more-title') {
      return new Promise((resolve) => {
        figma.showUI(__uiFiles__.more_title, {
          themeColors: true,
          title: `Section: ${options.entry.title.length ? options.entry.title : '...'}`,
          width: 240,
          height: 367
        })
        setData({ ...data, selectedEntry: options.entry.uuid })
        figma.clientStorage.setAsync('isUIopen', true)
      })
    }
  }

  /* Canvas */

  const watchCanvasSelection = () => {
    if (figma.currentPage.selection.length === 1 && !figma.currentPage.selection[0].removed) {
      setCanvasSelection(figma.currentPage.selection[0].id, figma.currentPage.selection[0].name, true)
    } else {
      setCanvasSelection('', '', false)
    }
  }

  const checkNavigationLink = (entry: ChangelogTitleEntry | ChangelogChangeEntry, cb?: Function) => {
    const node = figma.getNodeById((entry as ChangelogEntry).navigationLink.id)
    if ((entry as ChangelogEntry).navigationLink.valid) {
      if (!node) {
        setNavigation(entry, {
          id: (entry as ChangelogEntry).navigationLink.id,
          layerName: (entry as ChangelogEntry).navigationLink.layerName,
          valid: false
        })
        cb?.(false, {})
      } else {
        setNavigation(entry, {
          id: (entry as ChangelogEntry).navigationLink.id,
          layerName: node?.name as string,
          valid: true
        })
        cb?.(true, node)
      }
    } else {
      cb?.(false, {})
    }
  }

  /* Labels */

  const setLabelColor = (uuid: string, color: string) => {
    labels.set(uuid, {
      ...(labels.get(uuid) as ChangelogLabelEntry),
      variant: color
      // color: tokens.themes.labels[color].fill as string
    })

    entries.values().forEach((_entry, i) => {
      if (_entry.type === 'change') {
        entries.set(_entry.uuid, {
          ..._entry,
          variant: color
        })
      }
    })
  }

  const deleteLabel = (uuid: string) => {
    labels.delete(uuid)
  }

  const addLabel = () => {
    const id = uuid()
    labels.set(id, {
      uuid: id,
      position: labels.values().length,
      label: 'Option',
      variant: 'grey',
      color: ''
    })
  }

  const setLabel = (uuid: string, label: string) => {
    labels.set(uuid, {
      ...(labels.get(uuid) as ChangelogLabelEntry),
      label
    })

    entries.values().forEach((_entry, i) => {
      if (_entry.type === 'change') {
        entries.set(_entry.uuid, {
          ..._entry,
          label
        })
      }
    })
  }

  const setLabelPosition = (uuid: string, position: number) => {
    labels.set(uuid, {
      ...(labels.get(uuid) as ChangelogLabelEntry),
      position: position
    })
    sortLabelPositions()
  }

  const sortLabelPositions = () => {
    labels
      .values()
      .sort((a, b) => a.position - b.position)
      .forEach((_label, i) => {
        labels.set(_label.uuid, {
          ..._label,
          position: i
        })
      })
  }

  /* General */

  const setCanvasSelection = (id: string, layerName: string, valid: boolean) => {
    setCanvas({
      id,
      layerName,
      valid
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
      uuid?: string
      position?: number
      isLinkVisible?: boolean
      link?: Link
      isNavigationLinkVisible?: boolean
      navigationLink?: NavigationLink

      content?: string

      labelID?: string
      label?: string
      variant?: string

      title?: string
      description?: string
      isDescriptionVisible?: boolean
    }
  ) => {
    const id = uuid()

    if (!entries.get(id)) {
      if (type === Object.keys(EntryTypes)[1]) {
        entries.set(id, {
          uuid: id,
          position: entries.values().length === 0 ? 0 : entries.values().length,
          type,
          isLinkVisible: false,
          link: {
            src: '',
            valid: false
          },
          isNavigationLinkVisible: false,
          navigationLink: {
            id: '',
            layerName: '',
            valid: false
          },
          title: '',
          description: '',
          isDescriptionVisible: false,
          label: '',
          variant: '',
          ...options
        } as ChangelogTitleEntry)
      } else {
        let extractedLabel = options?.labelID ? labels.get(options?.labelID) : undefined

        entries.set(id, {
          uuid: id,
          position: entries.values().length === 0 ? 0 : entries.values().length,
          type,
          isLinkVisible: false,
          link: {
            src: '',
            valid: false
          },
          isNavigationLinkVisible: false,
          navigationLink: {
            id: '',
            layerName: '',
            valid: false
          },
          content: '',
          labelID: options?.labelID,
          label: extractedLabel ? extractedLabel.label : '',
          variant: extractedLabel ? extractedLabel.variant : '',
          ...options
        } as ChangelogChangeEntry)
      }

      sortPositions()
    } else {
      addEntry(type)
    }
  }

  const toggleLinkVisibility = (entry: ChangelogEntry) => {
    entries.set(entry.uuid, {
      ...(entry as ChangelogChangeEntry | ChangelogTitleEntry),
      isLinkVisible: !entry.isLinkVisible
    })
  }

  const toggleDescriptionVisibility = (entry: ChangelogTitleEntry) => {
    entries.set(entry.uuid, {
      ...entry,
      isDescriptionVisible: !entry.isDescriptionVisible
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
      ...(entry as ChangelogChangeEntry | ChangelogTitleEntry),
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

  /* Entries */

  const editEntry = (entry: ChangelogChangeEntry | ChangelogTitleEntry, event: IItemTagOnEditEndEvent) => {
    if (event.property === 'title') {
      entries.set(entry.uuid, {
        ...entry,
        title: event.value.characters
      })
    }

    if (event.property === 'description') {
      entries.set(entry.uuid, {
        ...entry,
        description: event.value.characters
      })
    }

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

  const editEntryType = (entry: ChangelogChangeEntry, type: string) => {
    const id = type.split('_')[1]
    let extractedLabel = labels.get(id)

    entries.set(entry.uuid, {
      ...entry,
      labelID: id,
      label: extractedLabel ? extractedLabel.label : '',
      variant: extractedLabel ? extractedLabel.variant : ''
    })
  }

  const setNavigation = (entry: ChangelogTitleEntry | ChangelogChangeEntry, navigationLink: NavigationLink) => {
    entries.set(entry.uuid, {
      ...entry,
      isNavigationLinkVisible: Boolean(navigationLink.id.length),
      navigationLink
    })
  }

  const findPage = (node: SceneNode | PageNode | DocumentNode): PageNode | undefined => {
    if (node.type === 'PAGE') {
      return node as PageNode
    } else {
      if (node.parent) {
        return findPage(node.parent as SceneNode)
      } else {
        return undefined
      }
    }
  }

  const onNavigationClick = (entry: ChangelogTitleEntry | ChangelogChangeEntry) => {
    checkNavigationLink(entry, (valid: boolean, node: SceneNode) => {
      if (valid) {
        let page = findPage(node)
        if (page) {
          figma.currentPage = page
          figma.viewport.scrollAndZoomIntoView([node])
        } else {
          figma.notify("Can't find target node")
        }
      } else {
        figma.notify("Target node doesn't exist")
      }
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
      stroke={tokens.themes.border.container[data.colorTheme].fill}
      strokeWidth={data.isBackgroundVisible ? 1 : 0}
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
        onEditEnd={(e: IItemHeaderOnEditEndEvent) => editData(e.property, e.value.characters)}
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
          .map((entry, i) => {
            // Change
            if (entry.type === Object.keys(EntryTypes)[0]) {
              return (
                <Item
                  key={entry.uuid}
                  theme={data.colorTheme}
                  positionUp={data.isEditingVisible ? entry.position !== 0 : undefined}
                  positionDown={data.isEditingVisible ? entry.position !== entries.values().length - 1 : undefined}
                  more={data.isEditingVisible ? !data.isEditingVisible : undefined}
                  onPositionChange={(e: IItemPositionChangeEvent) => {
                    moveEntry(entry as ChangelogEntry, e.direction)
                  }}
                  onMore={() => openUI('more-change', { data, entry })}
                >
                  <ItemTag
                    key={entry.uuid}
                    theme={data.colorTheme}
                    tagLabel={(entry as ChangelogChangeEntry).label as string}
                    tagColor={(entry as ChangelogChangeEntry).variant as string}
                    contentBody={(entry as ChangelogChangeEntry).content}
                    placeholderBody={'Type something...'}
                    disabled={!data.isEditingVisible}
                    link={(entry as ChangelogEntry).isLinkVisible ? (entry as ChangelogEntry).link : undefined}
                    navigationLink={
                      (entry as ChangelogEntry).isNavigationLinkVisible
                        ? (entry as ChangelogEntry).navigationLink
                        : undefined
                    }
                    onNavigationClick={() => onNavigationClick(entry as ChangelogTitleEntry)}
                    onEditEnd={(e: IItemTagOnEditEndEvent) => editEntry(entry as ChangelogChangeEntry, e)}
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
                  positionUp={data.isEditingVisible}
                  positionDown={data.isEditingVisible}
                  more={data.isEditingVisible ? !data.isEditingVisible : undefined}
                  padding={{
                    top: i === 0 ? 10 : 24,
                    bottom: 10,
                    horizontal: tokens.themes.layout.item.horizontal
                  }}
                  onPositionChange={(e: IItemPositionChangeEvent) => moveEntry(entry as ChangelogEntry, e.direction)}
                  onMore={() => openUI('more-title', { data, entry })}
                >
                  <ItemTitle
                    key={entry.uuid}
                    theme={data.colorTheme}
                    contentTitle={(entry as ChangelogTitleEntry).title}
                    placeholderTitle={'Type something...'}
                    isDescriptionVisible={(entry as ChangelogTitleEntry).isDescriptionVisible}
                    contentDescription={(entry as ChangelogTitleEntry).description}
                    placeholderDescription={'Description...'}
                    disabled={!data.isEditingVisible}
                    link={(entry as ChangelogEntry).isLinkVisible ? (entry as ChangelogEntry).link : undefined}
                    navigationLink={
                      (entry as ChangelogEntry).isNavigationLinkVisible
                        ? (entry as ChangelogEntry).navigationLink
                        : undefined
                    }
                    onNavigationClick={() => onNavigationClick(entry as ChangelogTitleEntry)}
                    onEditEnd={(e: IItemCheckboxOnEditEndEvent) => editEntry(entry as ChangelogTitleEntry, e)}
                  />
                </Item>
              )
            }
          })}
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
                  {entries.values().filter((entry) => entry.type === 'change').length === 0
                    ? 'No entries'
                    : entries.values().filter((entry) => entry.type === 'change').length > 1
                    ? `${entries.values().filter((entry) => entry.type === 'change').length} entries`
                    : `${entries.values().filter((entry) => entry.type === 'change').length} entry`}
                </Text>
              </AutoLayout>

              {data.isEditingVisible && (
                <ButtonGhost
                  key="Footer__action_addEntry"
                  theme={data.colorTheme}
                  variant="primary"
                  glyph="plus"
                  content="Add entry"
                  onClick={() =>
                    addEntry(currentLabel == Object.keys(EntryTypes)[1] ? Object.keys(EntryTypes)[1] : 'change', {
                      labelID: currentLabel
                    })
                  }
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
