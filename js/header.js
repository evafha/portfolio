document.write('<header>');
document.write('        <!-- Skip to main content link for screen readers -->');
document.write('        <a href="#mainContent" class="skip-to-content">skip to main content</a>');
document.write('');
document.write('        <nav aria-label="Main Navigation">');
document.write('            <div class="hamburger-cross" onclick="myFunction(this)">');
document.write('                <div class="bar1"></div>');
document.write('                <div class="bar2"></div>');
document.write('                <div class="bar3"></div>');
document.write('            </div>');
document.write('');
document.write('            <a href="../index.html" class="menu-logo">');
document.write('                <img src="../assets/images/logo.png" alt="Logo">');
document.write('            </a>');
document.write('');
document.write('            <ul>');
document.write('                <li><a href="../index.html">Hjem</a></li>');
document.write('                <li><a href="../index.html#portfolio" class="underline">Portefølje</a></li>');
document.write('                <li><a href="../html/about.html">Om meg</a></li>');
document.write('                <li><a href="#contact">Kontakt</a></li>');

document.write('            </ul>');
document.write('        </nav>');

document.write(' <img src="../assets/images/IDG2012-banner.png" alt="">');

document.write('    </header>');


// Velger alle bilde-elementer på hele siden
// 1. Opprett lightbox-elementene i minnet
const overlay = document.createElement('div');
const lbImage = document.createElement('img');

// 2. Sett ID-er slik at vi kan style dem i CSS-filen
overlay.id = 'dynamic-lightbox';
lbImage.id = 'dynamic-img';

// 3. Legg bildet inni bakgrunnen, og bakgrunnen inn på siden
overlay.appendChild(lbImage);
document.body.appendChild(overlay);

// 4. Logikk for å åpne bildet
document.querySelectorAll('.click-open').forEach(img => {
  img.addEventListener('click', () => {
    lbImage.src = img.src;
    overlay.classList.add('active'); // Viser lightboxen
  });
});

// 5. Logikk for å lukke eller zoome
overlay.addEventListener('click', (e) => {
  if (e.target === lbImage) {
    lbImage.classList.toggle('zoomed'); // Zoomer hvis du trykker på bildet
  } else {
    overlay.classList.remove('active'); // Lukker hvis du trykker på bakgrunnen
    lbImage.classList.remove('zoomed');
  }
});