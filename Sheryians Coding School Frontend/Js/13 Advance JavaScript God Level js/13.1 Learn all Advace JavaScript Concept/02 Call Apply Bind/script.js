// call apply bind

// Call
const obj = {name : "Sushant"};

function abcd(){
    console.log(this);
}

abcd.call(obj);

// eg 2
function abc(){
    console.log(this);
}
abc.call(); 

// apply 
const obj1 = {name : "Anna"};

function abc(a,b,c){
    console.log(this,a,b,c);
}

abc.apply(obj1,[1,2,3]);

// bind
const obj2 = {name : "Pavan"}

function ab(){
    console.log(this);
}

const baadmechalaanekeliyefun = ab.bind(obj2);

baadmechalaanekeliyefun();