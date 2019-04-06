import React from "react"

import Header from "./components/Header"
import App from "../../components/App"

const Screenshot = props => (
  <div className="mx-2">
    <img
      className="border shadow-lg"
      src={props.src}
      alt=""
      style={{ maxWidth: 300 }}
    />
  </div>
)

const Text = props => (
  <p
    className={"text-base leading-normal mb-4 " + props.className}
    {...props}
  />
)

const Hero = props => (
  <div className="flex flex-wrap mb-4">
    <div className="w-full md:w-1/2">
      <h1 className="text-4xl sm:text-5xl mb-4">Länka Swish-betalningar</h1>
      <h2 className="text-3xl sm:text-4xl font-light leading-tight text-grey-darker mb-8">
        Skicka dina betalningar snabbt, enkelt och säkert till vänner eller
        kunder.
      </h2>
      <p className="text-xl leading-loose text-grey-darkest font-light">
        Testa själv genom att fylla i nummer, summa och valfritt meddelande
        eller scanna QR-koden direkt i Swish-appen{" "}
        <span className="md:hidden">👇</span>
        <span className="hidden md:inline">👉</span>
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
)

const Section = props => (
  <section className="container mx-auto mb-4 py-4" {...props} />
)

const Footer = props => (
  <footer className="bg-grey-darkest text-grey-lightest py-8">
    <Section>created by carl barrdahl</Section>
  </footer>
)
const Landing = () => (
  <main className="text-grey-darkest p-4">
    <Header />
    <Section>
      <Hero />
    </Section>
    {/* <Footer /> */}
  </main>
)

export default Landing
