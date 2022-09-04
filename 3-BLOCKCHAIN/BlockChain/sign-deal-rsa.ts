import crypto from "crypto";
import fs from "fs";
import path from "path";
import { TextEncoder } from "util";

const utf8Encode = new TextEncoder();

const deal = {
  from: "Taro.Yamada", // 誰から
  to: "Kota.Suzuki", // 誰へ
  send: "10 yen", // いくら渡した
};

// deal のハッシュを計算
const dealArray = utf8Encode.encode(JSON.stringify(deal));
const dealHash = crypto.createHash("sha256").update(Buffer.from(dealArray)).digest("hex");

// プライベートキーで dealHash 暗号化
const privateKey = fs.readFileSync(path.join(__dirname, "private-key.pem"), "utf8");
const buffer = Buffer.from(dealHash);
const encrypted = crypto.privateEncrypt(privateKey, buffer);
const dealSign = encrypted.toString("base64");

const block = {
  prev: "2af7909ca08f18facc556624b02e1a5c683bb0f557137b1ef7e0028fc457715c",
  dealSign,
  deal,
  nance: 4545675,
};
const array = utf8Encode.encode(JSON.stringify(block));
const blockHash = crypto.createHash("sha256").update(Buffer.from(array)).digest("hex");
console.log(`dealHash: ${dealHash}`);
console.log(`dealSign: ${dealSign}`);
console.log(`blockHash: ${blockHash}`);
