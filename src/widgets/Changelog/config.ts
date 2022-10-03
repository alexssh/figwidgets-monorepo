export const meta = {
  name: 'advancedChangelog',
  version: '1.2.3',
  website: 'https://offframes.com/figma-widget/advanced-changelog'
}

export const EntryTypes: ChangelogEntryMapping = {
  added: {
    label: 'Added',
    status: 'success'
  },
  fixed: {
    label: 'Fixed',
    status: 'primary'
  },
  changed: {
    label: 'Changed',
    status: 'info'
  },
  depricated: {
    label: 'Deprecated',
    status: 'warning'
  },
  removed: {
    label: 'Removed',
    status: 'dark'
  },
  breaking: {
    label: 'Breaking',
    status: 'error'
  },
  other: {
    label: 'Other',
    status: 'disabled'
  },
  inProgress: {
    label: 'In progress',
    status: 'light'
  }
}
