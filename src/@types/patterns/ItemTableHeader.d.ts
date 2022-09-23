declare global {
  interface IItemTableHeaderProps {
    key?: string
    theme: string
    disabled?: boolean
    row: TableCell[]
    onVisibilityChanged?: (e: IItemTableHeaderVisibilityChanged) => void
  }

  interface IItemTableHeaderVisibilityChanged {
    index: number
  }
}
export {}
