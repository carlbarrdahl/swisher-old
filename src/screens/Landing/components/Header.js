import React from "react"
import { Link } from "@reach/router"
import Button from "../../../components/Button"
import { withTranslations } from "../../../providers/Translations"

const Header = withTranslations(({ t }) => (
  <header className="w-full font-sans">
    <nav className="container mx-auto flex items-center justify-between py-3">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <h1 className="text-3xl text-grey-darkest text-center m-0">swisher</h1>
      </div>
      <div className="w-full block text-right flex-grow flex items-center lg:w-auto">
        <div className="flex-grow" />
        <div className="flex">
          <Button variant="ghost" component={"a"} href="#business">
            {t("landing.header.business")}
          </Button>
          <Button component={Link} to="/app">
            {t("landing.header.open")}
          </Button>
        </div>
      </div>
    </nav>
  </header>
))
export default Header
