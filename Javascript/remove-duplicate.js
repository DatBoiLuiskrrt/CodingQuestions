const nums = [1, 1, 2, 2, 3, 3, 3];

const numSet = new Set();

console.log(numSet);

//this is how you remove duplicates from an array
//you can loop through the array
let total = [];
nums.map( (x) => {
    if(!total.includes(x)) {
        total.push(x);
    }
});
console.log(total);