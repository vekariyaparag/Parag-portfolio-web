/*document.addEventListener("DOMContentLoaded", function() {
  var typed = new Typed('#domains', {
    strings: [' ', 'Software Engineer.', 'Python Developer.', 'Student..'],
    typeSpeed: 40,
    backspeed: 50,
    loop: true
  });
});
*/
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
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