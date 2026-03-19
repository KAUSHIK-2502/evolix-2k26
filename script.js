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

// ===== EVENT DETAILS DATA =====
const eventDetails = {
    'paper-vista': {
        name: 'PAPER VISTA',
        description: 'Present your research papers and innovative ideas.',
        rules: [
            'Team size: 1-3 members',
            'Abstract submission required',
            '10 minutes presentation + 5 minutes Q&A',
            'Original research only'
        ],
        fee: '₹200 per head',
        prizes: '🥇 1st: ₹10,000\n🥈 2nd: ₹5,000\n🥉 3rd: ₹2,000'
    },
    'project-expo': {
        name: 'PROJECT EXPO',
        description: 'Showcase your innovative projects.',
        rules: [
            'Team size: 1-4 members',
            'Working model required',
            'Project report must be submitted',
            'Innovation and practicality judged'
        ],
        fee: '₹200 per head',
        prizes: '🥇 1st: ₹15,000\n🥈 2nd: ₹7,000\n🥉 3rd: ₹3,000'
    },
    'brain-chain': {
        name: 'BRAIN CHAIN',
        description: 'Connect the dots! A challenging logical thinking event.',
        rules: [
            'Team size: 2 members',
            'Multiple rounds',
            'Prelims followed by finals',
            'No elimination without warning'
        ],
        fee: '₹200 per head',
        prizes: '🥇 1st: ₹8,000\n🥈 2nd: ₹4,000\n🥉 3rd: ₹2,000'
    },
    'quiz-arena': {
        name: 'QUIZ ARENA',
        description: 'Test your technical knowledge.',
        rules: [
            'Team size: 2 members',
            'Prelims - Written test',
            'Finals - Buzzer round',
            'Topics: Core engineering, GK, Current affairs'
        ],
        fee: '₹200 per head',
        prizes: '🥇 1st: ₹6,000\n🥈 2nd: ₹3,000\n🥉 3rd: ₹1,500'
    },
    'dumb-charades': {
        name: 'DUMB CHARADES',
        description: 'Fun-filled game of gestures and guessing.',
        rules: [
            'Team size: 4 members',
            'No speaking allowed',
            'Time limit: 2 minutes per team',
            'Movies, songs, TV shows only'
        ],
        fee: '₹200 per head',
        prizes: '🥇 1st: ₹5,000\n🥈 2nd: ₹2,500'
    },
    'signal-scrambles': {
        name: 'SIGNAL SCRAMBLES',
        description: 'Decode the signals! Test your communication skills.',
        rules: [
            'Team size: 2 members',
            'Decode signals within time limit',
            'Multiple difficulty levels',
            'Communication skills tested'
        ],
        fee: '₹200 per head',
        prizes: '🥇 1st: ₹4,000\n🥈 2nd: ₹2,000'
    },
    'fun-zone': {
        name: 'FUN ZONE',
        description: 'Multiple fun games and activities.',
        rules: [
            'Individual event',
            'Multiple mini-games',
            'Score points to win',
            'Fun guaranteed'
        ],
        fee: '₹200 per head',
        prizes: '🥇 1st: ₹3,000\n🥈 2nd: ₹1,500'
    },
    'box-cricket': {
        name: 'BOX CRICKET',
        description: 'Exciting box cricket tournament.',
        rules: [
            'Team size: 5-7 members',
            'Tournament format',
            'Knockout rounds',
            'Bring your own equipment'
        ],
        fee: '₹200 per head',
        prizes: '🥇 1st: ₹5,000\n🥈 2nd: ₹2,500'
    },
    'carrom': {
        name: 'CARROM',
        description: 'Classic carrom tournament.',
        rules: [
            'Team size: 2 members (doubles)',
            'Tournament format',
            'Knockout rounds',
            'Standard carrom rules apply'
        ],
        fee: '₹200 per head',
        prizes: '🥇 1st: ₹3,000\n🥈 2nd: ₹1,500'
    },
    'free-fire': {
        name: 'FREE FIRE',
        description: 'Battle it out in Free Fire.',
        rules: [
            'Squad: 4 members',
            'Solo also available',
            'Room ID provided on spot',
            'No hacks/cheats'
        ],
        fee: '₹200 per head',
        prizes: '🥇 1st: ₹6,000\n🥈 2nd: ₹3,000'
    },
    'e-football': {
        name: 'E-FOOTBALL',
        description: 'Virtual football tournament.',
        rules: [
            '1v1 matches',
            'Platform: Console/PC',
            'Tournament bracket',
            'Wired controllers only'
        ],
        fee: '₹200 per head',
        prizes: '🥇 1st: ₹4,000\n🥈 2nd: ₹2,000'
    }
};

// ===== YOUR GOOGLE FORM LINK =====
// 🔴 REPLACE THIS WITH YOUR ACTUAL GOOGLE FORM LINK
const GOOGLE_FORM_URL = 'https://forms.google.com/your-form-link-here';

// ===== MAKE EVENTS CLICKABLE =====
document.querySelectorAll('.clickable-event').forEach(eventChip => {
    eventChip.addEventListener('click', function() {
        const eventKey = this.dataset.event;
        const event = eventDetails[eventKey];
        
        if (!event) return;
        
        // Create modal
        const modal = document.createElement('div');
        modal.className = 'event-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <h2>⚡ ${event.name} ⚡</h2>
                <p style="color: #ffdd00; margin-bottom: 20px;">${event.description}</p>
                
                <h3>📋 RULES:</h3>
                <ul>
                    ${event.rules.map(rule => `<li>${rule}</li>`).join('')}
                </ul>
                
                <h3>💰 FEE:</h3>
                <p style="color: #ffffff; margin-bottom: 15px;">${event.fee}</p>
                
                <h3>🏆 PRIZES:</h3>
                <p style="color: #ffdd00; white-space: pre-line;">${event.prizes}</p>
                
                <div class="modal-buttons">
                    <a href="${GOOGLE_FORM_URL}" target="_blank" class="modal-register-btn">
                        REGISTER NOW <i class="fas fa-external-link-alt"></i>
                    </a>
                    <button class="modal-cancel-btn">CLOSE</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Show modal
        setTimeout(() => modal.classList.add('show'), 10);
        
        // Close modal handlers
        modal.querySelector('.modal-close').addEventListener('click', () => {
            modal.classList.remove('show');
            setTimeout(() => modal.remove(), 300);
        });
        
        modal.querySelector('.modal-cancel-btn').addEventListener('click', () => {
            modal.classList.remove('show');
            setTimeout(() => modal.remove(), 300);
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
                setTimeout(() => modal.remove(), 300);
            }
        });
    });
});

// ===== ADD REGISTER BUTTON TO GOOGLE FORM =====
// Add this button anywhere you want (already in modal above)
// You can also add a fixed register button:

// Add to your HTML where you want:
// <a href="YOUR_GOOGLE_FORM_LINK" target="_blank" class="floating-register-btn">REGISTER NOW ⚡</a>
