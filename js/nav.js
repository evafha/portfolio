// NAVBAR
// // Function to toggle the menu icon and the navigation unordered list
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


// KLIKK FOR Å FORSTØRRE BILDER
document.addEventListener('DOMContentLoaded', () => {
  // 1. Lag elementene
  const overlay = document.createElement('div');
  const lbImage = document.createElement('img');
  const closeBtn = document.createElement('span');

  overlay.id = 'dynamic-lightbox';
  lbImage.id = 'dynamic-img';
  closeBtn.id = 'lightbox-close';
  closeBtn.innerHTML = '&times;'; // Dette lager krysset

  overlay.appendChild(closeBtn);
  overlay.appendChild(lbImage);
  document.body.appendChild(overlay);

  // 2. Funksjon for å lukke
  const lukkLightbox = () => {
    overlay.classList.remove('active');
    lbImage.classList.remove('zoomed');
    document.body.style.overflow = '';
  };

  // 3. Lytt etter klikk
  document.addEventListener('click', (e) => {
    // Åpne bildet
    if (e.target.classList.contains('click-open')) {
      lbImage.src = e.target.src;
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
    
    // Lukke via krysset ELLER bakgrunnen
    else if (e.target === closeBtn || e.target === overlay) {
      lukkLightbox();
    }
    
    // Zoom på selve bildet
    else if (e.target === lbImage) {
      lbImage.classList.toggle('zoomed');
    }
  });

  // Lukke med ESC-tasten (valgfritt, men anbefalt)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') lukkLightbox();
  });
});

