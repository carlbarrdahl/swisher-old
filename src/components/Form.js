import React from "react"
import cx from "classnames"

export const Input = ({ className, ...props }) => (
  <div className="mb-3">
    <label className="block uppercase tracking-wide text-grey-darker text-sm font-bold mb-2">
      {props.label}
      <input
        className={cx(
          "appearance-none block w-full bg-grey-lighter rounded py-3 px-4 leading-tight text-grey-darker",
          className
        )}
        type="text"
        {...props}
      />
    </label>
  </div>
)
