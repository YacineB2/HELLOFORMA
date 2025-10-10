# 🚀 Formspree Quick Setup Guide

**Let's get your contact form working in 5 minutes!**

---

## 📋 What You Need

- Email address: **contact@helloforma.org**
- 5 minutes of your time
- Internet connection

---

## ⚡ QUICK SETUP (5 Minutes)

### **Step 1: Go to Formspree** (1 min)

1. Open your browser
2. Go to: **https://formspree.io**
3. Click **"Get Started"** or **"Sign Up"**

---

### **Step 2: Create Account** (2 min)

1. **Sign up with:**
   - Email: contact@helloforma.org (or your personal email)
   - Password: (create a strong password)
2. **Verify your email:**
   - Check your inbox
   - Click the verification link
   - Come back to Formspree

---

### **Step 3: Create Your Form** (1 min)

1. Once logged in, click **"+ New Form"**

2. **Form Settings:**
   - **Form Name:** HelloForma Contact Form
   - **Email to receive submissions:** contact@helloforma.org
3. Click **"Create Form"**

4. **IMPORTANT:** Copy your Form ID
   - It looks like: `xyzabc123` or `mbjklqwe`
   - You'll see it in the URL: `formspree.io/forms/YOUR_FORM_ID`
   - Or in the integration code

---

### **Step 4: Update Your Website** (1 min)

Now we need to add your Form ID to contact.html:

1. Open **contact.html** in a text editor
2. Find this line (around line 121):

   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST"></form>
   ```

3. Replace `YOUR_FORM_ID` with your actual Form ID:

   ```html
   <form action="https://formspree.io/f/xyzabc123" method="POST"></form>
   ```

   _(Use your real Form ID, not xyzabc123)_

4. **Save the file**

---

### **Step 5: Test It!** (1 min)

1. Open **contact.html** in your browser
2. Fill out the form with your real email
3. Click **"Envoyer le Message"**
4. You should see a success message or redirect
5. Check your email (contact@helloforma.org)
6. You should receive the form submission!

---

## ✅ SUCCESS!

If you received the email, your form is working! 🎉

---

## 🔧 DETAILED SETUP (If Quick Setup Didn't Work)

### **Option A: Using Formspree Free Plan**

**What you get:**

- 50 submissions per month (FREE)
- Email notifications
- Spam filtering
- Perfect for starting out!

**Steps:**

1. **Go to Formspree.io**

   - https://formspree.io

2. **Sign Up**

   - Click "Get Started"
   - Enter email: contact@helloforma.org
   - Create password
   - Verify email

3. **Create New Form**

   - Click "+ New Form"
   - Name: "HelloForma Contact"
   - Email: contact@helloforma.org
   - Click "Create"

4. **Get Your Form ID**

   - After creating, you'll see your form
   - Look for the Form ID (like `xyzabc123`)
   - Copy it!

5. **Update contact.html**

   - Find line 121
   - Replace `YOUR_FORM_ID` with your real ID
   - Save file

6. **Test**
   - Open contact.html
   - Submit a test form
   - Check email

---

### **Option B: Using Direct Email (No Formspree Account)**

If you don't want to create a Formspree account, you can use their direct email endpoint:

**Update contact.html:**

Change this line:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST"></form>
```

To this:

```html
<form action="https://formspree.io/contact@helloforma.org" method="POST"></form>
```

**First submission:**

- The first time someone submits, Formspree will send a confirmation email
- Click the confirmation link
- After that, all submissions will work!

**Limitations:**

- Need to confirm first submission
- Less control over settings
- No dashboard to view submissions

---

## 🎯 WHICH OPTION TO CHOOSE?

### **Choose Option A (Formspree Account)** if:

- ✅ You want a dashboard to see submissions
- ✅ You want spam protection
- ✅ You want to customize settings
- ✅ You want better control

### **Choose Option B (Direct Email)** if:

- ✅ You want the fastest setup (2 minutes)
- ✅ You don't need a dashboard
- ✅ You just want emails to work
- ✅ You're okay with confirming first submission

---

## 📝 STEP-BY-STEP: Update contact.html

### **Current Code (Line 121):**

```html
<form
  action="https://formspree.io/f/YOUR_FORM_ID"
  method="POST"
  class="space-y-6"
></form>
```

### **Option A - With Formspree Account:**

```html
<form
  action="https://formspree.io/f/xyzabc123"
  method="POST"
  class="space-y-6"
></form>
```

_(Replace xyzabc123 with YOUR actual Form ID)_

### **Option B - Direct Email:**

```html
<form
  action="https://formspree.io/contact@helloforma.org"
  method="POST"
  class="space-y-6"
></form>
```

---

## 🧪 TESTING YOUR FORM

### **Test Checklist:**

