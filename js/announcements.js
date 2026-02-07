/**
 * announcements.js
 * Handles dynamic loading and display of announcements
 */

// Announcements data array
const announcements = [
    {
        date: "February 5, 2026",
        title: "Spring 2026 Registration Now Open",
        content: "Students can now register for Spring 2026 semester courses. Priority registration ends February 15th."
    },
    {
        date: "January 28, 2026",
        title: "AI Research Symposium - March 15, 2026",
        content: "Join us for our annual AI Research Symposium featuring keynote speakers from leading tech companies and student research presentations."
    },
    {
        date: "January 20, 2026",
        title: "New Cybersecurity Lab Opens",
        content: "The college has inaugurated a state-of-the-art cybersecurity lab equipped with the latest tools and technologies for hands-on learning."
    },
    {
        date: "January 10, 2026",
        title: "Career Fair - February 20, 2026",
        content: "Annual CCS Career Fair connecting students with top employers in technology. Register now to participate."
    },
    {
        date: "December 15, 2025",
        title: "Winter Break Schedule",
        content: "The college will be closed from December 20, 2025 to January 5, 2026. Classes resume on January 8, 2026."
    },
    {
        date: "November 30, 2025",
        title: "Student Research Showcase",
        content: "Showcase your research projects at our end-of-semester exhibition. Submit your proposals by December 10th."
    }
];

// Get DOM element
const announcementBoard = document.getElementById('announcementBoard');
const announcementsSection = document.getElementById('announcements');

/**
 * Load and display announcements with staggered animation
 */
function loadAnnouncements() {
    // Clear existing announcements
    announcementBoard.innerHTML = '';
    
    // Add each announcement with a delay for staggered effect
    announcements.forEach((announcement, index) => {
        setTimeout(() => {
            const item = document.createElement('div');
            item.className = 'announcement-item';
            item.innerHTML = `
                <div class="announcement-date">${announcement.date}</div>
                <h3>${announcement.title}</h3>
                <p>${announcement.content}</p>
            `;
            announcementBoard.appendChild(item);
        }, index * 150); // 150ms delay between each announcement
    });
}

/**
 * Check if announcements have already been loaded
 */
let announcementsLoaded = false;

/**
 * Observer to detect when announcements section becomes active
 */
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.target.classList.contains('active') && 
            mutation.target.id === 'announcements' &&
            !announcementsLoaded) {
            loadAnnouncements();
            announcementsLoaded = true;
        }
    });
});

// Start observing the announcements section
observer.observe(announcementsSection, {
    attributes: true,
    attributeFilter: ['class']
});

// Also load announcements if section is already active on page load
if (announcementsSection.classList.contains('active')) {
    loadAnnouncements();
    announcementsLoaded = true;
}

// Export for testing if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { announcements, loadAnnouncements };
}
