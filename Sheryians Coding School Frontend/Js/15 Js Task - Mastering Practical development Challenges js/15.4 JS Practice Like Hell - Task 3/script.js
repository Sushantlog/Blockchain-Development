var form = document.querySelector("form");
var input1 = document.querySelector("#input1")
var input2 = document.querySelector("#input2")

form.addEventListener("submit",function(ev){
    ev.preventDefault();
    console.log(input1.value, input2.value);
    if(input1.value === '' || input2.value === ''){
        console.log("blank");
    }
})