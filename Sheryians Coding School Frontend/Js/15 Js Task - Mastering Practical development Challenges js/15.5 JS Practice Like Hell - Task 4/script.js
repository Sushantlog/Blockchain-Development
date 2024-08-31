var add = document.querySelector("#add");
var remove = document.querySelector("#remove");
var inp = document.querySelector("input");

add.addEventListener("click",function(){
    if(inp.value.trim() === ''){}
    else{
        var li = document.createElement("li");
        li.textContent = inp.value;
        console.log(li);
    }
})