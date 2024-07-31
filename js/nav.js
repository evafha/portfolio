// Function to toggle the menu icon and the navigation unordered list
function myFunction(x) {
  // Toggle the 'change' class on the menu icon to change its appearance
  x.classList.toggle("change");

  // Get the navigation unordered list element
  var navUl = document.querySelector('nav ul');

  // Toggle the 'active' class on the navigation unordered list to show/hide it
  navUl.classList.toggle('active');
}




