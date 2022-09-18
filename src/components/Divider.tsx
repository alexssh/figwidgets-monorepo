/* Core */
const { widget } = figma
const { Rectangle } = widget

/* Utils */
import tokens from 'src/utils/tokens'

/* --- */

function Tag(props: IDividerProps) {
  return <Rectangle width="fill-parent" height={1} fill={tokens.themes[props.theme].border.divider.fill} />
}

export default Tag
