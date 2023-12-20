// WRITE YOUR CODE HERE


var STUDENT_NAME = ["0", "1", "2", "3", "4"];

console.log(STUDENT_NAME.length);

console.log("Welcome to the class " + STUDENT_NAME + ".");
    
console.log("Welcome to the class " + STUDENT_NAME[0] + ".");
console.log("Welcome to the class " + STUDENT_NAME[1] + ".");
console.log("Welcome to the class " + STUDENT_NAME[2] + ".");
console.log("Welcome to the class " + STUDENT_NAME[3] + ".");
console.log("Welcome to the class " + STUDENT_NAME[4] + ".");        



STUDENT_NAME[0] = "Arfin";

if (STUDENT_NAME[0] !== "0"){

    console.log(STUDENT_NAME[0] + " is in class.");
};




// bonus

console.log(STUDENT_NAME[STUDENT_NAME.length - 1])