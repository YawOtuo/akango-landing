# Akango landing page

A single-page, Duolingo-style marketing site for **Akango**, a gamified Twi learning app built in Ghana.

Built with Next.js 16, React 19, Tailwind CSS 3, and the app's existing dark-purple/gold visual language.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Production check:

```bash
npm run build
npm run start
```

## Waitlist form

The form posts to `NEXT_PUBLIC_WAITLIST_ENDPOINT` if it is set:

```bash
cp .env.example .env.local
# NEXT_PUBLIC_SITE_URL=https://your-domain.com
# NEXT_PUBLIC_WAITLIST_ENDPOINT=https://...
```

`NEXT_PUBLIC_SITE_URL` is only used for social/OG image metadata. Set it to the deployed URL.

The endpoint receives:

```json
{ "email": "you@example.com", "source": "akango-landing" }
```

If the variable is empty, the form runs in demo mode and only shows the success state. Connect it to Tally, Formspree, Firebase, or your own API before launch.

## Content rules

The copy is based on the current app, not the roadmap:

- Twi lessons only; translation supports additional languages.
- Advertises 6 units, 41 linked lessons, 132 exercises, 13 proverbs, and 8 idioms.
- Does not claim offline mode, streaks, leagues, an AI tutor, or pronunciation scoring.
- CTA is a waitlist because there is no public APK/TestFlight/store listing yet.

See `PRODUCT_BRIEF.md` for the full product analysis and the list of claims to avoid.

## Structure

```
app/            layout, page, metadata, OG image, favicon
components/     page sections and mock UI
lib/content.ts  stats, units, features, personas, FAQs
```

## Deploy

Vercel is the simplest option. The project has no server-side dependencies; the only optional runtime config is the waitlist endpoint.
