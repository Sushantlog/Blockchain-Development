var btn = document.querySelector('button');
btn.addEventListener('mouseover',function(){
    btn.textContent = 'Starting....';
    btn.style.backgroundColor = 'green';
})

btn.addEventListener('mouseleave',function(){
    btn.textContent = 'Make New Card';
    btn.style.backgroundColor = '#fff';
})