window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})


var firstName = document.getElementById('Name');
var lastName = document.getElementById('last');
var email = document.getElementById('email');
var date = document.getElementById('date');
var seat = document.getElementsByClassName('seat');
var table = document.getElementById('table-num');
var message = document.getElementById('message');

console.log(firstName);
console.log(document.getElementById('Name'));

document.getElementById("hidden").style.display = 'none';

function showInput() {
  document.getElementById('hidden').style.display = '';
  document.getElementById("registration-form").style.display = 'none';
}