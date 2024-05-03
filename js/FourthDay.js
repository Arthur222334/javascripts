// // let sum = 0;
// // for (let i = 0; i <= 5; i++) {
// //     sum = sum + i;
// // }
// // console.log("sum : ", sum);

// // let i = 0;
// // let sum1 = 0;
// // while (i <= 5) {
// //     i++;
// //     sum1 = sum1 + i;
// // }
// // console.log("sum1 : ", sum1); console.log("i : ", i);


// // for of loop
// // let str = "apnacollege"
// // let length = 0;

// // for (const i of str) {

// //     console.log("i : ", i);
// //     length++;
// // }
// // console.log("length : ", length);
// // for- in loop

// let student = {
//     name: "Student",
//     age: 23,
// };

// for
let apple = {
    name: "Apple",
    typeof: "string",
    price: 100,
    quantity: 2,
    color: "red",
    weight: 100,
    isFruit: true,
};
for (const key in apple) {
    console.log("the value of apple are : " + apple[key]);
}