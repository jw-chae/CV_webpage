// ==================== 
// Navigation Menu Toggle
// ==================== 
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ==================== 
// Smooth Scrolling with Active Link
// ==================== 
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==================== 
// Navbar Background on Scroll
// ==================== 
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 15, 30, 0.98)';
        navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'rgba(15, 15, 30, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    }
});

// ==================== 
// Animated Number Counter
// ==================== 
const counters = document.querySelectorAll('.stat-number');
const speed = 200;
let hasAnimated = false;

const animateCounters = () => {
    if (hasAnimated) return;
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / speed;
        
        const updateCounter = () => {
            const current = +counter.innerText;
            
            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCounter, 10);
            } else {
                counter.innerText = target + '+';
            }
        };
        
        updateCounter();
    });
    
    hasAnimated = true;
};

// Trigger counter animation when About section is visible
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
        }
    });
}, observerOptions);

const aboutSection = document.querySelector('.about-stats');
if (aboutSection) {
    observer.observe(aboutSection);
}

// ==================== 
// Scroll Animations
// ==================== 
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.skill-category, .project-card, .detail-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initialize elements with hidden state
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.skill-category, .project-card, .detail-item');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// ==================== 
// Contact Form Handler
// ==================== 
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the form data to a server
        // For now, we'll just show an alert
        alert(`메시지를 보내주셔서 감사합니다, ${name}님!\n이메일: ${email}\n\n곧 연락드리겠습니다.`);
        
        // Reset form
        contactForm.reset();
    });
}

// ==================== 
// Typing Effect for Hero Section
// ==================== 
const typingText = document.querySelector('.hero-subtitle');
if (typingText) {
    const text = typingText.textContent;
    typingText.textContent = '';
    let index = 0;
    
    const typeWriter = () => {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing effect after page loads
    setTimeout(typeWriter, 1000);
}

// ==================== 
// Parallax Effect for Hero Section
// ==================== 
window.addEventListener('scroll', () => {
    const heroImage = document.querySelector('.profile-circle');
    if (heroImage) {
        const scrolled = window.pageYOffset;
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// ==================== 
// Dynamic Gradient Background
// ==================== 
let gradientAngle = 135;
const heroSection = document.querySelector('.hero');

if (heroSection) {
    setInterval(() => {
        gradientAngle = (gradientAngle + 1) % 360;
        heroSection.style.background = `
            radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.1) 0%, transparent 50%),
            #0f0f1e
        `;
    }, 50);
}

// ==================== 
// Skill Tags Hover Effect
// ==================== 
const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        skillTags.forEach(otherTag => {
            if (otherTag !== tag) {
                otherTag.style.opacity = '0.5';
            }
        });
    });
    
    tag.addEventListener('mouseleave', () => {
        skillTags.forEach(otherTag => {
            otherTag.style.opacity = '1';
        });
    });
});

// ==================== 
// Project Card Tilt Effect
// ==================== 
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ==================== 
// Lazy Loading for Images
// ==================== 
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ==================== 
// Theme Toggle (Optional)
// ==================== 
const createThemeToggle = () => {
    const toggleButton = document.createElement('button');
    toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
    toggleButton.className = 'theme-toggle';
    toggleButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        box-shadow: 0 5px 20px rgba(102, 126, 234, 0.5);
        z-index: 999;
        transition: all 0.3s ease;
    `;
    
    toggleButton.addEventListener('mouseenter', () => {
        toggleButton.style.transform = 'scale(1.1)';
    });
    
    toggleButton.addEventListener('mouseleave', () => {
        toggleButton.style.transform = 'scale(1)';
    });
    
    document.body.appendChild(toggleButton);
};

// Uncomment to enable theme toggle
// createThemeToggle();

// ==================== 
// Loading Animation
// ==================== 
window.addEventListener('load', () => {
    document.body.style.overflow = 'auto';
    
    // Trigger initial animations
    setTimeout(() => {
        animateOnScroll();
    }, 100);
});

// ==================== 
// Console Easter Egg
// ==================== 
console.log('%c안녕하세요! 👋', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%c개발자 콘솔을 열어주셔서 감사합니다!', 'font-size: 14px; color: #764ba2;');
console.log('%c이 포트폴리오는 순수 HTML, CSS, JavaScript로 제작되었습니다.', 'font-size: 12px; color: #a8b2d1;');
console.log('%cGitHub: https://github.com/jw-chae', 'font-size: 12px; color: #667eea;');

