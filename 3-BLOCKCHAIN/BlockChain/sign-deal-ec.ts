import crypto from "crypto";
import fs from "fs";
import path from "path";

const keys = JSON.parse(
  fs.readFileSync(path.join(__dirname, "sample-keys", "ec-keys.json"), "utf-8")
);

const pri = crypto.createPrivateKey({
  key: Buffer.from(keys.private, "hex"),
  format: "der",
  type: "pkcs8",
});
const pub = crypto.createPublicKey({
  key: Buffer.from(keys.public, "hex"),
  format: "der",
  type: "spki",
});

// 署名の作成
const sign = crypto.createSign("SHA256");
sign.update("some data to sign");
sign.end();
const signature = sign.sign(pri);

console.log("signature:", signature.toString("hex"));

// 署名の確認
const verify = crypto.createVerify("SHA256");
verify.update("some data to sign");
verify.end();
console.log(verify.verify(pub, signature));
