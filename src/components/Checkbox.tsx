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
      height={tokens.themes.controls.size[props.size ?? 200]}
      width={tokens.themes.controls.size[props.size ?? 200]}
      spacing={0}
      padding={0}
      onClick={props.onClick}
      cornerRadius={tokens.themes.controls.radius.cornerRadius}
      horizontalAlignItems={'center'}
      verticalAlignItems={'center'}
      fill={
        tokens.themes.controls.checkbox[!props.disabled ? state : props.value ? 'disabledActive' : 'disabled'][
          props.theme
        ].fill
      }
      {...tokens.themes.controls.checkbox[!props.disabled ? state : props.value ? 'disabledActive' : 'disabled'][
        props.theme
      ].border}
      hoverStyle={!props.disabled ? tokens.themes.controls.checkbox.hover[props.theme].border : {}}
    >
      {props.value && <Icon glyph="check" color={tokens.themes.txt.primary.inverted[props.theme].color} />}
    </AutoLayout>
  )
}

export default Checkbox
