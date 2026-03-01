/* --- KOMPONENT 1: PROSJEKT HEADER --- */
class ProsjektHeader extends HTMLElement {
    connectedCallback() {
        const prosjektKlasse = this.getAttribute('prosjekt-klasse') || '';
        const tittel = this.getAttribute('tittel') || 'Prosjektnavn';
        const beskrivelse = this.getAttribute('beskrivelse') || '';
        const bildeSrc = this.getAttribute('bilde-src') || '';
        const bildeAlt = this.getAttribute('bilde-alt') || '';
        const portefoljeLink = this.getAttribute('link') || '../index.html#portfolio';

        this.innerHTML = `
            <div class="header ${prosjektKlasse}">
                <div class="header-max">
                    <ul class="breadcrumb">
                        <li><a href="${portefoljeLink}">Portefølje</a></li>
                        <li>${tittel}</li>
                    </ul>
                    <div class="index-card">
                        <div class="header-text">
                            <h1>${tittel}</h1>
                            <p>${beskrivelse}</p>
                        </div>
                        <img class="header-img click-open" src="${bildeSrc}" alt="${bildeAlt}">
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('prosjekt-header', ProsjektHeader);



/* --- KOMPONENT 2: PROSJEKT INFO --- */
class ProsjektInfo extends HTMLElement {
  connectedCallback() {
    const overskrift = this.getAttribute('overskrift') || 'Prosjektnavn';
    const beskrivelse = this.getAttribute('beskrivelse') || '';
    const rolle = this.getAttribute('rolle') || 'UX designer';
    const tid = this.getAttribute('tid') || '';
    
    // Håndterer verktøy-bilder
    const verktoy = this.getAttribute('verktoy') || '';
    const verktoyHtml = verktoy.split(',').map(src => 
      `<img src="${src.trim()}" alt="Verktøy">`
    ).join('');

    this.innerHTML = `
      <div class="problem-statement">
        <h2 class="short-underline">${overskrift}</h2>
        <div class="beskrivelse-tekst">
          <p>${beskrivelse}</p>
        </div>

        <div class="time">
          <div>
            <h3>Rolle</h3>
            <p>${rolle}</p>
          </div>

          <div>
            <h3>Tidsramme</h3>
            <p>${tid}</p>
          </div>

          <div>
            <h3>Verktøy</h3>
            <div class="tools-icon">
              ${verktoyHtml}
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('prosjekt-info', ProsjektInfo);




/* --- KOMPONENT 3: LØSNING  --- */
class ProjectSolution extends HTMLElement {
    connectedCallback() {
        const project = this.getAttribute('project') || '';
        
        // Henter alle <img>-tagger du har skrevet i HTML-en
        const originalImages = Array.from(this.querySelectorAll('img'));

        // Lager en ny liste med bilder hvor vi tvinger på de riktige klassene
        const formattedImages = originalImages.map(img => {
            return `<img class="mobile-mockup click-open" 
                         src="${img.getAttribute('src')}" 
                         alt="${img.getAttribute('alt') || ''}">`;
        }).join('');

        // Erstatter innholdet med den ferdige strukturen
        this.innerHTML = `
            <div class="solution ${project}">
                <div class="solution-showcase">
                    ${formattedImages}
                </div>
            </div>
        `;
    }
}

customElements.define('project-solution', ProjectSolution);




/* --- IKKE KOMPONENT 4: SE MER ARBEID  --- */
const myWorkHTML = `
<div class="my-work">
    <h4>Se mer av arbeidet mitt</h4>

    <a href="" class="showcase1">
        <img src="" alt="">
        <p></p>
    </a>

    <a href="" class="showcase2">
        <img src="" alt="">
        <p></p>
    </a>
</div>
`;

document.getElementById('my-work-placeholder').innerHTML = myWorkHTML;