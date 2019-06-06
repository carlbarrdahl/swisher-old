import React from "react"
import { Link } from "gatsby"
import SEO from "./SEO"

export default props => (
  <section className="font-sans p-4 max-w-md mx-auto">
    <SEO title={props.title} />
    <Link to="/app" className="no-underline">
      <h1 className="text-3xl text-grey-darkest text-center mb-4">swisher</h1>
    </Link>
    {props.children}
  </section>
)
