/* Core */
const { widget } = figma
const { AutoLayout, Frame, Text } = widget

/* Components */
import Icon from 'src/components/Icon'

/* Utils */
import tokens from 'src/utils/tokens'

/* --- */

function ButtonGhost(props: IButtonGhostProps) {
  return (
    <AutoLayout
      name="ButtonGhost"
      direction="horizontal"
      height={tokens.themes.controls.size[props.size ?? 400]}
      width={!props.content ? tokens.themes.controls.size[props.size ?? 400] : 'hug-contents'}
      spacing={4}
      padding={{
        left: props.content && props.glyph ? 12 : props.content ? 16 : 0,
        right: props.content && props.glyph ? 16 : props.content ? 16 : 0
      }}
      onClick={!props.disabled ? props.onClick : () => {}}
      cornerRadius={tokens.themes.controls.radius.cornerRadius}
      hoverStyle={!props.disabled ? tokens.themes.controls.ghost.hover[props.theme] : undefined}
      horizontalAlignItems={'center'}
      verticalAlignItems={'center'}
    >
      {props.glyph && (
        <Frame name="ButtonGhost__icon" height={20} width={20}>
          <Icon
            glyph={props.glyph as string}
            color={
              props.disabled
                ? tokens.themes.txt.minor.default[props.theme].color
                : tokens.themes.txt[props.variant ? props.variant : 'primary'].default[props.theme].color
            }
          />
        </Frame>
      )}
      {props.content && (
        <Text
          {...tokens.themes.typo.p6}
          fill={
            props.disabled
              ? tokens.themes.txt.minor.default[props.theme].color
              : tokens.themes.txt[props.variant ? props.variant : 'primary'].default[props.theme].color
          }
        >
          {props.content}
        </Text>
      )}
    </AutoLayout>
  )
}

export default ButtonGhost
