// let and conts are block scoped 
// so basically they only exist in their own block of scope
// let is the reasignment type and const is usually not able to do that
// you push and pop and array but cannot change the name

//example using var global scope
function example () {
    if (true) {
        var ex =5;
    }
    return ex;
}
console.log(example());//5
//example using let block scope
function examples () {
    if (true) {
        let exe =5;
    }
    return exe;
}
console.log(examples());

//const is a constant you cannot reasign their values
// you can modify primitive data types but cannot reasign them
const conEx = 5;
// conEx++;
