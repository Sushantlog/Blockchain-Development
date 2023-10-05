//variable

var score = 34;
var score = 56;

console.log(score)

let points = 23;   //it will declare only one time

console.log(points)

// ===============================

// Constants

// const value = 10;

const value = 18;
console.log(value)

// Note =
// use always const and let to reinitialization 

//! Data Types Of Values

// =========================================================
//Notes = 
    // data type it of 7 type
    
    // Number = 1,2,3,4

    // string "I am String "

    // Boolean true/false

    // Null Intentionally absence of value
    
    // let score = null;
    // score = 34;
    // console.log(score)

    // Undefined Variable declare but not initial

    // let point;
    // points = 13;
    // console.log(points)

    // Object Complex data structure

    // Symbol looks like object

// =======================================================

//! String

console.log("Hello I Am Blockchain Developer")
let firstName = "Sushant";
let secondName = "Balu";
let thirdName = "Patil";
console.log(firstName,secondName,thirdName);

// ! String Concatenation

let fullName = firstName + secondName + thirdName;
console.log(fullName);

let Name = `I Want to Become good blockchain developer and my name is ${firstName} ${secondName} ${thirdName}`
console.log(Name)

// ! Getting String Character

console.log(firstName[0]);

// ! String Method 

console.log(firstName.toLowerCase())
console.log(firstName.toUpperCase())
console.log(thirdName.indexOf("i"))

// ========================================================
// Note =
// trim method it used for data can be pass other function and it can be used in data cleaning

let hobbies = "   Coding reading running  ";

// use trim method
let result = hobbies.trim();
console.log(hobbies);
console.log(result);

// ========================================================