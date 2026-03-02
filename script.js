// Mouse Glow Effect
document.addEventListener('DOMContentLoaded', () => {
    const mouseGlow = document.querySelector('.mouse-glow');
    
    document.addEventListener('mousemove', (e) => {
        mouseGlow.style.left = e.clientX - 150 + 'px';
        mouseGlow.style.top = e.clientY - 150 + 'px';
    });
});

// Typing Effect for Cyber Badge
const typingText = document.getElementById('typing-text');
const phrases = ['Python Developer', 'ML Engineer', 'Django Expert', 'Creative Technologist'];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}

// Start typing effect
if (typingText) {
    setTimeout(typeEffect, 1000);
}

// Tilt effect for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-5px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Glitch effect enhancement
function randomGlitch() {
    const glitchText = document.querySelector('.glitch-text');
    if (glitchText) {
        glitchText.style.animation = 'none';
        glitchText.offsetHeight;
        glitchText.style.animation = 'glitch 3s infinite';
    }
}

// Trigger random glitch every 10 seconds
setInterval(randomGlitch, 10000);

// Skill tags hover sound effect (visual only - just for fun)
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'scale(1.1)';
        tag.style.boxShadow = '0 0 20px cyan';
    });
    
    tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'scale(1)';
        tag.style.boxShadow = 'none';
    });
});

// Dynamic year in footer
const year = new Date().getFullYear();
const footerSpan = document.querySelector('footer span');
if (footerSpan) {
    footerSpan.innerHTML = `MD. Fahim Hossain Turja — Portfolio ${year}`;
}

// Console greeting (for devs)
console.log('%c🚀 Fahim Turja - Futuristic Portfolio', 'color: cyan; font-size: 16px; font-weight: bold;');
console.log('%cSystem initialized. Welcome to the future.', 'color: magenta; font-size: 12px;');

// Add parallax effect to background
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    document.body.style.backgroundPosition = `${x * 20}px ${y * 20}px`;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.card, .skill-category, .achievement-block, .co-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Random data transmission effect (cosmetic)
setInterval(() => {
    const randomCard = document.querySelectorAll('.card')[Math.floor(Math.random() * document.querySelectorAll('.card').length)];
    if (randomCard) {
        randomCard.style.borderColor = '#f0f';
        setTimeout(() => {
            randomCard.style.borderColor = 'rgba(0, 255, 255, 0.25)';
        }, 200);
    }
}, 3000);

// Copy email to clipboard
const emailLink = document.querySelector('a[href^="mailto"]');
if (emailLink) {
    emailLink.addEventListener('click', (e) => {
        e.preventDefault();
        navigator.clip