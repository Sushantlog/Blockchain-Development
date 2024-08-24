// global - Window
console.log(this);

// function - window
function abcd(){
    console.log(this);
}
abcd();

// method - object
var obj = {
    // name is Field and uski value function kr di to ese hum mehtod kehne lagte he (name method)
    name: function(){
        console.log(this);
    }
}

obj.name();

// ========================

var object = {
    name : function(){
        console.log(this);
    },
    age:22,
    email:"sushant@gmail.com"
}

object.name();

// =========================

var objects = {
    name : function(){
        console.log(this.age);
    },
    age : 22,
    email : "sushant43@gmail.com"
}

objects.name();


// function inside method (es5) - window
var obj2 = {
    sayName : function(){
        function childFun(){
            console.log(this);
        }
        childFun();
    },
}

obj2.sayName();

// eg. 2
var obj3 ={
    sayName :function(){
        console.log(this); //this will refer object 
        function ChildFun(){
            console.log(this); //this will refer window
        }
        ChildFun();
    },
}

obj3.sayName();

// eg 3

var obj4 = {
    sayName : function(){
        console.log(this.age); //this will only access age as object 
        function ChildFun(){
            console.log(this.age);  //undefined ( this will access window )
        }
        ChildFun();
    },
    age : 25
}

obj4.sayName();

// ===============================================

// function inside method (es6) - object
var obj5 = {
    sayName : function(){ 
        const child = ()=>{  //use arrow function in es6 and it will take value to parent obj5
            console.log(this);
        }
        child()
    },
}

obj5.sayName();

// eg 1
var obj6 = {
    sayName : ()=>{    //it will take arrow function and value is taking to parent obj6 and obj6 parent is windows
        console.log(this);  
    }
}

obj6.sayName();

var obj7 = {
    sayName : function(){  //it will give the object
        console.log(this);
    }
}

obj7.sayName();

// ======================================

// constructor function mein this ki value - new blank object
function add(){
    console.log(this);
}

const ans = new add();

// ===================================
// event listener mein this ki value - that  element jispar event listener laga ho 
document.querySelector("button")
.addEventListener("click",function(){
    console.log(this);
})
