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
            fill: tokens.themes.txt.minor.default[props.theme].color,
            opacity: 1
          }}
          width={props?.style?.width ?? 'fill-parent'}
          onTextEditEnd={(e) => props.onEditEnd(e as TextEditEvent)}
          fill={tokens.themes.txt[props.variant.txt].default[props.theme].color}
          horizontalAlignText={props?.style?.textAlign ?? 'left'}
          hoverStyle={{
            fill: tokens.themes.txt.link.default[props.theme].color
          }}
          {...tokens.themes.typo[props.variant.typo]}
          {...props?.style}
        />
      )}
      {props.disabled && (
        <Text
          {...tokens.themes.typo[props.variant.typo]}
          fill={tokens.themes.txt[props.variant.txt].default[props.theme].color}
          width={props?.style?.width ?? 'fill-parent'}
          horizontalAlignText={props?.style?.textAlign ?? 'left'}
          {...props?.style}
        >
          {props.content}
        </Text>
      )}
    </Fragment>
  )
}

export default InputGhost
