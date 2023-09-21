import Header from 'src/patterns/Header'

export const EntryPresets: TableModelerEntryPresetsMapping = {
  header: {
    label: 'Header',
    height: 147
  },
  entry: {
    label: 'Attribute',
    height: 55
  }
}

export const KeyPresets: TableModelerKeyPresetsMapping = {
  none: {
    label: 'No key'
  },
  pk: {
    label: 'Primary key (PK)'
  },
  uk: {
    label: 'Unique key (UK)'
  },
  sk: {
    label: 'Super key (SK)'
  },
  fk: {
    label: 'Foreign key (FK)'
  },
  ak: {
    label: 'Alternate key (AK)'
  },
  ck: {
    label: 'Candidate key (CK)'
  },
  cpk: {
    label: 'Composite key (CPK)'
  }
}
