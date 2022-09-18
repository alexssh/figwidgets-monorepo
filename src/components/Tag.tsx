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
      cornerRadius={tokens.themes[props.theme].radius.tag.cornerRadius}
      overflow="visible"
      padding={{
        vertical: 4,
        horizontal: 8
      }}
      width="fill-parent"
      horizontalAlignItems="center"
      verticalAlignItems="center"
      onClick={() => props.onClick?.()}
      {...tokens.themes[props.theme].status[props.variant]}
      {...tokens.themes[props.theme].status[props.variant]?.border}
    >
      <Text
        name="Tag__input"
        width="fill-parent"
        horizontalAlignText="center"
        fill={tokens.themes[props.theme].status[props.variant].color}
        {...tokens.themes[props.theme].typo.caption}
      >
        {props.content}
      </Text>
    </AutoLayout>
  )
}

export default Tag
