// events, click, dblclick, mouseOver, input

// chacha 

// how
// const evt = new Event("chacha");    //make event

// document.querySelector("button")    //attach event to same document
// .addEventListener("chacha",function(){    //add Listener   
//     alert("chacha event hua");
// })

// // to run dispathchEvent
// document.querySelector("button").dispatchEvent(evt);  //dispatchEvent

// ------------------------------------

const yourevent = new Event("gharjaao");

document.querySelector("button")
.addEventListener("gharjaao",function(){
    alert("jaa raha hu");
})

document.querySelector("button").dispatchEvent(yourevent);

