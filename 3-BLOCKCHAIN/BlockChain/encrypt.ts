import crypto from "crypto";
import fs from "fs";
import path from "path";

const privateKey = fs.readFileSync(path.join(__dirname, "sample-keys", "private-key.pem"), "utf8");

const buffer = Buffer.from(process.argv[2]);
const encrypted = crypto.privateEncrypt(privateKey, buffer);
const data = encrypted.toString("base64");

console.log(data);
