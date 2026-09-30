# GA4 Analytics Setup — IT Fehérvár

Consent required before GA4 loads (`CookieBanner` → `analytics-consent=granted`).

## Events

| Event | When | Notes |
|---|---|---|
| `phone_click` | any `tel:` click | no PII |
| `cta_click` | primary (red `bg-red`) / secondary (`border-navy`) CTA click | no PII |
| `form_start` | first interaction on lead form | `form_type: lead` |
| `generate_lead` | successful form POST | `problem`, `segment`, `location_region`, `landing_page` — no PII values beyond coarse enums |
| `form_error` | validation or API failure | `error_type: validation \| api` |

## Attribution (first-party)

On load, UTM / gclid / gbraid / wbraid stored in localStorage:
- `attribution_first_touch`
- `attribution_last_touch`

Appended to form payload for admin email only. Not sent to GA4 as PII.

## GA4 custom dimensions (event-scoped)

- `form_type`
- `problem`
- `segment`
- `location_region`
- `cta_location`
- `cta_type`
- `cta_label`
- `page_type`
- `error_type`
