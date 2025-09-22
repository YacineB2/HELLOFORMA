# Cursor Rules for HelloForma Project

## Project Context
You are working on HelloForma, a modern design studio website. The project is a multi-page website focused on brand strategy, digital design, and web development services. The tech stack includes HTML5, Tailwind CSS, vanilla JavaScript, and uses AOS for animations and Feather Icons for iconography.

## Code Style and Standards

### HTML Guidelines
- Use semantic HTML5 elements (header, nav, main, section, article, footer)
- Always include proper meta tags for SEO and social sharing
- Use descriptive, kebab-case for IDs and classes
- Include ARIA labels for accessibility
- Images must have alt text and use lazy loading where appropriate
- Structure: components should be modular and reusable

### CSS/Tailwind Guidelines
- Prefer Tailwind utility classes over custom CSS
- Use CSS custom properties for theme colors and repeated values
- Follow mobile-first responsive design approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- Custom CSS should be minimal and component-scoped
- Animations should respect prefers-reduced-motion

### JavaScript Guidelines
- Use ES6+ syntax (const/let, arrow functions, template literals)
- Follow functional programming principles where possible
- Implement proper error handling with try-catch blocks
- Use async/await over promises for better readability
- Add JSDoc comments for functions
- Performance: Debounce scroll/resize events, use IntersectionObserver for lazy loading

### File Structure
```
helloforma/
├── index.html
├── work.html
├── studio.html
├── services.html
├── insights.html
├── contact.html
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   └── pages/
│   ├── js/
│   │   ├── main.js
│   │   └── components.js
│   └── images/
├── components/
│   ├── header.html
│   └── footer.html
└── public/
    └── favicon.ico
```

## Component Patterns

### Reusable Component Template
```html
<!-- Component: [ComponentName] -->
<div class="component-[name]" data-component="[name]">
    <!-- Component content -->
</div>
<!-- End Component: [ComponentName] -->
```

### JavaScript Module Pattern
```javascript
// Module: [ModuleName]
class [ModuleName] {
    constructor(options = {}) {
        this.options = { ...this.defaults, ...options };
        this.init();
    }
    
    defaults = {
        // Default options
    }
    
    init() {
        // Initialization logic
    }
    
    // Other methods...
}

export default [ModuleName];
```

## Naming Conventions

### Files
- HTML pages: lowercase, hyphenated (about-us.html)
- CSS files: lowercase, hyphenated (main-styles.css)
- JS files: camelCase for classes (ComponentLoader.js), lowercase for utilities (helpers.js)
- Images: lowercase, hyphenated, descriptive (hero-background-desktop.jpg)

### Variables and Functions
- Variables: camelCase (userName, isActive)
- Constants: UPPER_SNAKE_CASE (MAX_RETRIES, API_URL)
- Functions: camelCase, verb-prefixed (getUserData, handleClick)
- Classes: PascalCase (UserProfile, NavigationMenu)
- Private methods: prefixed with underscore (_privateMethod)

## Performance Guidelines

### Critical Performance Metrics
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Time to Interactive (TTI): < 3.8s
- Cumulative Layout Shift (CLS): < 0.1

### Optimization Requirements
1. Inline critical CSS in <head>
2. Defer non-critical JavaScript
3. Use preconnect for external domains
4. Implement resource hints (prefetch, preload)
5. Optimize images: WebP format, responsive images, lazy loading
6. Minify CSS/JS for production
7. Enable GZIP compression
8. Implement caching strategies

## SEO Requirements

### Meta Tags Template
```html
<meta name="description" content="[Page description, 150-160 chars]">
<meta name="keywords" content="[Relevant keywords]">
<link rel="canonical" href="[Canonical URL]">

<!-- Open Graph -->
<meta property="og:title" content="[Page Title]">
<meta property="og:description" content="[Page Description]">
<meta property="og:image" content="[Image URL]">
<meta property="og:url" content="[Page URL]">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[Page Title]">
<meta name="twitter:description" content="[Page Description]">
<meta name="twitter:image" content="[Image URL]">
```

## Accessibility Standards

### WCAG 2.1 Level AA Compliance
- Color contrast ratio: 4.5:1 for normal text, 3:1 for large text
- All interactive elements keyboard accessible
- Focus indicators visible and clear
- Form inputs have associated labels
- Images have descriptive alt text
- Heading hierarchy properly structured
- ARIA labels for icon buttons
- Skip navigation links included

### Keyboard Navigation
- Tab order logical and predictable
- Escape key closes modals/dropdowns
- Enter/Space activates buttons
- Arrow keys for menu navigation

## Security Best Practices

1. Sanitize all user inputs
2. Use Content Security Policy headers
3. Implement HTTPS everywhere
4. Add rel="noopener noreferrer" to external links
5. Validate file uploads (if applicable)
6. Use SameSite cookies
7. Implement rate limiting for forms

