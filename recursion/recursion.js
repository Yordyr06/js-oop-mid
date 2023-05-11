// A groso modo, una funcion recursiva es aquella que se llama a si misma.
let array = [];

function recursionFn(param) {
  if (param.length < 6) {
    const number = Math.random().toFixed(2);
    param.push(number);
    console.log(param);
    recursionFn(param);
  }
};

recursionFn(array);