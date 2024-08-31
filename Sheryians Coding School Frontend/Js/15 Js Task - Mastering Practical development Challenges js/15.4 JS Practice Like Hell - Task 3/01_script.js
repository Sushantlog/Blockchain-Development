var form = document.querySelector("form");
var input1 = document.querySelector("#input1")
var input2 = document.querySelector("#input2")
var h4 = document.querySelector("h4")

form.addEventListener("submit",function(ev){
    ev.preventDefault();
    if(input1.value === '' || input2.value === ''){
        //after exciting this will be change but this can not remove after it 
        h4.textContent = "error, some fields are blank.";   
        h4.style.color = "red";
    }
    else{
        h4.textContent = " ";
        h4.style.color = "black";
    }
})