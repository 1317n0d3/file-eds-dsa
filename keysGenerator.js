const fs = require("fs"),
  NodeRSA = require("node-rsa");

function generateKeys() {
  const key = new NodeRSA().generateKeyPair();

  const publicKey = key.exportKey("public"),
    privateKey = key.exportKey("private");

  fs.writeFile(`./keys/public.pem`, publicKey, (err) => {
    if (err) throw err;
    console.log("Public key is created successfully.");
  });
  fs.writeFile(`./keys/private.pem`, privateKey, (err) => {
    if (err) throw err;
    console.log("Private key is created successfully.");
  });
}

module.exports = {
  generateKeys,
};
