const { widget } = figma
const { AutoLayout, Text } = widget

/* Components */
import ButtonGhost from 'src/components/ButtonGhost'

/* Utils */
import tokens from 'src/utils/tokens'

/* --- */

function ItemTableHeader(props: IItemTableHeaderProps) {
  return (
    <AutoLayout
      key={props.key}
      name="ItemTableHeader"
      direction="horizontal"
      height="hug-contents"
      width="fill-parent"
      spacing={16}
      padding={tokens.themes[props.theme].layout.item}
    >
      {props.row.map((cell, i) => (
        <AutoLayout
          key={`ItemTableHeader__cell_${i}`}
          name="ItemTableHeader__cell"
          direction="horizontal"
          height={tokens.themes[props.theme].controls.size[200]}
          verticalAlignItems="center"
          width={cell.visibility !== false ? cell.width : tokens.themes[props.theme].controls.size[200]}
          spacing={2}
        >
          {cell.visibility !== false && (
            <Text
              {...tokens.themes[props.theme].typo.p6}
              fill={tokens.themes[props.theme].txt.secondary.default.color}
              horizontalAlignText="left"
            >
              {cell.title}
            </Text>
          )}
        </AutoLayout>
      ))}
    </AutoLayout>
  )
}

export default ItemTableHeader
