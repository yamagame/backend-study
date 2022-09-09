import secureRandom from "secure-random";
import base58 from "bs58";
import { ec } from "elliptic";

const ecdsa = new ec("secp256k1");
const sha256 = require("js-sha256");
const ripemd160 = require("ripemd160");

const max = Buffer.from("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364140", "hex");

let isInvalid = true;
let privateKey;

while (isInvalid) {
  privateKey = secureRandom.randomBuffer(32);
  if (Buffer.compare(max, privateKey) === 1) {
    isInvalid = false;
  }
}

if (privateKey) {
  console.log("> Private key: ", privateKey.toString("hex"));

  // const keys = ecdsa.keyFromPrivate(
  //   Buffer.from("04f66511d561d6a95642cadcee0e00ee9ae9296be15baef5a883395bf2741778", "hex")
  // );
  const keys = ecdsa.keyFromPrivate(privateKey);
  const publicKey = keys.getPublic("hex");
  console.log("Public key created", publicKey);

  let hash = sha256(Buffer.from(publicKey, "hex"));
  let publicKeyHash = new ripemd160().update(Buffer.from(hash, "hex")).digest();

  const step1 = Buffer.from("00" + publicKeyHash.toString("hex"), "hex");
  const step2 = sha256(step1);
  const step3 = sha256(Buffer.from(step2, "hex"));
  const checksum = step3.substring(0, 8);
  const step4 = step1.toString("hex") + checksum;
  const address = base58.encode(Buffer.from(step4, "hex"));

  console.log("address: " + address);
}
