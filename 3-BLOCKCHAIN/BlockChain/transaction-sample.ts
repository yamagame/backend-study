import crypto from "crypto";
import fs from "fs";
import path from "path";

const keys = JSON.parse(
  fs.readFileSync(path.join(__dirname, "sample-keys", "ec-keys.json"), "utf-8")
);

const transaction = {
  // 自分のパブリックキー
  publickKey: keys.public,
  // 取引データ(deal)のハッシュをプライベートキーで暗号化したもの。
  encryptedDealHash: "XXXX",
  // 署名の対象データ
  deal: {
    from: "自分のビットコインID", // 誰から
    to: "相手のビットコインID", // 誰へ
    fee: 0.5, // いくら渡した
  },
};

// 取引データをプライベートキーで署名する
const pri = crypto.createPrivateKey({
  key: Buffer.from(keys.private, "hex"),
  format: "der",
  type: "pkcs8",
});

const sign = crypto.createSign("SHA256");
sign.update(JSON.stringify(transaction.deal));
sign.end();
const signature = sign.sign(pri);

console.log(signature.toString("hex"));
