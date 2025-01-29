const translations = {
    en: {
        skip_to_content: "skip to main content",
        home: "Home",
        portfolio: "Portfolio",
        about: "About Me",
        contact: "Contact",
        welcome_heading: "I'm Eva Fossen Haugum — an ambitious <span class='welcome-design2'>Interaction Design</span> student, based in Norway.",
        projects: {
            "myrsund_project": {
                title: "Myrsund Mekaniske",
                year: "Independent project 2024",
                description: "Designing and developing a webpage for an upcoming industrial mechanics business",
                button: "View project"
            },
            "accessibility_project": {
                title: "Web Accessibility, Usability and Ethics",
                year: "Academic 2023",
                description: "A web coding course on accessibility for individuals with disabilities",
                button: "View project"
            },
            "healthcare_project": {
                title: "Design in Healthcare",
                year: "Academic 2023",
                description: "What new solutions can contribute to more age-friendly transportation in Gjøvik?",
                button: "View project"
            },
            "tangible_design_project": {
                title: "Tangible and Sensorial Interaction Design",
                year: "Academic 2024",
                description: "Create a board game that promotes social interaction and learning",
                button: "View project"
            }
        }
    },
    no: {
        skip_to_content: "hopp til hovedinnhold",
        home: "Hjem",
        portfolio: "Portefølje",
        about: "Om meg",
        contact: "Kontakt",
        welcome_heading: "Jeg er Eva Fossen Haugum — en ambisiøs <span class='welcome-design2'>Interaction Design</span> student, basert i Norge.",
        projects: {
            "myrsund_project": {
                title: "Myrsund Mekaniske",
                year: "Uavhengig prosjekt 2024",
                description: "Design og utvikling av nettside for et kommende industrimekanisk firma",
                button: "Se prosjekt"
            },
            "accessibility_project": {
                title: "Webtilgjengelighet, Brukervennlighet og Etikk",
                year: "Akademisk 2023",
                description: "Et nettkurs om tilgjengelighet for personer med funksjonshemninger",
                button: "Se prosjekt"
            },
            "healthcare_project": {
                title: "Design i Helsevesenet",
                year: "Akademisk 2023",
                description: "Hvilke nye løsninger kan bidra til mer aldersvennlig transport i Gjøvik?",
                button: "Se prosjekt"
            },
            "tangible_design_project": {
                title: "Tangible og Sensorisk Interaksjonsdesign",
                year: "Akademisk 2024",
                description: "Lag et brettspill som fremmer sosial interaksjon og læring",
                button: "Se prosjekt"
            }
        }
    }
};

let currentLang = 'en'; // Default language is English

// Function to load translations into the page
function loadTranslations() {
    // Update text content for non-HTML elements
    ['skip_to_content', 'home', 'portfolio', 'about', 'contact'].forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = translations[currentLang][id];
        }
    });

    // Update the welcome heading (preserve HTML content inside <h1>)
    const welcomeHeader = document.querySelector('.welcome-header h1');
    if (welcomeHeader) {
        welcomeHeader.innerHTML = translations[currentLang].welcome_heading;
    }

    // Update project section titles, descriptions, and buttons
    Object.keys(translations[currentLang].projects).forEach(projectKey => {
        const project = translations[currentLang].projects[projectKey];

        // Update project title
        const projectTitle = document.getElementById(`${projectKey}_title`);
        if (projectTitle) projectTitle.textContent = project.title;

        // Update project year
        const projectYear = document.getElementById(`${projectKey}_year`);
        if (projectYear) projectYear.textContent = project.year;

        // Update project description
        const projectDescription = document.getElementById(`${projectKey}_description`);
        if (projectDescription) projectDescription.textContent = project.description;

        // Update project button text
        const projectButton = document.getElementById(`${projectKey}_button`);
        if (projectButton) projectButton.textContent = project.button;
    });

    // Update the language toggle button
    const langToggleButton = document.getElementById('lang-toggle');
    if (langToggleButton) {
        langToggleButton.textContent = currentLang === 'en' ? 'NO' : 'EN';
    }
}

// Function to toggle the language
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'no' : 'en'; // Toggle between 'en' and 'no'
    loadTranslations(); // Reload translations based on the selected language
}

// Initial load of translations
loadTranslations();
