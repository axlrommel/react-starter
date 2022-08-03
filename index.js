"use strict";

let fs = require("fs");
let path = require("path");

exports.get = function (event, context, callback) {
  let contents = fs.readFileSync(`build${path.sep}index.html`);
  let result = {
    statusCode: 200,
    body: contents.toString(),
    headers: { "content-type": "text/html" },
  };

  callback(null, result);
};
