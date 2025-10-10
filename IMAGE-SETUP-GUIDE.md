# Image Setup Guide for HelloForma

## Step 1: Create Folder Structure

```bash
# In your HELLOFORMA directory, create:
mkdir static
mkdir static\images
```

## Step 2: Download Images

### Required Images (11 total):

#### Hero Section (1 image)

- **hero-training-background.jpg** (1920x1080px)
  - Search: "professional training classroom" or "business workshop"
  - Should show: Diverse professionals in modern training environment

#### Feature Cards (5 images - 800x600px each)

1. **feature-expert-trainers.jpg**

   - Search: "professional trainer teaching" or "expert instructor"
   - Should show: Confident trainer with students

2. **feature-custom-training.jpg**

   - Search: "customized business training" or "personalized workshop"
   - Should show: Small group training session

3. **feature-certifications.jpg**

   - Search: "professional certificate" or "diploma award"
   - Should show: Certificate or graduation moment

4. **feature-flexibility.jpg**

   - Search: "remote learning" or "hybrid training"
   - Should show: Person learning on laptop/tablet

5. **feature-personalized-support.jpg**
   - Search: "one on one coaching" or "mentoring session"
   - Should show: Mentor helping student

#### Course Thumbnails (18 images - 800x600px each)

**Digital & Tech (6 courses):**

1. **course-web-development.jpg**
   - Search: "web developer coding" or "programming workspace"
   - Should show: Code on screen, modern workspace

2. **course-mobile-dev.jpg**
   - Search: "mobile app development" or "smartphone coding"
   - Should show: Mobile devices with code/apps

3. **course-data-analytics.jpg**
   - Search: "data analytics dashboard" or "business intelligence"
   - Should show: Charts, graphs, data visualization

4. **course-cybersecurity.jpg**
   - Search: "cybersecurity" or "network security"
   - Should show: Security concepts, locks, shields

5. **course-ai.jpg**
   - Search: "artificial intelligence" or "machine learning"
   - Should show: AI/ML concepts, neural networks

6. **course-cloud.jpg**
   - Search: "cloud computing" or "server infrastructure"
   - Should show: Cloud technology, servers

**Management (3 courses):**

7. **course-management.png**
   - Search: "business meeting leadership" or "team management"
   - Should show: Professional meeting or team discussion

8. **course-project-management.jpg**
   - Search: "project planning" or "agile scrum board"
   - Should show: Project boards, planning sessions

9. **course-communication.jpg**
   - Search: "business communication" or "presentation skills"
   - Should show: Professional presenting or communicating

**Marketing (3 courses):**

10. **course-digital-marketing.jpg**
    - Search: "digital marketing" or "social media marketing"
    - Should show: Marketing concepts, social media, SEO analytics

11. **course-ecommerce.jpg**
    - Search: "online shopping" or "ecommerce business"
    - Should show: Shopping cart, online store

12. **course-sales.jpg**
    - Search: "sales meeting" or "business negotiation"
    - Should show: Sales professionals, handshake

**Finance (3 courses):**

13. **course-accounting.jpg**
    - Search: "accounting" or "financial documents"
    - Should show: Calculator, financial reports

14. **course-finance.jpg**
    - Search: "financial analysis" or "business finance"
    - Should show: Financial charts, analysis

15. **course-tax.jpg**
    - Search: "tax documents" or "fiscal planning"
    - Should show: Tax forms, documents

**Security & Safety (3 courses):**

16. **course-sst.jpg**
    - Search: "first aid training" or "workplace safety"
    - Should show: First aid, safety training

17. **course-hygiene.jpg**
    - Search: "food safety" or "restaurant hygiene"
    - Should show: Clean kitchen, food preparation

18. **course-safety.jpg**
    - Search: "workplace safety" or "safety equipment"
    - Should show: Safety gear, workplace safety

## Step 3: Free Image Sources

### Recommended Sites (No attribution required):

- **Unsplash**: https://unsplash.com
- **Pexels**: https://pexels.com
- **Pixabay**: https://pixabay.com

### Search Terms by Category:

```
Hero: "professional training", "business workshop", "corporate learning"
Features: "business coaching", "professional development", "certification"
Courses: "web development", "team leadership", "data analysis"
```

## Step 4: Image Optimization

Before uploading, optimize images:

- **Format**: JPG for photos
- **Quality**: 80-85% (good balance)
- **Max file size**: 200KB per image
- **Tools**:
  - TinyPNG.com (online)
  - Squoosh.app (Google)
  - Photoshop/GIMP (desktop)

## Step 5: File Naming Convention

✅ **Correct**: `feature-expert-trainers.jpg`
❌ **Wrong**: `Feature Expert Trainers.JPG`

Rules:

- All lowercase
- Use hyphens (not spaces or underscores)
- Descriptive names
- .jpg extension

## Step 6: Verify Setup

After adding images, your structure should look like:

```
HELLOFORMA/
├── index.html
├── formations.html
├── static/
│   ├── favicon.ico
│   └── images/
│       ├── hero-training-background.jpg
│       ├── feature-expert-trainers.jpg
│       ├── feature-custom-training.jpg
│       ├── feature-certifications.jpg
│       ├── feature-flexibility.jpg
│       ├── feature-personalized-support.jpg
│       ├── course-web-development.jpg
│       ├── course-mobile-dev.jpg
│       ├── course-data-analytics.jpg
│       ├── course-cybersecurity.jpg
│       ├── course-ai.jpg
│       ├── course-cloud.jpg
│       ├── course-management.png
│       ├── course-project-management.jpg
│       ├── course-communication.jpg
│       ├── course-digital-marketing.jpg
│       ├── course-ecommerce.jpg
│       ├── course-sales.jpg
│       ├── course-accounting.jpg
│       ├── course-finance.jpg
│       ├── course-tax.jpg
│       ├── course-sst.jpg
│       ├── course-hygiene.jpg
│       └── course-safety.jpg
```

## Step 7: Test

1. Open index.html in browser
2. Right-click on image area → "Inspect"
3. Check Console for 404 errors
4. If images don't load, verify:
   - File names match exactly (case-sensitive)
   - Files are in correct folder
   - No typos in paths

## Quick Test Images

If you want to test the layout immediately, you can use placeholder services:

Replace image paths temporarily with:

```html
<!-- Example for testing -->
<img
  src="https://via.placeholder.com/800x600/2563EB/FFFFFF?text=Feature+Image"
  alt="Feature"
/>
```

## Troubleshooting

**Images not showing?**

- Check browser console (F12) for errors
- Verify file paths are correct
- Ensure images are in `/static/images/` folder
- Check file extensions (.jpg not .JPG)
- Clear browser cache (Ctrl+F5)

**Images too large?**

- Compress with TinyPNG.com
- Resize to recommended dimensions
- Convert to JPG if PNG

**Wrong aspect ratio?**

- Use `object-cover` class (already applied)
- Crop images to recommended sizes
- Center important content in image
