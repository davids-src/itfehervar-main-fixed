/**
 * Canonical indexable routes only.
 * lastModified: set only when page content actually changes — never Date.now() at build.
 * changefreq and priority intentionally omitted.
 */
export const ROUTES = [
  { path: '/', lastModified: '2026-09-30' },
  { path: '/otthoni-it', lastModified: '2026-09-30' },
  { path: '/ceges-it', lastModified: '2026-09-30' },
  { path: '/wifi-halozat', lastModified: '2026-09-30' },
  { path: '/szamitogep-segitseg', lastModified: '2026-09-30' },
  { path: '/kapcsolat', lastModified: '2026-09-30' },
  { path: '/adatvedelem', lastModified: '2026-09-30' },
  { path: '/aszf', lastModified: '2026-09-30' },
] as const;
