window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

document.getElementById("submitBtn").addEventListener("click", showInput);  
function showInput() {  
  window.location.href="../menu/index.html";  
}