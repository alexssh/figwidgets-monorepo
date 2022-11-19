export const meta = {
  name: 'checklist',
  version: '7',
  website: 'https://offframes.com/figma-widget/checklist'
}

export const EntryTypes: ChecklistEntryMapping = {
  check: {
    label: 'Task'
  },
  title: {
    label: 'Section'
  }
}

export const EntryActions: ChecklistActionsMapping = {
  created: {
    label: 'Added'
  },
  modified: {
    label: 'Modified'
  },
  checked: {
    label: 'Completed'
  },
  unchecked: {
    label: 'Unchecked'
  }
}
