import React from "react"
import cx from "classnames"
const Card = ({ className, ...props }) => (
  <div
    className={cx(`rounded overflow-hidden shadow-lg bg-white mb-8`, className)}
    {...props}
  />
)

Card.Content = ({ className, ...props }) => (
  <div className={cx(`px-6 py-4`, className)} {...props} />
)
Card.Header = ({ className, ...props }) => (
  <div className={cx(`font-bold text-xl mb-2`, className)} {...props} />
)

export default Card
