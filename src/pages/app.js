import React, { Fragment } from "react"
import { getLink } from "../utils"
import QRCode from "../components/QRCode"
import AppForm from "../components/AppForm"
import Layout from "../components/Layout"
import SharePayment from "../components/SharePayment"

const validations = {
  amount: n => !isNaN(n),
  number: n => true,
  message: n => true,
  pass: n => true
}

const store = {
  set: (key, value) => {
    try {
      localStorage.setItem(key, value)
    } catch (error) {}
  },
  get: key => {
    try {
      return localStorage.getItem(key)
    } catch (error) {}
  }
}
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.payment || {
      number: store.get("number") || "",
      amount: "",
      message: ""
    }
  }
  handleChange({ target: { name, value } }) {
    if (validations[name] && validations[name](value)) {
      this.setState({ [name]: value })
      name === "number" && store.set("number", value)
    }
  }
  render() {
    return (
      <Layout title="Send payment">
        <AppForm {...this.state} handleChange={this.handleChange.bind(this)} />
        {this.state.amount &&
        this.state.number && (
          <Fragment>
            <SharePayment link={getLink(this.state)} />
            <QRCode {...this.state} />
          </Fragment>
        )}
      </Layout>
    )
  }
}

export default App