## Browser Support

### Minimum Supported Versions
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers: iOS Safari 14+, Chrome Mobile 90+

### Progressive Enhancement
- Core functionality works without JavaScript
- Fallbacks for modern CSS features
- Polyfills loaded conditionally
- Feature detection over browser detection

## Git Commit Conventions

### Commit Message Format
```
type(scope): subject

body (optional)

footer (optional)
```

### Types
- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: Code style changes (formatting, etc.)
- refactor: Code refactoring
- perf: Performance improvements
- test: Adding/updating tests
- chore: Maintenance tasks

### Examples
```
feat(navigation): add mobile responsive menu
fix(forms): resolve validation error on contact form
perf(images): implement lazy loading for gallery
```

## Testing Requirements

### Pre-deployment Checklist
- [ ] HTML validation (W3C Validator)
- [ ] CSS validation
- [ ] JavaScript linting (ESLint)
- [ ] Lighthouse score > 90 for all metrics
- [ ] Cross-browser testing completed
- [ ] Mobile responsiveness verified
- [ ] Forms tested and working
- [ ] 404 page configured
- [ ] SEO meta tags present
- [ ] Analytics tracking configured
- [ ] Performance budget met
- [ ] Accessibility audit passed

## API and Data Handling

### Fetch API Pattern
```javascript
async function fetchData(endpoint, options = {}) {
    const defaultOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    
    try {
        const response = await fetch(endpoint, { ...defaultOptions, ...options });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return { success: true, data };
    } catch (error) {
        console.error('Fetch error:', error);
        return { success: false, error: error.message };
    }
}
```

## Environment-Specific Rules

### Development
- Use unminified assets for debugging
- Enable source maps
- Use development API endpoints
- Show detailed error messages
- Enable hot reload/live server

### Production
- Minify all CSS/JS files
- Optimize and compress images
- Use production API endpoints
- Generic error messages for users
- Enable caching headers
- Remove console.log statements

## Component Documentation Template

```javascript
/**
 * Component: [ComponentName]
 * Description: [Brief description of component purpose]
 * 
 * @param {Object} options - Configuration options
 * @param {string} options.selector - DOM selector for component
 * @param {boolean} options.autoInit - Auto-initialize on creation
 * @param {Function} options.onInit - Callback after initialization
 * 
 * @example
 * const navigation = new Navigation({
 *     selector: '#main-nav',
 *     autoInit: true
 * });
 */
```

## Responsive Design Breakpoints

```css
/* Mobile First Approach */
/* Default: Mobile (< 640px) */

/* Tablet (≥ 640px) */
@media (min-width: 640px) { }

/* Small Desktop (≥ 768px) */
@media (min-width: 768px) { }

/* Desktop (≥ 1024px) */
@media (min-width: 1024px) { }

/* Large Desktop (≥ 1280px) */
@media (min-width: 1280px) { }

/* Extra Large (≥ 1536px) */
@media (min-width: 1536px) { }
```

## Error Handling Strategy

```javascript
// Global error handler
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
    // Log to error tracking service
    // Show user-friendly error message
});

// Promise rejection handler
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    event.preventDefault();
});
```

## Custom Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            colors: {
                primary: '#3b82f6',
                secondary: '#8b5cf6',
                accent: '#ec4899',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.3s ease-out',
            },
        },
    },
}
```

## Do's and Don'ts

### Do's ✅
- Write semantic, accessible HTML
- Optimize for performance from the start
- Test on real devices
- Use progressive enhancement
- Comment complex logic
- Keep functions small and focused
- Cache DOM queries
- Use CSS for animations when possible
- Implement error boundaries
- Follow DRY principle

### Don'ts ❌
- Don't use inline styles (except for critical CSS)
- Don't use !important unless absolutely necessary
- Don't forget fallbacks for modern features
- Don't ignore console errors
- Don't use synchronous XHR requests
- Don't manipulate DOM in loops
- Don't use document.write()
- Don't forget to sanitize user input
- Don't use deprecated HTML tags
- Don't skip accessibility testing

## Project-Specific Variables

```javascript
// Global configuration
const SITE_CONFIG = {
    name: 'HelloForma',
    url: 'https://helloforma.com',
    api: {
        baseUrl: 'https://api.helloforma.com',
        timeout: 5000,
    },
    analytics: {
        ga4: 'G-XXXXXXXXXX',
    },
    social: {
        twitter: '@helloforma',
        instagram: '@helloforma',
        linkedin: 'company/helloforma',
    },
};
```

## Remember
- Always prioritize user experience and accessibility
- Performance is a feature, not an afterthought
- Code should be self-documenting with clear naming
- Test early and often across different devices/browsers
- Keep dependencies minimal and up-to-date
- Document any deviations from these guidelines