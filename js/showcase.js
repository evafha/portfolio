 // Array of project data with internal links
 const projects = [
    { imgSrc: '../assets/images/myrsund/myrsund-front.png', description: 'Myrsund Mekaniske AS', link: 'myrsund-mekaniske.html' },

    { imgSrc: '../assets/images/IDG2012/IDG2012-front.png', description: 'Web Accessibility, Usability and Ethics', link: 'web-accessibility.html' },

    { imgSrc: '../assets/images/IDG2000/IDG2000-front.png', description: 'Design in Healthcare', link: 'design-in-healthcare.html' },

    { imgSrc: '../assets/images/IDG3750/IDG3750-front.png', description: 'Tangible and Sensorial Interaction Design', link: 'tangible-design.html' },


    // Add more projects as needed
];

// Function to get the current page URL
function getCurrentPage() {
    return window.location.pathname.split('/').pop();
}

// Function to get a random project from the filtered list
function getRandomProject(filteredProjects) {
    return filteredProjects[Math.floor(Math.random() * filteredProjects.length)];
}

// Function to update showcase elements
function updateShowcase() {
    const currentPage = getCurrentPage();
    
    // Filter out the current page from the projects array
    const filteredProjects = projects.filter(project => project.link !== currentPage);
    
    if (filteredProjects.length < 2) {
        console.error('Not enough projects to display.');
        return;
    }
    
    let project1 = getRandomProject(filteredProjects);
    let project2 = getRandomProject(filteredProjects);
    
    // Ensure the two projects are different
    while (project1 === project2) {
        project2 = getRandomProject(filteredProjects);
    }
    
    // Update showcase 1
    document.querySelector('.showcase1 img').src = project1.imgSrc;
    document.querySelector('.showcase1 p').textContent = project1.description;
    document.querySelector('.showcase1').href = project1.link;

    // Update showcase 2
    document.querySelector('.showcase2 img').src = project2.imgSrc;
    document.querySelector('.showcase2 p').textContent = project2.description;
    document.querySelector('.showcase2').href = project2.link;
}

// Update showcase on page load
window.onload = updateShowcase;