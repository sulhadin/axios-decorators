"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClientConfigurator = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ClientConfigurator =
/*#__PURE__*/
function () {
  function ClientConfigurator() {
    _classCallCheck(this, ClientConfigurator);
  }

  _createClass(ClientConfigurator, null, [{
    key: "setBaseURL",
    value: function setBaseURL(baseURL) {
      this.baseURL = baseURL;
    }
  }, {
    key: "setHeaders",
    value: function setHeaders(headers) {
      this.headers = headers;
    }
  }, {
    key: "getBaseURL",
    value: function getBaseURL(serviceName) {
      if (typeof this.baseURL === 'function') {
        return this.baseURL(serviceName);
      }

      return this.baseURL;
    }
  }, {
    key: "getHeaders",
    value: function getHeaders(serviceName) {
      if (typeof this.headers === 'function') {
        return this.headers(serviceName);
      }

      return this.headers;
    }
  }]);

  return ClientConfigurator;
}();

exports.ClientConfigurator = ClientConfigurator;

_defineProperty(ClientConfigurator, "baseURL", void 0);

_defineProperty(ClientConfigurator, "headers", {});