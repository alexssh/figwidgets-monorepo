export const meta = {
  name: 'typeModeler',
  version: '4',
  website: 'https://offframes.com/figma-widget/type-modeler'
}

export const EntryPresets: TableModelerEntryPresetsMapping = {
  custom: {
    label: 'Custom',
    row: [
      {
        content: ''
      },
      {
        content: ''
      },
      {
        content: ''
      },
      {
        content: ''
      }
    ]
  },
  id: {
    label: 'ID',
    row: [
      {
        content: 'id'
      },
      {
        content: 'uuid'
      },
      {
        content: ''
      },
      {
        content: ''
      }
    ]
  },
  number: {
    label: 'Number',
    row: [
      {
        content: 'counter'
      },
      {
        content: 'number'
      },
      {
        content: '0'
      },
      {
        content: ''
      }
    ]
  },
  string: {
    label: 'String',
    row: [
      {
        content: 'title'
      },
      {
        content: 'string'
      },
      {
        content: '""'
      },
      {
        content: ''
      }
    ]
  },
  boolean: {
    label: 'Boolean',
    row: [
      {
        content: 'state'
      },
      {
        content: 'boolean'
      },
      {
        content: 'false'
      },
      {
        content: ''
      }
    ]
  },
  timestamp: {
    label: 'Timestamp',
    row: [
      {
        content: 'date'
      },
      {
        content: 'timestamp'
      },
      {
        content: 'now'
      },
      {
        content: ''
      }
    ]
  },
  object: {
    label: 'Object',
    row: [
      {
        content: 'meta'
      },
      {
        content: 'object'
      },
      {
        content: `{
    rating: 0
}`
      },
      {
        content: ''
      }
    ]
  },
  array: {
    label: 'Array',
    row: [
      {
        content: 'reviews'
      },
      {
        content: 'array'
      },
      {
        content: '[]'
      },
      {
        content: ''
      }
    ]
  },
  enum: {
    label: 'Enum',
    row: [
      {
        content: 'status'
      },
      {
        content: 'enum'
      },
      {
        content: 'active, disabled'
      },
      {
        content: ''
      }
    ]
  },
  function: {
    label: 'Function',
    row: [
      {
        content: 'onClick'
      },
      {
        content: 'function'
      },
      {
        content: 'onClickEvent'
      },
      {
        content: ''
      }
    ]
  },
  richtext: {
    label: 'Richtext',
    row: [
      {
        content: 'comment'
      },
      {
        content: 'richtext'
      },
      {
        content: '""'
      },
      {
        content: ''
      }
    ]
  },
  image: {
    label: 'Image',
    row: [
      {
        content: 'preview'
      },
      {
        content: 'image'
      },
      {
        content: 'undefined'
      },
      {
        content: ''
      }
    ]
  },
  color: {
    label: 'Color',
    row: [
      {
        content: 'theme'
      },
      {
        content: 'color'
      },
      {
        content: '#FFFFFF'
      },
      {
        content: ''
      }
    ]
  },
  link: {
    label: 'Link',
    row: [
      {
        content: 'twitter'
      },
      {
        content: 'link'
      },
      {
        content: 'undefined'
      },
      {
        content: ''
      }
    ]
  }
}
