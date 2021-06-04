import React from "react"
import { Input as ReactstrapInput, InputProps } from "reactstrap"
//styles
import "./Input.scss"

interface Props extends InputProps {}

export const Input = (props: Props) => {
  const { ...rest } = props
  return <ReactstrapInput {...rest} />
}
