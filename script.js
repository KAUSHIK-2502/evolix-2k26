// ===== EVENT DETAILS DATABASE =====
const eventDetails = {
    'paper-vista': {
        name: 'Paper Vista',
        description: 'Present your research papers and innovative ideas. Compete with brightest minds from across the country.',
        rules: [
            'Team size: 1-3 members',
            'Abstract submission required by March 30, 2026',
            '10 minutes presentation + 5 minutes Q&A',
            'Original research only',
            'PPT format: 16:9'
        ],
        fee: '₹200 per head',
        prizes: '🥇 1st Prize: ₹10,000\n🥈 2nd Prize: ₹5,000\n🥉 3rd Prize: ₹2,000'
    },
    'project-expo': {
        name: 'Project Expo',
        description: 'Showcase your innovative projects. Get feedback from industry experts and compete for recognition.',
        rules: [
            'Team size: 1-4 members',
            'Working model/prototype required',
            'Project report must be submitted',
            'Innovation and practicality judged',
            'A0 size poster optional'
        ],
        fee: '₹200 per head',
        prizes: '🥇 1st Prize: ₹15,000\n🥈 2nd Prize: ₹7,000\n🥉 3rd Prize: ₹3,000'
    },
    'brain-chain': {
        name: 'Brain Chain',
        description: 'Connect the dots! A challenging event that tests your logical thinking and problem-solving skills.',
        rules: [
            'Team size: 2 members',
            'Multiple rounds',
            'Prelims - Written test',
            'Finals - Buzzer round',
            'No negative marking'
        ],
        fee: '₹200 per head',
        prizes: '🥇 1st Prize: ₹8,000\n🥈 2nd Prize: ₹4,000\n🥉 3rd Prize: ₹2,000'
    },
    'quiz-arena': {
        name: 'Quiz Arena',
        description: 'Test your technical knowledge. Multiple rounds covering various domains of engineering.',
        rules: [
            'Team size: 2 members',
            'Topics: Core EEE, Aptitude, Current affairs',
            'Prelims - Online test',
            'Finals - Stage round',
            'Buzzer round for finalists'
        ],
        fee: '₹200 per head',
        prizes: '🥇 1st Prize: ₹6,000\n🥈 2nd Prize: ₹3,000\n🥉 3rd Prize: ₹1,500'
    },
    'dumb-charades': {
        name: 'Dumb Charades',
        description: 'Act it out! Fun-filled game of gestures and guessing. Team event that guarantees laughter.',
        rules: [
            'Team size: 4 members',
            'No speaking or lip movement',
            'Time limit: 2 minutes per team',
            'Movies, songs, TV shows only',
            'One pass available per team'
        ],
        fee: '₹200 per head',
        prizes: '🥇 1st Prize: ₹5,000\n🥈 2nd Prize: ₹2,500'
    },
    'signal-scrambles': {
        name: 'Signal Scrambles',
        description: 'Decode the signals! Test your communication skills in this exciting and challenging game.',
        rules: [
            'Team size: 2 members',
            'One sender, one receiver',
            'No verbal communication',
            'Multiple difficulty levels',
            'Time bonus for early completion'
        ],
        fee: '₹200 per head',
        prizes: '🥇 1st Prize: ₹4,000\n🥈 2nd Prize: ₹2,000'
    },
    'fun-zone': {
        name: 'Fun Zone',
        description: 'Multiple fun games and activities. Take a break and enjoy with friends.',
        rules: [
            'Individual event',
            'Multiple mini-games',
            'Score points to win',
            'Games: Ring toss, Stack up, Memory test',
            'Cumulative scoring'
        ],
        fee: '₹200 per head',
        prizes: '🥇 1st Prize: ₹3,000\n🥈 2nd Prize: ₹1,500\n🥉 3rd Prize: ₹750'
    },
    'box-cricket': {
        name: 'Box Cricket',
        description: 'Exciting box cricket tournament. Show your cricketing skills in this indoor format.',
        rules: [
            'Team size: 5-7 members',
            'Tournament format',
            'Knockout rounds',
            '5 overs per match',
            'Tennis ball used'
        ],
        fee: '₹200 per head',
        prizes: '🏆 Winning Team: ₹5,000\n🥈 Runners Up: ₹2,500'
    },
    'carrom': {
        name: 'Carrom',
        description: 'Classic carrom tournament. Compete in doubles format.',
        rules: [
            'Team size: 2 members (doubles)',
            'Tournament format',
            'Knockout rounds',
            'Best of 3 games',
            'Standard international rules'
        ],
        fee: '₹200 per head',
        prizes: '🏆 Winning Team: ₹3,000\n🥈 Runners Up: ₹1,500'
    },
    'free-fire': {
        name: 'Free Fire',
        description: 'Battle it out in Free Fire. Solo and squad tournaments with exciting prizes.',
        rules: [
            'Squad: 4 members',
            'Solo category also available',
            'Room ID provided on spot',
            'No hacks/cheats allowed',
            'Banned players will be disqualified'
        ],
        fee: '₹200 per head',
        prizes: 'Squad Winner: ₹6,000\nSquad Runner: ₹3,000\nSolo Winner: ₹3,000'
    },
    'e-football': {
        name: 'E-Football',
        description: 'Virtual football tournament. Show your gaming skills on the virtual pitch.',
        rules: [
            '1v1 matches',
            'Platform: PS5/PC',
            'Game: eFootball PES',
            'Tournament bracket',
            '5 minutes per half'
        ],
        fee: '₹200 per head',
        prizes: '🥇 Winner: ₹4,000\n🥈 Runner: ₹2,000'
    }
};

