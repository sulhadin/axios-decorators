"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestGenerator = void 0;

var _axios = _interopRequireWildcard(require("axios"));

var _ClientConfigurator = require("../util/ClientConfigurator");

var _util = require("../util");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var requestGenerator = function requestGenerator(serviceName, serviceBaseURL, serviceBasePath, method, apiEndpoint, methodOptions, requestArgs) {
  _util.ClientLogger.print('--- --- ---');

  var baseURL = serviceBaseURL ? serviceBaseURL : _ClientConfigurator.ClientConfigurator.getBaseURL(serviceName);
  var headers = methodOptions && methodOptions.headers ? methodOptions.headers : _ClientConfigurator.ClientConfigurator.getHeaders(serviceName);

  if (headers && typeof headers === 'function') {
    _util.ClientLogger.print('Header variable is a function.');

    headers = headers();
  }

  var endpoint = apiEndpoint;

  if (serviceBasePath) {
    endpoint = "".concat(serviceBasePath).concat(endpoint);
  }

  var url = "".concat(endpoint);

  if (baseURL) {
    url = "".concat(baseURL).concat(endpoint);
  }

  var data = {};
  var params = {};

  _util.ClientLogger.print('Method\n', method);

  _util.ClientLogger.print('BaseURL\n', baseURL);

  _util.ClientLogger.print('Endpoint\n', endpoint);

  _util.ClientLogger.print('URL\n', url);

  if (requestArgs) {
    if (requestArgs.path) {
      var findArray = Object.keys(requestArgs.path).map(function (item) {
        return ":".concat(item);
      });
      var replaceArray = Object.values(requestArgs.path);
      url = (0, _util.replaceParams)(url, findArray, replaceArray);

      _util.ClientLogger.print('Path variables\n', requestArgs.path);
    }

    if (requestArgs.data) {
      data = requestArgs.data;

      _util.ClientLogger.print('Data\n', data);
    }

    if (requestArgs.params) {
      params = requestArgs.params;

      _util.ClientLogger.print('Params\n', params);
    }
  }

  return (0, _axios["default"])({
    method: method,
    url: url,
    data: data,
    params: params,
    headers: headers
  });
};

exports.requestGenerator = requestGenerator;