// ==================== 
// Navigation & Section Switching
// ==================== 
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get target section
            const targetSection = this.getAttribute('data-section');
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link and target section
            this.classList.add('active');
            document.getElementById(targetSection).classList.add('active');
            
            // Update URL hash without scrolling
            history.pushState(null, null, `#${targetSection}`);
            
            // Scroll to top smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Handle initial load with hash
    function loadSectionFromHash() {
        const hash = window.location.hash.substring(1) || 'home';
        const targetLink = document.querySelector(`[data-section="${hash}"]`);
        
        if (targetLink) {
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            targetLink.classList.add('active');
            document.getElementById(hash).classList.add('active');
        }
    }

    // Load correct section on page load
    loadSectionFromHash();

    // Handle browser back/forward buttons
    window.addEventListener('hashchange', loadSectionFromHash);
});

// ==================== 
// Smooth Scroll for Internal Links
// ==================== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href.length <= 1) return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== 
// Navbar Scroll Effect
// ==================== 
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

// ==================== 
// External Links - Open in New Tab
// ==================== 
document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.getAttribute('target')) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// ==================== 
// Print Friendly
// ==================== 
function printPage() {
    // Show all sections for printing
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'block';
    });
    
    window.print();
    
    // Restore original state after printing
    setTimeout(() => {
        document.querySelectorAll('.section').forEach(section => {
            if (!section.classList.contains('active')) {
                section.style.display = 'none';
            }
        });
    }, 1000);
}

// Add keyboard shortcut for printing (Ctrl/Cmd + P is already default, but we can add our custom handler)
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        printPage();
    }
});

// ==================== 
// Accessibility: Keyboard Navigation
// ==================== 
document.addEventListener('keydown', function(e) {
    // Allow keyboard navigation through nav links
    if (e.target.classList.contains('nav-link')) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            e.target.click();
        }
    }
});

// ==================== 
// Copy Email on Click
// ==================== 
document.querySelectorAll('a[href^="mailto:"]').forEach(emailLink => {
    emailLink.addEventListener('click', function(e) {
        // Allow normal email client opening, but also copy to clipboard
        const email = this.href.replace('mailto:', '');
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(email).then(() => {
                // Optional: Show a temporary tooltip
                const originalText = this.textContent;
                this.textContent = 'Copied!';
                setTimeout(() => {
                    this.textContent = originalText;
                }, 1500);
            }).catch(err => {
                console.log('Could not copy email:', err);
            });
        }
    });
});

// ==================== 
// Lazy Loading for Future Images
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

// ==================== 
// Performance Monitoring (Optional)
// ==================== 
if (window.performance) {
    window.addEventListener('load', function() {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`Page load time: ${pageLoadTime}ms`);
        }, 0);
    });
}
