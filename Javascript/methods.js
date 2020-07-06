// map vs filter vs reduce
//reduce is there to allow you to get a single number
const prices = [1, 2, 3, 10, 20, 30];

const mapExample = prices.map( (value,i) => i - 1);
console.log(mapExample);
const filterExample = prices.filter( (value) => value < 10);
console.log(filterExample);
const reduceExample = prices.reduce( (total, current) => {
    return total += current;
});
console.log(reduceExample);
const reduceArrayExample = prices.reduce( (accumulator, value) => {
    //accumulator is the total
    // value is the current value 
    // here we are creating a new variable in which we are assigning value and adding one the trick here is that
    // value represent every single number inside the array so basically you are adding 1 to every element in the array
    
    const newValue = value + 1;
    // if (newValue <= 10) {
    accumulator.push(newValue);
    // }
    return accumulator;
},[])
console.log(reduceArrayExample);
console.log(prices);



