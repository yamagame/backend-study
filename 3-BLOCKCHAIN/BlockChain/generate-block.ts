import crypto from "crypto";
import { TextEncoder } from "util";

const utf8Encode = new TextEncoder();
const nance = Number(process.argv[2] || Math.floor(Math.random() * Number.MAX_SAFE_INTEGER));

const block = {
  // ひとつ前のブロックのハッシュ
  prevBlock: "2af7909ca08f18facc556624b02e1a5c683bb0f557137b1ef7e0028fc457715c",
  // タイムスタンプ
  timestamp: "2022-09-03T23:40:16.277Z",
  // 取引データ、一つのブロックに複数保持できる
  transactions: [
    {
      deal: {
        from: "Taro.Yamada", // 誰から
        to: "Kota.Suzuki", // 誰へ
        fee: 0.5, // いくら渡した
      },
    },
  ],
  // ナンス
  nance,
};

const array = utf8Encode.encode(JSON.stringify(block));
const hash = crypto.createHash("sha256").update(Buffer.from(array)).digest("hex");
console.log(`nance: ${nance}`);
console.log(hash);
