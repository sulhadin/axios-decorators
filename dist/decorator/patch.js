"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patch = void 0;

var _generator = require("../generator");

var patch = function patch(endpoint, options) {
  return (0, _generator.decoratorGenerator)('PATCH')(endpoint, options);
};

exports.patch = patch;