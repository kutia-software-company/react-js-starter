import React, { useContext } from "react"
import * as API from "../../../api/Api"

export interface AuthContextType {
  isAuthenticated: boolean
  isLoading: boolean
  user?: API.User
  error?: string | { [key: string]: string }
  reloadAuthentication: () => void
  login: () => void
  logout: () => void
}

const voidFunction = () => {}

const AuthContextValues: AuthContextType = {
  isAuthenticated: false,
  isLoading: false,
  user: undefined,
  error: undefined,
  reloadAuthentication: () => {},
  login: voidFunction,
  logout: voidFunction
}

export const AuthContext = React.createContext<AuthContextType>(
  AuthContextValues
)

export const useAuthContext = () => useContext(AuthContext)
