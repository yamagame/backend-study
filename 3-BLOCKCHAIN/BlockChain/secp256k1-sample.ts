// secp256k1-node
// https://github.com/cryptocoinjs/secp256k1-node

const { randomBytes } = require("crypto");
const secp256k1 = require("secp256k1");

const msg = randomBytes(32);

// secp256k1 の場合
{
  let privKey;
  do {
    privKey = randomBytes(32);
  } while (!secp256k1.privateKeyVerify(privKey));

  const pubKey = secp256k1.publicKeyCreate(privKey);

  // sign the message
  const sigObj = secp256k1.ecdsaSign(msg, privKey);

  // verify the signature
  console.log(secp256k1.ecdsaVerify(sigObj.signature, msg, pubKey));
  // => true
}

// cryptoのsecp256k1 の場合
import crypto from "crypto";

{
  const ecdh = crypto.createECDH("secp256k1");
  ecdh.generateKeys();

  const privateKey = ecdh.getPrivateKey("hex");
  const publicKey = ecdh.getPublicKey("hex");

  console.log(`privateKey: ${privateKey}`);
  console.log(`publicKey: ${publicKey}`);

  const sigObj2 = secp256k1.ecdsaSign(msg, Buffer.from(privateKey, "hex"));

  console.log(Buffer.from(sigObj2.signature).toString("hex"));

  // verify the signature
  console.log(secp256k1.ecdsaVerify(sigObj2.signature, msg, Buffer.from(publicKey, "hex")));
  // => true
}

{
  const keys = crypto.generateKeyPairSync("ec", {
    namedCurve: "secp256k1",
  });

  console.log(keys.privateKey.export({ type: "pkcs8", format: "der" }).toString("hex"));
  console.log(keys.publicKey.export({ type: "spki", format: "der" }).toString("hex"));

  // console.log(keys.privateKey.toString("hex"));

  var sign = crypto.createSign("SHA256");
  sign.write("somedata");
  sign.end();
  var signature = sign.sign(keys.privateKey, "hex");
}
