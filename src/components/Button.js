import React from "react"
import cx from "classnames"

const variants = {
  primary: "bg-blue active:bg-blue-light hover:bg-blue-light text-white",
  default: "border border-grey-darkest text-grey-darkest "
}
export default ({ component, className, variant, children, ...props }) => {
  return React.createElement(
    component || "button",
    {
      ...props,
      className: cx(
        "block tracking-wide py-4 px-8 rounded text-center no-underline w-full",
        variants[variant || "default"],
        className
      )
    },
    children
  )
}
