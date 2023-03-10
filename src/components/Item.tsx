/* Core */
const { widget } = figma
const { AutoLayout, Frame } = widget

/* Components */
import ButtonGhost from 'src/components/ButtonGhost'

/* Utils */
import tokens from 'src/utils/tokens'

/* --- */

function Item(props: IItemProps) {
  const isActionsVisible =
    props.positionUp !== undefined || props.positionDown !== undefined || props.more !== undefined

  return (
    <AutoLayout
      key={props.key}
      name="Item"
      direction="horizontal"
      spacing={0}
      padding={props.padding ? props.padding : tokens.themes.layout.item}
      width="fill-parent"
    >
      <AutoLayout
        name="Item__content"
        direction="horizontal"
        verticalAlignItems="center"
        height="fill-parent"
        width="fill-parent"
      >
        {props.children}
      </AutoLayout>
      <Frame height={32} width={1} />
      {isActionsVisible && (
        <AutoLayout
          name="Item__actions"
          direction="horizontal"
          height="hug-contents"
          width="hug-contents"
          spacing={0}
          padding={{
            left: 23
          }}
        >
          {props.positionUp !== undefined && (
            <ButtonGhost
              theme={props.theme}
              glyph="chevronUp"
              disabled={!props.positionUp}
              onClick={() => props.onPositionChange?.({ direction: 'up' } as IItemPositionChangeEvent)}
            />
          )}

          {props.positionDown !== undefined && (
            <ButtonGhost
              theme={props.theme}
              glyph="chevronDown"
              disabled={!props.positionDown}
              onClick={() => props.onPositionChange?.({ direction: 'down' } as IItemPositionChangeEvent)}
            />
          )}

          {props.more !== undefined && (
            <ButtonGhost theme={props.theme} glyph="more" disabled={props.more} onClick={() => props.onMore?.()} />
          )}
        </AutoLayout>
      )}
    </AutoLayout>
  )
}

export default Item
