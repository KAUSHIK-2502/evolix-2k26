// Set the event date - APRIL 1, 2026 9:00 AM
const eventDate = new Date('April 1, 2026 09:00:00').getTime();

// Update the countdown every second
const countdown = setInterval(function() {
    // Get current date and time
    const now = new Date().getTime();
    
    // Calculate the time remaining
    const distance = eventDate - now;
    
    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the results with leading zeros
    document.getElementById('days').innerHTML = String(days).padStart(2, '0');
    document.getElementById('hours').innerHTML = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerHTML = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerHTML = String(seconds).padStart(2, '0');
    
    // If the countdown is over
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('days').innerHTML = '00';
        document.getElementById('hours').innerHTML = '00';
        document.getElementById('minutes').innerHTML = '00';
        document.getElementById('seconds').innerHTML = '00';
        
        // Add "EVENT STARTED" message
        const countdownDiv = document.querySelector('.countdown');
        const startedMsg = document.createElement('h2');
        startedMsg.className = 'event-started';
        startedMsg.innerHTML = '🎉 EVENT STARTED 🎉';
        countdownDiv.parentNode.insertBefore(startedMsg, countdownDiv.nextSibling);
    }
}, 1000);

// Add smooth scrolling for anchor links (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation on scroll (optional)
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.event-card, .organizer-card, .contact-box');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if(position.top < window.innerHeight && position.bottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});
