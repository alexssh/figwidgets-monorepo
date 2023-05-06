const { widget } = figma
const { AutoLayout, Frame } = widget

/* Components */
import InputGhost from 'src/components/InputGhost'
import Icon from 'src/components/Icon'

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
          spacing={8}
          verticalAlignItems="start"
          width={cell.width[props.width]}
          tooltip={cell.tooltip}
        >
          {cell.icon && (
            <AutoLayout
              name="ItemTableRow__icon"
              direction="horizontal"
              verticalAlignItems="start"
              padding={{ top: 3 }}
            >
              <Icon
                glyph={cell.icon}
                color={
                  cell?.style?.fill
                    ? cell.style.fill
                    : props.disabled
                    ? tokens.themes.txt.minor.default[props.theme].color
                    : tokens.themes.txt.primary.default[props.theme].color
                }
              />
            </AutoLayout>
          )}
          <InputGhost
            theme={props.theme}
            variant={{
              typo: 'p5',
              txt: 'primary'
            }}
            type="multiline"
            content={cell.content ?? ''}
            placeholder="..."
            disabled={cell.disabled}
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
        </AutoLayout>
      ))}
    </AutoLayout>
  )
}

export default ItemTableRow
