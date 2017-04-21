"use strict";

module.exports = function (results) {
  var meta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var payload = { results: results.toJSON(), meta: meta };

  if (results.pagination) {
    payload.meta.pagination = results.pagination;
  }

  return payload;
};