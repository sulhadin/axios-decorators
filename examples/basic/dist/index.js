"use strict";

require("regenerator-runtime/runtime");

var _axiosDecorators = require("axios-decorators");

var _client = require("./client");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee() {
  var postList, postById, createPost, putPost, patchPost, deletePost;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // Set base URL for whole clients.
          _axiosDecorators.ClientConfigurator.setBaseURL('https://jsonplaceholder.typicode.com'); // Open debug logs.


          _axiosDecorators.ClientLogger.setStatus(true); // Get post list


          _context.next = 4;
          return _client.PostClient.getPostList();

        case 4:
          postList = _context.sent;
          console.table({
            status: "".concat(postList.statusText, " (").concat(postList.status, ")"),
            method: postList.config.method,
            url: postList.config.url
          }); // Get post by id

          _context.next = 8;
          return _client.PostClient.getPost({
            path: {
              id: '1'
            }
          });

        case 8:
          postById = _context.sent;
          console.table({
            status: "".concat(postById.statusText, " (").concat(postById.status, ")"),
            method: postById.config.method,
            url: postById.config.url
          }); // Create a post

          _context.next = 12;
          return _client.PostClient.createPost({
            data: {
              userId: 1,
              title: 'Post title',
              body: 'Post body'
            }
          });

        case 12:
          createPost = _context.sent;
          console.table({
            status: "".concat(createPost.statusText, " (").concat(createPost.status, ")"),
            method: createPost.config.method,
            url: createPost.config.url
          }); // Put data to the post

          _context.next = 16;
          return _client.PostClient.putPost({
            path: {
              id: '1'
            },
            data: {
              userId: 2,
              title: 'Modified post title',
              body: 'Modified post body'
            }
          });

        case 16:
          putPost = _context.sent;
          console.table({
            status: "".concat(putPost.statusText, " (").concat(putPost.status, ")"),
            method: putPost.config.method,
            url: putPost.config.url
          }); // Patch the post

          _context.next = 20;
          return _client.PostClient.patchPost({
            path: {
              id: '1'
            },
            data: {
              body: 'Modified post body for patch'
            }
          });

        case 20:
          patchPost = _context.sent;
          console.table({
            status: "".concat(patchPost.statusText, " (").concat(patchPost.status, ")"),
            method: patchPost.config.method,
            url: patchPost.config.url
          }); // Delete the post

          _context.next = 24;
          return _client.PostClient.deletePost({
            path: {
              id: '1'
            }
          });

        case 24:
          deletePost = _context.sent;
          console.table({
            status: "".concat(deletePost.statusText, " (").concat(deletePost.status, ")"),
            method: deletePost.config.method,
            url: deletePost.config.url
          });

        case 26:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();