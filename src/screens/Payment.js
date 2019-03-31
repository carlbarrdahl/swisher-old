import React from "react"
import { deserialize, decrypt, swishLink } from "../utils"

import Button from "../components/Button"
import Layout from "../components/Layout"
import QRCode from "../components/QRCode"

import { withTranslations } from "../providers/Translations"

const PaymentScreen = withTranslations(({ hash, t, ...props }) => {
  const payment = deserialize(decrypt(hash))
  return (
    <Layout>
      <div className="text-lg text-center text-grey-darkest leading-normal">
        {t("Payment requested")}
        <div className="text-2xl">
          <strong>{payment.amount} SEK</strong>
        </div>
        <p>{payment.number}</p>
        <p className="mb-2 text-grey-darker">{payment.message}</p>
      </div>
      <QRCode {...payment} />
      <p className="text-center leading-normal mb-4">{t("QR instructions")}</p>
      <Button
        component="a"
        href={swishLink(payment)}
        variant="primary"
        className="mb-2"
      >
        {t("Pay")}
      </Button>
    </Layout>
  )
})

export default PaymentScreen
