const greeting = (firstName, lastName) => {
  console.log(1);
  return `hello, ${firstName} ${lastName}`;
};

const toUpper = str => {
  console.log(2);
  return str.toUpperCase();
};

const sayBye = str => {
  console.log(3);
  return str + ', 88!';
};

const fn = compose(sayBye, toUpper, greeting);
console.log(fn('john', 'snow'));

function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

// function compose(...funcs) {
//   return (...args) => {
//     let temp;

//     funcs.reverse().map(fun => {
//       temp = temp ? fun(temp) : fun(...args);
//     });

//     return temp;
//   }
// }

