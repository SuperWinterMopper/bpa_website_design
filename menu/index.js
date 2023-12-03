
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})
//https://stackoverflow.com/questions/5902822/stopping-fixed-position-scrolling-at-a-certain-point