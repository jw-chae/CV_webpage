// ==================== 
// Smooth Scrolling & Navigation
// ==================== 
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.section');

    // Smooth scroll to section
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
                // Scroll to section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                sidebar.classList.remove('active');
            }
        });
    });

    // Update active link on scroll
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Mobile menu toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const sidebar = document.getElementById('sidebar');

    mobileToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !mobileToggle.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        }
    });
});

// ==================== 
// External Links
// ==================== 
document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.href.includes(window.location.hostname)) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// ==================== 
// Copy Email on Click (Optional)
// ==================== 
document.querySelectorAll('a[href^="mailto:"]').forEach(emailLink => {
    emailLink.addEventListener('click', function(e) {
        const email = this.href.replace('mailto:', '');
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(email).then(() => {
                // Show temporary feedback
                const originalText = this.textContent;
                this.textContent = '✓ Copied!';
                this.style.color = '#28a745';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.color = '';
                }, 1500);
            }).catch(err => {
                console.log('Could not copy email:', err);
            });
        }
    });
});

// ==================== 
// Scroll to Top on Logo Click
// ==================== 
const logo = document.querySelector('.logo a');
if (logo) {
    logo.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Reset to about section
        const aboutLink = document.querySelector('a[href="#about"]');
        if (aboutLink) {
            document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
            aboutLink.classList.add('active');
        }
    });
}

// ==================== 
// Keyboard Navigation
// ==================== 
document.addEventListener('keydown', function(e) {
    // Escape key closes mobile menu
    if (e.key === 'Escape') {
        const sidebar = document.getElementById('sidebar');
        if (sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    }
});

// ==================== 
// Performance: Lazy Load Images (if added later)
// ==================== 
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==================== 
// Console Message
// ==================== 
console.log('%cJoongwon Chae - Portfolio', 'font-size: 20px; font-weight: bold; color: #2c3e50;');
console.log('%cComputer Vision Researcher | Tsinghua University', 'font-size: 14px; color: #3498db;');
console.log('%cGitHub: https://github.com/jw-chae', 'font-size: 12px; color: #666;');
