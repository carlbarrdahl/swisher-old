import React from "react"
import { Link } from "@reach/router"
import Button from "../../../components/Button"

const Header = props => (
  <header className="w-full font-sans">
    <nav className="container mx-auto flex items-center justify-between py-3">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <h1 className="text-3xl text-grey-darkest text-center m-0">swisher</h1>
      </div>
      <div className="w-full block text-right flex-grow flex items-center lg:w-auto">
        <div className="flex-grow">
          <a
            href="mailto:carlbarrdahl@gmail.com"
            className="block lg:inline-block text-grey-dark hover:text-grey-darker no-underline mr-6"
          >
            Företag
          </a>
        </div>
        <div>
          <Button component={Link} to="/app">
            Öppna app
          </Button>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
