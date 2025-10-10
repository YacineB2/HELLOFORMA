# 404 Error Page - Server Configuration Guide

This document provides instructions for configuring your web server to properly serve the custom 404 error page and return the correct HTTP status code.

## Overview

The `404.html` file has been created in the root directory of your website. To ensure it works correctly, you need to configure your web server to:

1. Serve the 404.html page when a requested resource is not found
2. Return HTTP status code 404 (Not Found)
3. Maintain the correct URL in the browser address bar

## Configuration by Server Type

### Apache (.htaccess)

If you're using Apache web server, add the following line to your `.htaccess` file in the root directory:

```apache
ErrorDocument 404 /404.html
```

**Complete .htaccess example:**

```apache
# Custom Error Pages
ErrorDocument 404 /404.html

# Optional: Other error pages
# ErrorDocument 403 /403.html
# ErrorDocument 500 /500.html
```

**Location:** Place this in the `.htaccess` file in your website's root directory (same location as index.html).

### Nginx

If you're using Nginx, add the following to your server block configuration:

```nginx
server {
    listen 80;
    server_name helloforma.org www.helloforma.org;
    root /var/www/helloforma;

    # Custom 404 error page
    error_page 404 /404.html;
    location = /404.html {
        internal;
    }

    # Other configuration...
}
```

**Location:** This goes in your Nginx site configuration file, typically located at:

- `/etc/nginx/sites-available/helloforma.org`
- `/etc/nginx/conf.d/helloforma.org.conf`

**After making changes:**

```bash
# Test configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

### Node.js / Express

If you're using Node.js with Express, add this middleware at the end of your route definitions:

```javascript
const express = require("express");
const path = require("path");
const app = express();

// Your other routes here...

// 404 handler - must be last
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

**Important:** This middleware must be placed AFTER all your other route definitions.

### Static Site Hosting Services

#### Netlify

Create or update `netlify.toml` in your root directory:

```toml
[[redirects]]
  from = "/*"
  to = "/404.html"
  status = 404
```

#### Vercel

Create or update `vercel.json` in your root directory:

```json
{
  "routes": [
    {
      "handle": "filesystem"
    },
    {
      "src": "/(.*)",
      "status": 404,
      "dest": "/404.html"
    }
  ]
}
```

#### GitHub Pages

GitHub Pages automatically serves `404.html` from the root directory. No configuration needed!

#### Cloudflare Pages

Cloudflare Pages automatically serves `404.html` from the root directory. No configuration needed!

## Verification

After configuring your server, verify that the 404 page is working correctly:

### 1. Visual Test

Visit a non-existent page on your website:

```
https://helloforma.org/this-page-does-not-exist
```

You should see your custom 404 page.

### 2. HTTP Status Code Test

Use curl to verify the correct HTTP status code is returned:

```bash
curl -I https://helloforma.org/non-existent-page
```

You should see:

```
HTTP/1.1 404 Not Found
```

### 3. Browser Developer Tools Test

1. Open your browser's Developer Tools (F12)
2. Go to the Network tab
3. Visit a non-existent page
4. Check that the response shows "404" status code

### 4. Online Tools

Use online HTTP status checkers:

- https://httpstatus.io/
- https://www.redirect-checker.org/

Enter a non-existent URL from your site and verify it returns 404.

## Troubleshooting

### Issue: 404 page shows but returns 200 status code

**Problem:** The server is serving the 404.html file but returning HTTP 200 (OK) instead of 404.

**Solution:**

- For Apache: Ensure the ErrorDocument directive is in the correct location
- For Nginx: Make sure you're using `error_page` directive, not a redirect
- For Node.js: Verify you're using `res.status(404)` before sending the file

### Issue: 404 page not displaying

**Problem:** The default server error page shows instead of your custom page.

**Solution:**

- Verify 404.html is in the correct location (root directory)
- Check file permissions (should be readable by web server)
- Restart your web server after configuration changes
- Check server error logs for clues

### Issue: Styles not loading on 404 page

**Problem:** The 404 page displays but without styling.

**Solution:**

- Ensure all asset paths are absolute (starting with /)
- Check that CDN resources are loading (Tailwind, Feather Icons)
- Verify your Content Security Policy (CSP) allows CDN resources

## Testing Checklist

- [ ] 404 page displays when visiting non-existent URL
- [ ] HTTP status code 404 is returned (verified with curl or browser tools)
- [ ] Page styling loads correctly
- [ ] Navigation links work properly
- [ ] Mobile menu functions correctly
- [ ] Icons display properly (Feather Icons loaded)
- [ ] Page is responsive on mobile devices
- [ ] All links on the 404 page work correctly

## Additional Notes

### SEO Considerations

The 404.html page includes:

- `<meta name="robots" content="noindex, follow">` - Prevents indexing
- `<link rel="canonical" href="https://helloforma.org/">` - Points to homepage

These tags help search engines understand that this is an error page and should not be indexed.

### Performance

The 404 page uses CDN resources for:

- Tailwind CSS
- Google Fonts (Inter)
- Feather Icons

These are cached by browsers and load quickly. No build process is required.

### Maintenance

When updating the site structure:

- Update navigation links in 404.html if main navigation changes
- Keep footer information synchronized with other pages
- Test 404 page after major site updates

## Support

If you encounter issues configuring the 404 page:

1. Check your web server's error logs
2. Verify file permissions
3. Test with curl to see actual HTTP responses
4. Consult your hosting provider's documentation

For HelloForma-specific questions:

- Email: contact@helloforma.org
- Phone: 01 77 62 77 16
