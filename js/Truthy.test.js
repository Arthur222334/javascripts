// // falsy value : 0, -0, BigInt, 0n, "", null, Undefined, NaN.
// // truthy value : "0",'false'," ",[], {}, function(){}, new Object()

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("obj is empty");
// } else {
//     console.log("it not");
// }



// let val1;


// val1 = 5 ?? 10
// vla3 = null ?? undefined
// console.log(vla3)

// vl1 = null ?? undefined 

// console.log(vl1)

const apple = { name: 'mango' }
const banana = apple
apple.age = 21
console.log(banana)