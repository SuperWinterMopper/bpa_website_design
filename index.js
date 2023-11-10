let priceDropDown = 1;

function showDropDown() {
    priceDropDown++;
    if(priceDropDown % 2 == 0)
    {
        document.getElementById("dropdown-content").classList.toggle("show");
        document.getElementById("price-dropdown ").style.color = "red";
    }
    else
    {
        /*let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for(i = 0; i < dropdowns.length; i++)
        {
            if(dropdowns[i].classList.contains("show"))
            {
                dropdowns[i].classList.remove("show");
            }
        }*/
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
    
    }
}