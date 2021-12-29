const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.navlinks');
const bar = document.querySelector('.bar');
const close = document.querySelector('.close');
let hidden = true





hamburger.addEventListener('click', ()=>{
    
    navlinks.classList.toggle("navlinks-show")
    console.log("Function is working")
    bar.classList.toggle('display-none')
    if(hidden){
        close.classList.toggle('display-none')
    }

    
})
