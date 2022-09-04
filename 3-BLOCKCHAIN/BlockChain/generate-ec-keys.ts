import crypto from "crypto";

const { privateKey, publicKey } = crypto.generateKeyPairSync("ec", {
  namedCurve: "secp256k1",
  publicKeyEncoding: {
    type: "spki",
    format: "der",
  },
  privateKeyEncoding: {
    type: "pkcs8",
    format: "der",
  },
});

const keys = {
  private: privateKey.toString("hex"),
  public: publicKey.toString("hex"),
};

console.log(JSON.stringify(keys, null, "  "));
