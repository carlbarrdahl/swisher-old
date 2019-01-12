import React, { Component, createContext } from "react"

const locales = {
  en: {
    "Create new": "Create new",
    "New payment": "New payment",
    "Send payment": "Send payment",
    "Copy link": "Copy link",
    Recipient: "Recipient",
    Amount: "Amount",
    Message: "Message",
    Key: "Key",
    "Key incorrect": "it seems the key is incorrect",
    "Key info": "is needed to see payment information",
    "Key hint": "encrypts data in link to payment",
    Decrypt: "Decrypt"
  },
  sv: {
    "Create new": "Skapa ny",
    "New payment": "Ny betalning",
    "Send payment": "Skicka betalning",
    "Copy link": "Kopiera betalning",
    Recipient: "Mottagare",
    Amount: "Summa",
    Message: "Meddelande",
    Key: "Nyckel",
    "Key incorrect": "det verkar som att nyckeln är fel",
    "Key info": "krävs för att se betalinformation",
    "Key hint": "krypterar länk till betalning",
    Decrypt: "Lås upp"
  }
}
export const Translations = createContext()

export default class TranslationsProvider extends Component {
  constructor(props) {
    super(props)
    const locale = (navigator.userLanguage || navigator.language)
      .replace("-", "_")
    const [ language ] = locale.split("_")
    const translations = locales[language] || "en"

    this.state = {
      locale,
      t: key => translations[key] || "NO_KEY"
    }
  }
  render() {
    return <Translations.Provider value={this.state} {...this.props} />
  }
}
