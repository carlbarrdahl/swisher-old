import React from "react"

import Button from "../components/Button"
import Card from "../components/Card"
import Layout from "../components/Layout"

import { withTranslations } from "../providers/Translations"

function parseResult(res) {
  try {
    return JSON.parse(decodeURIComponent(res))
  } catch (error) {
    return {}
  }
}

const statusMap = {
  paid: {
    icon: (
      <path d="M14.72,8.79l-4.29,4.3L8.78,11.44a1,1,0,1,0-1.41,1.41l2.35,2.36a1,1,0,0,0,.71.29,1,1,0,0,0,.7-.29l5-5a1,1,0,0,0,0-1.42A1,1,0,0,0,14.72,8.79ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" />
    ),
    title: "app.success.title",
    color: "green"
  },
  notpaid: {
    icon: (
      <path d="M12,7a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V8A1,1,0,0,0,12,7Zm.92,8.62a.76.76,0,0,0-.09-.18l-.12-.15a1,1,0,0,0-1.09-.21,1.15,1.15,0,0,0-.33.21A1,1,0,0,0,11,16a1,1,0,0,0,.08.38.9.9,0,0,0,.54.54.94.94,0,0,0,.76,0,.9.9,0,0,0,.54-.54A1,1,0,0,0,13,16a1.36,1.36,0,0,0,0-.2A.64.64,0,0,0,12.92,15.62ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" />
    ),
    title: "app.canceled.title",
    color: "red"
  },
  unknown: {
    icon: (
      <path d="M12,7a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V8A1,1,0,0,0,12,7Zm.92,8.62a.76.76,0,0,0-.09-.18l-.12-.15a1,1,0,0,0-1.09-.21,1.15,1.15,0,0,0-.33.21A1,1,0,0,0,11,16a1,1,0,0,0,.08.38.9.9,0,0,0,.54.54.94.94,0,0,0,.76,0,.9.9,0,0,0,.54-.54A1,1,0,0,0,13,16a1.36,1.36,0,0,0,0-.2A.64.64,0,0,0,12.92,15.62ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" />
    ),
    title: "app.failure.title",
    color: "red"
  }
}
const Payment = withTranslations(({ result, t }) => {
  const { color, icon, title } = statusMap[result || "unknown"]
  return (
    <div>
      <div className="flex justify-center mb-4">
        <svg
          className={`fill-current w-16 h-16 text-${color}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          {icon}
        </svg>
      </div>
      <Card.Header className="text-center mb-8">{t(title)}</Card.Header>
      <Button component="a" href="/app">
        {t("app.payment.new")}
      </Button>
    </div>
  )
})

const PaymentDoneScreen = ({ location, ...props }) => {
  const [ , res ] = location.search.split("?res=")
  const payment = parseResult(res)
  return (
    <Layout title={"Status"}>
      <Payment {...payment} />
    </Layout>
  )
}

export default PaymentDoneScreen
