function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function about() {
    window.location.href = "About.html"
  }

  function validate() {
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const phoneNo = document.getElementById('password').value;
    
    if (name === "") {
      alert("Pls fill in your name");
      return false;
    } else if (email ===""){
      alert("Pls fill in your email");
      return false;
    } else if (phoneNo ==="") {
      alert("Pls fill in your phone No")
      return false;
    } else {
      alert ("Welcome to the fold of christ, Youll get a message from us soon")
      return true;
    }
  }


  function myFunction() {
    document.getElementById('myDropdown').classList.toggle('show')
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
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


function openPopup() {
  let popup = document.getElementById("popup");
  popup.classList.add("open-popup");
}

function closePopup() {
  let popup = document.getElementById("popup");
  popup.classList.remove("open-popup")
}
