# Cotewell warehouse line marking

Static service-page mock-up for warehouse and commercial line marking, prepared for deployment to GitHub Pages.

## Scope

- Applies the approved industrial epoxy flooring page design system.
- Targets warehouse and commercial line marking service intent.
- Uses Cotewell's existing project imagery and brand assets.
- Includes approved metadata, application copy, FAQs and structured data.
- Keeps all site assets local so the preview does not depend on WordPress media URLs.

## Local preview

From this directory:

```sh
python3 -m http.server 4178 --bind 127.0.0.1
```

Open `http://127.0.0.1:4178/`.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy.yml` deploys the repository root as a static GitHub Pages site whenever `main` is updated. It can also be run manually from the Actions tab.

Repository: <https://github.com/Lilmonstersam/cotewell-warehouse-line-marking>

In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. The workflow requires the standard `pages: write` and `id-token: write` permissions already declared in the workflow file.

## Review-site safeguards

- The page has `noindex, nofollow` metadata.
- `robots.txt` blocks crawling.
- The enquiry form is visual only and does not submit.
- Navigation, product and CTA links point to the live Cotewell website.
- `.nojekyll` prevents GitHub Pages from applying Jekyll processing.
