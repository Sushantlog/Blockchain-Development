var add  = document.querySelector("#add");
var remove  = document.querySelector("#remove");
var inputs = document.querySelector("input");
var ul = document.querySelector("ul");
var li;

add.addEventListener("click",function(){
    if(inputs.value.trim() === ''){}
    else{
        li = document.createElement("li");
        li.textContent = inputs.value;
        // console.log(li);
        ul.appendChild(li);
        inputs.value = "";
        
    }

    remove.addEventListener("click",function(){
        ul.removeChild(li);
    })
})
