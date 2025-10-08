# Formspree.io Integration Guide

## Quick Setup (5 minutes)

### Step 1: Create Formspree Account

1. Go to https://formspree.io
2. Sign up for a free account (allows 50 submissions/month)
3. Verify your email address

### Step 2: Create Your Form

1. Click "New Form" in your Formspree dashboard
2. Give it a name: "HelloForma Contact Form"
3. Copy your form endpoint URL (looks like: `https://formspree.io/f/xyzabc123`)

### Step 3: Update Your Website

Open `index.html` and find this line (around line 656):

```html
<form
  action="https://formspree.io/f/YOUR_FORM_ID"
  method="POST"
  class="space-y-6"
></form>
```

Replace `YOUR_FORM_ID` with your actual form ID from Formspree.

**Example:**

```html
<form
  action="https://formspree.io/f/xyzabc123"
  method="POST"
  class="space-y-6"
></form>
```

### Step 4: Update Thank You Page Redirect

Find this line in `index.html` (around line 745):

```html
<input type="hidden" name="_next" value="https://yourdomain.com/merci.html" />
```

Replace with your actual domain:

```html
<input type="hidden" name="_next" value="https://helloforma.fr/merci.html" />
```

Or for local testing, use a relative path:

```html
<input type="hidden" name="_next" value="merci.html" />
```

### Step 5: Test Your Form

1. Open your website
2. Scroll to the contact section
3. Fill out the form
4. Submit and check:
   - You should be redirected to the thank you page
   - You should receive an email notification
   - The submission should appear in your Formspree dashboard

## Formspree Features Included

### ✅ Spam Protection

- Built-in honeypot field
- reCAPTCHA integration available
- Email verification

### ✅ Email Notifications

- Instant email notifications to your inbox
- Customizable email templates
- Auto-reply to form submitters

### ✅ Form Fields Included

- **Name** (required)
- **Email** (required)
- **Phone** (optional)
- **Company** (optional)
- **Formation Type** (dropdown)
- **Message** (required)

### ✅ Hidden Fields

- `_subject`: Custom email subject line
- `_next`: Redirect URL after submission

## Advanced Configuration (Optional)

### Custom Email Subject

Already configured in the form:

```html
<input
  type="hidden"
  name="_subject"
  value="Nouvelle demande de contact - HelloForma"
/>
```

### Add reCAPTCHA

In your Formspree dashboard:

1. Go to Form Settings
2. Enable reCAPTCHA
3. Add your site key

### Email Templates

In Formspree dashboard:

1. Go to Form Settings → Email Templates
2. Customize the notification email
3. Add your branding

### Webhooks

Connect to other services:

1. Go to Form Settings → Integrations
2. Add webhook URL
3. Send form data to your CRM, Slack, etc.

## Pricing Plans

### Free Plan

- 50 submissions/month
- Email notifications
- Spam filtering
- Perfect for getting started

### Paid Plans (if you need more)

- **Gold**: $10/month - 1,000 submissions
- **Platinum**: $40/month - 10,000 submissions
- Custom enterprise plans available

## Troubleshooting

### Form not submitting?

1. Check that your form ID is correct
2. Verify your email is confirmed in Formspree
3. Check browser console for errors

### Not receiving emails?

1. Check your spam folder
2. Verify email settings in Formspree dashboard
3. Add noreply@formspree.io to your contacts

### Redirect not working?

1. Make sure the `_next` URL is correct
2. Use absolute URLs for production
3. Use relative URLs for local testing

## Alternative: Use Formspree's AJAX Endpoint

For a smoother experience without page reload:

```javascript
<script>
document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            // Show success message
            alert('Message envoyé avec succès !');
            form.reset();
        } else {
            alert('Erreur lors de l\'envoi. Veuillez réessayer.');
        }
    } catch (error) {
        alert('Erreur lors de l\'envoi. Veuillez réessayer.');
    }
});
</script>
```

## Support

- **Formspree Docs**: https://help.formspree.io
- **Status Page**: https://status.formspree.io
- **Support Email**: support@formspree.io

## Next Steps

1. ✅ Sign up for Formspree
2. ✅ Get your form ID
3. ✅ Update index.html with your form ID
4. ✅ Update the redirect URL
5. ✅ Test the form
6. ✅ Push changes to GitHub (don't lose your work!)
7. ✅ Deploy to production

---

**Remember**: Always test your form before going live!
