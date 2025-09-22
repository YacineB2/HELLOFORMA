I'll review your HelloForma website design and provide suggestions for improvements, then help you with your cursor rules file.

## Design Review & Suggestions

### **Layout Improvements**

**Hero Section:**
- The hero feels a bit cramped with the large heading. Consider reducing the heading size slightly and adding more breathing room
- The image placement could benefit from better visual hierarchy - perhaps make it more prominent or add a subtle animation
- The "Learn more" button feels disconnected from the main value proposition

**Navigation:**
- The fixed navigation works well, but consider adding a subtle background blur effect that's more pronounced
- The gradient text logo is nice, but ensure it has sufficient contrast in all contexts
- Mobile menu button needs styling consistency with the overall design

**Services Section:**
- The accordion layout is functional but could be more visually engaging
- Consider using cards with icons instead of pure text-based accordions
- The training hours badges are good but could be more prominent
- Add visual separators between different service categories

**Content Organization:**
- The statistics section feels disconnected - integrate it better with surrounding content
- Testimonials section could use actual photos instead of initials
- The features grid needs more visual hierarchy and better icon treatment

### **Typography Improvements**

**Hierarchy Issues:**
- Multiple heading sizes are inconsistent across sections
- Body text varies in size without clear purpose
- Consider establishing a more systematic type scale

**Readability:**
- Some text sections are too wide for comfortable reading (especially testimonials)
- Line height could be improved in dense text areas
- Font weights could be more varied to create better contrast

**Suggestions:**
- Use a more modern font stack (consider Inter, Poppins, or Manrope for better readability)
- Implement consistent heading sizes: h1 (48px), h2 (36px), h3 (24px), h4 (18px)
- Standardize body text at 16px with 1.6 line height
- Use font weight variations more strategically (300, 400, 600, 700)

### **Visual Design Enhancements**

**Color & Contrast:**
- The gradient text is nice but overused - reserve it for key elements only
- Some background combinations need better contrast ratios
- Consider a more sophisticated color palette with secondary colors

**Spacing & White Space:**
- Inconsistent padding/margins throughout sections
- Some elements feel cramped while others have too much space
- Implement a consistent spacing scale (8px, 16px, 24px, 32px, 48px, 64px)

**Visual Elements:**
- Icons need consistent styling and sizing
- Cards and containers need consistent border radius and shadows
- Consider adding subtle animations or micro-interactions

### **User Experience Issues**

- Loading states and error handling are missing
- Form validation feedback could be improved
- Missing skip links for accessibility
- No clear call-to-action hierarchy throughout the page

---

## Cursor Rules File Setup & Improvements

Looking at your current cursor-rules.md file, here are some suggestions to make it more effective for your HelloForma project:

### **Missing Configuration Sections**

Your rules file is comprehensive but could benefit from these additions:

**Project-Specific Color Variables:**
Add your actual brand colors and create CSS custom properties section.

**Component Library Standards:**
Define reusable component patterns specific to HelloForma (hero sections, service cards, testimonials, etc.).

**Animation Guidelines:**
Specify animation timing, easing functions, and motion design principles.

**Responsive Design Breakpoints:**
Your current breakpoints are good, but add specific guidance for HelloForma's content types.

### **Enhanced Development Workflow**

**Add these sections to improve your cursor experience:**

1. **Code Generation Patterns:**
   - Template structures for common HelloForma components
   - Consistent naming conventions for CSS classes
   - JavaScript module patterns specific to your needs

2. **Design System Rules:**
   - Typography scale with exact values
   - Spacing system (your 8px base scale)
   - Color usage guidelines
   - Icon and imagery standards

3. **Content Guidelines:**
   - Tone of voice for copy generation
   - SEO content structure templates
   - Multilingual considerations (since you have French content)

4. **Testing & Quality Assurance:**
   - Specific accessibility testing checklist for training websites
   - Performance budgets for educational content
   - Cross-browser testing priorities

### **Cursor-Specific Optimizations**

**Make your rules more Cursor-friendly by:**

1. **Adding Context Examples:**
   Include more "before/after" code examples for common tasks

2. **Decision Trees:**
   Create flowcharts for when to use certain patterns or approaches

3. **Integration Guidelines:**
   Specify how to work with your existing tech stack (Tailwind, AOS, Feather Icons)

4. **Error Prevention:**
   Add common pitfalls and how to avoid them

