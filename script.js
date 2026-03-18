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

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.innerHTML = navMenu.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// ===== EVENT CATEGORY TABS =====
const tabBtns = document.querySelectorAll('.tab-btn');
const eventGrids = document.querySelectorAll('.events-grid');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons and grids
        tabBtns.forEach(b => b.classList.remove('active'));
        eventGrids.forEach(grid => grid.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Show corresponding grid
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

// ===== PREVENT FORM SUBMISSION FOR DEMO =====
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.classList.contains('card-link') || link.classList.contains('workshop-btn') || link.classList.contains('cta-primary') || link.classList.contains('cta-giant-btn')) {
            e.preventDefault();
            alert('Registration will open soon! Stay tuned.');
        }
    });
});

// ===== DYNAMIC YEAR IN FOOTER =====
document.querySelector('.footer-bottom p').innerHTML = 
    document.querySelector('.footer-bottom p').innerHTML.replace('2026', new Date().getFullYear());

// ===== LOADING ANIMATION =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
