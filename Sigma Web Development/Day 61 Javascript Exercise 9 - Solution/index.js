let random = Math.random();

let a = prompt("Enter first Number");
let b = prompt("Enter Second Number");
let c = prompt("Enter Operation Number");

let obj ={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"*",
}

if(random>0.1){
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
else{
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}