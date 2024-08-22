function abcd(){
    var i = 12;
    console.log(i);
    for(var b = 12; b<22; b++){
        console.log("hello");
    }
}

abcd(); //first create and call it 

var dateofbirth = 7;
var todaysdate = 7;

function happybirthday(){
    console.log("Happy Birthday")
}

if(dateofbirth === todaysdate){
    happybirthday();
}


// ============================
function abc(val){
    console.log(12 + val);
}

abc(12); 

// ----------------
// implicte 
var aa = ()=>15;

var bb = aa()
