const { widget } = figma
const { AutoLayout, Text } = widget

/* Utils */
import tokens from 'src/utils/tokens'

/* Components */
import Checkbox from 'src/components/Checkbox'
import InputGhost from 'src/components/InputGhost'
import LinkBox from 'src/patterns/LinkBox'

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
          name="ItemCheckbox__body"
          direction="vertical"
          height="hug-contents"
          width="fill-parent"
          spacing={4}
        >
          <InputGhost
            theme={props.theme}
            variant={{ typo: 'p5', txt: 'primary' }}
            type={'multiline'}
            content={props.contentTitle}
            placeholder={props.placeholderTitle}
            disabled={Boolean(props.disabled)}
            onEditEnd={(e) => props.onEditEnd({ property: 'title', value: e } as IItemCheckboxOnEditEndEvent)}
            style={
              props.value && props.contentTitle.length > 0
                ? {
                    textDecoration: 'strikethrough',
                    fill: tokens.themes.txt.secondary.default[props.theme].color
                  }
                : {}
            }
          />
          <>
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
          </>
          <>
            {props.link && (
              <AutoLayout
                name="ItemCheckbox__link"
                direction="vertical"
                height="hug-contents"
                width="fill-parent"
                padding={{
                  top: 2
                }}
              >
                <LinkBox
                  theme={props.theme}
                  contentTitle={props.link.src}
                  placeholderTitle={'Paste any link...'}
                  valid={props.link.valid}
                  disabled={Boolean(props.disabled)}
                  onEditEnd={(e) => props.onEditEnd({ property: 'link', value: e } as IItemCheckboxOnEditEndEvent)}
                />
              </AutoLayout>
            )}
          </>
        </AutoLayout>
        {props.contentMeta && (
          <AutoLayout
            name="ItemCheckbox__meta"
            direction="vertical"
            height="hug-contents"
            width="fill-parent"
            padding={{
              top: 6
            }}
          >
            <Text
              key={'ItemCheckbox__metaText'}
              {...tokens.themes.typo.p6}
              fill={tokens.themes.txt.secondary.default[props.theme].color}
              width="fill-parent"
              horizontalAlignText="left"
            >
              {props.contentMeta}
            </Text>
          </AutoLayout>
        )}
      </AutoLayout>
    </AutoLayout>
  )
}

export default ItemCheckbox
