/**
 * navigation.js
 * Handles page navigation and navbar scroll behavior
 */

// Get all navigation elements
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const navbar = document.getElementById('navbar');

/**
 * Show a specific section and update navigation
 * @param {string} targetId - The ID of the section to show
 */
function showSection(targetId) {
    // Hide all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active state from all nav links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Show target section
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Add active state to clicked nav link
    const activeLink = document.querySelector(`.nav-link[href="${targetId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // Scroll to top when changing sections
    window.scrollTo(0, 0);
}

// Add click event listeners to all navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        showSection(targetId);
    });
});

// Add click event listeners to all internal anchor links (including CTA buttons)
document.addEventListener('click', (e) => {
    // Check if the clicked element is an anchor with href starting with #
    const link = e.target.closest('a[href^="#"]');
    if (link && !link.classList.contains('nav-link')) {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        showSection(targetId);
    }
});

/**
 * Auto-hide navbar on scroll down, show on scroll up
 */
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // If scrolling down and past 100px, hide navbar
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.classList.add('hidden');
    } else {
        // If scrolling up, show navbar
        navbar.classList.remove('hidden');
    }
    
    lastScroll = currentScroll;
});

// Export functions for use in other modules if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { showSection };
}
