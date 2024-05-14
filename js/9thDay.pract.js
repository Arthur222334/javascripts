// function apple() {
//     prompt = "what is your name?"
//     console.log("apple is a fruit");
// }

// function addTwoNumbers(num1, num2) {
//     return num1 + num2;
// }

// const result = addTwoNumbers(2, 4)
// console.log("result is : ", result);


// function loginUserFunction(username = "guest") {
//     return `${username} just logged in!`;
// }
// console.log(loginUserFunction("elepahnt"));

function calculateCartPrice(...num1) {
    return num1;
}
console.log(calculateCartPrice(3, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3))

const username = {
    name: "",
    price: 23
}

function handleObject(anyobjecct) {
    console.log(` username is ${anyobjecct.name} and the price is ${anyobjecct.price} `);
}
handleObject({
    name: "apple",
    price: 3333
})

const myNewArray = [100, 20, 30, 40, 50]
function returnSecoundValue(getArray) {
    return getArray[1]
}


console.log(returnSecoundValue(myNewArray));