function sub_curry(fn, args) {
  return function (...subArgs) {
    return fn.apply(this, args.concat(subArgs));
  };
}

function curry(fn, length) {
  // 函数参数个数
  length = length || fn.length;

  return function (...args) {
    if (args.length < length) {
      return curry(sub_curry.call(this, fn, args), length - args.length);
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