# Image Diagnostic Guide

## ✅ All Images Are Present in `/static/images/`

### **Confirmed Files:**
- ✅ testimonial-sophie-martin.jpg
- ✅ testimonial-jean-dupont.jpg
- ✅ testimonial-amelie-leroy.jpg
- ✅ immobilier-hero-background.jpg
- ✅ office-location.jpg
- ✅ team-photo.jpg
- ✅ hero-training-background.jpg
- ✅ feature-expert-trainers.jpg
- ✅ feature-custom-training.jpg
- ✅ feature-certifications.png
- ✅ feature-flexibility.png
- ✅ feature-personalized-support.png
- ✅ feature-qualiopi-quality.jpg

---

## 🔍 Troubleshooting Steps

### **If images don't show:**

#### 1. **Clear Browser Cache** (Most Common Issue)
- **Chrome/Edge:** Press `Ctrl + Shift + Delete` → Clear cache
- **Or:** Press `Ctrl + F5` (hard refresh)
- **Or:** Press `F12` → Right-click refresh button → "Empty Cache and Hard Reload"

#### 2. **Check Browser Console for Errors**
- Press `F12` to open Developer Tools
- Click "Console" tab
- Look for red errors like "404 Not Found"
- Take a screenshot if you see errors

#### 3. **Verify File Paths**
Open each HTML file and check:

**index.html should have:**
```html
/static/images/hero-training-background.jpg
/static/images/feature-expert-trainers.jpg
/static/images/feature-custom-training.jpg
/static/images/feature-certifications.png
/static/images/feature-flexibility.png
/static/images/feature-personalized-support.png
/static/images/feature-qualiopi-quality.jpg
```

**immobilier.html should have:**
```html
/static/images/immobilier-hero-background.jpg
/static/images/testimonial-sophie-martin.jpg
/static/images/testimonial-jean-dupont.jpg
/static/images/testimonial-amelie-leroy.jpg
```

**contact.html should have:**
```html
/static/images/office-location.jpg
/static/images/team-photo.jpg
```

#### 4. **Check if Running from File System**
- If opening HTML directly (file:///C:/...), images might not load
- **Solution:** Use a local server:
  - Install "Live Server" extension in VS Code
  - Or use Python: `python -m http.server 8000`
  - Then open: `http://localhost:8000`

#### 5. **Check File Permissions**
- Make sure image files aren't read-only
- Right-click image → Properties → Uncheck "Read-only"

---

## 🧪 Quick Test

### **Test Individual Images:**

Open these URLs directly in browser:
```
file:///C:/Users/Logifex/HELLOFORMA/static/images/testimonial-sophie-martin.jpg
file:///C:/Users/Logifex/HELLOFORMA/static/images/testimonial-jean-dupont.jpg
file:///C:/Users/Logifex/HELLOFORMA/static/images/testimonial-amelie-leroy.jpg
file:///C:/Users/Logifex/HELLOFORMA/static/images/immobilier-hero-background.jpg
file:///C:/Users/Logifex/HELLOFORMA/static/images/office-location.jpg
file:///C:/Users/Logifex/HELLOFORMA/static/images/team-photo.jpg
```

If images open directly, the problem is in the HTML paths.  
If images don't open, the problem is with the files themselves.

---

## 📋 Which Images Are Missing?

Please tell me:
1. **Which page?** (index.html, immobilier.html, contact.html)
2. **Which specific images?** (testimonials, hero, office, etc.)
3. **What do you see instead?** (broken image icon, gray box, nothing?)
4. **Any errors in console?** (Press F12 → Console tab)

---

## 🔧 Common Fixes

### **Fix 1: Browser Cache**
```
Ctrl + F5 (hard refresh)
```

### **Fix 2: Use Local Server**
```bash
# In VS Code: Install "Live Server" extension
# Right-click index.html → "Open with Live Server"
```

### **Fix 3: Check Paths**
All image paths should start with `/static/images/`

### **Fix 4: Verify Extensions**
- Some files are `.jpg`
- Some files are `.png`
- Make sure HTML matches actual file extension

---

## ✅ Expected Results

### **index.html:**
- Hero section: Subtle background image
- 6 feature cards: All should have photos

### **immobilier.html:**
- Hero section: Real estate background (subtle)
- 3 testimonials: Professional headshots (Sophie, Jean, Amélie)

### **contact.html:**
- 2 photos: Office and team

---

## 🆘 Still Not Working?

Share with me:
1. Screenshot of the page
2. Screenshot of F12 Console errors
3. Which browser you're using
4. How you're opening the file (double-click or local server)
