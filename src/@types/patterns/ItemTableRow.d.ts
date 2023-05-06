declare global {
  interface IItemTableRowProps {
    key?: string
    theme: string
    disabled?: boolean
    row: TableCell[]
    width: number
    onEditEnd?: (e: IItemTableRowEditEnd) => void
  }

  interface IItemTableRowEditEnd extends TextEditEvent {
    index: number
  }
}

export {}
