//passing by value
//works only with primity types
let example1 = 1;
let example2 = example1;
example2++;
console.log(example1, ' - ', example2)
//passing by reference
// non primitive values
const example3 = [];
const example4 = example3;
example4.push('ref');
console.log(example3, ' - ', example4);
//if you want to skip the passing by reference you can do this instead
const example5 = {name : 'Luis'};
const example6 = {...example5};
//using spread operator to spread over the values from example5
example5.lastName = "Hernandez";
console.log(example5, ' - ', example6);
