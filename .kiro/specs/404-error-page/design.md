# Design Document - 404 Error Page

## Overview

The 404 error page will be a standalone HTML page that maintains complete visual and functional consistency with the HelloForma website. It will provide a friendly, helpful user experience when visitors land on non-existent URLs, while guiding them back to relevant content through clear navigation options and calls-to-action.

The page will follow the established design system using Tailwind CSS, the Inter font family, and the HelloForma color palette. It will be fully responsive, accessible, and optimized for SEO.

## Architecture

### Page Structure

The 404 page will follow the standard HelloForma page structure:

1. **Navigation Header** - Fixed navigation bar with logo and main menu links
2. **Error Content Section** - Main content area with error message and navigation options
3. **Footer** - Standard site footer with company information and links

### Technology Stack

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Feather Icons** - Icon library for consistent iconography
- **Vanilla JavaScript** - For mobile menu toggle functionality
- **Google Fonts** - Inter font family

### File Location

The 404 page will be created as `404.html` in the root directory of the website, following standard web server conventions for custom error pages.

## Components and Interfaces

### 1. Navigation Component

The navigation will be identical to other pages on the site, ensuring consistency and familiarity.

**Structure:**
- Fixed position header with backdrop blur effect
- HelloForma logo with graduation cap icon
- Desktop navigation menu (Formations, Méthodes, Immobilier, Contact)
- Mobile hamburger menu with slide-down panel
- Active state indicators on hover

**Styling:**
- Background: `bg-white/95 backdrop-blur-md`
- Border: `border-b border-gray-200`
- Logo color: HelloForma blue (#2563EB)
- Height: 64px (h-16)

### 2. Error Content Section

The main content area will be centered and visually balanced, providing clear information and actionable next steps.

**Layout:**
- Centered container with max-width constraint
- Vertical centering for optimal visual balance
- Generous padding and spacing
- Responsive grid for navigation cards

**Visual Elements:**

a) **Error Icon/Illustration**
- Large, friendly icon representing "page not found"
- Options: Compass icon, map icon, or search icon
- Color: HelloForma blue with subtle animation
- Size: 80-120px

b) **Error Code Display**
- Large "404" text
- Font size: 6xl-8xl
- Color: Gray-300 (subtle, not dominant)
- Font weight: Bold

c) **Primary Heading**
- Text: "Page non trouvée" or "Oups ! Cette page n'existe pas"
- Font size: 3xl-4xl
- Color: Gray-900
- Font weight: Bold

d) **Descriptive Text**
- Friendly explanation of the error
- Suggested actions for the user
- Font size: lg-xl
- Color: Gray-600
- Max width: 2xl for readability

