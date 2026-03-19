// ===== EVENT DETAILS DATABASE =====
const eventDatabase = {
    'paper-vista': {
        name: 'PAPER VISTA',
        description: 'Present your research papers and innovative ideas.',
        rules: [
            'Team size: 1-3 members',
            'Abstract submission required by March 30',
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

// ===== GOOGLE FORM LINK =====
const GOOGLE_FORM_URL = 'https://forms.google.com/your-form-link-here'; // REPLACE THIS

// ===== COUNTDOWN TIMER =====
function updateCountdown() {
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

setInterval(updateCountdown, 1000);
updateCountdown();

// ===== EVENT CLICK HANDLER =====
document.querySelectorAll('.breaker').forEach(breaker => {
    breaker.addEventListener('click', function() {
        const eventKey = this.dataset.event;
        const event = eventDatabase[eventKey];
        
        if (!event) return;
        
        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = `
            <h2>⚡ ${event.name} ⚡</h2>
            <p style="color: #ffdd00; margin-bottom: 20px;">${event.description}</p>
            
            <h3>📋 RULES:</h3>
            <ul>
                ${event.rules.map(rule => `<li>${rule}</li>`).join('')}
            </ul>
            
            <h3>💰 FEE:</h3>
            <p style="color: #ffffff;">${event.fee}</p>
            
            <h3>🏆 PRIZES:</h3>
            <p style="color: #ffdd00; white-space: pre-line;">${event.prizes}</p>
        `;
        
        document.getElementById('eventModal').classList.add('show');
    });
});

// ===== MODAL CONTROLS =====
document.querySelector('.modal-close').addEventListener('click', () => {
    document.getElementById('eventModal').classList.remove('show');
});

document.querySelector('.modal-cancel').addEventListener('click', () => {
    document.getElementById('eventModal').classList.remove('show');
});

document.getElementById('eventModal').addEventListener('click', (e) => {
    if (e.target.id === 'eventModal') {
        document.getElementById('eventModal').classList.remove('show');
    }
});

// ===== REGISTER BUTTON =====
document.getElementById('modalRegisterBtn').addEventListener('click', (e) => {
    e.preventDefault();
    window.open(GOOGLE_FORM_URL, '_blank');
});

document.getElementById('mainRegisterBtn').addEventListener('click', (e) => {
    e.preventDefault();
    window.open(GOOGLE_FORM_URL, '_blank');
});
