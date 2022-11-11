/* Core */
const { widget } = figma
const { AutoLayout } = widget

/* Components */
import Icon from 'src/components/Icon'

/* Utils */
import tokens from 'src/utils/tokens'

/* --- */

function Checkbox(props: ICheckboxProps) {
  let state = props.value ? `active${props.priority}` : `empty${props.priority}`

  return (
    <AutoLayout
      name="Checkbox"
      direction="horizontal"
      height={tokens.themes[props.theme].controls.size[props.size ?? 200]}
      width={tokens.themes[props.theme].controls.size[props.size ?? 200]}
      spacing={0}
      padding={0}
      onClick={props.onClick}
      cornerRadius={tokens.themes[props.theme].controls.checkbox.disabled.cornerRadius as WidgetJSX.CornerRadius}
      horizontalAlignItems={'center'}
      verticalAlignItems={'center'}
      fill={
        tokens.themes[props.theme].controls.checkbox[
          !props.disabled ? state : props.value ? 'disabledActive' : 'disabled'
        ].fill
      }
      {...tokens.themes[props.theme].controls.checkbox[
        !props.disabled ? state : props.value ? 'disabledActive' : 'disabled'
      ].border}
      hoverStyle={!props.disabled ? tokens.themes[props.theme].controls.checkbox.hover.border : {}}
    >
      {props.value && <Icon glyph="check" color={tokens.themes[props.theme].txt.primary.inverted.color} />}
    </AutoLayout>
  )
}

export default Checkbox