1. **Open contact.html in browser**

   - [ ] Form displays correctly
   - [ ] All fields visible

2. **Fill out form:**

   - [ ] Name: Test User
   - [ ] Email: YOUR_REAL_EMAIL@example.com
   - [ ] Phone: 0123456789
   - [ ] Formation: Choose any
   - [ ] Message: "Test message"

3. **Submit form:**

   - [ ] Click "Envoyer le Message"
   - [ ] See success message or redirect to merci.html
   - [ ] No error messages

4. **Check email:**

   - [ ] Wait 2-3 minutes
   - [ ] Check inbox at contact@helloforma.org
   - [ ] Email received with form data
   - [ ] Check spam folder if not in inbox

5. **Verify data:**
   - [ ] Email contains name
   - [ ] Email contains sender's email
   - [ ] Email contains phone number
   - [ ] Email contains message
   - [ ] Email contains formation choice

---

## ❌ TROUBLESHOOTING

### **Problem 1: Form submits but no email received**

**Possible causes:**

- Wrong Form ID
- Email not verified in Formspree
- Email in spam folder
- Formspree account not set up

**Solutions:**

1. Check spam folder
2. Wait 5 minutes (emails can be delayed)
3. Verify Form ID is correct
4. Check Formspree dashboard for submissions
5. Verify email address in Formspree settings

---

### **Problem 2: Error message when submitting**

**Error: "Form not found"**

- Your Form ID is wrong
- Check Formspree dashboard for correct ID
- Make sure you copied it exactly

**Error: "Invalid email"**

- Email format is wrong in Formspree
- Use: contact@helloforma.org (no spaces)

**Error: "Submission failed"**

- Check internet connection
- Try different browser
- Check browser console (F12) for errors

---

### **Problem 3: Form redirects to Formspree page**

**This is normal for first submission!**

- Formspree shows a confirmation page
- Click "Confirm your email"
- Check email and click confirmation link
- After that, form will work normally

**To avoid this:**

- Set up a custom thank you page (merci.html)
- Add this to your form:
  ```html
  <input type="hidden" name="_next" value="merci.html" />
  ```

---

### **Problem 4: Spam submissions**

**Enable spam protection:**

1. Log into Formspree
2. Go to your form settings
3. Enable "reCAPTCHA"
4. Enable "Honeypot"
5. Save settings

---

## 🎨 CUSTOMIZATION (Optional)

### **Add Custom Thank You Page:**

Add this line inside your form (after the opening `<form>` tag):

```html
<input type="hidden" name="_next" value="merci.html" />
```

This redirects to your thank you page after submission.

---

### **Add Custom Subject Line:**

Add this line inside your form:

```html
<input type="hidden" name="_subject" value="Nouveau contact HelloForma" />
```

This sets a custom email subject line.

---

### **Add CC Email:**

Add this line to send copies to multiple emails:

```html
<input type="hidden" name="_cc" value="backup@example.com" />
```

---

## 📊 FORMSPREE DASHBOARD

Once set up, you can:

- View all submissions
- Export to CSV
- See submission statistics
- Configure spam protection
- Set up webhooks
- Customize email templates

**Access:** https://formspree.io/forms

---

## 💰 FORMSPREE PRICING

### **Free Plan:**

- 50 submissions/month
- Email notifications
- Spam filtering
- Perfect for most small businesses!

### **Paid Plans:**

- More submissions
- Advanced features
- Priority support
- Starting at $10/month

**For HelloForma:** Free plan is probably enough to start!

---

## ✅ FINAL CHECKLIST

Before you finish:

- [ ] Formspree account created (or using direct email)
- [ ] Form ID copied
- [ ] contact.html updated with Form ID
- [ ] File saved
- [ ] Test form submitted
- [ ] Email received at contact@helloforma.org
- [ ] Form works correctly

---

## 🚀 YOU'RE DONE!

Your contact form is now working! 🎉

**Next steps:**

1. Test it a few more times
2. Make sure emails arrive consistently
3. Check spam folder settings
4. Continue with website testing

---

## 📞 NEED MORE HELP?

**Formspree Support:**

- Help Center: https://help.formspree.io
- Email: support@formspree.io
- Response time: Usually within 24 hours

**Common Questions:**

- "How do I get my Form ID?" → Check Formspree dashboard
- "Emails not arriving?" → Check spam, wait 5 minutes
- "Want more submissions?" → Upgrade to paid plan

---

## 💡 PRO TIPS

1. **Test regularly** - Submit a test form weekly
2. **Check spam folder** - Add Formspree to safe senders
3. **Monitor submissions** - Check Formspree dashboard
4. **Backup emails** - Use \_cc to send copies
5. **Enable spam protection** - Prevent fake submissions

---

**Your form is ready! Time to launch! 🚀**
