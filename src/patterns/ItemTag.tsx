const { widget } = figma
const { AutoLayout } = widget

/* Components */
import Tag from 'src/components/Tag'
import InputGhost from 'src/components/InputGhost'
import LinkBox from 'src/patterns/LinkBox'

/* --- */

function ItemTag(props: IItemTagProps) {
  return (
    <AutoLayout
      key={props.key}
      name="ItemTag"
      direction="horizontal"
      height="hug-contents"
      width="fill-parent"
      padding={0}
    >
      <AutoLayout
        name="ItemTag__tag"
        direction="horizontal"
        height="hug-contents"
        width={120}
        padding={{
          right: 24
        }}
      >
        <Tag theme={props.theme} color={props.tagColor} content={props.tagLabel} />
      </AutoLayout>
      <AutoLayout name="ItemTag__body" direction="vertical" height="hug-contents" width="fill-parent" spacing={5}>
        <InputGhost
          theme={props.theme}
          variant={{ typo: 'p5', txt: 'primary' }}
          type={'multiline'}
          content={props.contentBody}
          placeholder={props.placeholderBody}
          disabled={Boolean(props.disabled)}
          onEditEnd={(e) => props.onEditEnd({ property: 'body', value: e } as IItemTagOnEditEndEvent)}
        />
        {props.link && (
          <LinkBox
            theme={props.theme}
            contentTitle={props.link.src}
            placeholderTitle={'Paste any link...'}
            valid={props.link.valid}
            disabled={Boolean(props.disabled)}
            onEditEnd={(e) => props.onEditEnd({ property: 'link', value: e } as IItemTagOnEditEndEvent)}
          />
        )}
      </AutoLayout>
    </AutoLayout>
  )
}

export default ItemTag
