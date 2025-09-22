// Main JavaScript file for HelloForma

// Component loader for shared HTML components
class ComponentLoader {
    static async loadComponent(elementId, componentPath) {
        try {
            const response = await fetch(componentPath);
            const html = await response.text();
            const element = document.getElementById(elementId);
            if (element) {
                element.innerHTML = html;
                return true;
            }
            return false;
        } catch (error) {
            console.error(`Failed to load component: ${componentPath}`, error);
            return false;
        }
    }

    static async loadAllComponents() {
        const components = [
            { id: 'header', path: '/components/header.html' },
            { id: 'footer', path: '/components/footer.html' }
        ];

        await Promise.all(
            components.map(comp => this.loadComponent(comp.id, comp.path))
        );
    }
}

// Lazy loading for images
class LazyLoader {
    static init() {
        const images = document.querySelectorAll('img[data-src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px 0px',
                threshold: 0.01
            });

            images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for older browsers
            images.forEach(img => {
                img.src = img.dataset.src;
                img.classList.add('loaded');
            });
        }
    }
}

// Performance monitoring
class PerformanceMonitor {
    static init() {
        if ('performance' in window) {
            window.addEventListener('load', () => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Page load time:', perfData.loadEventEnd - perfData.fetchStart, 'ms');
                
                // Send to analytics if needed
                if (window.gtag) {
                    gtag('event', 'page_timing', {
                        'page_load_time': Math.round(perfData.loadEventEnd - perfData.fetchStart)
                    });
                }
            });
        }
    }
}

// Mobile menu functionality
class MobileMenu {
    static init() {
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                mobileMenu.classList.toggle('show');
                
                // Update ARIA attributes
                const isOpen = !mobileMenu.classList.contains('hidden');
                menuBtn.setAttribute('aria-expanded', isOpen);
                mobileMenu.setAttribute('aria-hidden', !isOpen);
                
                // Toggle between menu and x icon
                const icon = menuBtn.querySelector('i');
                if (mobileMenu.classList.contains('hidden')) {
                    icon.setAttribute('data-feather', 'menu');
                } else {
                    icon.setAttribute('data-feather', 'x');
                }
                // Refresh Feather Icons
                if (typeof feather !== 'undefined') {
                    feather.replace();
                }
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('show');
                    
                    // Update icon to menu
                    const icon = menuBtn.querySelector('i');
                    icon.setAttribute('data-feather', 'menu');
                    if (typeof feather !== 'undefined') {
                        feather.replace();
                    }
                }
            });
        }
    }
}

// Smooth scroll for anchor links
class SmoothScroll {
    static init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    // Close mobile menu if open
                    const mobileMenu = document.getElementById('mobile-menu');
                    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                        mobileMenu.classList.remove('show');
                        
                        // Update menu icon
                        const menuBtn = document.getElementById('mobile-menu-btn');
                        if (menuBtn) {
                            const icon = menuBtn.querySelector('i');
                            icon.setAttribute('data-feather', 'menu');
                            if (typeof feather !== 'undefined') {
                                feather.replace();
                            }
                        }
                    }
                    
                    // Smooth scroll to target
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Update URL without page jump
                    history.pushState(null, null, href);
                }
            });
        });
    }
}

// Active navigation highlighting
class ActiveNav {
    static init() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.nav-link').forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage || 
                (currentPage === '' && linkHref === 'index.html') ||
                (currentPage === 'index.html' && linkHref === './')) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            }
        });
    }
}

// Prefetch pages for faster navigation
class PagePrefetcher {
    static init() {
        if ('requestIdleCallback' in window) {
            requestIdleCallback(() => {
                const links = document.querySelectorAll('a[href$=".html"]');
                links.forEach(link => {
                    link.addEventListener('mouseenter', () => {
                        const linkEl = document.createElement('link');
                        linkEl.rel = 'prefetch';
                        linkEl.href = link.href;
                        document.head.appendChild(linkEl);
                    }, { once: true });
                });
            });
        }
    }
}

// Service Worker registration for offline support
class ServiceWorkerManager {
    static async register() {
        if ('serviceWorker' in navigator) {
            try {
                const registration = await navigator.serviceWorker.register('/sw.js');
                console.log('ServiceWorker registered:', registration);
                
                // Check for updates
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            console.log('New content is available; please refresh.');
                            // You can show an update banner to the user here
                        }
                    });
                });
            } catch (error) {
                console.log('ServiceWorker registration failed:', error);
            }
        }
    }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
    // Load components first
    try {
        await ComponentLoader.loadAllComponents();
    } catch (error) {
        console.error('Error loading components:', error);
    }
    
    // Initialize features
    try {
        LazyLoader.init();
        MobileMenu.init();
        SmoothScroll.init();
        ActiveNav.init();
        PagePrefetcher.init();
        PerformanceMonitor.init();
        
        // Initialize AOS if available
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: true,
                offset: 50
            });
        }
        
        // Initialize Feather icons if available
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
        
        // Register service worker in production only
        if (window.location.hostname !== 'localhost' && window.location.protocol !== 'file:') {
            ServiceWorkerManager.register();
        }
    } catch (error) {
        console.error('Error initializing features:', error);
    }
});

// Export for use in other scripts
window.HelloForma = {
    ComponentLoader,
    LazyLoader,
    MobileMenu,
    SmoothScroll,
    ActiveNav,
    PagePrefetcher,
    ServiceWorkerManager
};
