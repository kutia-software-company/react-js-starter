import React, { useContext } from "react"

const defaultContext = {
  isOpen: false,
  confirm: (text?: string) => Promise // tslint:disable-line: no-empty
}
export interface ConfirmationContextType {
  isOpen: boolean
  confirm: (text?: string) => any
}

export const ConfirmationContext =
  React.createContext<ConfirmationContextType>(defaultContext)

export function useConfirmation() {
  return useContext(ConfirmationContext)
}
