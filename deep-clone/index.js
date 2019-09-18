function clone(target) {
  const type = typeof target;
  if (type !== 'object') {
    return target;
  }

  let cloneTarget = Array.isArray(target) ? [] : {};
  for (const key in target) {
    cloneTarget[key] = clone(target[key]);
  }
  
  return cloneTarget;
}

const target = [1,2,3];

const copy = clone(target);
console.log('copy: ', copy);

