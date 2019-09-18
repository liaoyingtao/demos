function sub_curry(fn) {
  const args = Array.from(arguments).slice(1);

  return function () {
    return fn.apply(this, args.concat(Array.from(arguments)));
  };
}

function curry(fn, length) {
  // 函数参数个数
  length = length || fn.length;

  return function (...args) {
    if (args.length < length) {
      var combined = [].concat(fn, args);
      return curry(sub_curry.apply(this, combined), length - args.length);
    } else {
      return fn(...args);
    }
  };
}

const fn = curry((a, b, c) => [a, b, c]);

console.log(fn("a", "b", "c"));
console.log(fn("a", "b")("c"));
console.log(fn("a")("b")("c"));
console.log(fn("a")("b", "c"));