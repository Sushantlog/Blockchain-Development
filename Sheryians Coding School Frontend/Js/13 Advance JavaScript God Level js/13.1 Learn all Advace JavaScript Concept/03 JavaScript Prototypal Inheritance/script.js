// Prototypal Inheritance

function makeHuman (name,age){
    this.name = name;
    this.age = age;
}

const human1 = new makeHuman("Harsh",25);

// eg 2
function MakeHumans(){
    this.name = "Sushant";
    this.age = 25;
}

let ans = new MakeHumans();

function abcd(){
    this.username = "Pavan";
    var calc = 12*3;  //use to he lekin he this me nahi add kiya he
}

var answer = new abcd()

// =====================================
// part 2 
function Human(){
    this.name = "Anna";
    this.age = 22;
}

const Human01 = new Human();
const Human02 = new Human();


function Person(name, age){
    this.name = name;
    this.age = age;
}

const Man1 = new Person("Parth",17);
const Man2 = new Person("Prachi",20);

// ======================================

function Person(name, age){
    this.name = name;
    this.age = age;
    this.printMyName = function(){
        console.log(this.name);
    }
}

const Man11 = new Person("Parth",17);
const Man22 = new Person("Prachi",20);

// ========== Prototypal inheritance ================

function makePerson(name,age){
    this.name = name;
    this.age = age;
}

makePerson.prototype.printMyName = function(){
    console.log(this.name);
}

const Person1 = new makePerson("Ujwala", 22);
const Person2 = new makePerson("Payal",15);