"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replaceParams = replaceParams;

// Source: https://stackoverflow.com/a/37949642/2094521
function replaceParams(str, findArray, replaceArray) {
  var i;
  var regex = [];
  var map = {};

  for (i = 0; i < findArray.length; i++) {
    regex.push(findArray[i].replace(/([-[\]{}()*+?.\\^$|#,])/g, '\\$1'));
    map[findArray[i]] = replaceArray[i];
  }

  regex = regex.join('|');
  str = str.replace(new RegExp(regex, 'g'), function (matched) {
    return map[matched];
  });
  return str;
}