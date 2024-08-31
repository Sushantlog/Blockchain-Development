var form = document.querySelector("form");
var inputs = document.querySelectorAll('input[type="text"]');
var h4 = document.querySelector("h4");

form.addEventListener("submit",function(ev){
    ev.preventDefault();
    // console.log(inputs.length);
    // console.log(inputs);
    for(var i = 0; i<inputs.length; i++){
        if(inputs[i].value === ''){
            h4.textContent = "Error, some fields are blank";
            h4.style.color = "red";
            break;
        }
    }
})