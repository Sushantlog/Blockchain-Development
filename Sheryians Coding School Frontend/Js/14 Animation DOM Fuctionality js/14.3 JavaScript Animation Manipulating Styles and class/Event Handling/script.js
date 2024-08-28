var btn = document.querySelector('button');
btn.addEventListener('click',function(){
    alert("great !")
    btn.textContent = 'Starting....';
    btn.style.backgroundColor = 'green';
})