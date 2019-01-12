import React from "react"

import Button from "./Button"

import { Input } from "./Form"

const copyLink = _ => {
  const input = document.querySelector("#link")
  input.select()
  document.execCommand("copy")
}

const shareLink = url => {
  return navigator
    .share({
      url,
      title: "Ny betalning"
    })
    .then(() => console.log("Successful share"))
    .catch(error => console.log("Error sharing", error))
}

const SharePayment = ({ link }) => (
  <div className="w-full px-3">
    {navigator.share && (
      <div className="mb-2">
        <Button variant="primary" onClick={_ => shareLink(link)}>
          Skicka betalning
        </Button>
      </div>
    )}
    <div className="mb-4">
      <small className="max-w-xs mt-2">
        <Input type="text" id="link" value={link} onFocus={copyLink} />
      </small>
      <Button onClick={copyLink}>Kopiera länk</Button>
    </div>
  </div>
)

export default SharePayment
