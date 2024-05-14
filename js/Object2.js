// singleton
// const tinder = new Object();
//non singleton
// const tinder = {}
// tinder.id = "134533";
// tinder.name = "sammy";

// console.log(tinder);
const regularUser = {
    email: "apple.gmaol.com",
    fullname: {
        customer: {
            userfirstName: "John",
            userLastName: "doe"
        }
    }
}
console.log(Object.keys(regularUser));
console.log(Object.values(regularUser));
console.log(Object.entries(regularUser));
console.log(regularUser.fullname.customer.hasOwnProperty('userLastName'));
