const { widget } = figma
const { AutoLayout } = widget

/* Components */
import Tag from 'src/components/Tag'
import InputGhost from 'src/components/InputGhost'

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
        <Tag theme={props.theme} variant={props.type} content={props.contentTag} onClick={props.onTypeChange} />
      </AutoLayout>
      <InputGhost
        theme={props.theme}
        variant={{ typo: 'p5', txt: 'primary' }}
        type={'multiline'}
        content={props.contentBody}
        placeholder={props.placeholderBody}
        disabled={Boolean(props.disabled)}
        onEditEnd={(e) => props.onEditEnd(e as TextEditEvent)}
      />
    </AutoLayout>
  )
}

export default ItemTag
