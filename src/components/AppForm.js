import React, { Fragment } from "react"
import Button from "./Button"
import { Input } from "./Form"
import { Translations } from "../providers/Translations"
export default ({
  id,
  amount,
  number,
  error,
  message,
  pass,
  decrypted,
  handleChange,
  handleDecrypt
}) => {
  return (
    <Translations.Consumer>
      {({ t }) => (
        <form
          className="w-full"
          onSubmit={e => {
            e.preventDefault()
          }}
        >
          {(!id || (id && decrypted)) && (
            <Fragment>
              <div className="flex flex-wrap">
                <div className="w-2/3 px-3 mb-0">
                  <Input
                    label={t("Recipient")}
                    name="number"
                    type="tel"
                    placeholder="0700000000"
                    value={number}
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
                        {t("Message")}{" "}
                        {!id && <MessageCount message={message} />}
                      </span>
                    }
                    name="message"
                    placeholder=""
                    value={message}
                    readOnly={id}
                    onChange={handleChange}
                    autoComplete="off"
                    maxLength="50"
                  />
                </div>
              </div>
            </Fragment>
          )}
          {!decrypted && (
            <div className="flex flex-wrap">
              <div className="w-full px-3">
                <Input
                  label={
                    <span>
                      {t("Key")}{" "}
                      {
                        <small
                          className={error ? "text-red" : "text-grey-dark"}
                        >
                          ({error ? (
                            t("Key incorrect")
                          ) : id ? (
                            t("Key info")
                          ) : (
                            t("Key hint")
                          )})
                        </small>
                      }
                    </span>
                  }
                  name="pass"
                  placeholder=""
                  value={pass}
                  onChange={handleChange}
                  autoComplete="off"
                  maxLength="50"
                />
              </div>
            </div>
          )}
          {id &&
          !decrypted && (
            <div className="px-3 mb-3">
              <Button variant="primary" type="submit" onClick={handleDecrypt}>
                {t("Decrypt")}
              </Button>
            </div>
          )}
        </form>
      )}
    </Translations.Consumer>
  )
}

const MessageCount = ({ message = "" }) => (
  <small className={"font-normal " + getColor(message.length)}>
    ({message.length}/50)
  </small>
)

const getColor = n => {
  return n < 30 ? "" : n < 45 ? "text-orange" : "text-red"
}
