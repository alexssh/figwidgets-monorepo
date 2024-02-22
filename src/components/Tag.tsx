/* Core */
const { widget } = figma
const { AutoLayout, Text } = widget

/* Utils */
import tokens from 'src/utils/tokens'

/* --- */

function Tag(props: ITagProps) {
  return (
    <AutoLayout
      name="Tag"
      cornerRadius={tokens.themes.radius.tag.cornerRadius}
      overflow="visible"
      padding={{
        vertical: 4,
        horizontal: 8
      }}
      width="fill-parent"
      horizontalAlignItems="center"
      verticalAlignItems="center"
      fill={tokens.themes.labels[props.color].fill}
    >
      <Text
        name="Tag__input"
        width="fill-parent"
        horizontalAlignText="center"
        fill={tokens.themes.labels[props.color].color}
        {...tokens.themes.typo.caption}
      >
        {props.content}
      </Text>
    </AutoLayout>
  )
}

export default Tag
