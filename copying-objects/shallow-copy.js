const obj1 = {
  a: 'a',
  b: 'b',
  c: {
    d: 'd',
    e: 'e',
  },
};

const obj2 = {};

for(prop in obj1) {
  obj2[prop] = obj1[prop];
};

const obj3 = Object.assign({}, abj1);
const obj4 = Object.create({}, obj1);

console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);