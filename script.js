// Add smooth scrolling and interactive functionality
document.addEventListener('DOMContentLoaded', function () {

    // Google Analytics: Track project clicks
    function trackEvent(category, action, label = null) {
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                'event_category': category,
                'event_label': label
            });
        }
    }

    // Track project card clicks
    const projectContainer = document.querySelector('.project-container');
    if (projectContainer) {
        projectContainer.addEventListener('click', function() {
            trackEvent('engagement', 'project_click', 'data_analysis_agent');
        });
    }

    // Add click handlers for project cards
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', function () {
            const projectTitle = card.querySelector('.project-title').textContent;
            alert(`${projectTitle} - Link to be added when you create the project pages!`);
        });

        // Add cursor pointer style
        card.style.cursor = 'pointer';
    });

    // Add typing animation to the title
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.textContent = '';

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }

        type();
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll('.project-card, .footer');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add floating animation to project cards
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        
        .project-card:nth-child(1) {
            animation: float 6s ease-in-out infinite;
        }
        
        .project-card:nth-child(2) {
            animation: float 6s ease-in-out infinite 3s;
        }
    `;
    document.head.appendChild(style);
}); 