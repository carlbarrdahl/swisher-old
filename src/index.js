import "./index.css"
import React from "react"
import { render } from "react-dom"
import { Router } from "@reach/router"

import registerServiceWorker from "./registerServiceWorker"

import App from "./components/App"
import Landing from "./components/Landing"
import Translations from "./providers/Translations"

render(
  <Translations>
    <Router>
      <Landing path="/" />
      <App path="/app" />
    </Router>
  </Translations>,
  document.getElementById("root")
)

registerServiceWorker()
