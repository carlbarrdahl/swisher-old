import React from "react"

export const Input = props => (
  <div className="mb-3">
    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
      {props.label}
      <input
        className={
          "appearance-none block w-full bg-grey-lighter rounded py-3 px-4 leading-tight text-grey-darker"
        }
        type="text"
        {...props}
      />
    </label>
  </div>
)
