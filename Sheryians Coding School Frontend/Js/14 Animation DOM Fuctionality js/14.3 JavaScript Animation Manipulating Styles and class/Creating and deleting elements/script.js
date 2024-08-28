var h1 = document.createElement('h1');
h1.textContent = 'hey';
h1.classList.add('makeitgreen');
// above code is created but not add in html

document.querySelector('body').appendChild(h1);

var img = document.createElement("img");
img.src ='https://images.unsplash.com/photo-1724075682633-4664473db52c?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
// img.style.width = '600px'; 
img.style.height = '400px';

document.querySelector('body').appendChild(img);
// document.querySelector('body').removeChild(img);