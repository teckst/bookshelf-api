
module.exports = function (results, meta = {}) {
  let payload = {results: results.toJSON(), meta: meta};

  if (results.pagination) {
    payload.meta.pagination = results.pagination;
  }

  return payload;
}
