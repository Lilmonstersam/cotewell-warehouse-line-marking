# Cotewell new website

Static multi-page mockup of the Cotewell site, deployed to GitHub Pages from `main`.

**Live:** https://lilmonstersam.github.io/cotewell-new-website/

The September 2026 revision follows the supplied homepage Figma export and applies its shared branding across the site. See [FEEDBACK-REVIEW.md](FEEDBACK-REVIEW.md) for the Asana feedback decisions, verification and outstanding assets.

## Local preview

No build step. Serve the repo root with any static server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Opening `index.html` from the filesystem mostly works, but `file://` blocks some
fetches, so the local server is the reliable option.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Homepage |
| `floor-coating.html` | Floor coating service |
| `line-marking.html` | Line marking service |
| `projectors.html` | Projected safety systems |
| `projector-product.html#delta-fieldlas` | Delta FieldLAS product page |
| `projector-product.html#signum-75w` | Signum 75W product page |
| `projector-product.html#signum-50w` | Signum 50W product page |
| `line-marking-tape.html` | Filterable tape and floor marking category |
| `product.html#angle-shape` | Supplied full product-page source |
| `product.html#PRODUCT-SLUG` | Current-site product views linked from the tape category |
| `pricing.html` | Pricing enquiry |
| `about.html` | About page |
| `learning.html` | Articles, case studies and videos |
| `samples.html` | Free tape sample request |
| `quote.html` | Project quote request |
| `case-studies.html`, `video-gallery.html` | Learning sub-views |
| `404.html` | Not-found page, served by GitHub Pages |
| `concrete-repair.html` | Retained on disk only, excluded from all navigation and internal links |

## Structure

```
.
├── .github/
│   ├── scripts/check_links.py   # CI link and asset checker
│   └── workflows/deploy.yml     # Build, verify and deploy to Pages
├── assets/
│   ├── docs/                    # Product brochures (PDF)
│   ├── img/                     # Design-system imagery and dark-mode logos
│   ├── media/                   # Photography, plus partner-logos/
│   └── video/                   # Web-encoded MP4s
├── app.js                       # Header, nav, catalogues, routing, carousels, footer
├── content-data.js              # Product, article and video data
└── styles.css                   # Design system
```

`app.js` and `styles.css` are shared by every page, so a change to either changes
the whole site.

## Assets

Every asset is vendored into `assets/` with a lowercase, hyphenated filename. The
site has no references outside its own root, so it is self-contained and portable.

Source video was 2.7 GB of 4K and high-bitrate masters. It is re-encoded for the
web as H.264, capped at 1920×1080, CRF 24, AAC 128 kbps, with `+faststart` for
progressive playback. To re-encode a replacement clip to match:

```bash
ffmpeg -i input.mp4 \
  -vf "scale='min(1920,iw)':'min(1080,ih)':force_original_aspect_ratio=decrease:force_divisible_by=2" \
  -c:v libx264 -preset veryfast -crf 24 -pix_fmt yuv420p \
  -c:a aac -b:a 128k -ac 2 -movflags +faststart \
  assets/video/output.mp4
```

Masters live outside the repo, in the `Cotewell/seo/videos` and `Cotewell/seo/images`
working folders.

### Size limits

GitHub rejects any single file over 100 MB and Pages caps a published site at
1 GB. The deploy workflow fails the build if either is breached, so check a new
video's encoded size before committing it.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which:

1. Fails the build if any file exceeds 100 MB or the site exceeds 1 GB.
2. Runs `check_links.py` and fails on any broken local link, missing asset or
   root-relative path (`/…` breaks under the `/cotewell-new-website/` subpath).
3. Uploads the repo root as the Pages artifact and deploys it.

`workflow_dispatch` is enabled, so the workflow can also be run by hand from the
Actions tab.

### One-time repo setup

Settings → Pages → Build and deployment → Source: **GitHub Actions**.

## Notes

- Every page carries `noindex, nofollow` and `robots.txt` disallows everything.
  Remove both before this goes live on a production domain.
- All paths are relative, so the site works from a subpath, a custom domain or
  the filesystem without changes.
- Forms and cart actions demonstrate interaction only. Nothing is submitted.
- `.nojekyll` stops Pages from running Jekyll over the output.

## Licence

Proprietary. Cotewell client work, prepared by Digilari. Not for redistribution.
