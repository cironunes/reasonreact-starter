'use strict';

var List = require("bs-platform/lib/js/list.js");

function sum(numbers) {
  return List.fold_right((function (a, b) {
                return a + b | 0;
              }), numbers, 0);
}

exports.sum = sum;
/* No side effect */