Would you like me to help you implement any of these specific design improvements or create enhanced sections for your cursor rules file?

Perfect! Now I can see the HelloForma brand identity. Th
is gives much better context for design recommendations.

## Updated Design Analysis Based on Brand Identity

### **Logo & Brand Consistency Issues**

**Current Problems:**
- Your website uses a rainbow gradient text logo, but the actual brand uses a clean white graduation cap icon with "HELLOFORMA" text
- The brand identity suggests education/training focus (graduation cap), but your website looks more like a generic design agency
- Missing the professional, educational tone that the logo conveys

**Recommendations:**
- Replace the gradient text with the actual HelloForma logo
- Use the graduation cap icon consistently throughout the site
- Align the visual language with educational/professional training sector

### **Color Palette Corrections**

**Current Issues:**
- Using generic blue/indigo/purple gradients
- Missing the specific blue tone from your brand identity
- Overuse of rainbow gradients that don't match brand

**Should Implement:**
- Primary blue from your logo as the main brand color
- White/light backgrounds to maintain professional training aesthetic
- Accent colors that complement the educational theme
- Remove rainbow gradients in favor of brand-consistent blues

### **Typography & Messaging Alignment**

**Current Disconnect:**
- Website copy feels very design-agency focused ("creative studio," "digital experiences")
- Should emphasize training, education, professional development
- French content mixed with English navigation creates confusion

