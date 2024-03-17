console.log("Hello I am conditional")

// if-else 
let age = 17;
let grace = 2

if((age+grace) > 18){
    console.log("You can drive");
}
else{
    console.log("You Cannot drive");
}

// Operator
console.log(age + grace);
console.log(age - grace);
console.log(age * grace);
console.log(age / grace);
console.log(age % grace);  //Modulo operator 
console.log(age ** grace); //Exponential operator 

// Assignment Operator

age += grace
console.log(age);

age -= grace
console.log(age);

age = 10;
console.log(age);
// -----------------------------------

// Comparison operator 

let Age = 18

if(Age != 18){
    console.log("You can drive");
}
else{
    console.log("You Cannot drive");
}

// === Operator   
// This code is not run in a vs code. We can run in Powershell. 
// "3" === 3 =>false
// "3" === "3" => true

// -------------------------------

//if else if else ladder

let Avg_age = 0;

if(Avg_age == 18){
    console.log("You can drive");
}

else if(Avg_age == 0){
    console.log("are you kidding");
}

else{
    console.log("You Cannot drive");
}

// ---------------------------------------

// Ternary Operator
// This code is run in Terminal,Powershell 
// > a = 6
// 6
// > b = 8
// 8
// > c = a>b ? (a-b) : (b-a)
// 2
// > c = a<b ? (a-b) : (b-a)
// -2
// >

a = 6;
b = 8;
let c = a>b ? (a-b) : (b-a)


/*
Translates to 
if(a>b){
    let c = a - b;
}
else{
    let c = b - a;
}
*/

