"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.post = void 0;

var _generator = require("../generator");

var post = function post(endpoint, options) {
  return (0, _generator.decoratorGenerator)('POST')(endpoint, options);
};

exports.post = post;