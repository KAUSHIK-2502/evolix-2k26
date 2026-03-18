// ===== COUNTDOWN TIMER =====
const eventDate = new Date('April 1, 2026 09:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById('days').innerHTML = String(days).padStart(2, '0');
    document.getElementById('hours').innerHTML = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerHTML = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerHTML = String(seconds).padStart(2, '0');
    
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('days').innerHTML = '00';
        document.getElementById('hours').innerHTML = '00';
        document.getElementById('minutes').innerHTML = '00';
        document.getElementById('seconds').innerHTML = '00';
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.innerHTML = navMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
}

// Close menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (menuToggle) {
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});

// ===== EVENT CATEGORY TABS =====
const tabBtns = document.querySelectorAll('.tab-btn');
const eventGrids = document.querySelectorAll('.events-grid');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        eventGrids.forEach(grid => grid.classList.remove('active'));
        
        btn.classList.add('active');
        
        const category = btn.dataset.category;
        if (category === 'technical') {
            document.getElementById('technical').classList.add('active');
        } else if (category === 'nontech') {
            document.getElementById('nontech').classList.add('active');
        } else if (category === 'online') {
            document.getElementById('online').classList.add('active');
        }
    });
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(5, 5, 15, 0.95)';
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'rgba(10, 10, 20, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== FIXED: WORKING "KNOW MORE" BUTTONS =====
// This makes all "Know More" buttons show event details

// Function to show event details in a modal/popup
function showEventDetails(eventName, eventDescription, eventRules, eventPrize) {
    // Remove any existing modal
    const existingModal = document.querySelector('.event-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'event-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <h2>${eventName}</h2>
            <div class="modal-body">
                <p>${eventDescription}</p>
                <h4>Rules:</h4>
                <ul>
                    ${eventRules.map(rule => `<li>${rule}</li>`).join('')}
                </ul>
                <h4>Prizes:</h4>
                <p>${eventPrize}</p>
            </div>
            <button class="modal-register-btn">Register Now</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Show modal with animation
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    
    // Close modal when clicking close button
    modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
        }, 300);
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.remove();
            }, 300);
        }
    });
    
    // Register button
    modal.querySelector('.modal-register-btn').addEventListener('click', () => {
        alert(`Registration for ${eventName} will open soon!`);
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
        }, 300);
    });
}

// Add click event to all "Know More" buttons
document.querySelectorAll('.card-link').forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Get event details from the card
        const card = link.closest('.event-premium-card');
        const eventName = card.querySelector('h3').textContent;
        const eventDescription = card.querySelector('p').textContent;
        
        // Different rules and prizes based on event
        let rules = [];
        let prize = '';
        
        if (eventName.includes('Paper Vista')) {
            rules = ['Team size: 1-3 members', 'Abstract must be submitted by March 25', 'Presentation time: 10 minutes', 'Original research only'];
            prize = '🥇 1st Prize: ₹10,000\n🥈 2nd Prize: ₹5,000\n🥉 3rd Prize: ₹2,000';
        } else if (eventName.includes('Project Expo')) {
            rules = ['Team size: 1-4 members', 'Working model required', 'Project report must be submitted', 'Innovation and practicality judged'];
            prize = '🥇 1st Prize: ₹15,000\n🥈 2nd Prize: ₹7,000\n🥉 3rd Prize: ₹3,000';
        } else if (eventName.includes('Brain Chain')) {
            rules = ['Team size: 2 members', 'Multiple rounds', 'Prelims followed by finals', 'No elimination without warning'];
            prize = '🥇 1st Prize: ₹8,000\n🥈 2nd Prize: ₹4,000\n🥉 3rd Prize: ₹2,000';
        } else if (eventName.includes('Quiz Arena')) {
            rules = ['Team size: 2 members', 'Prelims - Written test', 'Finals - Buzzer round', 'Topics: Core engineering, GK, Current affairs'];
            prize = '🥇 1st Prize: ₹6,000\n🥈 2nd Prize: ₹3,000\n🥉 3rd Prize: ₹1,500';
        } else if (eventName.includes('Dumb Charades')) {
            rules = ['Team size: 4 members', 'No speaking allowed', 'Time limit: 2 minutes per team', 'Movies, songs, TV shows only'];
            prize = '🥇 1st Prize: ₹5,000\n🥈 2nd Prize: ₹2,500';
        } else if (eventName.includes('Signal Scramble')) {
            rules = ['Team size: 2 members', 'Decode signals within time limit', 'Multiple difficulty levels', 'Communication skills tested'];
            prize = '🥇 1st Prize: ₹4,000\n🥈 2nd Prize: ₹2,000';
        } else if (eventName.includes('Fun Zone')) {
            rules = ['Individual event', 'Multiple mini-games', 'Score points to win', 'Fun guaranteed'];
            prize = '🥇 1st Prize: ₹3,000\n🥈 2nd Prize: ₹1,500';
        } else if (eventName.includes('Carrom') || eventName.includes('Box Cricket')) {
            rules = ['Team size: 2-4 members', 'Tournament format', 'Knockout rounds', 'Bring your own equipment for cricket'];
            prize = '🥇 1st Prize: ₹5,000\n🥈 2nd Prize: ₹2,500';
        } else if (eventName.includes('E-Football')) {
            rules = ['1v1 matches', 'Platform: Console/PC', 'Tournament bracket', 'Wired controllers only'];
            prize = '🥇 1st Prize: ₹4,000\n🥈 2nd Prize: ₹2,000';
        } else if (eventName.includes('Free Fire')) {
            rules = ['Squad: 4 members', 'Solo also available', 'Room ID provided on spot', 'No hacks/cheats'];
            prize = '🥇 1st Prize: ₹6,000\n🥈 2nd Prize: ₹3,000';
        } else {
            rules = ['Team size as per event', 'Rules will be explained on spot', 'Registration required', 'Participation certificates for all'];
            prize = 'Exciting Prizes to be won!';
        }
        
        showEventDetails(eventName, eventDescription, rules, prize);
    });
});

