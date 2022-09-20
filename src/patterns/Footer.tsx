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
      direction="vertical"
      width={'fill-parent'}
      spacing={0}
      padding={tokens.themes[props.theme].layout.container}
    >
      {props.children}
    </AutoLayout>
  )
}

export default Footer
