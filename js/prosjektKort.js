class prosjektKort extends HTMLElement {
  connectedCallback() {
    const bilde = this.getAttribute('bilde') || '';
    const altTekst = this.getAttribute('alt') || 'Prosjektbilde';
    const tittel = this.getAttribute('tittel') || 'Prosjektnavn';
    const aar = this.getAttribute('aar') || '';
    const info = this.getAttribute('info') || '';
    const lenke = this.getAttribute('lenke') || '#';
    const pilIkon = this.getAttribute('pil-ikon') || 'assets/images/arrow.png';

    // Sjekk om vi skal bytte side (swap)
    const skalBytte = this.getAttribute('swap') === 'true';
    const swapContentKlasse = skalBytte ? 'swap-content' : '';
    const swapTextKlasse = skalBytte ? 'swap-text' : '';

    // Vi legger til "reveal"-klassen her for animasjon
    this.innerHTML = `
      <div class="index-card reveal ${swapContentKlasse}">
        <img src="${bilde}" alt="${altTekst}" class="image">

        <div class="text ${swapTextKlasse}">
          <h3>${tittel}</h3>
          <p class="year">${aar}</p>
          <p>${info}</p>

          <div>
            <a href="${lenke}" class="button-project">
              Se prosjekt 
              <img src="${pilIkon}" alt="Pil">
            </a>
          </div>
        </div>
      </div>
    `;

    // Start observasjon av dette spesifikke elementet
    const card = this.querySelector('.reveal');
    observer.observe(card);
  }
}

// Definer observeren utenfor klassen så den kan gjenbrukes av alle kortene
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      // Stopper overvåking etter at det er vist for å spare ressurser
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1 // Trigg når 10% av kortet er synlig
});

customElements.define('prosjekt-kort', prosjektKort);