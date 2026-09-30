# Sitemap diff — IT Fehérvár URL cleanup

Generated: 2026-09-30

Rule: only real 200 / canonical / indexable pages. No `changefreq`, no `priority`.
`lastModified` only on actual content change (fixed date in `lib/routes.ts`, never `new Date()` at build).

## Removed from sitemap (doorway / obsolete SEO URLs)

| Old URL | Action |
|---|---|
| `/szamitogep-szerviz-szekesfehervar` | 301 → `/szamitogep-segitseg` |
| `/wifi-internet-segitseg-szekesfehervar` | 301 → `/wifi-halozat` |
| `/ceges-it-szekesfehervar` | 301 → `/ceges-it` |
| `/halozatepites-szekesfehervar` | 301 → `/wifi-halozat` |
| `/uj-iroda-it` | 301 → `/ceges-it` |
| `/adatkezeles` | 301 → `/adatvedelem` |

## Not created (forbidden doorway / city pages)

- `/informatikus-mor`
- `/informatikus-bicske`
- `/informatikus-gardony`
- any auto-generated settlement page

## Current sitemap (canonical)

| Path | lastModified |
|---|---|
| `/` | 2026-09-30 |
| `/otthoni-it` | 2026-09-30 |
| `/ceges-it` | 2026-09-30 |
| `/wifi-halozat` | 2026-09-30 |
| `/szamitogep-segitseg` | 2026-09-30 |
| `/kapcsolat` | 2026-09-30 |
| `/adatvedelem` | 2026-09-30 |
| `/aszf` | 2026-09-30 |

## Notes

- Canonical list lives in `lib/routes.ts` and drives `app/sitemap.ts`.
- Geography appears in running copy only; no settlement SEO lists.
