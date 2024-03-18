console.log("heello")

// variable = let , const , var 

const accountIdName = "Mudraksh"
let accountEmail = "akash@google.com"
var accountPassword = "12345"
accountCity = "kanpur"

// accountIdName = 'google' // not allowed assing the value in const/
console.log(accountIdName)

accountEmail = "hdfc@google.com"
accountPassword = "th393534"
accountCity = "lucknow"
accountState = "Uttar Pradesh"
let contry;

console.table([accountIdName , accountEmail , accountPassword , accountCity , accountState])
console.table(typeof([accountIdName , accountEmail , accountPassword , accountCity , accountState]))


// // Get the console object
// const consoleMethods = Object.getOwnPropertyNames(console);

// // Filter out non-function properties
// const consoleFunctions = consoleMethods.filter(method => typeof console[method] === 'function');

// // Print out the list of console methods
// consoleFunctions.forEach(method => console.log(method));

"use strict"; // treat all js newer version of javascript

let x = 5;
let y = 5;

console.assert(x === y, "Values of x and y should be equal"); // Assertion fails, logs the message

// console.alert(3+3) cant use now  we are using node.js not browser


let name = "Akash Mishra"
let age = 21
let isLoggedIn = false

// number , null , BigInt , Boolean , undefined , String , Symbol

// object 

console.log(typeof null)



// conversion and operation 

let score = "33"
let valueInNumber = Number(score)
console.log(typeof(score))
console.log(typeof(valueInNumber))



// string 

let string_1 = "Hello"
let string_2 = " Akash Mishra"
let concatinated_string = string_1 + string_2
console.log(concatinated_string[ 1])




// always remember datatypes should be same in comparisions

// primitive and non-primitive 
// primitive ====== call by value (copy)
// nnbbssu : Number , Null , Boolean , Bigint , Symbol , Stirng, undefined

// not-primitive (referance type)
// Array , Objects , Functions



let is_Number = 12345.7890
let is_Null = null
let isLoggedIn_ = false
let is_Bigint = 23456789765 ** 56789
let is_Stirng = "hello"
let is_undefined = undefined


let carry = ["hanuman" , "shaktiman" , "krish" , "superman" , "batman"]

let obj = {
    name: "akash Mishra",
    age : 21
}

const myfunc = function(){

    console.log("Hello Everyone")

}

console.log(typeof(myfunc))