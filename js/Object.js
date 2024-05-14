let mySymbol = Symbol("key1");
let apple = {
    color: "red",
    size: "big",
    [mySymbol]: "key1",
    price: 100,
    isLoggedIN: false,

};
let apple2 = {
    color: "red",
    size: "big",
    [mySymbol]: "key1",
    price: 100,
    isLoggedIN: false,

};
apple.size = "small";



console.log(apple.price, apple.color, apple.size, apple.isLoggedIN);
console.log(typeof apple[mySymbol]);
console.log(apple.size);

apple.greeting = function () {
    console.log("hello apple");
}
apple2.greeting = function () {
    console.log(`Hello JS user ,${this.name}`);
}

console.log(apple.greeting()); 
console.log(apple2.greeting());