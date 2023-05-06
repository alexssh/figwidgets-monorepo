declare global {
  interface IItemTableHeaderProps {
    key?: string
    theme: string
    width: number
    row: TableCell[]
  }

  interface IItemTableHeaderVisibilityChanged {
    index: number
  }
}
export {}
