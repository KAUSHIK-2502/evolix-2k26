// Multi-step form navigation
let currentStep = 1;

function nextStep() {
    // Validate current step before proceeding
    if (currentStep === 1 && validateStep1()) {
        document.getElementById(`step${currentStep}`).classList.remove('active');
        currentStep++;
        document.getElementById(`step${currentStep}`).classList.add('active');
        updateProgressBar();
    } else if (currentStep === 2) {
        document.getElementById(`step${currentStep}`).classList.remove('active');
        currentStep++;
        document.getElementById(`step${currentStep}`).classList.add('active');
        updateProgressBar();
        calculateTotal();
    }
}

function prevStep() {
    document.getElementById(`step${currentStep}`).classList.remove('active');
    currentStep--;
    document.getElementById(`step${currentStep}`).classList.add('active');
    updateProgressBar();
}

function updateProgressBar() {
    const steps = document.querySelectorAll('.progress-step');
    steps.forEach((step, index) => {
        if (index + 1 <= currentStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
}

function validateStep1() {
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const college = document.getElementById('college').value;
    const year = document.getElementById('year').value;
    
    if (!fullname || !email || !phone || !college || !year) {
        alert('Please fill in all required fields');
        return false;
    }
    
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    if (!isValidPhone(phone)) {
        alert('Please enter a valid 10-digit phone number');
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
    return /^\d{10}$/.test(phone.replace(/\D/g, ''));
}

function calculateTotal() {
    const checkboxes = document.querySelectorAll('input[name="events[]"]:checked');
    const workshopCheckbox = document.getElementById('workshop');
    const eventCount = checkboxes.length;
    
    document.getElementById('event-count').textContent = eventCount;
    
    let total = eventCount * 100; // ₹100 per event
    
    if (workshopCheckbox && workshopCheckbox.checked) {
        total += 100; // ₹100 for workshop
        document.getElementById('workshop-fee-row').style.display = 'flex';
    } else {
        document.getElementById('workshop-fee-row').style.display = 'none';
    }
    
    document.getElementById('total-amount').textContent = `₹${total}`;
}

// Add event listeners for checkboxes to update total
document.querySelectorAll('input[name="events[]"], #workshop').forEach(input => {
    input.addEventListener('change', calculateTotal);
});

function handleSubmit(event) {
    event.preventDefault();
    
    if (!document.getElementById('terms').checked) {
        alert('Please agree to the terms and conditions');
        return false;
    }
    
    // Show success modal
    document.getElementById('successModal').classList.add('show');
    
    // In a real implementation, you would send the form data to a server here
    console.log('Form submitted:', getFormData());
    
    return false;
}

function getFormData() {
    const formData = {
        personal: {
            fullname: document.getElementById('fullname').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            college: document.getElementById('college').value,
            department: document.getElementById('department').value,
            year: document.getElementById('year').value
        },
        events: Array.from(document.querySelectorAll('input[name="events[]"]:checked')).map(cb => cb.value),
        workshop: document.getElementById('workshop').checked,
        payment: document.querySelector('input[name="payment"]:checked')?.value
    };
    return formData;
}

function closeModal() {
    document.getElementById('successModal').classList.remove('show');
    // Redirect back to main site after successful registration
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 500);
}

// Add phone number formatting
document.getElementById('phone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 10) value = value.slice(0, 10);
    e.target.value = value;
});
