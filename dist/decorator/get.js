"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = void 0;

var _generator = require("../generator");

var get = function get(endpoint, options) {
  return (0, _generator.decoratorGenerator)('GET')(endpoint, options);
};

exports.get = get;