window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

let orderNames = [];
let orderCosts = [];
let taxCosts = [];
let totalCost = 0.00;
let counter = 0;
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

function addOrderName(name) {
        counter++;
        orderNames.push(name);
        localStorage.setItem('orderNames', JSON.stringify(orderNames)); 
        localStorage.setItem('counter', JSON.stringify(counter)); 
        document.getElementById('cart-number').innerText = orderNames.length;
        const ordersString = localStorage.getItem('orderNames');
        const ordersArray = JSON.parse(ordersString) || [];   
        console.log(ordersArray); 
 }

 function addOrderCost(cost) {
    orderCosts.push(cost);
    taxCosts.push(cost * .06);
    totalCost += (cost + taxCosts[taxCosts.length - 1]);
    localStorage.setItem('orderCosts', JSON.stringify(orderCosts));
    localStorage.setItem('totalCost', JSON.stringify(totalCost)); 
    localStorage.setItem('taxCosts', JSON.stringify(taxCosts));
}

function resetOrder() {
    orderNames.length = 0;
    orderCosts.length = 0;
    taxCosts.length = 0;
    totalCost = 0.00;
    counter = 0;
    localStorage.setItem('orderNames', JSON.stringify(orderNames)); 
    localStorage.setItem('orderCosts', JSON.stringify(orderCosts)); 
    localStorage.setItem('totalCost', JSON.stringify(totalCost)); 
    localStorage.setItem('counter', JSON.stringify(counter)); 
    localStorage.setItem('taxCosts', JSON.stringify(taxCosts)); 
}