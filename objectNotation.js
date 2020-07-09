const user = {
    firstName : 'Luis',
    lastName : 'Hernandez',
    nickName : 'coding God'
};

console.log( user.firstName + " "  + user.lastName);
console.log( user['firstName'])
//should not try to use bracket notation

for(let property in user) {
    console.log(user[property])
    //only reason to use bracket nottaion
    console.log(property)
}
