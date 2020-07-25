const birthday = [01, 10, 1996];
//be more descriptive
const [month, day, year] = [01, 10, 1996];
console.log(`${month}/${day}/${year}`);

const {firstName: fn, nickName} = {
    firstName: 'Luis',
    lastName: 'Hernandez',
    nickName: 'Minetito'
};

console.log(fn);
console.log(nickName);