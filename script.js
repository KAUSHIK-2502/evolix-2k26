// ===== EVENT DETAILS DATABASE =====
const eventDetails = {
    // TECHNICAL EVENTS - Cash Prize + Certificate
    'paper-vista': {
        name: 'Paper Vista',
        description: 'Present your research papers and innovative ideas. “Paper is more patient than man.”',
        type: 'technical',
        rules: [
            'Team size: 1-3 members',
            '10 minutes presentation + 5 minutes Q&A',
            'Explain ideas very clearly',
            'End with stronger conclusion',
          
           
        ],
        prizes: '🥇 1st Prize: Cash Prize + Certificate\n🥈 2nd Prize: Cash Prize + Certificate\n🥉 3rd Prize: Cash Prize + Certificate'
    },
    'project-expo': {
        name: 'Project Expo',
        description: 'Showcase your innovative projects. Get feedback from industry experts and compete for recognition.',
        type: 'technical',
        rules: [
            'Team size: 2-4 members',
             'The project must be original and innovative.',
              'Presentation time 5-10 minutes 7-10 PPT slides.',
             'All team members must be able to explain the project. (Avoid reading directly from the PPT.)',
        ],
        prizes: '🥇 1st Prize: Cash Prize + Certificate\n🥈 2nd Prize: Cash Prize + Certificate\n🥉 3rd Prize: Cash Prize + Certificate'
    },
    'brain-chain': {
        name: 'Brain Chain',
        description: 'Connect the dots! A challenging event that tests your logical thinking and problem-solving skills.',
        type: 'technical',
        rules: [
            'Team size: 3 members',
            'Multiple rounds',
            'Prelims - Written test',
            'Finals - Buzzer round',
            'No negative marking'
        ],
        prizes: '🥇 1st Prize: Cash Prize + Certificate\n🥈 2nd Prize: Cash Prize + Certificate\n🥉 3rd Prize: Cash Prize + Certificate'
    },
    'quiz-arena': {
        name: 'Quiz Arena',
        description: 'Test your technical knowledge. Multiple rounds covering various domains of engineering.',
        type: 'technical',
        rules: [
            'Team Size: 2 members per team',
             'Round 1: Preliminary Total 50 Questions',
             'Questions will be displayed via projector',
             '30 seconds per question',
             'Participants must answer within the given time',
             'Evaluation will be done immediately after completion',
             'Top 10 teams will be shortlisted for Round 2',
             'Round 2: Final  Total 15 Questions',
             'Same answering pattern will be followed',
            ' Based on performance, Top 3 teams will be selected',
        ],
        prizes: '🥇 1st Prize: Cash Prize + Certificate\n🥈 2nd Prize: Cash Prize + Certificate\n🥉 3rd Prize: Cash Prize + Certificate'
    },
    
    // NON-TECHNICAL EVENTS - Cash Prize + Medal
    'dumb-charades': {
        name: 'Dumb Charades',
        description: 'Act it out! Fun-filled game of gestures and guessing. Team event that guarantees laughter.',
        type: 'non-technical',
        rules: [
            'Team size: (2-4) members',
            'Act silently (No speaking or lip movement)',
            'Time limit: 5 minutes per team',
            'Player will guess the movie names within given time limit',
            'One player picks a chit'
        ],
        prizes: '🥇 1st Prize: Shield + Certificate\n🥈 2nd Prize: Certificate'
    },
    'signal-scrambles': {
        name: 'Signal Scrambles',
        description: 'No direct communication. Only signals and relay.Pass the message through your team.Think fast, act smart, and win!',
        type: 'non-technical',
        rules: [
            'Team size: 3 members',
            'One sender, one relay, one receiver',  
            'No verbal communication (only gestures/signs allowed)',  
            'Sender → Relay → Receiver communication flow',
            'Time bonus for early and accurate completion',
        ],
        prizes: '🥇 1st Prize: Shield + Certificate\n🥈 2nd Prize:  Certificate'
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
        prizes: '🥇 Winners: Cash Prize -800₹\n🥈 Runners Up: Cash Prize -500₹'
    },
    'carrom': {
        name: 'Carrom',
        description: 'Classic carrom tournament. Compete in doubles format.',
        type: 'non-technical',
        rules: [
            'Team size: 2 members (doubles)',
            'Tournament format',
            'Knockout rounds',
           
            'Standard international rules'
        ],
        prizes: '🥇 Winners: Cash Prize -500₹\n🥈 Runners Up: Cash Prize -300₹'
    }
};

