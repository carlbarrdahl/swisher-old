import { encrypt, decrypt, serialize, deserialize } from "../utils"

const data = {
  payment: {
    amount: "1",
    number: "0700123456",
    message: "message"
  },
  user: {
    name: "Carl B",
    pno: "840102-4650"
  }
}

describe("Crypto", () => {
  test("encrypt data", () => {
    const encrypted = encrypt(serialize(data.payment), "pass")
    const decrypted = deserialize(decrypt(encrypted, "pass"))

    expect(decrypted).toEqual(data.payment)
  })
})
