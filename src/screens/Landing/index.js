import React from "react"

import Header from "./components/Header"
import App from "../../components/App"
import Button from "../../components/Button"
import { withTranslations } from "../../providers/Translations"

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
  <main className="text-grey-darkest p-4">
    <Header />
    <Section>
      <Hero />
    </Section>
    <Section id="business">
      <h1 className="text-4xl text-grey-darkest mb-4">
        {t("landing.business.title")}
      </h1>
      <div class="flex flex-wrap -mx-4 mb-8">
        <div class="w-full md:w-1/3 sm:w-1/2 px-4 mb-12">
          <span class="mb-2 text-4xl" role="img" aria-label="e-commerce">
            🛒
          </span>
          <h3 class="text-lg font-semibold text-black mb-2">
            {t("landing.business.ecommerce.title")}
          </h3>
          <p class="text-base leading-normal text-grey-darkest">
            {t("landing.business.ecommerce.text")}
          </p>
        </div>
        <div class="w-full md:w-1/3 sm:w-1/2 px-4 mb-12">
          <span class="mb-2 text-4xl" role="img" aria-label="invoice">
            🧾
          </span>
          <h3 class="text-lg font-semibold text-black mb-2">
            {t("landing.business.invoice.title")}
          </h3>
          <p class="text-base leading-normal text-grey-darkest">
            {t("landing.business.ecommerce.text")}
          </p>
        </div>

        <div class="w-full md:w-1/3 sm:w-1/2 px-4 mb-12">
          <span class="mb-2 text-4xl" role="img" aria-label="reconnect">
            📲
          </span>
          <h3 class="text-lg font-semibold text-black mb-2">
            {t("landing.business.reconnect.title")}
          </h3>
          <p class="text-base leading-normal text-grey-darkest">
            {t("landing.business.reconnect.title")}
          </p>
        </div>
      </div>
      <div className="flex">
        <input
          className={
            "appearance-none block w-full bg-grey-lighter rounded py-3 px-4 leading-tight text-grey-darker flex-grow"
          }
          type="text"
          placeholder="Email-address"
        />
        <Button variant="primary" className="">
          {t("landing.getstarted.button")}
        </Button>
      </div>
    </Section>
  </main>
))

export default Landing
