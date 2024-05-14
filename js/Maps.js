// chaninig method 

// const newNUms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
// const doubledNums = newNUms.add();
// console.log(doubledNums);

// const str = "hello"
// str[2]="a"
// console.log(str);

// const myNUm = [4,5,4];

// const total = myNUm.reduce((acc, curval) => {
//     console.log(`Account no is : ${acc}, Current value is : ${curval}`);
//     return acc * curval
// }, 0)

// console.log(total);

const shoppingCart =
    [
        {
            CourseName: "Javascript",
            price: 1000,
            interval: "5 hours",
        },
        {
            CourseName: "Python",
            price: 1000,
            interval: "5 hours",

        },
        {
            CourseName: "Application development",
            price: 1000,
            interval: "5 hours",
        },
    ]

let totalCourese = shoppingCart.reduce((acc, item) => {

    console.log(`The course name you purchased is${item.CourseName} and the price , interval are ${item.price}, ${item.interval}`);
    return item.price + acc;
}, 1);


console.log("Rs " + totalCourese);