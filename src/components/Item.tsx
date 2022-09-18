/* Core */
const { widget } = figma
const { AutoLayout } = widget

/* Components */
import ButtonGhost from 'src/components/ButtonGhost'

/* Utils */
import tokens from 'src/utils/tokens'

/* --- */

function Item(props: IItemProps) {
  const isActionsVisible =
    props.positionUp !== undefined || props.positionDown !== undefined || props.deleting !== undefined

  return (
    <AutoLayout
      key={props.key}
      name="Item"
      direction="horizontal"
      spacing={0}
      padding={tokens.themes[props.theme].layout.item}
      width="fill-parent"
    >
      <AutoLayout name="Item__content" direction="horizontal" height="hug-contents" width="fill-parent">
        {props.children}
      </AutoLayout>
      {isActionsVisible && (
        <AutoLayout
          name="Item__actions"
          direction="horizontal"
          height="hug-contents"
          width="hug-contents"
          spacing={0}
          padding={{
            left: 24
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

          {props.deleting !== undefined && (
            <ButtonGhost
              theme={props.theme}
              glyph="minus"
              disabled={props.deleting}
              onClick={() => props.onDelete?.()}
            />
          )}
        </AutoLayout>
      )}
    </AutoLayout>
  )
}

export default Item
