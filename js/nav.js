// Function to toggle the menu icon and the navigation unordered list
function myFunction(x) {
  // Toggle the 'change' class on the menu icon to change its appearance
  x.classList.toggle("change");

  // Get the navigation unordered list element
  var navUl = document.querySelector('nav');

  // Toggle the 'active' class on the navigation unordered list to show/hide it
  navUl.classList.toggle('active');
}

// Select all the menu links
const menuLinks = document.querySelectorAll('nav ul li a');

// Add click event listener to each menu link
menuLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Remove the 'active' class from the navigation unordered list
    document.querySelector('nav').classList.remove('active');
    
    // Remove the 'change' class from the menu icon
    document.querySelector('.hamburger-cross').classList.remove('change');
  });
});
