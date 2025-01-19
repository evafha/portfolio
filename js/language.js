// Function to switch language based on the current page language
function toggleLanguage() {
    const currentURL = window.location.pathname; // Get the current path of the URL

    // Check if the URL contains '_no' for Norwegian or not for English
    if (currentURL.includes('_no')) {
        // Switch to the English version by removing '_no' from the URL
        const newURL = currentURL.replace('_no', ''); // Replace '_no' with nothing
        window.location.pathname = newURL; // Navigate to the English page
    } else {
        // Switch to the Norwegian version by adding '_no' to the URL
        const newURL = currentURL.replace('.html', '_no.html'); // Add '_no' before .html
        window.location.pathname = newURL; // Navigate to the Norwegian page
    }
}

// Update button text based on the current language
window.addEventListener('load', function () {
    const langButton = document.getElementById('lang-toggle');
    const currentURL = window.location.pathname; // Get the current path of the URL

    // Check if the current URL includes '_no' to determine language
    if (currentURL.includes('_no')) {
        langButton.textContent = 'EN';  // If current page is Norwegian, set button to 'EN'
    } else {
        langButton.textContent = 'NO';  // If current page is English, set button to 'NO'
    }
});

// Keep language consistent when navigating between pages
const links = document.querySelectorAll('a'); // Get all anchor tags
links.forEach(link => {
    link.addEventListener('click', function(event) {
        const currentURL = window.location.pathname; // Get the current path of the URL
        // If the current page has '_no', ensure the link navigates to a page with '_no'
        if (currentURL.includes('_no')) {
            if (link.href.includes('.html')) {
                event.preventDefault(); // Prevent default link navigation
                const newHref = link.href.replace('.html', '_no.html');
                window.location.href = newHref; // Navigate to the '_no' version of the page
            }
        } else {
            // If the current page does not have '_no', ensure the link navigates to the English version
            if (link.href.includes('_no.html')) {
                event.preventDefault(); // Prevent default link navigation
                const newHref = link.href.replace('_no.html', '.html');
                window.location.href = newHref; // Navigate to the English version of the page
            }
        }
    });
});
