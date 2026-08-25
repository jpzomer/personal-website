# Personal Website

Static personal site for `zomer.dev.br`.

Read `SITE_DIRECTION.md` before content, design, or positioning changes.

## Structure

- `index.html` - page structure.
- `styles.css` - visual design and responsive layout.
- `app.js` - browser interactions.
- `site-data.js` - editable content/data.
- `assets/` - local images and media.
- `Dockerfile` - copies static files into nginx.

## Local Validation

Open `index.html` directly for basic static checks. For production-like validation, use the local Compose stack:

```sh
docker compose up -d --build
docker logs --tail 100 personal-website
```

## Editing Notes

- Preserve the restrained editorial visual identity described in `SITE_DIRECTION.md`.
- Prefer evolutionary edits over a redesign.
- Do not turn the homepage into a conventional CV or technology-logo wall.
- Keep content changes in `site-data.js` when possible.
- Do not change deployment exposure from this source project.
