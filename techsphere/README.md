# TechSphere — Static Blog Starter

A responsive HTML/CSS/JavaScript blog starter focused on AI, Python, developer tools and software engineering.

## Included
- Responsive homepage with category filters and client-side article search
- Six sample educational articles
- About, Contact, Privacy Policy and Disclaimer pages
- Basic SEO metadata, canonical URL placeholders, Open Graph metadata
- `BlogPosting` structured data on articles and `WebSite` structured data on homepage
- `robots.txt`, `sitemap.xml`, `ads.txt` placeholder and favicon

## Run locally
No build step is required. Open `index.html` in a browser, or run a local static server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Before publishing — required checklist
1. Buy a domain and choose static hosting (for example GitHub Pages, Netlify or Cloudflare Pages).
2. Replace every `https://YOUR-DOMAIN.com` placeholder with your real HTTPS domain.
3. Update `sitemap.xml` and `robots.txt` to use your real domain.
4. Replace the About page with truthful owner/editorial information.
5. Add a real contact email and connect the contact form to a backend/form provider. The current form is only a front-end demo.
6. Connect the newsletter form to an email service if you want subscriptions. The current form does not store addresses.
7. Review and customize the privacy policy to match the services, analytics, cookies, ad technology and data practices actually used. This template is not legal advice.
8. Check every technical article, command and code sample before publication; add original screenshots, testing notes and credible references where useful.
9. Add your Google AdSense code only after your account/site is approved. Replace the `ads.txt` placeholder with the exact declaration provided by Google. Never invent a publisher ID.
10. Set up Google Search Console, verify domain ownership, submit your sitemap and inspect indexing.
11. Test mobile layout, accessibility, page speed, broken links and HTTPS.
12. Do not click your own ads, encourage clicks, buy fake traffic or publish mass-produced low-value pages.

## SEO notes
- Each page has a unique title and meta description.
- Each article has a canonical URL placeholder and BlogPosting JSON-LD.
- Keep titles/descriptions accurate and unique when editing.
- Add meaningful internal links between related articles.
- Search visibility is not guaranteed. Focus on genuinely useful, accurate and original content.

## Editing content
Each article is a separate HTML file under `articles/`. The homepage cards are currently hard-coded in `index.html`; when adding an article, add a matching card and a sitemap entry.
