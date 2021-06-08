import React from "react"
import { RouteComponentProps } from "react-router-dom"

//styles
import "./TemplateName.scss"

interface Props {}

export const TemplateName = (props: RouteComponentProps<Props>) => {
  return (
    <div className="TemplateName">
      <h1>TemplateName</h1>
    </div>
  )
}
