/* Core */
const { widget } = figma
const { AutoLayout, Text } = widget

/* Components */
import InputGhost from 'src/components/InputGhost'

/* Utils */
import tokens from 'src/utils/tokens'

/* --- */

function Header(props: IHeaderProps) {
  return (
    <AutoLayout
      name="Header"
      verticalAlignItems="center"
      direction="vertical"
      spacing={8}
      width="fill-parent"
      padding={tokens.themes[props.theme].layout.container}
    >
      <AutoLayout
        name="Widget__row"
        verticalAlignItems="center"
        direction="horizontal"
        spacing={24}
        padding={0}
        width="fill-parent"
      >
        <InputGhost
          theme={props.theme}
          variant={{ typo: 'h4', txt: 'primary' }}
          content={props.title}
          placeholder="Title"
          disabled={props.disabled}
          onEditEnd={(e: TextEditEvent) => props.onTitleEditEnd(e)}
        />

        {props.suffix && props.suffix}
      </AutoLayout>
      {props.isDescriptionVisible && (
        <InputGhost
          theme={props.theme}
          variant={{ typo: 'p5', txt: 'secondary' }}
          type={'multiline'}
          content={props.description}
          placeholder="Add any description..."
          disabled={props.disabled}
          onEditEnd={(e: TextEditEvent) => props.onDescriptionEditEnd(e)}
        />
      )}
    </AutoLayout>
  )
}

export default Header
