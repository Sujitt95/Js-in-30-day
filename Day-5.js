// Activity 1: Function Declaration
// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function checknum(num){
    return num%2==0?"it's even":"it's odd"
}
console.log(checknum(5));

// Task 2: Write a function to calculate the square of a number and return the result.
let find_square =function(num){
    return num*2
}

console.log(find_square(2));

// Activity 2: Function Expression
// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const find_max =function(x,y){
    return x>y?`max is ${x}`:`max is ${y}`
}
console.log(find_max(6,8));
         //or
const max_find=function(x,y){
    return Math.max(x,y)
}
console.log(max_find(10,66));


// Task 4: Write a function expression to concatenate two strings and return the result.
function add_str(x,y){
    return x.concat(y)
}
console.log(add_str("hii"," skkk"));

// Activity 3: Arrow Functions
// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
let sum=(x,y)=>{
    return x+y
}
console.log(sum(5,6));

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
let check_char=(str,k)=>{
    return str.includes(k)
}
console.log(check_char("sujitt","t"));
            //or
let char_chack=(str,k)=>{
    if(str.indexOf(k)>=0){
        return true
    }
    else{
        return false
    }
}
console.log(char_chack("sujitt","f"));

// Activity 4: Function Parameters and Default Values
// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function produt(x,y=2){
    return x*y;
}
console.log(produt(5));
console.log(produt(5,10));

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greeting(name,age=18){
    return `hi ${name} how are you, you can give vote because you are ${age}+`
}
console.log(greeting("bsufh",55));

// Activity 5: Higher-Order Functions
// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function msg(){
  console.log("this is msg");
}
let hig_fun=function(fun,x){
    for(let i=1;i<=x;i++){
        fun()
    }
    return `function execute ${x} times`;
}
console.log(hig_fun(msg,3));

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function f1(num){
    return num+10
}
function f2(num){
    return num*2
}

function main_f(fun1,fun2,val){
    return fun2(fun1(val))
}
console.log(main_f(f1,f2,5));
