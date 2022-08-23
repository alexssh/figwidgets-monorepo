const { widget } = figma
const { AutoLayout, Text } = widget

import tokens from '../tokens'
import { ITagProps } from './interfaces'

function Tag(props: ITagProps) {
  return (
    <AutoLayout
      name="Tag"
      cornerRadius={4}
      overflow="visible"
      spacing={8}
      padding={{
        vertical: 4,
        horizontal: 8
      }}
      width="fill-parent"
      horizontalAlignItems="center"
      verticalAlignItems="center"
      {...tokens.colors[props.colorTheme].status[props.variant as never].tag}
    >
      <Text
        name="Tag__input"
        width="fill-parent"
        horizontalAlignText="center"
        {...tokens.colors[props.colorTheme].status[props.variant as never].title}
        {...tokens.typo.caption}
      >
        {props.contentTitle}
      </Text>
    </AutoLayout>
  )
}

export default Tag
