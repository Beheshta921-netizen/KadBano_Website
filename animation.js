// js/animations.js
document.addEventListener('DOMContentLoaded', function() {
    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkillBars = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const progress = skillBar.getAttribute('data-progress');
                
                skillBar.style.width = `${progress}%`;
                
                // Add animation class
                skillBar.classList.add('animated');
                
                // Stop observing after animation
                observer.unobserve(skillBar);
            }
        });
    };
    
    const skillObserver = new IntersectionObserver(animateSkillBars, {
        threshold: 0.5
    });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
    
    // Accordion functionality
    const accordionHeader = document.getElementById('referenceAccordion');
    const accordionContent = document.querySelector('.accordion-content');
    
    if (accordionHeader) {
        accordionHeader.addEventListener('click', function() {
            accordionContent.classList.toggle('open');
            
            const chevron = this.querySelector('.fa-chevron-down');
            chevron.classList.toggle('rotate');
        });
    }
    
    // Copy email functionality
    const copyEmailBtn = document.getElementById('copyEmail');
    const emailLink = document.getElementById('emailLink');
    const email = 'beheshtaziaee921@gmail.com';
    
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            navigator.clipboard.writeText(email).then(() => {
                // Show copied notification
                const originalHTML = copyEmailBtn.innerHTML;
                copyEmailBtn.innerHTML = '<i class="fas fa-check"></i>';
                copyEmailBtn.style.color = '#4CAF50';
                
                setTimeout(() => {
                    copyEmailBtn.innerHTML = originalHTML;
                    copyEmailBtn.style.color = '';
                }, 2000);
            });
        });
    }
    
    // Language switcher
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            
            // Remove active class from all buttons
            langButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // In a real implementation, you would load translations here
            console.log(`Switching to ${lang} language`);
            
            
            }
        });
    });
});