console.log("Hey Sushant You are nice!")
console.log("Hey Sushant you are good!")
console.log("Hey Sushant your shirt is nice!")
console.log("Hey Sushant Your javascript Learning is good too!")    

// creating a function
function nice(name) {
    console.log("Hey "+ name + " you are nice")
    console.log("Hey "+ name + " you are good")
    console.log("Hey "+ name + " your shirt is nice")
    console.log("Hey "+ name + " your javascript Learning is good too!")
}

nice("Anna")

// sum of two number
function sum(a ,b) {
    // console.log(a + b);
    return (a+b);
}

// sum(3,5);
result = sum(3,5);
console.log("The sum of these number is :", result);

// -----------------------------------------------------

// Default Parameter 
function add(a,b,c=3) {
    return a + b + c;
}

AddResult1 = add(3,5)
AddResult2 = add(81,5)
AddResult3 = add(31,50,10)

console.log("The sum of these number is :", AddResult1);
console.log("The sum of these number is :", AddResult2);
console.log("The sum of these number is :", AddResult3);

// -------------------------------------------
console.log("----------- Arrow Function -------------");

const func1 = (x)=>{
    console.log("I am an arrow function :",x);
}

func1(55);
func1(53);
func1(88);