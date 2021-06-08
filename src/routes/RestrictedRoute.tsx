import React from "react"
import { Route, RouteProps, Redirect } from "react-router-dom"
import { useAuthContext } from "../lib/context/AuthContext/AuthContext"

export const RestrictedRoute = (props: RouteProps) => {
  const authCtx = useAuthContext()

  if (authCtx.isAuthenticated) {
    return <Redirect to="/" />
  }
  return <Route {...props} />
}
