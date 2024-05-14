// javascripts Execution context 
// it runs in 2 phases
// global execution context it is refered as this 
// browserr global execution context this is referd as windows object
// node.js global execution context this is refered as global object
//  all are executed in single thread
//  global execution context and  functional exection context


const balance = 100;

if (balance > 100) {
    console.log("balance is lower please recharge");
} else if (balance < 100) {
    console.log("recharge is not needed, balance is sufficient");
} else if (balance == 100) {
    console.log("recharge is needed in near future")
} else {
    console.log(`the balance is ${balance}`)
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (userLoggedIn && loggedInFromGoogle) {
    console.log("you can buy any things available in the mart");
}
