import "./index.css"
import React from "react"
import { render } from "react-dom"
import { Router } from "@reach/router"

import registerServiceWorker from "./registerServiceWorker"

import App from "./components/App"
import Payment from "./screens/Payment"
import PaymentDone from "./screens/PaymentDone"
import Landing from "./components/Landing"

render(
  <Router>
    <Landing path="/" />
    <App path="/app" />
    <PaymentDone path="/app/payment/done" />
    <Payment path="/app/payment/:hash" />
  </Router>,
  document.getElementById("root")
)

registerServiceWorker()