e) **Primary CTA Button**
- Text: "Retour à l'accueil"
- Background: HelloForma blue (#2563EB)
- Hover state: Darker blue (#1D4ED8)
- Size: Large (px-8 py-4)
- Rounded corners: lg
- Shadow effect with hover enhancement

### 3. Quick Navigation Cards

A grid of cards providing quick access to main site sections.

**Layout:**
- Grid: 2 columns on mobile, 4 columns on desktop
- Equal height cards
- Consistent spacing (gap-6)

**Card Design:**
- White background with border
- Rounded corners (rounded-xl)
- Hover effect: Slight elevation and scale
- Icon at top (Feather icons)
- Section title
- Brief description
- Link styling

**Sections:**
1. **Formations** - Book icon
2. **Méthodes** - Target icon
3. **Immobilier** - Key icon
4. **Contact** - Mail icon

### 4. Footer Component

Standard HelloForma footer matching other pages.

**Structure:**
- Dark background (bg-gray-900)
- 4-column grid on desktop, stacked on mobile
- Company info, navigation links, contact details
- Legal information (SIRET, NDA, Qualiopi)
- Copyright notice

## Data Models

No dynamic data models are required for this static page. All content will be hardcoded in HTML.

### Content Structure

```
404Page {
  navigation: {
    logo: "HelloForma"
    links: ["Formations", "Méthodes", "Immobilier", "Contact"]
  }
  errorContent: {
    errorCode: "404"
    heading: "Page non trouvée"
    description: "La page que vous recherchez n'existe pas ou a été déplacée."
    primaryCTA: {
      text: "Retour à l'accueil"
      url: "index.html"
    }
  }
  quickLinks: [
    {
      title: "Formations"
      description: "Découvrez nos formations"
      icon: "book"
      url: "formations.html"
    },
    {
      title: "Méthodes"
      description: "Notre approche pédagogique"
      icon: "target"
      url: "methodes.html"
    },
    {
      title: "Immobilier"
      description: "Cartes T & G"
      icon: "key"
      url: "immobilier.html"
    },
    {
      title: "Contact"
      description: "Contactez-nous"
      icon: "mail"
      url: "contact.html"
    }
  ]
  footer: {
    // Standard footer content
  }
}
```

## Error Handling

### HTTP Status Code

The page must be configured to return a proper 404 HTTP status code. This requires server-side configuration:

**For Apache (.htaccess):**
```apache
ErrorDocument 404 /404.html
```

**For Nginx:**
```nginx
error_page 404 /404.html;
location = /404.html {
    internal;
}
```

**For Node.js/Express:**
```javascript
app.use((req, res) => {
    res.status(404).sendFile('404.html');
});
```

### Fallback Behavior

- If JavaScript fails to load, the page remains fully functional (progressive enhancement)
- Mobile menu degrades gracefully without JavaScript
- All links use standard HTML anchor tags

## SEO Considerations

### Meta Tags

```html
<title>Page non trouvée - 404 | HelloForma</title>
<meta name="description" content="La page que vous recherchez n'existe pas. Retournez à l'accueil ou explorez nos formations professionnelles.">
<meta name="robots" content="noindex, follow">
<link rel="canonical" href="https://helloforma.org/">
```

### Structured Data

No structured data is required for the 404 page, as it should not be indexed by search engines.

### Best Practices

1. Return proper 404 HTTP status code
2. Include noindex meta tag to prevent indexing
3. Provide canonical URL pointing to homepage
4. Keep URL structure clean (no query parameters)
5. Ensure fast page load time

## Accessibility

### WCAG 2.1 AA Compliance

**Semantic HTML:**
- Proper heading hierarchy (h1 for main heading)
- Semantic landmarks (nav, main, footer)
- Descriptive link text

**Keyboard Navigation:**
- All interactive elements accessible via Tab key
- Visible focus indicators on all focusable elements
- Logical tab order
- Skip to main content link (optional but recommended)

**Screen Reader Support:**
- ARIA labels where appropriate
- Alt text for decorative icons (aria-hidden="true")
- Descriptive link text (avoid "click here")
- Proper heading structure for navigation

**Color Contrast:**
- Text on background: Minimum 4.5:1 ratio
- Large text: Minimum 3:1 ratio
- Interactive elements: Clear visual distinction
- Focus indicators: High contrast

**Responsive Design:**
- Text scales appropriately
- Touch targets minimum 44x44px
- No horizontal scrolling
- Readable at 200% zoom

### ARIA Attributes

```html
<nav aria-label="Main navigation">
<main aria-label="Error page content">
<button aria-label="Toggle mobile menu" aria-expanded="false">
```

## Responsive Design

### Breakpoints

Following Tailwind CSS default breakpoints:
- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: > 1024px (xl)

### Mobile Optimizations

- Stacked layout for navigation cards (1 column)
- Larger touch targets for buttons
- Simplified navigation (hamburger menu)
- Reduced font sizes for headings
- Optimized spacing and padding

### Tablet Optimizations

- 2-column grid for navigation cards
- Balanced spacing
- Hybrid navigation (may show full menu or hamburger based on space)

### Desktop Optimizations

- 4-column grid for navigation cards
- Full navigation menu visible
- Larger visual elements
- Enhanced hover effects

## Visual Design Specifications

### Color Palette

```css
Primary Blue: #2563EB (helloforma-blue)
Dark Blue: #1D4ED8 (helloforma-dark)
Accent Green: #059669 (helloforma-accent)
Gray Scale:
  - Gray 50: #F9FAFB
  - Gray 100: #F3F4F6
  - Gray 200: #E5E7EB
  - Gray 300: #D1D5DB
  - Gray 600: #4B5563
  - Gray 700: #374151
  - Gray 900: #111827
White: #FFFFFF
```

### Typography

```css
Font Family: 'Inter', sans-serif
Font Weights: 300, 400, 500, 600, 700

Heading Sizes:
  - Display: 3.5rem (56px) / Line height 1.1 / Weight 700
  - H1: 2.5rem (40px) / Line height 1.2 / Weight 600
  - H2: 2rem (32px) / Line height 1.3 / Weight 600
  - H3: 1.5rem (24px) / Line height 1.4 / Weight 500

Body Sizes:
  - XL: 1.25rem (20px) / Line height 1.5 / Weight 400
  - Base: 1rem (16px) / Line height 1.5 / Weight 400
  - Small: 0.875rem (14px) / Line height 1.5 / Weight 400
```

### Spacing System

Following Tailwind's spacing scale (4px base unit):
- Micro spacing: 4px, 8px, 12px
- Component spacing: 16px, 24px, 32px
- Section spacing: 48px, 64px, 80px

### Shadows

```css
Small: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
Medium: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
Large: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
XL: 0 20px 25px -5px rgba(0, 0, 0, 0.1)
```

### Border Radius

```css
Small: 0.375rem (6px)
Medium: 0.5rem (8px)
Large: 0.75rem (12px)
XL: 1rem (16px)
```

## Animation and Interactions

### Hover Effects

**Buttons:**
- Background color transition (0.3s ease)
- Scale transform (1.05) on hover
- Shadow enhancement

**Cards:**
- Subtle elevation increase
- Scale transform (1.02)
- Border color change

**Links:**
- Color transition (0.3s ease)
- Underline animation (width transition)

### Focus States

- 2px solid outline in HelloForma blue
- Offset: 2px
- Visible on all interactive elements

### Loading States

Not applicable for static 404 page.

## Testing Strategy

### Browser Testing

**Desktop Browsers:**
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

**Mobile Browsers:**
- Safari iOS (latest)
- Chrome Android (latest)
- Samsung Internet (latest)

### Responsive Testing

**Devices:**
- iPhone SE (375px)
- iPhone 12/13 (390px)
- iPad (768px)
- iPad Pro (1024px)
- Desktop (1280px, 1920px)

### Accessibility Testing

**Tools:**
- WAVE browser extension
- axe DevTools
- Lighthouse accessibility audit
- Screen reader testing (NVDA/JAWS/VoiceOver)

**Manual Tests:**
- Keyboard navigation
- Focus indicator visibility
- Color contrast verification
- Text scaling (up to 200%)
- Screen reader announcement flow

### Functional Testing

**Test Cases:**
1. Navigation links work correctly
2. Mobile menu toggles properly
3. All CTAs link to correct pages
4. Page returns 404 status code
5. Page loads without JavaScript
6. Icons render correctly
7. Responsive layout adapts properly
8. Footer displays all information

### Performance Testing

**Metrics:**
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Total Blocking Time: < 200ms
- Cumulative Layout Shift: < 0.1

**Tools:**
- Lighthouse performance audit
- WebPageTest
- Chrome DevTools Performance panel

### SEO Testing

**Verification:**
- 404 HTTP status code returned
- Noindex meta tag present
- Canonical URL set correctly
- Title and description appropriate
- No broken links on page

## Implementation Notes

### Code Organization

The 404.html file will be self-contained with:
- Inline Tailwind configuration
- Inline custom styles
- Inline JavaScript for mobile menu
- External CDN resources (Tailwind, Feather Icons, Google Fonts)

### Performance Considerations

- Use CDN for external resources
- Minimize inline CSS
- Defer non-critical JavaScript
- Optimize icon usage (only load needed icons)
- Use system fonts as fallback

### Maintenance

- Keep consistent with design system updates
- Update links if site structure changes
- Review and update copy periodically
- Monitor 404 occurrences via analytics

### Server Configuration

Document the required server configuration for proper 404 status code handling in deployment documentation.

## Design Mockup Description

### Desktop Layout (1280px+)

```
+----------------------------------------------------------+
|  [Logo] HelloForma    Formations  Méthodes  Immobilier  |
|                                          [Contact Button]|
+----------------------------------------------------------+
|                                                          |
|                      [Large Icon]                        |
|                                                          |
|                         404                              |
|                                                          |
|                  Page non trouvée                        |
|                                                          |
|        La page que vous recherchez n'existe pas          |
|              ou a été déplacée.                          |
|                                                          |
|              [Retour à l'accueil Button]                 |
|                                                          |
|  +------------+  +------------+  +------------+  +------+|
|  | [Icon]     |  | [Icon]     |  | [Icon]     |  | [Icon|
|  | Formations |  | Méthodes   |  | Immobilier |  | Conta|
|  | Découvrez  |  | Notre      |  | Cartes T&G |  | Conta|
|  +------------+  +------------+  +------------+  +------+|
|                                                          |
+----------------------------------------------------------+
|                      [Footer]                            |
+----------------------------------------------------------+
```

### Mobile Layout (< 640px)

```
+-------------------------+
| [Logo]  [☰]            |
+-------------------------+
|                         |
|      [Large Icon]       |
|                         |
|          404            |
|                         |
|   Page non trouvée      |
|                         |
|  La page que vous       |
|  recherchez n'existe    |
|  pas ou a été déplacée. |
|                         |
| [Retour à l'accueil]    |
|                         |
| +---------------------+ |
| | [Icon]              | |
| | Formations          | |
| +---------------------+ |
|                         |
| +---------------------+ |
| | [Icon]              | |
| | Méthodes            | |
| +---------------------+ |
|                         |
| +---------------------+ |
| | [Icon]              | |
| | Immobilier          | |
| +---------------------+ |
|                         |
| +---------------------+ |
| | [Icon]              | |
| | Contact             | |
| +---------------------+ |
|                         |
+-------------------------+
|       [Footer]          |
+-------------------------+
```

## Dependencies

### External Libraries

1. **Tailwind CSS** (v3.x via CDN)
   - URL: https://cdn.tailwindcss.com
   - Purpose: Utility-first CSS framework

2. **Google Fonts - Inter** (via CDN)
   - URL: https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap
   - Purpose: Typography

3. **Feather Icons** (via CDN)
   - URL: https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js
   - Purpose: Icon library

### No Build Process Required

The page uses CDN resources and requires no build step, making it easy to deploy and maintain.
