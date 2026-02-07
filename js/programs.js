/**
 * programs.js
 * Handles program tabs and accordion functionality
 */

// Get all tab buttons and content areas
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

/**
 * Switch between program category tabs
 */
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');
        
        // Remove active class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        
        // Remove active class from all tab contents
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Show corresponding tab content
        const targetContent = document.getElementById(targetTab);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    });
});

/**
 * Toggle program details (accordion functionality)
 */
const toggleButtons = document.querySelectorAll('.toggle-details');

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const programId = button.getAttribute('data-program');
        const details = document.getElementById(`${programId}-details`);
        
        if (details) {
            // Toggle the details visibility
            if (details.classList.contains('active')) {
                details.classList.remove('active');
                button.textContent = 'Learn More';
            } else {
                details.classList.add('active');
                button.textContent = 'Show Less';
            }
        }
    });
});

// Export functions for testing if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { tabButtons, toggleButtons };
}
