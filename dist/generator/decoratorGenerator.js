"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decoratorGenerator = void 0;

var _axios = require("axios");

var _requestGenerator = require("./requestGenerator");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var decoratorGenerator = function decoratorGenerator(method) {
  return function (endpoint, options) {
    return function (target, key, descriptor) {
      descriptor.value =
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var serviceName,
            serviceBaseURL,
            serviceBasePath,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                serviceName = target.serviceName;
                serviceBaseURL = target.serviceBaseURL;
                serviceBasePath = target.serviceBasePath;
                return _context.abrupt("return", (0, _requestGenerator.requestGenerator)(serviceName, serviceBaseURL, serviceBasePath, method, endpoint, options, _args[0]));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    };
  };
};

exports.decoratorGenerator = decoratorGenerator;