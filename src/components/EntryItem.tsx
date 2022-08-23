const { widget } = figma
const { AutoLayout, Input } = widget

import tokens from '../tokens'
import Tag from './Tag'
import ButtonIcon from './ButtonIcon'
import { IEntryItemProps, IEntryItemPositionChangeEvent } from './interfaces'

function EntryItem(props: IEntryItemProps) {
  return (
    <AutoLayout
      name="Entry"
      direction="horizontal"
      spacing={0}
      padding={{
        vertical: 12,
        horizontal: 32
      }}
      width="fill-parent"
      hoverStyle={tokens.colors[props.colorTheme].state.hover}
    >
      <AutoLayout
        name="Entry__content"
        direction="horizontal"
        height="hug-contents"
        width="fill-parent"
        padding={{
          top: 6
        }}
      >
        <AutoLayout
          name="Entry__tag"
          direction="horizontal"
          height="hug-contents"
          width={120}
          padding={{
            right: 24
          }}
        >
          <Tag colorTheme={props.colorTheme} variant={props.type} contentTitle={props.contentTagTitle} />
        </AutoLayout>
        <Input
          name="Entry__input"
          value={props.contentParagraph}
          placeholder="Type something..."
          placeholderProps={{
            ...tokens.typo.p4,
            fill: tokens.colors[props.colorTheme].txt.minor.default.fill,
            opacity: 1
          }}
          inputBehavior="multiline"
          width="fill-parent"
          onTextEditEnd={(e) => props.onEditEnd(e as TextEditEvent)}
          hoverStyle={tokens.colors[props.colorTheme].state.hover.input}
          {...tokens.colors[props.colorTheme].txt.primary.default}
          {...tokens.typo.p4}
        />
      </AutoLayout>
      <AutoLayout
        name="Entry__actions"
        direction="horizontal"
        height="hug-contents"
        width="hug-contents"
        spacing={0}
        padding={{
          left: 24
        }}
      >
        <ButtonIcon
          colorTheme={props.colorTheme}
          glyph="chevronUp"
          disabled={!props.actions.up}
          onClick={() =>
            props.actions.up
              ? props.onPositionChange({ direction: 'up' } as IEntryItemPositionChangeEvent)
              : undefined
          }
        />
        <ButtonIcon
          colorTheme={props.colorTheme}
          glyph="chevronDown"
          disabled={!props.actions.down}
          onClick={() =>
            props.actions.down
              ? props.onPositionChange({ direction: 'down' } as IEntryItemPositionChangeEvent)
              : undefined
          }
        />
        <ButtonIcon colorTheme={props.colorTheme} glyph="minus" disabled={props.actions.delete} onClick={props.onDelete} />
      </AutoLayout>
    </AutoLayout>
  )
}

export default EntryItem
