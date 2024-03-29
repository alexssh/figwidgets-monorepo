/* Core */
const { widget } = figma
const { AutoLayout, Text } = widget

/* Utils */
import tokens from 'src/utils/tokens'

/* --- */

function Footer(props: IFooterProps) {
  return (
    <AutoLayout
      name="Footer"
      direction="horizontal"
      horizontalAlignItems="start"
      width={'fill-parent'}
      spacing={0}
      padding={{
        vertical: 16,
        left: tokens.themes.layout.container.horizontal - 16,
        right: tokens.themes.layout.container.horizontal - 16
      }}
      verticalAlignItems="center"
    >
      {props.children}
    </AutoLayout>
  )
}

export default Footer
