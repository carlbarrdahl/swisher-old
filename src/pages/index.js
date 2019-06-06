import React from "react"
import { Link } from "gatsby"
import App from "../components/App"
import Button from "../components/Button"
import { withTranslations } from "../providers/Translations"

const Header = withTranslations(({ t }) => (
  <header className="w-full">
    <nav className="container mx-auto flex items-center justify-between py-3">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <h1 className="text-3xl text-grey-darkest text-center m-0">swisher</h1>
      </div>
      <div className="w-full block text-right flex-grow flex items-center lg:w-auto">
        <div className="flex-grow" />
        <div className="flex">
          <Button component={Link} to="/app">
            {t("landing.header.open")}
          </Button>
        </div>
      </div>
    </nav>
  </header>
))

const Hero = withTranslations(({ t }) => (
  <div className="flex flex-wrap mb-4">
    <div className="w-full md:w-1/2">
      <h1 className="text-4xl sm:text-5xl mb-4">{t("landing.hero.title")}</h1>
      <h2 className="text-3xl sm:text-4xl font-light leading-tight text-grey-darker mb-8">
        {t("landing.hero.subtitle")}
      </h2>
      <p className="text-xl leading-loose text-grey-darkest font-light">
        {t("landing.hero.instructions")}
      </p>
    </div>
    <div className="w-full md:w-1/2">
      <App
        payment={{
          number: "1239000720",
          amount: 100,
          message: ""
        }}
      />
    </div>
  </div>
))

const Section = props => (
  <section className="container mx-auto mb-4 py-4" {...props} />
)

const Landing = withTranslations(({ t }) => (
  <main className="font-sans text-grey-darkest p-4">
    <Header />
    <Section>
      <Hero />
    </Section>
  </main>
))

export default Landing
