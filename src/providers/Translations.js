import React from "react"
import en from "../locales/en.json"
import sv from "../locales/sv.json"

export const withTranslations = Component =>
  class TranslationsProvider extends React.Component {
    constructor(props) {
      super(props)
      const locale = (navigator.userLanguage || navigator.language)
        .replace("-", "_")
      const [ language ] = locale.split("_")

      const locales = { en, sv }
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
