document.addEventListener('DOMContentLoaded', () => {
    // Custom cursor
    const cursor = document.querySelector('.cursor');
    
    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        
        document.addEventListener('mousedown', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
        });
        
        document.addEventListener('mouseup', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        });
        
        // Add hover effect for links and buttons
        const links = document.querySelectorAll('a, button, .btn');
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursor.style.border = '1px solid var(--accent-color)';
                cursor.style.backgroundColor = 'rgba(179, 146, 172, 0.2)';
            });
            
            link.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.style.border = '2px solid var(--accent-color)';
                cursor.style.backgroundColor = 'transparent';
            });
        });
    }
    
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
    
    // Sticky header
    const header = document.querySelector('header');
    let lastScrollY = 0;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.boxShadow = '0 5px 15px rgba(212, 167, 197, 0.1)';
            header.style.padding = '15px 40px';
        } else {
            header.style.boxShadow = 'none';
            header.style.padding = '20px 40px';
        }
        
        lastScrollY = currentScrollY;
    });
    
    // Reveal animations on scroll
    const revealElements = () => {
        const sections = document.querySelectorAll('section');
        const windowHeight = window.innerHeight;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionPoint = 150;
            
            if (sectionTop < windowHeight - sectionPoint) {
                section.classList.add('active');
                
                // Animate elements within the section
                const fadeElements = section.querySelectorAll('.fade-in');
                fadeElements.forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('visible');
                    }, 200 * index);
                });
            }
        });
    };
    
    // Add fade-in class to elements
    const addFadeClass = () => {
        // About section
        document.querySelectorAll('.about-text p, .about-text .btn').forEach(el => {
            el.classList.add('fade-in');
        });
        
        // Shop items
        document.querySelectorAll('.shop-item, .shop-intro, .shop-cta').forEach(el => {
            el.classList.add('fade-in');
        });
        
        // Gallery items
        document.querySelectorAll('.gallery-item').forEach(el => {
            el.classList.add('fade-in');
        });
        
        // Contact items
        document.querySelectorAll('.form-group, .info-item').forEach(el => {
            el.classList.add('fade-in');
        });
    };
    
    addFadeClass();
    window.addEventListener('scroll', revealElements);
    revealElements(); // Initial check
    
    // Form animation
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');
        const label = group.querySelector('label');
        
        if (input && label) {
            input.addEventListener('focus', () => {
                label.classList.add('active');
            });
            
            input.addEventListener('blur', () => {
                if (input.value === '') {
                    label.classList.remove('active');
                }
            });
        }
    });
    
    // Button hover effect
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.backgroundColor = '#a07e96'; // Darker shade of accent color
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = 'var(--accent-color)';
        });
    });
    
    // Gallery item hover effect
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
        });
    });
    
    // Shop item hover effect
    const shopItems = document.querySelectorAll('.shop-item');
    shopItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-10px)';
            item.style.boxShadow = '0 15px 30px rgba(212, 167, 197, 0.3)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
            item.style.boxShadow = 'var(--box-shadow)';
        });
    });
    
    // Add CSS for fade-in animation
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        section {
            transition: transform 0.6s ease;
        }
    `;
    document.head.appendChild(style);
});
