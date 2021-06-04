import Axios from "axios"
import React, { useState, useEffect } from "react"
import { useLocalStorage, deleteFromStorage } from "@rehooks/local-storage"

import * as API from "../../../api/Api"

import { AuthContextType, AuthContext } from "./AuthContext"

interface AuthContextProviderProps {
  children: React.ReactNode | null
}

const LOCAL_STORAGE_KEY = "PROJECT_TEMPLATE_REACT"

export const AuthContextProvider = (props: AuthContextProviderProps) => {
  const [authToken] = useLocalStorage(LOCAL_STORAGE_KEY)

  const [user] = useState<API.User | undefined>(undefined)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<
    string | { [key: string]: string } | undefined
  >(undefined)

  useEffect(() => {
    ;(async () => {
      await reloadAuthentication()
    })()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const reloadAuthentication = async () => {
    if (!authToken) {
      return
    }

    try {
      Axios.defaults.headers.common.Authorization = `Bearer ${authToken}`

      const res = await API.getUserDetails()

      if (!res.user) {
        return
      }

      // setUser({
      //   id: res.user.id,
      //   firstName: res.user.first_name,
      //   lastName: res.user.last_name,
      // });
    } catch (err) {
      setError(err.toString())
    } finally {
      setLoading(false)
    }
  }

  const login = () => {
    // Axios.defaults.headers.common.Authorization = `Bearer ${authToken}`
    // setUser(user)
  }

  const logout = () => {
    // setUser(null);
    deleteFromStorage(LOCAL_STORAGE_KEY)
  }

  const context: AuthContextType = {
    isAuthenticated: user !== undefined,
    isLoading: loading,
    error: error,
    user: user,
    login: login,
    logout: logout,
    reloadAuthentication
  }

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  )
}
