"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.put = void 0;

var _generator = require("../generator");

var put = function put(endpoint, options) {
  return (0, _generator.decoratorGenerator)('PUT')(endpoint, options);
};

exports.put = put;