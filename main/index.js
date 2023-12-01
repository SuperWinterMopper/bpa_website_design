let currentSliderPosition = 0;

function moveSliderRight() {

    const sliderContainer = document.querySelector(".slider-container");
    if(currentSliderPosition != -200)
    {
        currentSliderPosition-=100;
        sliderContainer.style.transform = `translateX(${currentSliderPosition}vw)`;
    }
}

function moveSliderLeft() {
    const sliderContainer = document.querySelector(".slider-container");
    if(currentSliderPosition != 0)
    {
        currentSliderPosition+=100;
        sliderContainer.style.transform = `translateX(${currentSliderPosition}vw)`;
    }
}

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})