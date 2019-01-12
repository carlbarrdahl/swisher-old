import React from "react"

import { decrypt, deserialize } from "../utils"

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

export default class State extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.id,
      number: store.get("number") || "",
      amount: "",
      message: "",
      pass: "",
      decrypted: false
    }
    this.render = _ =>
      props.children({
        ...this.state,
        handleChange: e => {
          const { name, value } = e.target
          if (validations[name] && validations[name](value)) {
            this.setState({ [name]: value })
            name === "number" && store.set("number", value)
          }
        },
        handleDecrypt: e => {
          clearTimeout(this.errorTimeout)
          this.errorTimeout = setTimeout(
            _ => this.setState({ error: false }),
            2500
          )
          try {
            const decrypted = decrypt(this.state.id, this.state.pass)
            const payment = decrypted && deserialize(decrypted)

            this.setState({
              ...payment,
              pass: "",
              decrypted: !!payment,
              error: !payment
            })
          } catch (e) {
            console.log(e)
            this.setState({ error: true })
          }
        }
      })
  }
}
