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
      padding={{
        vertical: 16,
        horizontal: tokens.themes.layout.item.horizontal
      }}
    >
      {props.row.map((cell, i) => (
        <AutoLayout
          key={`ItemTableHeader__cell_${i}`}
          name="ItemTableHeader__cell"
          direction="horizontal"
          height={tokens.themes.controls.size[200]}
          verticalAlignItems="center"
          spacing={2}
          width={cell.width[props.width]}
        >
          <Text
            {...tokens.themes.typo.p6}
            fill={tokens.themes.txt.secondary.default[props.theme].color}
            horizontalAlignText="left"
          >
            {cell.title}
          </Text>
        </AutoLayout>
      ))}
    </AutoLayout>
  )
}

export default ItemTableHeader
