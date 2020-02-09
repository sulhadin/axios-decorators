"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.client = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var client = function client(options) {
  return function (target) {
    if (_typeof(options) === 'object') {
      target.serviceName = options && options.name || target.name;

      if (options) {
        if (options.baseURL) {
          target.serviceBaseURL = options.baseURL;
        }

        if (options.basePath) {
          target.serviceBasePath = options.basePath;
        }
      }
    } else {
      target.serviceName = options || target.name;
    }

    return target;
  };
};

exports.client = client;