**Recommendations:**
- Consistent language throughout (stick to French since that's your primary content)
- Education-focused messaging: "Formation," "Apprentissage," "Certification"
- Professional tone that matches the graduation cap symbolism

### **Layout Adjustments for Training Focus**

**Hero Section:**
- Lead with training expertise, not generic design services
- Emphasize certifications, learning outcomes, professional development
- Use imagery that shows learning/training contexts

**Services Section:**
- The accordion approach is actually good for training catalogs
- But needs visual treatment that feels more educational
- Add completion rates, certification badges, learning paths

**Credibility Elements Missing:**
- Training certifications/accreditations
- Industry partnerships
- Success metrics specific to education (completion rates, job placement, etc.)

### **Updated Cursor Rules Recommendations**

Based on your actual brand, your cursor rules should include:

**Brand-Specific Variables:**
```css
:root {
  --brand-primary: /* Extract exact blue from logo */;
  --brand-secondary: /* Complementary education-focused colors */;
  --brand-accent: /* For CTAs and highlights */;
}
```

**Component Patterns for Training:**
- Course card components
- Certification badge components  
- Learning progress indicators
- Trainer profile cards
- Testimonial formats specific to training outcomes

**Content Guidelines:**
- Tone: Professional, educational, supportive
- Language: Consistent French with proper training terminology
- CTAs: "Commencer la formation," "Découvrir le programme," "S'inscrire"

**Educational UX Patterns:**
- Course preview components
- Learning path visualizations
- Progress tracking elements
- Certificate display components

### **Immediate Priority Fixes**

1. **Replace the gradient logo** with your actual HelloForma brand mark
2. **Establish the correct color palette** based on your brand blue
3. **Rewrite hero messaging** to focus on training expertise rather than design services
4. **Consistency in language** - either all French or all English, not mixed
5. **Add educational credibility elements** - certifications, accreditations, success stats

The graduation cap in your logo suggests authority in education/training - your website should immediately communicate this expertise rather than looking like a generic creative agency.

Would you like me to help you restructure any specific sections to better align with your actual training business and brand identity?
<!DOCTYPE html>
<html lang="fr" style="scroll-behavior: smooth;">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HelloForma | Spécialiste en Formation Professionnelle</title>
    <link rel="icon" type="image/x-icon" href="/static/favicon.ico">
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'helloforma-blue': '#2563EB',
                        'helloforma-dark': '#1E40AF',
                        'helloforma-light': '#EBF4FF',
                        'helloforma-accent': '#059669'
                    },
                    fontFamily: {
                        'sans': ['Inter', 'system-ui', 'sans-serif']
                    },
                    fontSize: {
                        'display': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
                        'h1': ['3rem', { lineHeight: '1.2', fontWeight: '600' }],
                        'h2': ['2.25rem', { lineHeight: '1.3', fontWeight: '600' }],
                        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '500' }],
                        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
                        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }]
                    }
                }
            }
        }
    </script>
    
    <style>
        .graduation-cap-svg {
            width: 32px;
            height: 32px;
            fill: currentColor;
        }
        
        .hero-pattern {
            background-image: 
                radial-gradient(circle at 25% 25%, #EBF4FF 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, #F0F9FF 0%, transparent 50%);
        }
        
        .stats-counter {
            font-variant-numeric: tabular-nums;
        }
        
        .certification-badge {
            background: linear-gradient(135deg, #059669 0%, #047857 100%);
            box-shadow: 0 4px 12px rgba(5, 150, 105, 0.3);
        }
        
        .course-card {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .course-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 40px rgba(37, 99, 235, 0.15);
        }
        
        .nav-link {
            position: relative;
            transition: color 0.2s ease;
        }
        
        .nav-link::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: #2563EB;
            transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
            width: 100%;
        }
        
        .feature-icon {
            background: linear-gradient(135deg, #EBF4FF 0%, #DBEAFE 100%);
            border: 1px solid #C7D2FE;
        }
    </style>
</head>

<body class="font-sans antialiased bg-white">
    <!-- Navigation -->
    <nav class="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-20 items-center">
                <a href="#" class="flex items-center space-x-3">
                    <svg class="graduation-cap-svg text-helloforma-blue" viewBox="0 0 24 24">
                        <path d="M12 2L1 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7L12 2z"/>
                        <path d="M8 12l3 3 5-5"/>
                    </svg>
                    <span class="text-2xl font-bold text-gray-900">HELLOFORMA</span>
                </a>
                
                <div class="hidden md:flex items-center space-x-8">
                    <a href="#formations" class="nav-link text-gray-700 hover:text-helloforma-blue font-medium">Formations</a>
                    <a href="#methodes" class="nav-link text-gray-700 hover:text-helloforma-blue font-medium">Méthodes</a>
                    <a href="#certifications" class="nav-link text-gray-700 hover:text-helloforma-blue font-medium">Certifications</a>
                    <a href="#contact" class="px-6 py-2.5 rounded-lg bg-helloforma-blue text-white hover:bg-helloforma-dark transition font-medium">
                        Nous Contacter
                    </a>
                </div>
                
                <button class="md:hidden text-gray-700" aria-label="Ouvrir le menu">
                    <i data-feather="menu" class="w-6 h-6"></i>
                </button>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-32 pb-20 px-4 sm:px-6 lg:px-8 hero-pattern">
        <div class="max-w-7xl mx-auto">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <div data-aos="fade-right">
                    <div class="inline-flex items-center px-4 py-2 bg-helloforma-light text-helloforma-blue rounded-full text-sm font-medium mb-6">
                        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        Organisme de Formation Certifié Qualiopi
                    </div>
                    <h1 class="text-display text-gray-900 mb-6">
                        Votre <span class="text-helloforma-blue">Spécialiste</span> en Formation Professionnelle
                    </h1>
                    <p class="text-xl text-gray-600 mb-8 leading-relaxed">
                        Développez les compétences de vos équipes avec nos formations certifiantes adaptées aux besoins de votre entreprise. Plus de 530 domaines de formation disponibles.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 mb-12">
                        <a href="#formations" class="px-8 py-4 bg-helloforma-blue text-white rounded-lg hover:bg-helloforma-dark transition font-semibold text-center">
                            Découvrir nos Formations
                        </a>
                        <a href="#demo" class="px-8 py-4 border-2 border-helloforma-blue text-helloforma-blue rounded-lg hover:bg-helloforma-light transition font-semibold text-center">
                            Demander une Démo
                        </a>
                    </div>
                    
                    <!-- Quick Stats -->
                    <div class="grid grid-cols-3 gap-8">
                        <div class="text-center">
                            <div class="text-h2 font-bold text-helloforma-blue stats-counter">941</div>
                            <div class="text-small text-gray-600">Certifications Délivrées</div>
                        </div>
                        <div class="text-center">
                            <div class="text-h2 font-bold text-helloforma-blue stats-counter">125</div>
                            <div class="text-small text-gray-600">Formateurs Experts</div>
                        </div>
                        <div class="text-center">
                            <div class="text-h2 font-bold text-helloforma-blue stats-counter">98%</div>
                            <div class="text-small text-gray-600">Taux de Satisfaction</div>
                        </div>
                    </div>
                </div>
                
                <div data-aos="fade-left" class="relative">
                    <div class="absolute -top-8 -left-8 w-full h-full bg-helloforma-light rounded-2xl -z-10"></div>
                    <div class="bg-white rounded-2xl shadow-2xl p-8">
                        <div class="flex items-center mb-6">
                            <div class="w-12 h-12 bg-helloforma-blue rounded-xl flex items-center justify-center mr-4">
                                <i data-feather="play-circle" class="w-6 h-6 text-white"></i>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-900">Formation en Cours</h3>
                                <p class="text-small text-gray-600">Gestion d'équipe avancée</p>
                            </div>
                        </div>
                        <div class="mb-6">
                            <div class="flex justify-between text-small text-gray-600 mb-2">
                                <span>Progression</span>
                                <span>75%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-helloforma-accent h-2 rounded-full" style="width: 75%"></div>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-4 text-center">
                            <div class="p-4 bg-gray-50 rounded-lg">
                                <div class="font-semibold text-gray-900">12h</div>
                                <div class="text-small text-gray-600">Temps restant</div>
                            </div>
                            <div class="p-4 bg-gray-50 rounded-lg">
                                <div class="font-semibold text-gray-900">4.8/5</div>
                                <div class="text-small text-gray-600">Évaluation</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Trusted Companies -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p class="text-center text-gray-600 mb-12 font-medium">
                Ils nous font confiance pour former leurs équipes
            </p>
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
                <div class="h-12 bg-gray-300 rounded flex items-center justify-center text-gray-600 font-semibold">Logo 1</div>
                <div class="h-12 bg-gray-300 rounded flex items-center justify-center text-gray-600 font-semibold">Logo 2</div>
                <div class="h-12 bg-gray-300 rounded flex items-center justify-center text-gray-600 font-semibold">Logo 3</div>
                <div class="h-12 bg-gray-300 rounded flex items-center justify-center text-gray-600 font-semibold">Logo 4</div>
                <div class="h-12 bg-gray-300 rounded flex items-center justify-center text-gray-600 font-semibold">Logo 5</div>
                <div class="h-12 bg-gray-300 rounded flex items-center justify-center text-gray-600 font-semibold">Logo 6</div>
            </div>
        </div>
    </section>

    <!-- Key Features -->
    <section class="py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-h2 text-gray-900 mb-4">Pourquoi Choisir HelloForma ?</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Notre expertise et notre approche pédagogique innovante garantissent des résultats mesurables
                </p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
                <div class="text-center" data-aos="fade-up" data-aos-delay="100">
                    <div class="w-16 h-16 mx-auto mb-6 feature-icon rounded-2xl flex items-center justify-center">
                        <i data-feather="award" class="w-8 h-8 text-helloforma-blue"></i>
                    </div>
                    <h3 class="text-h3 text-gray-900 mb-3">Certification Qualiopi</h3>
                    <p class="text-gray-600">
                        Organisme certifié garantissant la qualité de nos formations et l'éligibilité aux financements CPF.
                    </p>
                </div>
                
                <div class="text-center" data-aos="fade-up" data-aos-delay="200">
                    <div class="w-16 h-16 mx-auto mb-6 feature-icon rounded-2xl flex items-center justify-center">
                        <i data-feather="users" class="w-8 h-8 text-helloforma-blue"></i>
                    </div>
                    <h3 class="text-h3 text-gray-900 mb-3">Formateurs Experts</h3>
                    <p class="text-gray-600">
                        125 formateurs certifiés avec une expérience terrain dans leur domaine d'expertise.
                    </p>
                </div>
                
                <div class="text-center" data-aos="fade-up" data-aos-delay="300">
                    <div class="w-16 h-16 mx-auto mb-6 feature-icon rounded-2xl flex items-center justify-center">
                        <i data-feather="trending-up" class="w-8 h-8 text-helloforma-blue"></i>
                    </div>
                    <h3 class="text-h3 text-gray-900 mb-3">Suivi Personnalisé</h3>
                    <p class="text-gray-600">
                        Accompagnement individualisé avec évaluation continue et support technique réactif.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Formations Section -->
    <section id="formations" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-h2 text-gray-900 mb-4">Nos Domaines de Formation</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                    Plus de 530 formations dans 7 domaines d'expertise pour développer toutes les compétences de votre entreprise
                </p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Ventes & Relation Client -->
                <div class="course-card bg-white rounded-xl p-8 shadow-sm border border-gray-100" data-aos="fade-up">
                    <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                        <i data-feather="trending-up" class="w-6 h-6 text-blue-600"></i>
                    </div>
                    <h3 class="text-h3 text-gray-900 mb-3">Ventes & Relation Client</h3>
                    <p class="text-gray-600 mb-6">
                        Développez vos techniques de vente, négociation et gestion de la relation client.
                    </p>
                    <ul class="space-y-2 text-small text-gray-600 mb-6">
                        <li class="flex items-center">
                            <i data-feather="check" class="w-4 h-4 text-green-500 mr-2"></i>
                            Techniques de vente avancées
                        </li>
                        <li class="flex items-center">
                            <i data-feather="check" class="w-4 h-4 text-green-500 mr-2"></i>
                            Négociation commerciale
                        </li>
                        <li class="flex items-center">
                            <i data-feather="check" class="w-4 h-4 text-green-500 mr-2"></i>
                            Gestion des objections
                        </li>
                    </ul>
                    <div class="flex items-center justify-between">
                        <span class="certification-badge text-white px-3 py-1 rounded-full text-small font-medium">
                            Certifiant
                        </span>
                        <span class="text-helloforma-blue font-semibold">42h</span>
                    </div>
                </div>

                <!-- Sécurité au Travail -->
                <div class="course-card bg-white rounded-xl p-8 shadow-sm border border-gray-100" data-aos="fade-up" data-aos-delay="100">
                    <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                        <i data-feather="shield" class="w-6 h-6 text-red-600"></i>
                    </div>
                    <h3 class="text-h3 text-gray-900 mb-3">Sécurité au Travail</h3>
                    <p class="text-gray-600 mb-6">
                        Formations obligatoires et certifiantes en sécurité et prévention des risques.
                    </p>
                    <ul class="space-y-2 text-small text-gray-600 mb-6">
                        <li class="flex items-center">
                            <i data-feather="check" class="w-4 h-4 text-green-500 mr-2"></i>
                            SST - Sauveteur Secouriste
                        </li>
                        <li class="flex items-center">
                            <i data-feather="check" class="w-4 h-4 text-green-500 mr-2"></i>
                            PRAP - Prévention des risques
                        </li>
                        <li class="flex items-center">
                            <i data-feather="check" class="w-4 h-4 text-green-500 mr-2"></i>
                            Habilitation électrique
                        </li>
                    </ul>
                    <div class="flex items-center justify-between">
                        <span class="certification-badge text-white px-3 py-1 rounded-full text-small font-medium">
                            Obligatoire
                        </span>
                        <span class="text-helloforma-blue font-semibold">14h</span>
                    </div>
                </div>

                <!-- Marketing Digital -->
                <div class="course-card bg-white rounded-xl p-8 shadow-sm border border-gray-100" data-aos="fade-up" data-aos-delay="200">
                    <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                        <i data-feather="smartphone" class="w-6 h-6 text-purple-600"></i>
                    </div>
                    <h3 class="text-h3 text-gray-900 mb-3">Marketing Digital</h3>
                    <p class="text-gray-600 mb-6">
                        Maîtrisez les outils et stratégies du marketing numérique moderne.
                    </p>
                    <ul class="space-y-2 text-small text-gray-600 mb-6">
                        <li class="flex items-center">
                            <i data-feather="check" class="w-4 h-4 text-green-500 mr-2"></i>
                            SEO/SEA et référencement
                        </li>
                        <li class="flex items-center">
                            <i data-feather="check" class="w-4 h-4 text-green-500 mr-2"></i>
                            Réseaux sociaux
                        </li>
                        <li class="flex items-center">
                            <i data-feather="check" class="w-4 h-4 text-green-500 mr-2"></i>
                            Email marketing
                        </li>
                    </ul>
                    <div class="flex items-center justify-between">
                        <span class="certification-badge text-white px-3 py-1 rounded-full text-small font-medium">
                            Google Partner
                        </span>
                        <span class="text-helloforma-blue font-semibold">35h</span>
                    </div>
                </div>

                <!-- Langues Professionnelles -->
                <div class="course-card bg-white rounded-xl p-8 shadow-sm border border-gray-100" data-aos="fade-up" data-aos-delay="300">
                    <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                        <i data-feather="globe" class="w-6 h-6 text-green-600"></i>
                    </div>
                    <h3 class="text-h3 text-gray-900 mb-3">Langues Professionnelles</h3>
                    <p class="text-gray-600 mb-6">
                        Développez vos compétences linguistiques pour un contexte professionnel.
                    </p>
                    <ul class="space-y-2 text-small text-gray-600 mb-6">
                        <li class="flex items-center">
                            <i data-feather="check" class="w-4 h-4 text-green-500 mr-2"></i>
                            Anglais professionnel
                        </li>
                        <li class="flex items-center">
                            <i data-feather="check" class="w-4 h-4 text-green-500 mr-2"></i>
                            Préparation TOEIC
                        </li>
                        <li class="flex items-center">
                            <i data-feather="check" class="w-4 h-4 text-green-500 mr-2"></i>
                            Espagnol, Allemand, Italien
                        </li>
                    </ul>
                    <div class="flex items-center justify-between">
                        <span class="certification-badge text-white px-3 py-1 rounded-full text-small font-medium">
                            TOEIC
                        </span>
                        <span class="text-helloforma-blue font-semibold">50h</span>
                    </div>
                </div>

                <!-- Bureautique & Logiciels -->
                <div class="course-card bg-white rounded-xl p-8 shadow-sm border border-gray-100" data-aos="fade-up" data-aos-delay="400">
                    <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                        <i data-feather="monitor" class="w-6 h-6 text-orange-600"></i>
                    </div>
                    <h3 class="text-h3 text-gray-900 mb-3">Bureautique & Logiciels</h3>
                    <p class="text-gray-600 mb-6">
                        Perfectionnez votre maîtrise des outils bureautiques essentiels.
                    </p>
                    <ul class="space-y-2 text-small text-gray-600 mb-6">
                        <li class="flex items-center">
                            <i data-feather="check" class="w-4 h-4 text-green-500 mr-2"></i>
                            Pack Office avancé
                        </li>
                        <li class="flex items-center">
                            <i data-feather="check" class="w-4 h-4 text-green-500 mr-2"></i>
                            Google Workspace
                        </li>
                        <li class="flex items-center">
                            <i data-feather="check" class="w-4 h-4 text-green-500 mr-2"></i>
                            Logiciels métier
                        </li>
                    </ul>
                    <div class="flex items-center justify-between">
                        <span class="certification-badge text-white px-3 py-1 rounded-full text-small font-medium">
                            Microsoft
                        </span>
                        <span class="text-helloforma-blue font-semibold">28h</span>
                    </div>
                </div>

                <!-- Management -->
                <div class="course-card bg-white rounded-xl p-8 shadow-sm border border-gray-100" data-aos="fade-up" data-aos-delay="500">
                    <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                        <i data-feather="users" class="w-6 h-6 text-indigo-600"></i>
                    </div>
                    <h3 class="text-h3 text-gray-900 mb-3">Management & Leadership</h3>
                    <p class="text-gray-600 mb-6">
                        Développez vos compétences managériales et de leadership d'équipe.
                    </p>
                    <ul class="space-y-2 text-small text-gray-600 mb-6">
                        <li class="flex items-center">
                            <i data-feather="check" class="w-4 h-4 text-green-500 mr-2"></i>
                            Management d'équipe
                        </li>
                        <li class="flex items-center">
                            <i data-feather="check" class="w-4 h-4 text-green-500 mr-2"></i>
                            Gestion de projet
                        </li>
                        <li class="flex items-center">
                            <i data-feather="check" class="w-4 h-4 text-green-500 mr-2"></i>
                            Leadership & motivation
                        </li>
                    </ul>
                    <div class="flex items-center justify-between">
                        <span class="certification-badge text-white px-3 py-1 rounded-full text-small font-medium">
                            Certifiant
                        </span>
                        <span class="text-helloforma-blue font-semibold">40h</span>
                    </div>
                </div>
            </div>
            
            <div class="text-center mt-12">
                <a href="#contact" class="px-8 py-4 bg-helloforma-blue text-white rounded-lg hover:bg-helloforma-dark transition font-semibold">
                    Voir Toutes nos Formations
                </a>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-helloforma-blue">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-h2 text-white mb-4">Prêt à Former vos Équipes ?</h2>
            <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Contactez-nous pour un audit gratuit de vos besoins en formation et recevez un devis personnalisé sous 24h.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" class="px-8 py-4 bg-white text-helloforma-blue rounded-lg hover:bg-gray-50 transition font-semibold">
                    Demander un Devis Gratuit
                </a>
                <a href="tel:+33123456789" class="px-8 py-4 border ////// it's unfinished 