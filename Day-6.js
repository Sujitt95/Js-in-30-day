// Activity 1: Array Creation and Access
// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
let arr =[1,2,3,4,5];
console.log(arr);

// Task 2: Access the first and last elements of the array and log them to the console.
console.log(`the first element on arr is ${arr[0]}`);
console.log(`the last element of arr is ${arr[arr.length-1]}`);

// Activity 2: Array Methods (Basic)
// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
arr.push(6)
console.log("new arr after push ",arr);

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
arr.pop()
console.log("new arr after pop ",arr);

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
arr.shift();
console.log("new arr after shift", arr);

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
arr.unshift(1)
console.log("nwe arr after unshift",arr);

// Activity 3: Array Methods (Intermediate)
// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let newarr=arr.map((value)=>{
    return value*2
})
console.log("value double using map the new arr is ",newarr);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
let evenarr=arr.filter((value)=>{
    return value%2==0
})
console.log("after filter ",evenarr);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
let sum = arr.reduce((acc,curt)=>{
    acc+=curt
    return acc;
})
console.log(sum);
// my own task to find max using reduce
let max =arr.reduce((acc,curt)=>{
    if(curt>acc){
        acc=curt
    }
    return acc
})
console.log("using reduce ",max);


// Activity 4: Array Iteration
// Task 10: Use a for loop to iterate over the array and log each element to the console.
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
arr.forEach((value) => {
    console.log(value);
});

// Activity 5: Multi-dimensional Arrays
// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
let matrix=[[0,1,2],
            [3,4,5],
            [6,7,8]]
console.log(matrix);
// Task 13: Access and log a specific element from the two-dimensional array.
console.log("the element of (1,2)",matrix[1][2]);
