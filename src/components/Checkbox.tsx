/* Core */
const { widget } = figma
const { AutoLayout } = widget

/* Components */
import Icon from 'src/components/Icon'

/* Utils */
import tokens from 'src/utils/tokens'

/* --- */

function Checkbox(props: ICheckboxProps) {
  return (
    <AutoLayout
      name="Checkbox"
      direction="horizontal"
      height={tokens.themes[props.theme].controls.size[props.size ?? 400]}
      width={tokens.themes[props.theme].controls.size[props.size ?? 400]}
      spacing={0}
      padding={0}
      onClick={props.onClick}
      cornerRadius={tokens.themes[props.theme].controls.checkbox.default.cornerRadius as WidgetJSX.CornerRadius}
      horizontalAlignItems={'center'}
      verticalAlignItems={'center'}
      fill={
        tokens.themes[props.theme].controls.checkbox[
          !props.value && !props.disabled
            ? 'default'
            : props.value && !props.disabled
            ? 'active'
            : !props.value && props.disabled
            ? 'defaultDisabled'
            : props.value && props.disabled
            ? 'activeDisabled'
            : 'default'
        ].fill
      }
      {...tokens.themes[props.theme].controls.checkbox[
        !props.value && !props.disabled
          ? 'default'
          : props.value && !props.disabled
          ? 'active'
          : !props.value && props.disabled
          ? 'defaultDisabled'
          : props.value && props.disabled
          ? 'activeDisabled'
          : 'default'
      ].border}
      hoverStyle={!props.disabled ? tokens.themes[props.theme].controls.checkbox.hover.border : {}}
    >
      {props.value && <Icon glyph="check" color={tokens.themes[props.theme].txt.primary.except.color} />}
    </AutoLayout>
  )
}

export default Checkbox
