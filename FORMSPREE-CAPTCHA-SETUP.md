# Formspree CAPTCHA Setup Guide

This guide explains how to add CAPTCHA protection to your HelloForma contact form using Formspree.

## Overview

Formspree provides built-in spam protection and CAPTCHA options to prevent bot submissions. Your contact form is already configured with basic spam protection, but you can add explicit CAPTCHA for additional security.

## Current Spam Protection

Your form already includes:

1. **Honeypot field** - Hidden `_gotcha` field that traps bots
2. **Formspree's automatic spam filtering** - Built-in on all plans
3. **Email verification** - Formspree verifies sender emails

## Adding CAPTCHA (Recommended)

Formspree supports two CAPTCHA providers:

### Option 1: reCAPTCHA v2 (Google)

**Pros:**
- Most widely recognized
- Excellent bot detection
- Free to use

**Cons:**
- Requires Google account
- Privacy concerns for some users

### Option 2: hCaptcha

**Pros:**
- Privacy-focused alternative
- No Google account needed
- Pays websites for CAPTCHA solves

**Cons:**
- Less familiar to some users

## Setup Instructions

### Step 1: Access Your Formspree Dashboard

1. Go to https://formspree.io/
2. Log in to your account
3. Find your form: **mldppnzd** (HelloForma Contact Form)

### Step 2: Enable CAPTCHA

#### For reCAPTCHA:

1. In your Formspree dashboard, click on your form
2. Go to **Settings** tab
3. Scroll to **Spam Protection** section
4. Toggle **Enable reCAPTCHA** to ON
5. Formspree will automatically handle the rest!

**Note:** Formspree manages the reCAPTCHA keys for you - no additional configuration needed.

#### For hCaptcha:

1. In your Formspree dashboard, click on your form
2. Go to **Settings** tab
3. Scroll to **Spam Protection** section
4. Toggle **Enable hCaptcha** to ON
5. Formspree will automatically handle the rest!

### Step 3: Test Your Form

1. Visit your contact page: https://helloforma.org/contact.html
2. Fill out the form
3. You should see a CAPTCHA challenge appear before submission
4. Complete the CAPTCHA and submit
5. Verify the email arrives at contact@helloforma.org

## How It Works

When CAPTCHA is enabled in Formspree:

1. User fills out the contact form
2. Before submission, CAPTCHA challenge appears
3. User completes CAPTCHA (check boxes, select images, etc.)
4. Form submits only if CAPTCHA is verified
5. Email is sent to contact@helloforma.org

## Formspree Plan Requirements

### Free Plan
- ✅ Basic spam filtering (honeypot)
- ✅ 50 submissions/month
- ❌ reCAPTCHA/hCaptcha (requires paid plan)

### Paid Plans (Starting at $10/month)
- ✅ All spam filtering features
- ✅ reCAPTCHA or hCaptcha
- ✅ Unlimited submissions
- ✅ File uploads
- ✅ Custom redirects
- ✅ Webhooks

## Alternative: Manual reCAPTCHA Integration

If you want to use your own reCAPTCHA keys (not through Formspree), follow these steps:

### Step 1: Get reCAPTCHA Keys

1. Go to https://www.google.com/recaptcha/admin
2. Register your site
3. Choose reCAPTCHA v2 (Checkbox)
4. Add your domain: helloforma.org
5. Get your Site Key and Secret Key

### Step 2: Add reCAPTCHA to HTML

Add this to the `<head>` section of contact.html:

```html
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
```

Add this before the submit button:

```html
<div class="g-recaptcha" data-sitekey="YOUR_SITE_KEY_HERE"></div>
```

### Step 3: Server-Side Verification

You'll need a backend to verify the reCAPTCHA response. This is more complex and requires:
- A server-side script (PHP, Node.js, Python, etc.)
- Verification of the reCAPTCHA token with Google's API

**Recommendation:** Use Formspree's built-in CAPTCHA instead - it's much simpler!

## Current Form Configuration

Your contact form (`contact.html`) is already prepared for CAPTCHA:

