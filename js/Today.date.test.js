const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const month = new Date().getMonth();
const day = new Date().getDate();
const year = new Date().getFullYear();


let dayString;

switch (day) {
    case 1:
    case 21:
    case 31:
        dayString = day + "st";
        break;
    case 2:
    case 22:
    case 32:
        dayString = day + "nd";
        break;
    case 3:
    case 23:
    case 33:
        dayString = day + "rd";
        break;
    default:
        dayString = day + "th"
        break;
}
switch (month) {
    case 0:
        console.log("it is januray");
        break;
    case 1:
        console.log("it is february");
        break;
    case 2:
        console.log("it is march");
        break;
    case 3:
        console.log("it is april");
        break;
    case 4:
        console.log("it is may");
        break;
    case 5:
        console.log("it is june");
        break;
    case 6:
        console.log("it is july");
        break;
    case 7:
        console.log("it is august");
        break;
    case 8:
        console.log("it is september");
        break;
    case 9:
        console.log("it is october");
        break;
    case 10:
        console.log("it is november");
        break;
    case 11:
        console.log("it is december");
        break;
    default:
        console.log("invalid month");
}

console.log(`The current date is ${dayString} ${monthNames[month]} ${year}`);