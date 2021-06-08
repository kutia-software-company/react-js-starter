import React from "react"
import { NavLink } from "react-router-dom"

//styles
import "./Home.scss"

export const Home = () => {
  return (
    <div className="Home">
      <h1>Home component</h1>
      <NavLink to="/login"> Go to Login</NavLink>
    </div>
  )
}
