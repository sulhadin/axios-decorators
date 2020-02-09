"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClientLogger = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ClientLogger =
/*#__PURE__*/
function () {
  function ClientLogger() {
    _classCallCheck(this, ClientLogger);
  }

  _createClass(ClientLogger, null, [{
    key: "print",
    value: function print() {
      if (this.status) {
        var _console;

        (_console = console).log.apply(_console, arguments);
      }
    }
  }, {
    key: "table",
    value: function table() {
      if (this.status) {
        var _console2;

        (_console2 = console).table.apply(_console2, arguments);
      }
    }
  }, {
    key: "setStatus",
    value: function setStatus(status) {
      this.status = status;
    }
  }]);

  return ClientLogger;
}();

exports.ClientLogger = ClientLogger;

_defineProperty(ClientLogger, "status", false);