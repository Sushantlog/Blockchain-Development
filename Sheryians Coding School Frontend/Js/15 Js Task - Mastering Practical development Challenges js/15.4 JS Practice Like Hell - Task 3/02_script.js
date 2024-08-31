var form = document.querySelector("form");
var inp = document.querySelectorAll('input[type="text"]');
var h4 = document.querySelector("h4");

form.addEventListener("submit",function(ev){
    ev.preventDefault();
    inp.forEach(function (inp){
        if(inp.value === ''){
            h4.textContent = "Error, some fields are blank.";
            h4.style.color = "red"
        }else{
            h4.textContent = " ";
            h4.style.color = "black";
            // ek bhi input blank he to print blank 
        }
    })
})