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
    const name = document.getElementById('tt').value;
    const phoneNo = document.getElementById('dd').value;
    
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
