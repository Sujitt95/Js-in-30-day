// Activity 1: If-Else Statements
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let num1 = 55;
if (num1 > 0) {
    console.log("it's positive");
}
else if (num1 === 0) {
    console.log("it's zero");
}
else { "it's negative" }
// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let age = 23;
console.log(age > 18 ? "can vote" : "can't vote");

// Activity 2: Nested If-Else Statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let x = 5, y = 8, z = 2
if (x > y) {
    if (x > z) {
        console.log(`${x}is the largest`);
    }
    else {
        console.log(`${z}is the largest`);
    }
}
else if (y > x) {
    if (y > z) {
        console.log(`${y} is largest`);
    }
    else {
        console.log(`${z} is largest`);
    }
}

// Activity 3: Switch Case
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let day = 5;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuseday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("invalid input");
        break;

}

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
let reasult = 80;

switch (true) {
    case (reasult >= 90 && reasult<100):
        console.log("greade A");
        break;
    case (reasult >= 80 && reasult<90):
        console.log("greade B");
        break;
    case (reasult >= 70 && reasult<80):
        console.log("greade C");
        break;
    case (reasult >= 60 && reasult<70):
        console.log("greade D");
        break;
    case (reasult >= 50 && reasult<60):
        console.log("greade E");
        break;
    case (reasult >= 40 && reasult<50):
        console.log("greade F");
        break;

    default:
        console.log("invalid input");
        break;

}

// Activity 4: Conditional (Ternary) Operator
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let k= 34;
console.log(k%2===0?"it's a even number":"it's a odd number ");

// Activity 5: Combining Conditions
// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let year= 2000;

if(year%4===0 && !(year%100===0)){
    console.log("it's a leap year ");  
}
else if(year%400===0){
    console.log("it's leap year with 400");   
}
else{
    console.log("it's not a leap year ")
}

