import CryptoJS from "crypto-js"

const DEFAULT_KEY = ""
export const encrypt = (str, key = DEFAULT_KEY) =>
  CryptoJS.AES.encrypt(str, key).toString()

export const decrypt = (str, key = DEFAULT_KEY) =>
  CryptoJS.AES.decrypt(str, key).toString(CryptoJS.enc.Utf8)

const getOrigin = () => "https://swisher.carlb.dev" //global.location && global.location.origin

export const getLink = ({ amount, number, message, pass = DEFAULT_KEY }) =>
  `${getOrigin()}/payment?${toURLToken({ amount, number, message })}`

export const fromToken = string => {
  try {
    const { amount, number, message } = deserialize(
      decrypt(decodeURIComponent(string))
    )
    return { amount: +amount, number, message }
  } catch (error) {
    return {}
  }
}

export const toURLToken = payment =>
  encodeURIComponent(encrypt(serialize(payment)))

export const formatMessage = ({ amount, number, message }) => `
${number}, ${(+amount).toLocaleString("sv-SE", {
  currency: "SEK",
  style: "currency",
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
    const [key, val] = hash.split("=")
    return {
      ...acc,
      [key]: val,
    }
  }, {})
}

export const serialize = obj => {
  var str = []
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(p + "=" + obj[p])
    }
  return str.join("&")
}

export const swishLink = payment => {
  return `swish://payment?data=${encodeURI(
    buildSwishPayment(payment)
  )}&callbackurl=${getOrigin() + "/done"}&callbackresultparameter=res`
}

const buildSwishPayment = ({ amount, message, number }) =>
  JSON.stringify({
    version: 1,
    payee: { value: number },
    amount: { value: +amount },
    message: { value: message, editable: false },
  })
