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

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offset = 80; 
                const targetPosition = targetElement.offsetTop - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
