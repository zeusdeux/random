'use strict';

// flatten arbitrarily nested array
// data NestedList a = Elem a | List [NestedList a]
// flatten :: NestedList a -> [a]
module.exports = function flatten(arr) {
  const _flatten = function(p, c) {
    if (Array.isArray(c)) p = p.concat(c.reduce(_flatten, []));
    else p.push(c);
    return p;
  };

  return arr.reduce(_flatten, []);
};
