// パブリックキーで署名を検証
import crypto from "crypto";
import fs from "fs";
import path from "path";

const keys = JSON.parse(
  fs.readFileSync(path.join(__dirname, "sample-keys", "ec-keys.json"), "utf-8")
);

const pub = crypto.createPublicKey({
  key: Buffer.from(keys.public, "hex"),
  format: "der",
  type: "spki",
});

// 署名の確認
const verify = crypto.createVerify("SHA256");
verify.update(process.argv[2]);
verify.end();
console.log(verify.verify(pub, Buffer.from(process.argv[3], "hex")));
