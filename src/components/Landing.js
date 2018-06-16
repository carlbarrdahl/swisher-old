import React from "react"
import { Link } from "@reach/router"
import Button from "./Button"
import { Input } from "./Form"

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

const Landing = () => (
  <main className="h-screen max-w-xl mx-auto p-4">
    <header className="flex justify-between items-center">
      <h1 className="text-5xl text-grey-darkest">swisher</h1>
      <Link className="no-underline" to="/app">
        <Button>Open app</Button>
      </Link>
    </header>
    <section className="mb-4 py-4">
      <Text>
        Light-weight progressive webapp that lets you generate a Swish QR code.
        This makes payments easier as you don't have to type or browse phone
        numbers. Pretty useful when splitting bills among a bunch of people.
      </Text>
      <Text>
        Enter your phone number, the amount and an optional message and a QR
        code is generated to be scanned from the Swish app.
      </Text>
    </section>
    <section className="flex -mx-2 mb-6">
      <Screenshot src={"./assets/screen1.png"} />
      <Screenshot src={"./assets/screen2.png"} />
      <Screenshot src={"./assets/screen3.png"} />
    </section>

    <section className="mb-8">
      <Text>
        Need more advanced features like:
        <ul className="list-reset mt-2">
          <li>- Payment terminal to sell your goods or services</li>
          <li>- Call a webhook on incoming transactions</li>
          <li>- Analytics powered by machine learning</li>
          <li>- Order and queue management</li>
          <li>- Ticketing for events</li>
        </ul>
      </Text>
      <Text className="mb-2">Feel free to contact me at:</Text>
      <Text>
        <a href="mailto:carl.barrdahl+swisher@gmail.com">
          carl.barrdahl+swisher@gmail.com
        </a>
      </Text>
      <Text>
        <a href="https://www.linkedin.com/in/carlbarrdahl/">
          https://www.linkedin.com/in/carlbarrdahl
        </a>
      </Text>
    </section>
  </main>
)

export default Landing
