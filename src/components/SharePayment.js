import React from "react"

import Button from "./Button"
import { withTranslations } from "../providers/Translations"
import { Input } from "./Form"

const copyLink = _ => {
  const input = document.querySelector("#link")
  input.select()
  document.execCommand("copy")
}

const shareLink = (url, title) =>
  global.navigator &&
  global.navigator
    .share({ url, title })
    .then(() => console.log("Successful share"))
    .catch(error => console.log("Error sharing", error))

const SharePayment = withTranslations(({ link, t }) => (
  <div className="w-full px-3">
    {global.navigator &&
    global.navigator.share && (
      <div className="mb-2">
        <Button
          variant="primary"
          onClick={_ => shareLink(link, t("app.share.title"))}
        >
          {t("app.share.button")}
        </Button>
      </div>
    )}
    <div className="mb-4">
      <Input
        type="text"
        id="link"
        value={link}
        onFocus={copyLink}
        className="text-xs"
      />
      <Button onClick={copyLink}>{t("app.share.copy")}</Button>
    </div>
  </div>
))

export default SharePayment
