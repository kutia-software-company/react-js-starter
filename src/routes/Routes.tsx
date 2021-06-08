import React from "react"
import { RouteProps, Switch } from "react-router-dom"

import { PublicRoute } from "./PublicRoute"
import { PrivateRoute } from "./PrivateRoute"

import { Login } from "../pages/Login/Login"
import { Register } from "../pages/Register/Register"
import { ForgotPassword } from "../pages/ForgotPassword/ForgotPassword"
import { ResetPassword } from "../pages/ResetPassword/ResetPassword"
import { Profile } from "../pages/Profile/Profile"
import { Home } from "../pages/Home/Home"
import { Page404 } from "../pages/Page404/Page404"
import { RestrictedRoute } from "./RestrictedRoute"

export enum RouteType {
  PUBLIC,
  PRIVATE,
  RESTRICTED
}
interface AppRoute extends RouteProps {
  type?: RouteType
}
export const AppRoutes: AppRoute[] = [
  // Restricted Routes
  {
    type: RouteType.RESTRICTED,
    exact: true,
    path: "login",
    component: Login
  },
  {
    type: RouteType.RESTRICTED,
    exact: true,
    path: "register",
    component: Register
  },
  {
    type: RouteType.RESTRICTED,
    exact: true,
    path: "forgot-password",
    component: ForgotPassword
  },
  {
    type: RouteType.RESTRICTED,
    exact: true,
    path: "reset-password",
    component: ResetPassword
  },
  // Private Routes
  {
    type: RouteType.PRIVATE,
    path: "my-profile",
    component: Profile
  },
  // Public Routes
  {
    type: RouteType.PUBLIC,
    exact: true,
    path: "/",
    component: Home
  }
]

export const Routes = () => {
  return (
    <Switch>
      {AppRoutes.map((r) => {
        const { type, path, ...rest } = r
        if (type === RouteType.PRIVATE) {
          return (
            <PrivateRoute {...rest} key={`${r.path}`} path={`/${r.path}`} />
          )
        }
        if (type === RouteType.RESTRICTED) {
          return (
            <RestrictedRoute {...rest} key={`${r.path}`} path={`/${r.path}`} />
          )
        }

        return <PublicRoute {...rest} key={`${r.path}`} path={`/${r.path}`} />
      })}
      <PublicRoute component={Page404} />
    </Switch>
  )
}
