// プライベートキーで署名
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

const sign = crypto.createSign("SHA256");
sign.update(process.argv[2]);
sign.end();
const signature = sign.sign(pri);

console.log("signature:", signature.toString("hex"));