// ===== YOUR GOOGLE FORM LINK =====
// 🔴 REPLACE THIS WITH YOUR ACTUAL GOOGLE FORM LINK
const GOOGLE_FORM_URL = 'https://forms.google.com/your-form-link-here';

// ===== COUNTDOWN TIMER =====
function updateCountdown() {
    const eventDate = new Date('April 10, 2026 09:00:00').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;
    
    if (distance < 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// ===== EVENT CLICK HANDLER =====
document.querySelectorAll('.event-card-luxury').forEach(card => {
    card.addEventListener('click', function() {
        const eventKey = this.dataset.event;
        const event = eventDetails[eventKey];
        
        if (!event) return;
        
        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = `
            <h2>⚡ ${event.name} ⚡</h2>
            <p style="color: #e0e0e0; margin-bottom: 1.5rem;">${event.description}</p>
            
            <h3>📋 Rules & Guidelines</h3>
            <ul>
                ${event.rules.map(rule => `<li>${rule}</li>`).join('')}
            </ul>
            
            <h3>💰 Registration Fee</h3>
            <p style="color: #FFE600; font-weight: 600;">${event.fee}</p>
            
            <h3>🏆 Prizes</h3>
            <p style="color: #FF6D00; white-space: pre-line; font-weight: 500;">${event.prizes}</p>
        `;
        
        document.getElementById('eventModal').classList.add('show');
    });
});

// ===== MODAL CONTROLS =====
// Close button
document.querySelector('.modal-close-luxury').addEventListener('click', () => {
    document.getElementById('eventModal').classList.remove('show');
});

// Cancel button
document.querySelector('.modal-cancel').addEventListener('click', () => {
    document.getElementById('eventModal').classList.remove('show');
});

// Click outside modal to close
document.getElementById('eventModal').addEventListener('click', (e) => {
    if (e.target.id === 'eventModal') {
        document.getElementById('eventModal').classList.remove('show');
    }
});

// ===== REGISTER BUTTONS =====
// Modal register button
document.getElementById('modalRegisterBtn').addEventListener('click', (e) => {
    e.preventDefault();
    window.open(GOOGLE_FORM_URL, '_blank');
});

// Navbar register button
document.getElementById('navRegisterBtn').addEventListener('click', (e) => {
    e.preventDefault();
    window.open(GOOGLE_FORM_URL, '_blank');
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(item.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== PHONE NUMBER CLICK TRACKING (optional) =====
document.querySelectorAll('.contact-row a[href^="tel:"]').forEach(phoneLink => {
    phoneLink.addEventListener('click', () => {
        console.log('Phone number clicked:', phoneLink.textContent);
    });
});

// ===== ADD DYNAMIC YEAR TO FOOTER =====
const footerYear = document.querySelector('.footer-premium p');
if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.innerHTML = footerYear.innerHTML.replace('2026', currentYear);
}

// ===== PRELOADER (optional - remove if not needed) =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
