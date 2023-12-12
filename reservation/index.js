window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})


function showInput() {
  var firstName = document.getElementById('Name').value;
  var lastName = document.getElementById('last').value;
  var email = document.getElementById('email').value;
  var date = document.getElementById('date').value;
  var time = document.getElementById('time').value;
  var seat = document.getElementsByName('seat').value;

  var radioButtonGroup = document.getElementsByName("seat");
  var checkedRadio = Array.from(radioButtonGroup).find(
    (radio) => radio.checked
  );
  var table = document.getElementById('table-num').value;
  var message = document.getElementById('message').value;

  document.getElementById("sName").innerHTML = firstName;
  document.getElementById("sLastName").innerHTML = lastName;
  document.getElementById("sEmail").innerHTML = email;
  document.getElementById("sDate").innerHTML = date;
  document.getElementById("sTime").innerHTML = time;
  document.getElementById("sTableNum").innerHTML = table;
  document.getElementById("sMessage").innerHTML = message;
  document.getElementById('hidden').style.display = 'flex'; // Show the div
  document.getElementById('registration-form').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
  const ordersString = localStorage.getItem('orderNames');
  const ordersArray = JSON.parse(ordersString) || [];
  let itemNum = ordersArray.length;
  document.getElementById('cart-number').innerText = itemNum;
});
