import React from "react"

export default ({ component, children, ...props }) =>
  React.createElement(
    component || "button",
    {
      ...props,
      className:
        "bg-grey-darkest block tracking-wide text-white font-bold py-3 px-4 rounded"
    },
    children
  )
