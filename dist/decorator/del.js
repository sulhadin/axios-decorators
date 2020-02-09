"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.del = void 0;

var _generator = require("../generator");

var del = function del(endpoint, options) {
  return (0, _generator.decoratorGenerator)('DELETE')(endpoint, options);
};

exports.del = del;