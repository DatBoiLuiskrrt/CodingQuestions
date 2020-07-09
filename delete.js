//allows us to delete a property of an object
//should try not to use
//only deletes properties not entire objects!!
const user = {
    firstName : 'Luis',
    middleName : 'Angel',
    lastName : 'Hernandez',
    nickName : 'Minetito Hermosho'
};
delete user.firstName;
console.log(user.hasOwnProperty('firstName'));
console.log(user);