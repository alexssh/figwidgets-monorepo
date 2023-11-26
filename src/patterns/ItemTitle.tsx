const { widget } = figma
const { AutoLayout } = widget

/* Components */
import InputGhost from 'src/components/InputGhost'
import LinkBox from 'src/patterns/LinkBox'

/* --- */

function ItemTitle(props: IItemTitleProps) {
  return (
    <AutoLayout
      key={props.key}
      name="ItemTitle"
      direction="vertical"
      height="hug-contents"
      width="fill-parent"
      spacing={4}
      padding={{
        top: 0,
        left: 0,
        bottom: props.isDescriptionVisible || props.link ? 8 : 0,
        right: 0
      }}
    >
      <InputGhost
        theme={props.theme}
        variant={{ typo: 'h5', txt: 'primary' }}
        type={'multiline'}
        content={props.contentTitle}
        placeholder={props.placeholderTitle}
        disabled={Boolean(props.disabled)}
        onEditEnd={(e) => props.onEditEnd({ property: 'title', value: e } as IItemTitleOnEditEndEvent)}
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
            onEditEnd={(e) => props.onEditEnd({ property: 'description', value: e } as IItemTitleOnEditEndEvent)}
          />
        )}
      </>
      <>
        {props.link && (
          <AutoLayout
            name="ItemTitle__link"
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
              onEditEnd={(e) => props.onEditEnd({ property: 'link', value: e } as IItemTitleOnEditEndEvent)}
            />
          </AutoLayout>
        )}
      </>
    </AutoLayout>
  )
}

export default ItemTitle
