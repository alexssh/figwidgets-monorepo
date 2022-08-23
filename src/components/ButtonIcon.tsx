const { widget } = figma
const { Frame } = widget

import tokens from '../tokens'
import Icon from './Icon'
import { IButtonTconProps } from './interfaces'

function ButtonIcon(props: IButtonTconProps) {
  return (
    <Frame
      name="ButtonIcon"
      height={32}
      width={32}
      onClick={props.onClick}
      cornerRadius={4}
      hoverStyle={!props.disabled ? tokens.colors[props.colorTheme].state.hover.button : {}}
    >
      <Frame name="ButtonIcon__icom" height={20} width={20} x={6} y={6}>
        <Icon
          glyph={props.glyph}
          fill={
            !props.disabled
              ? tokens.colors[props.colorTheme].txt.primary.default.fill
              : tokens.colors[props.colorTheme].txt.minor.default.fill
          }
        />
      </Frame>
    </Frame>
  )
}

export default ButtonIcon
