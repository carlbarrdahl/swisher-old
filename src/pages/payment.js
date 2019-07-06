import React from "react"
import { fromToken, deserialize, decrypt, swishLink } from "../utils"

import Button from "../components/Button"
import Layout from "../components/Layout"
import QRCode from "../components/QRCode"

import { withTranslations } from "../providers/Translations"

const PaymentScreen = withTranslations(({ location, t, ...props }) => {
  const token = location.search.split("?")[1]
  const payment = fromToken(token)
  console.log(
    payment,
    swishLink(payment),
    decrypt(
      decodeURIComponent(
        "U2FsdGVkX18%252BA1eaYnE1U6q7U8TPfwaObrT4eFozkICJTooQz49JgL6mwaL7Wc%252F1QO1dZubtswkC5vpQNxJ4GQ%253D%253D"
      )
    )
  )

  return (
    <Layout title="Payment">
      <div className="text-lg text-center text-grey-darkest leading-normal">
        {t("app.payment.title")}
        <div className="text-2xl">
          <strong>{payment.amount} SEK</strong>
        </div>
        <p>{payment.number}</p>
        <p className="mb-2 text-grey-darker">{payment.message}</p>
      </div>
      <QRCode {...payment} />
      <p className="text-center leading-normal mb-4">
        {t("app.payment.instructions")}
      </p>
      <Button
        component="a"
        href={swishLink(payment)}
        variant="primary"
        className="mb-2"
      >
        {t("app.payment.pay")}
      </Button>
    </Layout>
  )
})

export default PaymentScreen
