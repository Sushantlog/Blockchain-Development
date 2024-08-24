function abcd(){
    var a = 12;
    return function(){
        console.log(a);
    }
}

var ans = abcd();
ans();

// =================

function timer(){
    var a = 24;
    return setTimeout(function(){
        console.log(a);
    },2000)
}

var answer = timer();