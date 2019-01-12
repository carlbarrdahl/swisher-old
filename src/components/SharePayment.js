import React from "react"

import Button from "./Button"
import { Translations } from "../providers/Translations"
import { Input } from "./Form"

const copyLink = _ => {
  const input = document.querySelector("#link")
  input.select()
  document.execCommand("copy")
}

const shareLink = (url, title) =>
  navigator
    .share({ url, title })
    .then(() => console.log("Successful share"))
    .catch(error => console.log("Error sharing", error))

const SharePayment = ({ link }) => (
  <Translations.Consumer>
    {({ t }) => (
      <div className="w-full px-3">
        {navigator.share && (
          <div className="mb-2">
            <Button
              variant="primary"
              onClick={_ => shareLink(link, t("New payment"))}
            >
              {t("Send payment")}
            </Button>
          </div>
        )}
        <div className="mb-4">
          <small className="max-w-xs mt-2">
            <Input type="text" id="link" value={link} onFocus={copyLink} />
          </small>
          <Button onClick={copyLink}>{t("Copy link")}</Button>
        </div>
      </div>
    )}
  </Translations.Consumer>
)

export default SharePayment
