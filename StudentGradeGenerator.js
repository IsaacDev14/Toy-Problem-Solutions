prompt = require('prompt-sync')();

let studentMarks = prompt("Enter the student marks: ");
studentMarks = parseInt(studentMarks);

if (studentMarks >= 80) {
    console.log("A");
}
else if (studentMarks >= 60) {
    console.log("B");
}
else if (studentMarks >= 50) {
    console.log("C");
}
else if (studentMarks >= 40) {
    console.log("D");
}
else {
    console.log("E");
}

