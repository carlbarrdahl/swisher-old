import React from "react"
import { Link } from "@reach/router"
import Button from "./Button"

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
      <Text>
        Sensitive data is encrypted in the URL using AES with an optional key.
        No data is sent to any server.
      </Text>
    </section>
    <section className="flex -mx-2 mb-6">
      <Screenshot src={"./assets/screen1.png"} />
      <Screenshot src={"./assets/screen2.png"} />
      <Screenshot src={"./assets/screen3.png"} />
    </section>
  </main>
)

export default Landing
