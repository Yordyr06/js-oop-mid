const A = {
  1: '1',
  2: '2',
  3: {
    4: '4',
    5: '5',
  },
};

const B = JSON.stringify(A);
const C = JSON.parse(B);