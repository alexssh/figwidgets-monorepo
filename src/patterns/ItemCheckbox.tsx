const { widget } = figma
const { AutoLayout, Text } = widget

/* Utils */
import tokens from 'src/utils/tokens'

/* Components */
import Checkbox from 'src/components/Checkbox'
import InputGhost from 'src/components/InputGhost'

/* --- */

function ItemCheckbox(props: IItemCheckboxProps) {
  return (
    <AutoLayout
      key={props.key}
      name="ItemCheckbox"
      direction="horizontal"
      height="hug-contents"
      width="fill-parent"
      padding={0}
    >
      <AutoLayout
        name="ItemCheckbox__tag"
        direction="horizontal"
        height="hug-contents"
        width="hug-contents"
        padding={{
          right: 16
        }}
      >
        <Checkbox
          theme={props.theme}
          value={props.value}
          disabled={props.disabledCheckbox}
          onClick={props.onCheckboxChange}
        />
      </AutoLayout>
      <AutoLayout
        name="ItemCheckbox__content"
        direction="vertical"
        height="hug-contents"
        width="fill-parent"
        spacing={4}
        padding={{
          right: 16
        }}
      >
        <InputGhost
          theme={props.theme}
          variant={{ typo: 'p5', txt: 'primary' }}
          type={'multiline'}
          content={props.contentBody}
          placeholder={props.placeholderBody}
          disabled={Boolean(props.disabled)}
          onEditEnd={(e) => props.onEditEnd(e as TextEditEvent)}
        />
        {props.contentMeta && (
          <Text
            key={'Footer__content'}
            {...tokens.themes[props.theme].typo.p6}
            fill={tokens.themes[props.theme].txt.secondary.default.color}
            width="fill-parent"
            horizontalAlignText="left"
          >
            {props.contentMeta}
          </Text>
        )}
      </AutoLayout>
    </AutoLayout>
  )
}

export default ItemCheckbox
