const { widget } = figma
const { AutoLayout } = widget

/* Components */
import InputGhost from 'src/components/InputGhost'

/* --- */

function ItemTitle(props: IItemTitleProps) {
  return (
    <AutoLayout
      key={props.key}
      name="ItemTitle"
      direction="horizontal"
      height="hug-contents"
      width="fill-parent"
      padding={0}
    >
      <InputGhost
        theme={props.theme}
        variant={{ typo: 'h5', txt: 'primary' }}
        type={'multiline'}
        content={props.contentBody}
        placeholder={props.placeholderBody}
        disabled={Boolean(props.disabled)}
        onEditEnd={(e) => props.onEditEnd(e as TextEditEvent)}
      />
    </AutoLayout>
  )
}

export default ItemTitle
