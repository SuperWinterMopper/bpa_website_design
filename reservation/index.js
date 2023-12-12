window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})


function showInput() {
  var firstName = document.getElementById('Name').value;
  var lastName = document.getElementById('last');
  var email = document.getElementById('email');
  var date = document.getElementById('date');
  var seat = document.getElementsByClassName('seat');
  var table = document.getElementById('table-num');
  var message = document.getElementById('message');


  console.log(firstName);
  document.getElementById("sName").innerHTML = firstName;
  document.getElementById("sLastName").innerHTML = lastName;
  document.getElementById("sEmail").innerHTML = email;
  document.getElementById("sDate").innerHTML = date;
  document.getElementById("sSeat").innerHTML = seat;
  document.getElementById("sTableNum").innerHTML = table;
  document.getElementById("sMessage").innerHTML = message;
  document.getElementById('registration-form').style.display ='hidden';   
  document.getElementById('hidden').style.display = 'flex'; // Show the div
}

document.addEventListener('DOMContentLoaded', function () {
  const ordersString = localStorage.getItem('orderNames');
  const ordersArray = JSON.parse(ordersString) || [];
  let itemNum = ordersArray.length;
  document.getElementById('cart-number').innerText = itemNum;
});
