// function sayHello(name){
//     return `Hello ${name}`
// }

// console.log("Function returns", sayHello('Callan'))

// Declare a named function that takes an array of numbers, and returns the sum, or total, of all of the numbers in the array.

function sumArray(array){
    sum = 0
    for (var currentNum of array){
        sum += currentNum
    }
    return sum
}

console.log(sumArray([1,2,3,4,5]))

answer = 1+2+3+4+5

console.log(answer)

// Define an anonymous function expression that takes two arguments:
// an object, for example, { name: 'Wojtek', age: 30 }
// a string, for exmaple, 'name'
// Your function should return true if the given string is a key on the given object and false if the object does not have a key that matches the string. Store this function in an appropriately named variable to invoke it.

var keyCheck = function(obj, keyName){
    for (var key of Object.keys(obj)){
        
        if (key === keyName){
            return true
        }
            else return false
    }
}

var dictionary =  {name: 'Wojtek', age: 30 }

console.log(Object.keys(dictionary))

console.log(keyCheck(dictionary,'name'))