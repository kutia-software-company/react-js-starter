import React from "react"
import { RouteComponentProps } from "react-router-dom"
import { LoginForm } from "../../components/user/LoginForm/LoginForm"

//styles
import "./Login.scss"

interface Props {}

export const Login = (props: RouteComponentProps<Props>) => {
  return (
    <div className="Login">
      <LoginForm />
    </div>
  )
}
