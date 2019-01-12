import React, { Fragment } from "react"
import { deserialize, getLink } from "../utils"

import QRCode from "./QRCode"
import AppForm from "./AppForm"
import Layout from "./Layout"
import State from "./AppState"
import Button from "./Button"
import SharePayment from "./SharePayment"

const App = () => {
  const { token } = deserialize(global.location.search)
  return (
    <State id={token}>
      {({ handleChange, handleDecrypt, ...state }) => (
        <Layout>
          <AppForm
            {...state}
            handleChange={handleChange}
            handleDecrypt={handleDecrypt}
          />
          {state.amount &&
          state.number && (
            <Fragment>
              <QRCode {...state} />
              <SharePayment link={getLink(state)} />
            </Fragment>
          )}
          {state.id && (
            <a href="/app" className="no-underline mx-3 block">
              <Button>Skapa ny</Button>
            </a>
          )}
        </Layout>
      )}
    </State>
  )
}
export default App
