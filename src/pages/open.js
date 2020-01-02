import React, { useEffect } from "react"
import { fromToken, deserialize, decrypt, swishLink } from "../utils"

import Button from "../components/Button"
import Layout from "../components/Layout"
import QRCode from "../components/QRCode"

import { withTranslations } from "../providers/Translations"

const PaymentScreen = withTranslations(({ location, t, ...props }) => {
  const token = location.search.split("?")[1]
  const payment = fromToken(token)
  if (!payment.amount) {
    return null
  }

  useEffect(() => {
    window.location.href = swishLink(payment)
  }, [])
  return (
    <Layout title="Payment">
      <div className="text-lg text-center text-grey-darkest leading-normal">
        {t("app.payment.opening")}
      </div>
    </Layout>
  )
})

export default PaymentScreen
