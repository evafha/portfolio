connectedCallback() {
  const verktoyStreng = this.getAttribute('verktoy') || '';
  const altStreng = this.getAttribute('alt') || '';

  // Gjør om strengene til lister (arrays)
  const bilder = verktoyStreng.split(',').map(s => s.trim());
  const altTekster = altStreng.split(',').map(s => s.trim());

  // Generer HTML for hvert ikon basert på indeksen i listen
  const ikonerHtml = bilder.map((src, index) => {
    const alt = altTekster[index] || 'Verktøyikon';
    return `<img src="${src}" alt="${alt}" class="verktoy-ikon">`;
  }).join('');

  this.innerHTML = `
    <div class="prosjekt-info-container">
      <h2>${this.getAttribute('overskrift')}</h2>
      <p>${this.getAttribute('beskrivelse')}</p>
      <div class="metadata">
        <span><strong>Rolle:</strong> ${this.getAttribute('rolle')}</span>
        <span><strong>Tid:</strong> ${this.getAttribute('tid')}</span>
      </div>
      <div class="verktoy-liste">
        ${ikonerHtml}
      </div>
    </div>
  `;
}