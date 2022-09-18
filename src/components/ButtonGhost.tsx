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
      height={tokens.themes[props.theme].button.ghost.regular.size.h}
      width={!props.content ? tokens.themes[props.theme].button.ghost.regular.size.w : 'hug-contents'}
      spacing={8}
      padding={{
        left: props.content && props.glyph ? 12 : props.content ? 16 : 0,
        right: props.content && props.glyph ? 16 : props.content ? 16 : 0
      }}
      onClick={props.onClick}
      cornerRadius={tokens.themes[props.theme].button.ghost.regular.cornerRadius}
      hoverStyle={!props.disabled ? tokens.themes[props.theme].button.ghost.hover : undefined}
      horizontalAlignItems={'center'}
      verticalAlignItems={'center'}
    >
      {props.glyph && (
        <Frame name="ButtonGhost__icon" height={20} width={20}>
          <Icon
            glyph={props.glyph as string}
            color={
              !props.disabled
                ? tokens.themes[props.theme].txt.primary.default.color
                : tokens.themes[props.theme].txt.minor.default.color
            }
          />
        </Frame>
      )}
      {props.content && (
        <Text
          {...tokens.themes[props.theme].typo.p6}
          fill={
            !props.disabled
              ? tokens.themes[props.theme].txt.primary.default.color
              : tokens.themes[props.theme].txt.minor.default.color
          }
        >
          {props.content}
        </Text>
      )}
    </AutoLayout>
  )
}

export default ButtonGhost
