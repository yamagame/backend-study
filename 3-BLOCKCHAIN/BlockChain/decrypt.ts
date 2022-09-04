import crypto from "crypto";
import fs from "fs";
import path from "path";

const publicKey = fs.readFileSync(path.join(__dirname, "sample-keys", "public-key.pem"), "utf8");

const data = process.argv[2];

const encrypted = Buffer.from(data, "base64");
const decrypted = crypto.publicDecrypt(publicKey, encrypted);
console.log(decrypted.toString("utf8"));
