/* Core */
const { widget } = figma
const { Rectangle } = widget

/* Utils */
import tokens from 'src/utils/tokens'

/* --- */

function Divider(props: IDividerProps) {
  return <Rectangle width="fill-parent" height={1} fill={tokens.themes.border.divider[props.theme].fill} />
}

export default Divider
