import CryptoJS from "crypto-js"

const DEFAULT_KEY = ""
export const encrypt = (str, key = DEFAULT_KEY) =>
  CryptoJS.AES.encrypt(str, key).toString()

export const decrypt = (str, key = DEFAULT_KEY) =>
  CryptoJS.AES.decrypt(str, key).toString(CryptoJS.enc.Utf8)

const getOrigin = () => global.location && global.location.origin

export const getLink = ({ amount, number, message, pass = DEFAULT_KEY }) => {
  const qs = serialize({
    amount,
    number,
    message
  })
  return `${getOrigin()}/payment?${encodeURIComponent(encrypt(qs, pass))}`
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

export const swishLink = payment => {
  const params = serialize({
    data: buildSwishPayment(payment),
    callbackurl: getOrigin() + "/app/payment/done",
    callbackresultparameter: "res"
  })

  return `swish://payment?${params}`
}
const buildSwishPayment = ({ amount, message, number }) =>
  JSON.stringify({
    version: 1,
    payee: { value: number },
    amount: { value: amount },
    message: { value: message, editable: false }
  })
