import React from "react"

const variants = {
  primary: "bg-blue active:bg-blue-light hover:bg-blue-light text-white",
  default: "border-2 border-grey-darkest text-grey-darkest "
}
export default ({ component, variant, children, ...props }) => {
  return React.createElement(
    component || "button",
    {
      ...props,
      className:
        "block tracking-wide py-3 px-8 rounded w-full " +
        (variants[variant || "default"] || "")
    },
    children
  )
}
