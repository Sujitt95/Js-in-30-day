//Activity 1: Variable Declaration
//Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var num1 = 55;
console.log(num1);

//Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let name ="sujitt";
console.log(name);

// Activity 2: Constant Declaration
// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const x =true;
console.log(x);

// Activity 3: Data Types
// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
let userid = 1;
let username ="sujitt"
let islogin = true;
let address ={
    country:"india",
    state:"odisha",
    city:"bhubaneswar"
}
let experience = ["js","react","node","python","java","sprintboot"]

console.log(typeof(experience));

console.table([
    [typeof(userid)],
    [typeof(username)],
    [typeof(islogin)],
    [typeof(address)],
    [typeof(experience)]
]);


// Activity 4: Reassigning Variables
// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let laptop ="hp"
console.log(laptop);
laptop="lenovo"
console.log(laptop);



// Activity 5: Understanding const
// Task 6: Try reassigning a variable declared with const and observe the error.
const id ="A001"
id ="A018"// TypeError: Assignment to constant variable.
