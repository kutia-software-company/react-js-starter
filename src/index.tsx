import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import * as serviceWorker from "./serviceWorker"
/****
 * * IMPORTANT NOTE: Do not change _main.scss_ import order.
 * It needs to be imported before main App component
 ****/
import "./styles/main.scss"

import App from "./App"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
