declare global {
  interface IItemTableHeaderProps {
    key?: string
    theme: string
    row: TableCell[]
  }

  interface IItemTableHeaderVisibilityChanged {
    index: number
  }
}
export {}
