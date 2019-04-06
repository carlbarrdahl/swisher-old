import React from "react"
import { Input } from "./Form"
import { withTranslations } from "../providers/Translations"

export default withTranslations(
  ({ id, amount, number, message, handleChange, t }) => {
    return (
      <form
        className="w-full"
        onSubmit={e => {
          e.preventDefault()
        }}
      >
        <div className="flex flex-wrap">
          <div className="w-2/3 px-3 mb-0">
            <Input
              label={t("Recipient")}
              name="number"
              type="tel"
              placeholder="0700000000"
              value={number}
              autoFocus={!number}
              readOnly={id}
              required
              minLength="10"
              maxLength="12"
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className="w-1/3 px-3">
            <Input
              label={t("Amount")}
              name="amount"
              type="tel"
              placeholder="10 SEK"
              value={amount}
              autoFocus={number && !amount}
              readOnly={id}
              required
              minLength="1"
              maxLength="4"
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full px-3">
            <Input
              label={
                <span>
                  {t("Message")} {!id && <MessageCount message={message} />}
                </span>
              }
              name="message"
              placeholder=""
              value={message}
              autoFocus={amount && !message}
              readOnly={id}
              onChange={handleChange}
              autoComplete="off"
              maxLength="50"
            />
          </div>
        </div>
      </form>
    )
  }
)

const MessageCount = ({ message = "" }) => (
  <small className={"font-normal " + getColor(message.length)}>
    ({message.length}/50)
  </small>
)

const getColor = n => {
  return n < 30 ? "" : n < 45 ? "text-orange" : "text-red"
}
