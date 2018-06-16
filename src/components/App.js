import React from "react"

import QRCode from "./QRCode"
import Form from "./Form"
import Layout from "./Layout"
import State from "./State"

const App = props => (
  <Layout>
    <State>
      {({ handleChange, ...state }) => {
        return (
          <section>
            <Form {...state} handleChange={handleChange} />
            {state.number && state.amount && <QRCode {...state} />}
          </section>
        )
      }}
    </State>
  </Layout>
)

export default App
