import crypto from "crypto";

const { privateKey, publicKey } = crypto.generateKeyPairSync("ec", {
  namedCurve: "secp256k1",
  privateKeyEncoding: {
    type: "pkcs8",
    format: "der",
  },
  publicKeyEncoding: {
    type: "spki",
    format: "der",
  },
});

const keys = {
  private: privateKey.toString("hex"),
  public: publicKey.toString("hex"),
};

console.log(JSON.stringify(keys, null, "  "));
