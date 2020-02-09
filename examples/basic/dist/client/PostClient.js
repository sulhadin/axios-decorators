"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostClient = void 0;

var _axios = require("axios");

var _axiosDecorators = require("axios-decorators");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

var PostClient = (_dec = (0, _axiosDecorators.Client)(), _dec2 = (0, _axiosDecorators.GET)('/posts'), _dec3 = (0, _axiosDecorators.GET)('/posts/:id'), _dec4 = (0, _axiosDecorators.POST)('/posts'), _dec5 = (0, _axiosDecorators.PUT)('/posts/:id'), _dec6 = (0, _axiosDecorators.PATCH)('/posts/:id'), _dec7 = (0, _axiosDecorators.DELETE)('/posts/:id'), _dec(_class = (_class2 =
/*#__PURE__*/
function () {
  function PostClient() {
    _classCallCheck(this, PostClient);
  }

  _createClass(PostClient, null, [{
    key: "getPostList",
    value: function getPostList() {}
  }, {
    key: "getPost",
    value: function getPost(args) {}
  }, {
    key: "createPost",
    value: function createPost(args) {}
  }, {
    key: "putPost",
    value: function putPost(args) {}
  }, {
    key: "patchPost",
    value: function patchPost(args) {}
  }, {
    key: "deletePost",
    value: function deletePost(args) {}
  }]);

  return PostClient;
}(), (_applyDecoratedDescriptor(_class2, "getPostList", [_dec2], Object.getOwnPropertyDescriptor(_class2, "getPostList"), _class2), _applyDecoratedDescriptor(_class2, "getPost", [_dec3], Object.getOwnPropertyDescriptor(_class2, "getPost"), _class2), _applyDecoratedDescriptor(_class2, "createPost", [_dec4], Object.getOwnPropertyDescriptor(_class2, "createPost"), _class2), _applyDecoratedDescriptor(_class2, "putPost", [_dec5], Object.getOwnPropertyDescriptor(_class2, "putPost"), _class2), _applyDecoratedDescriptor(_class2, "patchPost", [_dec6], Object.getOwnPropertyDescriptor(_class2, "patchPost"), _class2), _applyDecoratedDescriptor(_class2, "deletePost", [_dec7], Object.getOwnPropertyDescriptor(_class2, "deletePost"), _class2)), _class2)) || _class);
exports.PostClient = PostClient;