// Workshop button
document.querySelector('.workshop-btn').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Workshop: Embedded + IOT\n\n📅 Date: April 1, 2026\n⏰ Time: 10:00 AM - 4:00 PM\n📍 Venue: EEE Seminar Hall\n\n💰 Fee: ₹300 per person\n\n✅ Certificate provided\n✅ Hands-on training\n✅ Limited seats: 50 only\n\nRegister soon!');
});

// Register buttons
document.querySelectorAll('.cta-primary, .cta-giant-btn, .nav-register-btn, .modal-register-btn').forEach(btn => {
    if (btn) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            showRegistrationForm();
        });
    }
});

// Registration form function
function showRegistrationForm() {
    // Remove any existing modal
    const existingModal = document.querySelector('.registration-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create registration modal
    const modal = document.createElement('div');
    modal.className = 'event-modal registration-modal';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <button class="modal-close">&times;</button>
            <h2>Register for EVOLIX 2K26</h2>
            <div class="modal-body">
                <form id="quickRegisterForm">
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; color: #00ffff;">Full Name *</label>
                        <input type="text" id="regName" required style="width: 100%; padding: 10px; background: #111; border: 1px solid #333; border-radius: 5px; color: white;">
                    </div>
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; color: #00ffff;">Email *</label>
                        <input type="email" id="regEmail" required style="width: 100%; padding: 10px; background: #111; border: 1px solid #333; border-radius: 5px; color: white;">
                    </div>
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; color: #00ffff;">Phone *</label>
                        <input type="tel" id="regPhone" required style="width: 100%; padding: 10px; background: #111; border: 1px solid #333; border-radius: 5px; color: white;">
                    </div>
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; color: #00ffff;">College *</label>
                        <input type="text" id="regCollege" required style="width: 100%; padding: 10px; background: #111; border: 1px solid #333; border-radius: 5px; color: white;">
                    </div>
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; color: #00ffff;">Event Interested In</label>
                        <select id="regEvent" style="width: 100%; padding: 10px; background: #111; border: 1px solid #333; border-radius: 5px; color: white;">
                            <option>Paper Vista</option>
                            <option>Project Expo</option>
                            <option>Brain Chain</option>
                            <option>Quiz Arena</option>
                            <option>Dumb Charades</option>
                            <option>Signal Scramble</option>
                            <option>Fun Zone</option>
                            <option>Carrom/Box Cricket</option>
                            <option>E-Football</option>
                            <option>Free Fire</option>
                            <option>Workshop</option>
                        </select>
                    </div>
                </form>
            </div>
            <button class="modal-register-btn" id="submitRegistration" style="margin-top: 0;">Submit Registration</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    
    modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
        }, 300);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.remove();
            }, 300);
        }
    });
    
    document.getElementById('submitRegistration').addEventListener('click', () => {
        const name = document.getElementById('regName').value;
        const email = document.getElementById('regEmail').value;
        const phone = document.getElementById('regPhone').value;
        
        if (!name || !email || !phone) {
            alert('Please fill all required fields!');
            return;
        }
        
        alert(`Thank you ${name}! Your registration request has been received. We'll contact you soon at ${email}.`);
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
        }, 300);
    });
}

// ===== PARALLAX EFFECT FOR FLOATING CARDS =====
window.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.floating-card');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    cards.forEach((card, index) => {
        const speed = 20 * (index + 1);
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        card.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// ===== REVEAL ANIMATION ON SCROLL =====
const revealElements = document.querySelectorAll('.event-premium-card, .profile-card, .faculty-card, .workshop-premium-card');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state
revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(50px)';
    element.style.transition = 'all 0.6s ease';
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===== DYNAMIC YEAR IN FOOTER =====
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    footerYear.innerHTML = footerYear.innerHTML.replace('2026', new Date().getFullYear());
}

// ===== LOADING ANIMATION =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
