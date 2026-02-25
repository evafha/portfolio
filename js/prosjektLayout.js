/* --- KOMPONENT 1: PROSJEKT INFO --- */
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
        <h1 class="short-underline">${overskrift}</h1>
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



/* --- IKKE KOMPONENT 2: SE MER ARBEID  --- */
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