//undefined, null, NaN, 0, '', false
//anything that evaluates to false

const example1 = undefined;
const example2 = null;
const example3 = NaN;
const example4 = 0;
const example5 = '';
const example6 = false;

console.log(!!example1);
//  !! is the same as using Boolean() 
console.log(Boolean(example1));
console.log(!!example2);
console.log(!!example3);
console.log(!!example4);
console.log(!!example5);
console.log(!!example6);