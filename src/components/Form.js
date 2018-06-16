import React from "react"
import Button from "./Button"

export const Input = props => (
  <input
    className="appearance-none block w-full bg-grey-lighter text-grey-darker rounded py-3 px-4 mb-3 leading-tight"
    type="text"
    {...props}
  />
)

export const Label = props => (
  <label
    className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
    {...props}
  />
)

export default ({ amount, number, message, handleChange }) => {
  return (
    <form className="w-full max-w-sm mx-auto mb-6">
      <div className="flex flex-wrap">
        <div className="w-2/3 px-3 mb-0">
          <Label htmlFor="number">Phone number</Label>
          <Input
            name="number"
            type="tel"
            placeholder="0700000000"
            value={number}
            required
            minLength="10"
            maxLength="12"
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="w-1/3 px-3">
          <Label htmlFor="amount">Amount</Label>
          <Input
            name="amount"
            type="tel"
            placeholder="10 SEK"
            value={amount}
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
          <Label htmlFor="message">
            Message <MessageCount message={message} />
          </Label>
          <Input
            name="message"
            placeholder=""
            value={message}
            onChange={handleChange}
            autoComplete="off"
            maxLength="50"
          />
        </div>
      </div>
    </form>
  )
}

const MessageCount = ({ message }) => (
  <small className={"font-normal " + getColor(message.length)}>
    ({message.length}/50)
  </small>
)

const getColor = n => {
  return n < 30 ? "" : n < 45 ? "text-orange" : "text-red"
}
