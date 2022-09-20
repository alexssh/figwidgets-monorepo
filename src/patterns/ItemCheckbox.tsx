const { widget } = figma
const { AutoLayout } = widget

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
      padding={{
        top: 4,
        bottom: 4
      }}
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

export default ItemCheckbox
