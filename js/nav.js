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
  const overlay = document.createElement('div');
  const lbImage = document.createElement('img');
  const closeBtn = document.createElement('span');

  overlay.id = 'dynamic-lightbox';
  lbImage.id = 'dynamic-img';
  closeBtn.id = 'lightbox-close';
  closeBtn.innerHTML = '&times;';

  overlay.appendChild(closeBtn);
  overlay.appendChild(lbImage);
  document.body.appendChild(overlay);

  let scale = 1;
  let evCache = []; 
  let prevDiff = -1;

  const updateTransform = () => {
    lbImage.style.transform = `scale(${scale})`;
  };

  // --- 1. Scroll-zoom (Desktop) ---
  overlay.addEventListener('wheel', (e) => {
    e.preventDefault();
    const zoomSpeed = 0.12;
    
    if (e.deltaY < 0) {
      scale = Math.min(scale + zoomSpeed, 4); // Maks 4x zoom
    } else {
      // ENDRET: Stopper på 1 i stedet for 0.5
      scale = Math.max(scale - zoomSpeed, 1); 
    }
    updateTransform();
  }, { passive: false });

  // --- 2. Pinch-zoom (Mobil) ---
  lbImage.addEventListener('pointerdown', (e) => {
    evCache.push(e);
  });

  lbImage.addEventListener('pointermove', (e) => {
    const index = evCache.findIndex((ev) => ev.pointerId === e.pointerId);
    if (index > -1) evCache[index] = e;

    if (evCache.length === 2) {
      const curDiff = Math.hypot(
        evCache[0].clientX - evCache[1].clientX, 
        evCache[0].clientY - evCache[1].clientY
      );

      if (prevDiff > 0) {
        if (curDiff > prevDiff) {
          scale = Math.min(scale + 0.05, 4);
        } else if (curDiff < prevDiff) {
          // ENDRET: Stopper på 1
          scale = Math.max(scale - 0.05, 1);
        }
        updateTransform();
      }
      prevDiff = curDiff;
    }
  });

  lbImage.addEventListener('pointerup', (e) => {
    evCache = evCache.filter((ev) => ev.pointerId !== e.pointerId);
    if (evCache.length < 2) prevDiff = -1;
  });

  // --- 3. Åpne/Lukke ---
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('click-open')) {
      lbImage.src = e.target.src;
      scale = 1; // Alltid start på 1:1 visning
      updateTransform();
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else if (e.target === closeBtn || e.target === overlay) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});








// ANIMASJON
// 1. Definer observeren én gang globalt
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      // Slutt å observere når animasjonen er ferdig
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1 // Trigg når 10% er synlig
});

// 2. Funksjon for å starte observasjon på alle eksisterende elementer
const initReveals = () => {
  const elements = document.querySelectorAll('.reveal');
  elements.forEach(el => revealObserver.observe(el));
};

// Kjør når siden er lastet
document.addEventListener('DOMContentLoaded', initReveals);