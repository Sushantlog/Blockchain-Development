console.log("This The Javascript I am Leaning")

var a = 5;
a = a + 7;
var b = 6;
var c = "Sushant"

console.log(a + b + 8)
console.log(typeof a, typeof b, typeof c)

const a1 = 5;
// This is not allowed in const variable Because a1 is constant. 
// a1 = a1 + 5;  

// Use of let Variable. 
let s = 5;
s = s + 1;
let p = 6;

{
    let s = 66;
    let a = 69;
    console.log(s)
    console.log(a)
}
console.log(s)
console.log(a)

// Primitive data type. 
let x = "Sushant";
let y = 22;
let z = 3.55;
const w = true;
let q = undefined;
let r = null;

console.log(x,y,z,w,q,r);
console.log(typeof x,typeof y,typeof z,typeof w,typeof q,typeof r);

// Object

let o = {
    "name" : "Harry",
    "job code":5600,
    "is_handsome" : true
}

console.log(o);
o.salary = "100cr";  //add kay  
console.log(o);