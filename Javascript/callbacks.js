const arr = [1,2,3,4,5];
const arr2 = arr.map( x => x + 10);
console.log(arr2);

// you can also do this instead
const arr3 = arr.map(add5);
function add5 (val) {
    return val + 5;
}
console.log(arr3);