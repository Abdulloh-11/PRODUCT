let body = document.querySelector("body");
let modeBtn = document.querySelector(".mode-btn");

modeBtn.addEventListener('click', function(){
    body.classList.toggle('body-dark')
})

let bar = document.querySelector("bar");
let burger = document.querySelector(".burger")

burger.addEventListener('click', function(){
    bar.classList.toggle('bar')
})