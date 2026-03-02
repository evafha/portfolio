class prosjektKort extends HTMLElement {
  connectedCallback() {
    const bilde = this.getAttribute('bilde') || '';
    const altTekst = this.getAttribute('alt') || 'Prosjektbilde';
    const tittel = this.getAttribute('tittel') || 'Prosjektnavn';
    const aar = this.getAttribute('aar') || '';
    const info = this.getAttribute('info') || '';
    const lenke = this.getAttribute('lenke') || '#';
    const pilIkon = this.getAttribute('pil-ikon') || 'assets/images/arrow.png';

    const skalBytte = this.getAttribute('swap') === 'true';
    const swapContentKlasse = skalBytte ? 'swap-content' : '';
    const swapTextKlasse = skalBytte ? 'swap-text' : '';

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

    // Finn elementet vi nettopp lagde og legg det til i den globale observeren
    const card = this.querySelector('.reveal');
    if (card && typeof revealObserver !== 'undefined') {
      revealObserver.observe(card);
    }
  }
}

customElements.define('prosjekt-kort', prosjektKort);