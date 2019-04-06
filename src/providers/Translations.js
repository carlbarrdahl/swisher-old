import React from "react"

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
    Decrypt: "Decrypt",
    Back: "Back",
    "Payment requested": "You've received a request to pay",
    "QR instructions":
      "Scan the QR code with your Swish app or click the button below",
    Pay: "Pay with Swish",
    "Payment received": "Payment received!",
    "Payment canceled": "Payment canceled!",
    "Payment failed": "Payment failed!"
  },
  sv: {
    "Create new": "Skapa ny",
    "New payment": "Ny betalning",
    "Send payment": "Skicka betalning",
    "Copy link": "Kopiera länk",
    Recipient: "Mottagare",
    Amount: "Summa",
    Message: "Meddelande",
    Key: "Nyckel",
    "Key incorrect": "det verkar som att nyckeln är fel",
    "Key info": "krävs för att se betalinformation",
    "Key hint": "krypterar länk till betalning",
    Decrypt: "Lås upp",
    Back: "Tillbaka",
    "Payment requested": "Du har mottagit en förfrågan att betala",
    "QR instructions":
      "Skanna QR-koden med Swish-appen eller klicka på knappen nedan",
    Pay: "Betala i Swish",
    "Payment received": "Betalning mottagen!",
    "Payment canceled": "Betalning avbruten!",
    "Payment failed": "Betalning misslyckad!"
  }
}

export const withTranslations = Component =>
  class TranslationsProvider extends React.Component {
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
      return <Component {...this.state} {...this.props} />
    }
  }
