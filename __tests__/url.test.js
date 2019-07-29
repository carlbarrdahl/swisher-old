import {
  swishLink,
  toURLToken,
  fromToken,
  getLink,
  encrypt,
  decrypt
} from "../src/utils"

const token =
  "U2FsdGVkX1/JjEP60RY9lUdWNhBqS5tbqF9Fy1rCMEWvrDfAbYdkngHqSYD7oLtLGcINMgLQJ1he5R/VB/59WQ=="
const payment = {
  amount: 100,
  number: "0723419119",
  message: "test"
}
// test("fromToken", () => {
//   expect(fromToken(token)).toEqual("")
// })
test("crypto", () => {
  expect(decrypt(encrypt("payment"))).toEqual("payment")
})
test("toURLToken", () => {
  expect(fromToken(toURLToken(payment))).toEqual(payment)
})
test("swishLink", () => {
  expect(swishLink(payment)).toEqual(
    `swish://payment?data={\"version\":1,\"payee\":{\"value\":\"0723419119\"},\"amount\":{\"value\":100},\"message\":{\"value\":\"test\",\"editable\":false}}&callbackurl=http://localhost/done&callbackresultparameter=res`
  )
})

// test("URL serialize", () => {
//   expect(swishLink(payment)).toEqual(
//     "swish://payment?data=%7B%22version%22%3A1%2C%22payee%22%3A%7B%22value%22%3A%220723419119%22%7D%2C%22amount%22%3A%7B%22value%22%3A100%7D%2C%22message%22%3A%7B%22value%22%3A%22test%22%2C%22editable%22%3Afalse%7D%7D&callbackurl=http%3A%2F%2Flocalhost%2Fdone&callbackresultparameter=res"
//   )
// })