// ===== E-SPORTS EVENT DETAILS =====
const esportsDetails = {
    'free-fire': {
        name: 'Free Fire Tournament',
        description: 'Battle it out in Free Fire. Compete in Squad for exciting prizes.',
        rules: [
            '📅 Date: April 09, 2026',
            '⏰ Time: 7:00 PM - 09:00 PM',
            '👥 Squad: 4 members per team',
            '🎮 Match Type: Normal/OneTap BR Matches',
            '🗺️ Map: Bermuda',
            '📍 Platform: Mobile (Android/iOS)',
            '🔑 Room ID will be shared on WhatsApp group',
            '⚠️ No hacks/cheats allowed',
           
        ],
        prizes: '🏆 Squad Winners: Cash Prize-800₹',
        whatsapp: 'https://chat.whatsapp.com/IsjBvfqpKE5CrDPh04kevP?mode=gi_t'
    },
    'e-football': {
        name: 'E-Football Tournament',
        description: 'Virtual football tournament. Show your gaming skills on the virtual pitch.',
        rules: [
            '📅 Date: April 09, 2026',
            '⏰ Time: 8:00 PM - 9:00 PM',
            '👤 1v1 matches',
            '🎮 Platform: PS5 / PC / Mobile',
            '⚽ Game: eFootball / FC Mobile',
            '🏆 Tournament bracket format',
            '⏱️ 5 minutes per half',
            '🔑 Room ID will be shared on WhatsApp group'
        ],
        prizes: '🥇 Winner: Cash Prize',
        whatsapp: 'https://chat.whatsapp.com/IsjBvfqpKE5CrDPh04kevP?mode=gi_t'
    }
};

// ===== COUNTDOWN TIMER =====
function updateCountdown() {
    const eventDate = new Date('April 10, 2026 09:00:00').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;
    
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
        console.log('Countdown elements not found');
        return;
    }
    
    if (distance < 0) {
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minutesEl.textContent = '00';
        secondsEl.textContent = '00';
        return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
}

// Run countdown
updateCountdown();
setInterval(updateCountdown, 1000);

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

if (navRegisterBtn) {
    navRegisterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (regModal) {
            regModal.classList.add('show');
        }
    });
}

if (eventModalRegisterBtn) {
    eventModalRegisterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        eventModal.classList.remove('show');
        if (regModal) {
            regModal.classList.add('show');
        }
    });
}

if (closeRegModal) {
    closeRegModal.addEventListener('click', () => {
        regModal.classList.remove('show');
    });
}

if (regModal) {
    regModal.addEventListener('click', (e) => {
        if (e.target === regModal) {
            regModal.classList.remove('show');
        }
    });
}

// Handle registration option selection
document.querySelectorAll('.reg-select-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const url = btn.getAttribute('data-url');
        
        if (url && url !== 'YOUR_EVENT_FORM_LINK' && url !== 'YOUR_WORKSHOP_FORM_LINK' && url !== 'YOUR_COMBO_FORM_LINK') {
            window.open(url, '_blank');
            regModal.classList.remove('show');
        } else {
            alert('⚠️ Please contact: KARTHIKEYAN R - 9080252129');
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

console.log('✅ EVOLIX 2K26 loaded successfully!');

// ===== FIX MODAL SCROLLING ON MOBILE =====
// Prevent body scroll when modal is open
const modals = document.querySelectorAll('.modal-luxury');

modals.forEach(modal => {
    modal.addEventListener('show', function() {
        document.body.style.overflow = 'hidden';
        document.body.classList.add('modal-open');
    });
    
    modal.addEventListener('hide', function() {
        document.body.style.overflow = '';
        document.body.classList.remove('modal-open');
    });
});

// For registration modal
const regModal2 = document.getElementById('registrationModal');
if (regModal2) {
    regModal2.addEventListener('click', function(e) {
        if (e.target === regModal2) {
            document.body.style.overflow = '';
            document.body.classList.remove('modal-open');
        }
    });
}
