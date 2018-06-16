import React from "react"
import { QRCode } from "react-qr-svg"

export default ({ number, message, amount }) => (
  <div className="text-center mb-6">
    <QRCode
      fgColor="#22292F"
      bgColor="#ffffff"
      level="Q"
      style={{ maxWidth: 200 }}
      value={`C${number};${amount};${message};0`}
    />
  </div>
)
