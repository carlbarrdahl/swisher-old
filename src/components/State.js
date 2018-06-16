import React from "react"

const validations = {
  amount: n => !isNaN(n),
  number: n => true,
  message: n => true
}

export default class State extends React.Component {
  state = {
    number: "",
    amount: "",
    message: ""
  }
  constructor(props) {
    super(props)
    this.render = _ =>
      props.children({
        ...this.state,
        handleChange: e => {
          const { name, value } = e.target
          if (validations[name](value)) {
            this.setState({ [name]: value })
          }
        }
      })
  }
}
