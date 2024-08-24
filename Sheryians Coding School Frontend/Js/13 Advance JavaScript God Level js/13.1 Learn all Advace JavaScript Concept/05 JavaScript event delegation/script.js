var parent = document.querySelector("#parent");

parent.addEventListener("click",function(){
    console.log("works");
})


var parent = document.querySelector("#parent");

parent.addEventListener("click",function(details){
    console.log(details.target);
})


// event delegation

var parent = document.querySelector("#parent");

parent.addEventListener("click",function(details){
    if(details.target.id === "play"){
        console.log("play song");
    }else if(details.target.id === "pause"){
        console.log("pause song");
    }
})