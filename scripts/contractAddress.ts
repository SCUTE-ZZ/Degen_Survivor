/**
 * Remember to use this function in the root path of your hardhat project
 */

import * as fs from "fs";

export const readAddressList = function () {
  // const filePath = __dirname + "/address.json"
  return JSON.parse(fs.readFileSync("info/address.json", "utf-8"));
};

export const storeAddressList = function (addressList: object) {
  fs.writeFileSync(
    "info/address.json",
    JSON.stringify(addressList, null, "\t")
  );
};

export const readImpList = function () {
  return JSON.parse(fs.readFileSync("info/implementation.json", "utf-8"));
};

export const storeImpList = function (impList: object) {
  fs.writeFileSync(
    "info/implementation.json",
    JSON.stringify(impList, null, "\t")
  );
};

