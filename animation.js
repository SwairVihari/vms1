const tl = gsap.timeline({defaults: {duration:0.75, ease:"Power4.out"}});

// Logic for Preloader
// const tl = gsap.timeline({defaults: {duration:0.75, ease:"Power3.out"}});


let loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    gsap.set(loader, {transformOrigin:"top"})
    tl.fromTo(loader, {display:"fixed",opacity:1}, {opacity:0,scale:100, display:"none" ,duration:1})
    heroAnimation();
// loader.style.display = "none";
});


const heroAnimation = () => {
    tl.fromTo('.nav', {y:"-100%", opacity:0}, {y:"0%", opacity:1, duration:1});
    tl.fromTo('.cta1', {x:"100%", opacity: 0},{x:0,opacity:1});
    tl.fromTo('.cta3', {x:"-100%", opacity: 0},{x:0,opacity:1},"<20%")
    tl.fromTo('.cta2', {y:"100%", opacity: 0},{y:0,opacity:1},"<20%")
    tl.fromTo('.cta4', {x:"100%", opacity: 0},{x:0,opacity:1}, "<20%");
}

