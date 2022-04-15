const fs = require("fs"),
  crypto = require("crypto"),
  CryptoJS = require("crypto-js"),
  prompt = require("prompt"),
  keysGenerator = require("./keysGenerator");

console.log(`
    1.Generate key pair in "./keys/"
    2.Create electronic digital signature for "data.txt"
    3.Verify "data.txt" by eds
    `);

prompt.start();

prompt.get(["mode"], function (err, result) {
  switch (+result.mode) {
    case 1:
      keysGenerator.generateKeys();
      break;
    default:
      return;
  }
});
