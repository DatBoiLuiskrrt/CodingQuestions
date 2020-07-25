function add (...num) {
    console.log(num);
};
add(7, 9, 7);
//rest operator takes all of the contents and serve them up in an array

//spread operator in the other hand
let number = ['am I a number?'];
let caquita = [ 2,4 ,5, ...number];
console.log(caquita);