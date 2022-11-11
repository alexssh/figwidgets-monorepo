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
          priority={props.priority}
        />
      </AutoLayout>
      <AutoLayout
        name="ItemCheckbox__content"
        direction="vertical"
        height="hug-contents"
        width="fill-parent"
        spacing={8}
        padding={{
          right: 16
        }}
      >
        <AutoLayout
          name="ItemCheckbox__contentBody"
          direction="vertical"
          height="hug-contents"
          width="fill-parent"
          spacing={5}
        >
          <InputGhost
            theme={props.theme}
            variant={{ typo: 'p5', txt: 'primary' }}
            type={'multiline'}
            content={props.contentTitle}
            placeholder={props.placeholderTitle}
            disabled={Boolean(props.disabled)}
            onEditEnd={(e) => props.onEditEnd({ property: 'title', value: e } as IItemCheckboxOnEditEndEvent)}
          />
          {props.isDescriptionVisible && (
            <InputGhost
              theme={props.theme}
              variant={{ typo: 'p6', txt: 'secondary' }}
              type={'multiline'}
              content={props.contentDescription}
              placeholder={props.placeholderDescription}
              disabled={Boolean(props.disabled)}
              onEditEnd={(e) => props.onEditEnd({ property: 'description', value: e } as IItemCheckboxOnEditEndEvent)}
            />
          )}
        </AutoLayout>
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