```html
<!-- reCAPTCHA placeholder -->
<div id="formspree-recaptcha" class="mb-6"></div>
```

When you enable CAPTCHA in Formspree dashboard, it will automatically inject the CAPTCHA widget into your form.

## Testing Checklist

After enabling CAPTCHA:

- [ ] Visit contact page
- [ ] Fill out form with valid information
- [ ] Verify CAPTCHA appears before submission
- [ ] Complete CAPTCHA challenge
- [ ] Submit form
- [ ] Check that email arrives at contact@helloforma.org
- [ ] Try submitting without completing CAPTCHA (should fail)
- [ ] Test on mobile device
- [ ] Test on different browsers

## Monitoring Spam

### In Formspree Dashboard:

1. Go to your form's **Submissions** tab
2. Check for spam submissions
3. Review **Spam** folder for false positives
4. Mark submissions as spam/not spam to train the filter

### Spam Indicators:

- Gibberish text in message field
- Suspicious email addresses
- Multiple submissions from same IP
- Generic/template messages
- Links in message field

## Troubleshooting

### CAPTCHA Not Appearing

**Problem:** Form submits without showing CAPTCHA

**Solutions:**
1. Verify CAPTCHA is enabled in Formspree dashboard
2. Clear browser cache and reload page
3. Check browser console for JavaScript errors
4. Ensure you're on a paid Formspree plan (if using their CAPTCHA)

### CAPTCHA Always Fails

**Problem:** CAPTCHA verification fails even when completed correctly

**Solutions:**
1. Check your internet connection
2. Try a different browser
3. Disable browser extensions (ad blockers may interfere)
4. Contact Formspree support

### Form Not Submitting

**Problem:** Form doesn't submit after completing CAPTCHA

**Solutions:**
1. Check browser console for errors
2. Verify form action URL is correct: `https://formspree.io/f/mldppnzd`
3. Ensure all required fields are filled
4. Try disabling browser extensions

## Additional Security Measures

Beyond CAPTCHA, consider:

1. **Rate Limiting** - Formspree automatically limits submissions per IP
2. **Email Verification** - Formspree verifies sender email addresses
3. **Honeypot Field** - Already implemented in your form
4. **Content Filtering** - Monitor for spam keywords
5. **IP Blocking** - Block specific IPs in Formspree dashboard

## Recommended Configuration

For HelloForma, we recommend:

1. ✅ Keep honeypot field (already implemented)
2. ✅ Enable Formspree's built-in spam filtering (automatic)
3. ✅ Enable reCAPTCHA or hCaptcha (requires paid plan)
4. ✅ Monitor submissions regularly
5. ✅ Train spam filter by marking spam submissions

## Cost Considerations

### Free Plan (Current)
- Good for testing and low-volume sites
- 50 submissions/month
- Basic spam protection
- **Cost:** $0/month

### Paid Plan (Recommended for Production)
- Unlimited submissions
- CAPTCHA protection
- File uploads
- Priority support
- **Cost:** $10/month (Basic) or $40/month (Pro)

## Support

If you need help with CAPTCHA setup:

**Formspree Support:**
- Email: support@formspree.io
- Documentation: https://help.formspree.io/

**HelloForma Contact:**
- Email: contact@helloforma.org
- Phone: 01 77 62 77 16

## Next Steps

1. [ ] Decide on CAPTCHA provider (reCAPTCHA or hCaptcha)
2. [ ] Upgrade to Formspree paid plan (if needed)
3. [ ] Enable CAPTCHA in Formspree dashboard
4. [ ] Test form submission with CAPTCHA
5. [ ] Monitor spam submissions
6. [ ] Adjust settings as needed

## Summary

Your contact form is already protected with:
- ✅ Honeypot spam trap
- ✅ Formspree automatic spam filtering
- ✅ Email verification

To add CAPTCHA:
1. Upgrade to Formspree paid plan ($10/month)
2. Enable reCAPTCHA or hCaptcha in dashboard
3. Test and monitor

The form is already prepared for CAPTCHA - just enable it in your Formspree settings!
