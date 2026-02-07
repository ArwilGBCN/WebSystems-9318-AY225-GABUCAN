/**
 * faculty.js
 * Handles faculty directory with search and filter functionality
 */

// Faculty data array
const facultyData = [
    { 
        name: "Prof. Sarah Mitchell", 
        role: "Professor", 
        department: "Computer Science", 
        expertise: "Artificial Intelligence" 
    },
    { 
        name: "Prof. James Chen", 
        role: "Associate Professor", 
        department: "Computer Science", 
        expertise: "Machine Learning" 
    },
    { 
        name: "Prof. Maria Rodriguez", 
        role: "Professor", 
        department: "Information Technology", 
        expertise: "Cybersecurity" 
    },
    { 
        name: "Prof. Robert Johnson", 
        role: "Assistant Professor", 
        department: "Data Science", 
        expertise: "Big Data Analytics" 
    },
    { 
        name: "Prof. Emily White", 
        role: "Professor", 
        department: "Computer Science", 
        expertise: "Software Engineering" 
    },
    { 
        name: "Prof. Michael Brown", 
        role: "Associate Professor", 
        department: "Information Technology", 
        expertise: "Network Security" 
    },
    { 
        name: "Prof. Lisa Anderson", 
        role: "Assistant Professor", 
        department: "Data Science", 
        expertise: "Statistical Modeling" 
    },
    { 
        name: "Prof. David Kim", 
        role: "Professor", 
        department: "Computer Science", 
        expertise: "Computer Vision" 
    },
    { 
        name: "Prof. Jennifer Lee", 
        role: "Associate Professor", 
        department: "Information Technology", 
        expertise: "Cloud Computing" 
    },
    { 
        name: "Prof. William Garcia", 
        role: "Assistant Professor", 
        department: "Data Science", 
        expertise: "Data Visualization" 
    },
    { 
        name: "Prof. Amanda Taylor", 
        role: "Professor", 
        department: "Computer Science", 
        expertise: "Algorithms" 
    },
    { 
        name: "Prof. Christopher Martinez", 
        role: "Associate Professor", 
        department: "Information Technology", 
        expertise: "Database Systems" 
    }
];

// Get DOM elements
const facultyGrid = document.getElementById('facultyGrid');
const facultySearch = document.getElementById('facultySearch');
const filterButtons = document.querySelectorAll('.filter-btn');

/**
 * Render faculty cards to the grid
 * @param {Array} filteredData - Array of faculty objects to display
 */
function renderFaculty(filteredData) {
    // Clear existing content
    facultyGrid.innerHTML = '';
    
    // Check if there are results
    if (filteredData.length === 0) {
        facultyGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No faculty members found matching your criteria.</p>';
        return;
    }
    
    // Create and append faculty cards
    filteredData.forEach(faculty => {
        const card = document.createElement('div');
        card.className = 'faculty-card';
        card.innerHTML = `
            <h3>${faculty.name}</h3>
            <div class="faculty-role">${faculty.role}</div>
            <div class="faculty-dept">${faculty.department}</div>
            <p style="margin-top: 0.5rem; color: var(--text-muted);">${faculty.expertise}</p>
        `;
        facultyGrid.appendChild(card);
    });
}

/**
 * Get filtered faculty data based on search and department filter
 * @returns {Array} Filtered faculty array
 */
function getFilteredFaculty() {
    const searchTerm = facultySearch.value.toLowerCase();
    const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
    
    let filtered = facultyData;
    
    // Apply department filter
    if (activeFilter !== 'all') {
        filtered = filtered.filter(faculty => faculty.department === activeFilter);
    }
    
    // Apply search filter
    if (searchTerm) {
        filtered = filtered.filter(faculty => 
            faculty.name.toLowerCase().includes(searchTerm) ||
            faculty.expertise.toLowerCase().includes(searchTerm)
        );
    }
    
    return filtered;
}

/**
 * Update the faculty display
 */
function updateFacultyDisplay() {
    const filtered = getFilteredFaculty();
    renderFaculty(filtered);
}

// Faculty search event listener
facultySearch.addEventListener('input', updateFacultyDisplay);

// Faculty filter button event listeners
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all filter buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Update display
        updateFacultyDisplay();
    });
});

// Initial render of all faculty
renderFaculty(facultyData);

// Export for testing if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { facultyData, renderFaculty, getFilteredFaculty };
}
