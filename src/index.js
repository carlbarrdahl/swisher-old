import "./index.css"
import React from "react"
import { render } from "react-dom"
import { Router } from "@reach/router"

import registerServiceWorker from "./registerServiceWorker"

import App from "./components/App"
import Landing from "./components/Landing"

render(
  <Router>
    <Landing path="/" />
    <App path="/app" />
  </Router>,

  document.getElementById("root")
)

registerServiceWorker()
