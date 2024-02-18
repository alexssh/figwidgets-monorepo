const { widget } = figma
const { AutoLayout, Text } = widget

/* Components */
import Icon from 'src/components/Icon'

/* Utils */
import tokens from 'src/utils/tokens'

/* --- */

// key?: string
// theme: string
// contentTitle: string
// valid: boolean
// onClick: (e: WidgetClickEvent) => void

function NavigationButton(props: INavigationButtonProps) {
  return (
    <AutoLayout
      key={props.key}
      name="NavigationButton"
      direction="horizontal"
      height="hug-contents"
      width="fill-parent"
      spacing={4}
      onClick={props.onClick}
    >
      <Icon
        glyph={'ref'}
        size={16}
        color={props.valid ? tokens.themes.status.info[props.theme].fill : tokens.themes.status.error[props.theme].fill}
      />
      <Text
        {...tokens.themes.typo.p6}
        fill={props.valid ? tokens.themes.status.info[props.theme].fill : tokens.themes.status.error[props.theme].fill}
        width={'hug-contents'}
        horizontalAlignText={'left'}
        textDecoration={props.valid ? 'underline' : 'none'}
      >
        {props.contentTitle.length ? props.contentTitle : 'Frame'}
      </Text>
    </AutoLayout>
  )
}

export default NavigationButton
