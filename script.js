// ===== EVENT DETAILS DATABASE =====
const eventDetails = {
    // TECHNICAL EVENTS - Cash Prize + Certificate
    'paper-vista': {
        name: 'Paper Vista',
        description: 'Present your research papers and innovative ideas. Compete with brightest minds from across the country.',
        type: 'technical',
        rules: [
            'Team size: 1-3 members',
            'Abstract submission required by March 30, 2026',
            '10 minutes presentation + 5 minutes Q&A',
            'Original research only',
            'PPT format: 16:9'
        ],
        prizes: '🥇 1st Prize: Cash Prize + Certificate+ shield\n🥈 2nd Prize: Cash Prize + Certificate\n🥉 3rd Prize: Cash Prize + Certificate'
    },
    'project-expo': {
        name: 'Project Expo',
        description: 'Showcase your innovative projects. Get feedback from industry experts and compete for recognition.',
        type: 'technical',
        rules: [
            'Team size: 1-4 members',
            'Working model/prototype required',
            'Project report must be submitted',
            'Innovation and practicality judged',
            'A0 size poster optional'
        ],
        prizes: '🥇 1st Prize: Cash Prize + Certificate+ shield\n🥈 2nd Prize: Cash Prize + Certificate\n🥉 3rd Prize: Cash Prize + Certificate'
    },
    'brain-chain': {
        name: 'Brain Chain',
        description: 'Connect the dots! A challenging event that tests your logical thinking and problem-solving skills.',
        type: 'technical',
        rules: [
            'Team size: 2 members',
            'Multiple rounds',
            'Prelims - Written test',
            'Finals - Buzzer round',
            'No negative marking'
        ],
        prizes: '🥇 1st Prize: Cash Prize + Certificate+ shield\n🥈 2nd Prize: Cash Prize + Certificate\n🥉 3rd Prize: Cash Prize + Certificate'
    },
    'quiz-arena': {
        name: 'Quiz Arena',
        description: 'Test your technical knowledge. Multiple rounds covering various domains of engineering.',
        type: 'technical',
        rules: [
            'Team size: 2 members',
            'Topics: Core EEE, Aptitude, Current affairs',
            'Prelims - Online test',
            'Finals - Stage round',
            'Buzzer round for finalists'
        ],
        prizes: '🥇 1st Prize: Cash Prize + Certificate + shield\n🥈 2nd Prize: Cash Prize + Certificate\n🥉 3rd Prize: Cash Prize + Certificate'
    },
    
    // NON-TECHNICAL EVENTS - Cash Prize + Medal
    'dumb-charades': {
        name: 'Dumb Charades',
        description: 'Act it out! Fun-filled game of gestures and guessing. Team event that guarantees laughter.',
        type: 'non-technical',
        rules: [
            'Team size: 3 members',
            'Act silently (No speaking or lip movement)',
            'Time limit: 2 minutes per team',
            'Player will guess the movie names within given time limit',
            'One player picks a chit'
        ],
        prizes: '🥇 1st Prize: Cash Prize + Medal + certificate\n🥈 2nd Prize: Cash Prize + Medal+ certificate'
    },
    'signal-scrambles': {
        name: 'Signal Scrambles',
        description: 'Decode the signals! Test your communication skills in this exciting and challenging game.',
        type: 'non-technical',
        rules: [
            'Team size: 2 members',
            'One sender, one receiver',
            'No verbal communication',
            'Multiple difficulty levels',
            'Time bonus for early completion'
        ],
        prizes: '🥇 1st Prize: Cash Prize + Medal+ certificate\n🥈 2nd Prize: Cash Prize + Medal+ certificate'
    },
    'fun-zone': {
        name: 'Fun Zone',
        description: 'Multiple fun games and activities. Take a break and enjoy with friends.',
        type: 'non-technical',
        rules: [
            'Individual event',
            'Multiple mini-games',
            'Score points to win',
            'Games: Ring toss, Stack up, Memory test',
            'Cumulative scoring'
        ],
        prizes: 'SURPRISE GIFTS🎁'
    },
    'box-cricket': {
        name: 'Box Cricket',
        description: 'Exciting box cricket tournament. Show your cricketing skills in this indoor format.',
        type: 'non-technical',
        rules: [
            'Team size: 5 members',
            'Tournament format',
            'Knockout rounds',
            '3 overs per match',
            'Tennis ball used'
        ],
        prizes: '🏆 Winners: Cash Prize + Medal+ certificate\n🥈 Runners Up: Cash Prize + Medal+ certificate'
    },
    'carrom': {
        name: 'Carrom',
        description: 'Classic carrom tournament. Compete in doubles format.',
        type: 'non-technical',
        rules: [
            'Team size: 2 members (doubles)',
            'Tournament format',
            'Knockout rounds',
            'Best of 3 games',
            'Standard international rules'
        ],
        prizes: '🏆 Winners: Cash Prize + Medal+ certificate\n🥈 Runners Up: Cash Prize + Medal+ certificate'
    },
    
   // ===== E-SPORTS EVENT DETAILS =====
const esportsDetails = {
    'free-fire': {
        name: 'Free Fire Tournament',
        description: 'Battle it out in Free Fire. Compete in both Squad and Solo categories for exciting prizes.',
        rules: [
            '📅 Date: April 9, 2026',
            '⏰ Time: 7:00 PM - 8:00 PM',
            '👥 Squad: 4 members per team',
            '🎮 Solo category also available',
            '📍 Platform: Mobile (Android/iOS)',
            '🔑 Room ID will be shared on WhatsApp group',
            '⚠️ No hacks/cheats allowed',
            '❌ Banned players will be disqualified'
        ],
        prizes: '🏆 Squad Winners: Cash Prize + Medal\n🥈 Squad Runners: Cash Prize + Medal\n🎮 Solo Winner: Cash Prize + Medal',
        whatsapp: 'https://chat.whatsapp.com/IsjBvfqpKE5CrDPh04kevP?mode=gi_t'
    },
    'e-football': {
        name: 'E-Football Tournament',
        description: 'Virtual football tournament. Show your gaming skills on the virtual pitch.',
        rules: [
            '📅 Date: April 9, 2026',
            '⏰ Time: 8:00 PM - 9:00 PM',
            '👤 1v1 matches',
            '🎮 Platform: PS5 / PC / Mobile',
            '⚽ Game: eFootball PES / FC Mobile',
            '🏆 Tournament bracket format',
            '⏱️ 5 minutes per half',
            '🔑 Room ID will be shared on WhatsApp group'
        ],
        prizes: '🥇 Winner: Cash Prize + Medal\n🥈 Runner: Cash Prize + Medal',
        whatsapp: 'https://chat.whatsapp.com/IsjBvfqpKE5CrDPh04kevP?mode=gi_t'
    }
};

// ===== E-SPORTS CARD CLICK HANDLER =====
document.querySelectorAll('.clickable-card').forEach(card => {
    card.addEventListener('click', function() {
        const esportKey = this.dataset.esport;
        const esport = esportsDetails[esportKey];
        
        if (!esport) return;
        
        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = `
            <h2>🎮 ${esport.name} 🎮</h2>
            <p style="color: #e0e0e0; margin-bottom: 1.5rem;">${esport.description}</p>
            
            <h3>📋 Rules & Guidelines</h3>
            <ul>
                ${esport.rules.map(rule => `<li>${rule}</li>`).join('')}
            </ul>
            
            <h3>🏆 Prizes</h3>
            <p style="color: #FF6D00; white-space: pre-line; font-weight: 500;">${esport.prizes}</p>
            
            <h3>📱 Join WhatsApp Group</h3>
            <p style="color: #25D366;">
                <i class="fab fa-whatsapp"></i> 
                <a href="${esport.whatsapp}" target="_blank" style="color: #25D366;">Click here to join WhatsApp group</a>
                <br>for Room ID, brackets and live updates
            </p>
        `;
        
        document.getElementById('eventModal').classList.add('show');
    });
});
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
            
            <h3>🏆 Prizes</h3>
            <p style="color: #FF6D00; white-space: pre-line; font-weight: 500;">${event.prizes}</p>
        `;
        
        document.getElementById('eventModal').classList.add('show');
    });
});
// ===== EVENT MODAL CONTROLS =====
const closeEventModal = document.getElementById('closeEventModal');
const cancelEventModal = document.getElementById('cancelEventModal');
const eventModal = document.getElementById('eventModal');

if (closeEventModal) {
    closeEventModal.addEventListener('click', () => {
        eventModal.classList.remove('show');
    });
}

if (cancelEventModal) {
    cancelEventModal.addEventListener('click', () => {
        eventModal.classList.remove('show');
    });
}

if (eventModal) {
    eventModal.addEventListener('click', (e) => {
        if (e.target === eventModal) {
            eventModal.classList.remove('show');
        }
    });
}

// ===== REGISTRATION MODAL (3 OPTIONS) =====
const regModal = document.getElementById('registrationModal');
const navRegisterBtn = document.getElementById('navRegisterBtn');
const eventModalRegisterBtn = document.getElementById('eventModalRegisterBtn');
const closeRegModal = document.getElementById('closeRegModal');

// IMPORTANT: This opens the 3-option modal, NOT direct Google Form
if (navRegisterBtn) {
    navRegisterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Register clicked - opening options modal');
        if (regModal) {
            regModal.classList.add('show');
        } else {
            alert('Registration modal not found. Please check HTML.');
        }
    });
}

// Handle Register button inside event modal
if (eventModalRegisterBtn) {
    eventModalRegisterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        eventModal.classList.remove('show');
        if (regModal) {
            regModal.classList.add('show');
        }
    });
}

// Close registration modal
if (closeRegModal) {
    closeRegModal.addEventListener('click', () => {
        regModal.classList.remove('show');
    });
}

// Close when clicking outside
if (regModal) {
    regModal.addEventListener('click', (e) => {
        if (e.target === regModal) {
            regModal.classList.remove('show');
        }
    });
}

// Handle registration option selection - Opens respective Google Form
document.querySelectorAll('.reg-select-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const url = btn.getAttribute('data-url');
        console.log('Opening form:', url);
        
        if (url && url !== 'YOUR_EVENT_FORM_LINK' && url !== 'YOUR_WORKSHOP_FORM_LINK' && url !== 'YOUR_COMBO_FORM_LINK') {
            window.open(url, '_blank');
            regModal.classList.remove('show');
        } else {
            alert('⚠️ Registration link will be added soon!\n\nPlease contact: KARTHIKEYAN R - 9080252129');
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

// ===== ADD DYNAMIC YEAR TO FOOTER =====
const footerYear = document.querySelector('.footer-premium p');
if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.innerHTML = footerYear.innerHTML.replace('2026', currentYear);
}

console.log('✅ EVOLIX 2K26 loaded - Register button shows 3 options modal');

