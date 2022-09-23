const { widget } = figma
const { AutoLayout } = widget

/* Components */
import InputGhost from 'src/components/InputGhost'

/* Utils */
import tokens from 'src/utils/tokens'

/* --- */

function ItemTableRow(props: IItemTableRowProps) {
  return (
    <AutoLayout
      key={props.key}
      name="ItemTableRow"
      direction="horizontal"
      height="hug-contents"
      width="fill-parent"
      spacing={16}
    >
      {props.row.map((cell, i) => (
        <AutoLayout
          key={`ItemTableRow__cell_${i}`}
          name="ItemTableRow__cell"
          direction="horizontal"
          verticalAlignItems="start"
          width={cell.visibility !== false ? cell.width : tokens.themes[props.theme].controls.size[200]}
          height={cell.visibility !== false ? 'hug-contents' : 1}
        >
          {cell.visibility !== false && (
            <InputGhost
              theme={props.theme}
              variant={{
                typo: 'p5',
                txt: 'primary'
              }}
              type="multiline"
              content={cell.content ?? ''}
              placeholder="..."
              disabled={props.disabled}
              style={{
                width: 'fill-parent',
                textAlign: 'left',
                ...cell?.style
              }}
              onEditEnd={(e) =>
                props.onEditEnd?.({
                  ...e,
                  index: i
                })
              }
            />
          )}
        </AutoLayout>
      ))}
    </AutoLayout>
  )
}

export default ItemTableRow
