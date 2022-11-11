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
        content={props.contentTitle}
        placeholder={props.placeholderTitle}
        disabled={Boolean(props.disabled)}
        onEditEnd={(e) => props.onEditEnd({ property: 'title', value: e } as IItemTitleOnEditEndEvent)}
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
  )
}

export default ItemTitle
