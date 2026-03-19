// Add interactive functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Event chip click handler
    document.querySelectorAll('.event-chip').forEach(chip => {
        chip.addEventListener('click', function() {
            const eventName = this.textContent;
            alert(`${eventName}\n\nRegistration fee: ₹200\n\nMore details coming soon!`);
        });
    });
    
    // Phone number click tracking
    document.querySelectorAll('.phone-link').forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('Phone number clicked:', this.textContent);
        });
    });
    
    // Register button click
    document.querySelector('.register-big-btn').addEventListener('click', function(e) {
        e.preventDefault();
        alert('⚡ REGISTRATION OPEN ⚡\n\nPlease contact coordinators:\nS. Aksheetha: 7373373794\nM. Sanjeev Raj: 9150952958');
    });
    
    // Social links
    document.querySelectorAll('.social-icon').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                if (this.textContent.includes('@EVOLIX_2K26')) {
                    alert('Instagram: @EVOLIX_2K26');
                } else {
                    alert('Email: evolix_2k26@gmail.com');
                }
            }
        });
    });
    
    // Add floating animation to pricing cards
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach((card, index) => {
        card.style.animation = `floatCard ${2 + index}s infinite`;
    });
    
    // Add circuit trace effect
    function createTrace() {
        const traces = document.querySelectorAll('.section-title');
        traces.forEach(trace => {
            trace.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.02)';
            });
            trace.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });
    }
    createTrace();
});

// Add smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Simple countdown timer
function updateTimer() {
    const eventDate = new Date('April 10, 2026 09:00:00').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Update every second
setInterval(updateTimer, 1000);
updateTimer();
