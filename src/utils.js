import CryptoJS from "crypto-js"

const DEFAULT_KEY = ""
export const encrypt = (str, key = DEFAULT_KEY) =>
  CryptoJS.AES.encrypt(str, key).toString()

export const decrypt = (str, key = DEFAULT_KEY) =>
  CryptoJS.AES.decrypt(str, key).toString(CryptoJS.enc.Utf8)

export const getLink = ({ amount, number, message, pass }) => {
  const qs = serialize({
    amount,
    number,
    message
  })

  return `${global.location.href}/payment/${encodeURIComponent(
    encrypt(qs, pass)
  )}`
}

export const formatMessage = ({ amount, number, message }) => `
${number}, ${(+amount).toLocaleString("sv-SE", {
  currency: "SEK",
  style: "currency"
})}
${message}
`

export const deserialize = search => {
  if (!search) {
    return {}
  }
  const hashes = search
    .slice(search.indexOf("?") + 1)
    .split("&")
    .filter(q => !!q)
  return hashes.reduce((acc, hash) => {
    const [ key, val ] = hash.split("=")
    return {
      ...acc,
      [key]: decodeURIComponent(val)
    }
  }, {})
}

export const serialize = obj => {
  var str = []
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]))
    }
  return str.join("&")
}

export const swishLink = ({ amount, message, number }) =>
  `swish://payment?data=${encodeURIComponent(
    JSON.stringify({
      version: 2,
      payee: {
        value: number
      },
      amount: {
        value: amount
      },
      message: {
        value: message,
        editable: false
      }
    })
  )}&callbackurl=${global.location
    .origin}/app/payment/done&callbackresultparameter=res`
