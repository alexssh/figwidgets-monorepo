/* Core */
const { widget } = figma
const { Input, Text, Fragment } = widget

/* Utils */
import tokens from 'src/utils/tokens'

/* --- */

function InputGhost(props: IInputGhostProps) {
  return (
    <Fragment>
      {!props.disabled && (
        <Input
          name="InputGhost"
          inputBehavior={props.type ?? 'wrap'}
          value={props.content}
          placeholder={props.placeholder}
          placeholderProps={{
            fill: tokens.themes[props.theme].txt.minor.default.color,
            opacity: 1
          }}
          width={props?.style?.width ?? 'fill-parent'}
          onTextEditEnd={(e) => props.onEditEnd(e as TextEditEvent)}
          fill={tokens.themes[props.theme].txt[props.variant.txt].default.color}
          horizontalAlignText={props?.style?.textAlign ?? 'left'}
          hoverStyle={{
            fill: tokens.themes[props.theme].txt.link.default.color
          }}
          {...tokens.themes[props.theme].typo[props.variant.typo]}
        />
      )}
      {props.disabled && (
        <Text
          {...tokens.themes[props.theme].typo[props.variant.typo]}
          fill={tokens.themes[props.theme].txt[props.variant.txt].default.color}
          width={props?.style?.width ?? 'fill-parent'}
          horizontalAlignText={props?.style?.textAlign ?? 'left'}
        >
          {props.content}
        </Text>
      )}
    </Fragment>
  )
}

export default InputGhost
