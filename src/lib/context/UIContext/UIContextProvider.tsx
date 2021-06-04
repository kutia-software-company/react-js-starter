import React, { useState } from "react"
import { UIContext, UIContextType } from "./UIContext"

interface UIContextProviderProps {
  children: React.ReactNode | null
}

interface UIContextProviderState {}

export const UIContextProvider = (props: UIContextProviderProps) => {
  const [,] = useState<UIContextProviderState>({})

  const context: UIContextType = {}

  return (
    <UIContext.Provider value={context}>{props.children}</UIContext.Provider>
  )
}
