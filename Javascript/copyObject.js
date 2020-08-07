const user = { 
    firstName: "Elber",
    lastName: "Gudo",
    nickName: "Luis",
    streetName: "El Pitudo"
};

const user1 = user;

const user2 = JSON.stringify(user);
const user3 = {...user};

console.log(Object.is(user, user2));
//object.is is used to check if they are both equal