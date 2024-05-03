const course = {
    courseName: "js",
    coursePrice: 9999,
    courseInstructor: "ritesh"
}

// Syntaxtically sugar

const {courseInstructor: instrct} = course

console.log(instrct)