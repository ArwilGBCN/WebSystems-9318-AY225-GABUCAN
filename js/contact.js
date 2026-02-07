/**
 * contact.js
 * Handles contact form validation and submission
 */

// Get form elements
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

/**
 * Validate email format
 * @param {string} email - Email address to validate
 * @returns {boolean} True if email is valid
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Show or hide error message for a field
 * @param {string} fieldId - ID of the form field
 * @param {boolean} show - Whether to show the error
 */
function showError(fieldId, show) {
    const errorElement = document.getElementById(`${fieldId}Error`);
    if (errorElement) {
        if (show) {
            errorElement.classList.add('show');
        } else {
            errorElement.classList.remove('show');
        }
    }
}

/**
 * Validate individual form field
 * @param {string} fieldId - ID of the field to validate
 * @returns {boolean} True if field is valid
 */
function validateField(fieldId) {
    const field = document.getElementById(fieldId);
    if (!field) return false;
    
    const value = field.value.trim();
    
    switch(fieldId) {
        case 'name':
            if (value.length < 2) {
                showError(fieldId, true);
                return false;
            }
            break;
            
        case 'email':
            if (!validateEmail(value)) {
                showError(fieldId, true);
                return false;
            }
            break;
            
        case 'inquiryType':
            if (!value) {
                showError(fieldId, true);
                return false;
            }
            break;
            
        case 'message':
            if (value.length < 10) {
                showError(fieldId, true);
                return false;
            }
            break;
    }
    
    showError(fieldId, false);
    return true;
}

/**
 * Validate entire form
 * @returns {boolean} True if all fields are valid
 */
function validateForm() {
    let isValid = true;
    
    // Validate each field
    const fields = ['name', 'email', 'inquiryType', 'message'];
    fields.forEach(fieldId => {
        if (!validateField(fieldId)) {
            isValid = false;
        }
    });
    
    return isValid;
}

/**
 * Handle form submission
 */
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validate form
    if (validateForm()) {
        // Get form data
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            inquiryType: document.getElementById('inquiryType').value,
            message: document.getElementById('message').value.trim(),
            timestamp: new Date().toISOString()
        };
        
        // In a real application, you would send this data to a server
        console.log('Form submitted:', formData);
        
        // Show success message
        successMessage.classList.add('show');
        
        // Reset form
        contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
        // Scroll to first error
        const firstError = document.querySelector('.error-message.show');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
});

/**
 * Real-time validation on blur (when field loses focus)
 */
document.getElementById('name').addEventListener('blur', function() {
    validateField('name');
});

document.getElementById('email').addEventListener('blur', function() {
    validateField('email');
});

document.getElementById('inquiryType').addEventListener('blur', function() {
    validateField('inquiryType');
});

document.getElementById('message').addEventListener('blur', function() {
    validateField('message');
});

/**
 * Clear error when user starts typing
 */
document.getElementById('name').addEventListener('input', function() {
    if (this.value.trim().length >= 2) {
        showError('name', false);
    }
});

document.getElementById('email').addEventListener('input', function() {
    if (validateEmail(this.value.trim())) {
        showError('email', false);
    }
});

document.getElementById('inquiryType').addEventListener('change', function() {
    if (this.value) {
        showError('inquiryType', false);
    }
});

document.getElementById('message').addEventListener('input', function() {
    if (this.value.trim().length >= 10) {
        showError('message', false);
    }
});

// Export for testing if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { validateEmail, validateField, validateForm };
}
