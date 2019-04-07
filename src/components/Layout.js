import React from "react"
import { Link } from "@reach/router"

export default props => (
  <section className="p-4 max-w-md mx-auto">
    <Link to="/app" className="no-underline">
      <h1 className="text-3xl text-grey-darkest text-center mb-4">swisher</h1>
    </Link>
    {props.children}
  </section>
)
