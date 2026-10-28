# Akango / AkanGo — Product Brief for the Landing Page

Last updated: 2026-10-28
Source: reverse-engineered from the `fyp-akango` GitHub organisation (all repos private).
Repos inspected:
- `fyp-akango/akango_flutter` — Flutter app (last update 2025-08-11)
- `fyp-akango/akango-studio` — Sanity CMS studio and curriculum content (last update 2025-08-10)
- `fyp-akango/akango-backend` — Django project (last update 2025-05-06)

Working clones used for this analysis: `/tmp/opencode/akango/` (temporary, not part of the project).

---

## TL;DR

**Akango (branded `AkanGo` in the app) is a Duolingo-style mobile app for learning Twi, a dialect of Akan spoken in Ghana.** It currently ships a real 6-unit, 41-lesson, 132-exercise Twi curriculum, plus a library of Twi proverbs and idioms, translation and text-to-speech powered by GhanaNLP, Firebase authentication, and score/leaderboard progress tracking.

The strongest honest one-liner for a landing page:

> **Akango — learn Twi in bite-sized, gamified lessons, with the proverbs and idioms that make the language feel alive.**

### Decisions locked (2026-10-28)

| Decision | Choice |
|---|---|
| Brand spelling | **Akango** (capital A, lowercase rest) |
| Page purpose | **Product landing page**, in the spirit of Duolingo's marketing site — not an FYP showcase |
| Primary CTA | **Join the waitlist** (there is no public download yet) |
| Visual direction | Keep the app's dark-purple + gold palette; lead with a phone mockup of the learning path |
| Build location | `akango-landing` repo (Next.js + Tailwind) |

The app is **not yet publicly downloadable**, has no store listing, and several in-app features are mocked (streaks, leagues, subscriptions, speech recognition). The page therefore sells the real product and collects early-access emails; it does not say "Download now".

Do not build it as a "download now" page until an APK/TestFlight/web build exists.

---

## 1. What Akango is

| Question | Answer |
|---|---|
| Category | Gamified language-learning app (Duolingo-style) |
| Language taught | Twi / Akan (lessons are Twi only) |
| Audience | Beginners, Ghanaian diaspora, heritage learners, travellers/expats, students |
| Platform | Flutter app: Android, iOS, web (web support is present but not published) |
| Core loop | Pick a unit → complete lessons made of exercises → earn points → unlock next lesson → open a vocabulary "treasure" |
| Cultural angle | Twi proverbs, idioms, and folktales alongside vocabulary |
| AI angle | English ↔ Twi translation and text-to-speech via GhanaNLP |
| Status | Working prototype / FYP build; no public release, no store listing, no live payments |

### Naming: pick one before designing anything

The code uses **four different names/taglines**:

| Where | Text | File |
|---|---|---|
| App constant | `AkanGo` | `akango_flutter/lib/core/constants/app_constants.dart:3` |
| Welcome screen | `AkanGo` + "Learn Akan with ease" | `.../welcome_screen.dart:55,63` |
| Splash screen | "AkanGo Learning" + "Learn Akan the fun way" | `.../splash_screen.dart:80,88` |
| About sheet | "Akango" + "Your African Language Learning Companion" | `.../about_sheet.dart:76` |
| Subscription sheet | "Akango Pro" | `.../subscription_sheet.dart:120` |
| GitHub org | Display name `AkanGo`, handle `fyp-akango` | org settings |
| Your own wording | "Akango" | this conversation |

**Practical consequence:** a visitor who sees "Akango" in an Instagram post, "AkanGo" in the app store, and "Akango Pro" in the pricing sheet will assume three different products. Pick one spelling and use it everywhere, including the domain, social handles, app title, and legal name.

**Recommendation:** use **Akango** as the public brand (matches how you say it and the `fyp-akango` org), and keep "AkanGo" only as an internal codename if you like the pun. Tagline: **"Learn Akan. Go further."** — this preserves the Akan + go idea without the awkward camelCase.

Before committing, check handle availability: `akango.com` currently resolves to a domain-marketplace parking page, and "Akango" is also a surname and the name of unrelated businesses. "AkanGo" is more unique but harder to read.

---

## 2. What actually works (honest feature inventory)

Legend: **Live** = implemented and usable; **Partial** = works but limited; **Mock** = UI only; **Missing** = not built.

### Learning experience

| Feature | State | Evidence / notes |
|---|---|---|
| 6-unit Twi curriculum | Live | Sanity `production` dataset has 6 units |
| 41 linked lessons (47 lesson docs exist) | Live | 6 + 7 + 7 + 7 + 7 + 7 lessons across units |
| 132 exercises | Live | Sanity count |
| 7 exercise types | Live, uneven | 40 translation, 37 matching, 35 multiple choice, 11 audio selection, 7 image selection, 1 speaking, 1 listening |
| Sequential lesson unlocking | Live | First lesson open; next unlocks after previous completion (`unit_section.dart`) |
| Lesson completion + points | Live | Score stored in Firestore `user_scores` |
| Vocabulary "treasure" per unit | Live | 6 treasures, 24 vocabulary entries |
| Progress persistence | Live | Firestore `user_progress` |
| Offline lessons | Missing | No local content cache for lessons |
| Pronunciation feedback / speech recognition | Mock/disabled | `speaking_exercise.dart` simulates recording; STT screen is commented out |
| AI conversation tutor | Missing in UI | Old `chat_service`/backend integration code exists, but the AI tab only exposes translation and TTS |

### Gamification

| Feature | State | Evidence / notes |
|---|---|---|
| Score / XP | Live | `user_scores` collection |
| Global leaderboard | Live | Reads all `user_scores` docs (`leaderboard_widget.dart`) |
| Streak | Mock | Hardcoded `"7 days"` (`stats_grid.dart:82-83`) |
| Level | Mock | Hardcoded `"3"` (`stats_grid.dart:88-89`) |
| Lessons completed count | Mock | Hardcoded `"12"` (`stats_grid.dart:94-95`) |
| Leagues (Diamond → Bronze) | Mock | Hardcoded list in `leagues_widget.dart:39` |
| Daily challenges / hearts / lives | Missing | Assets exist (`vidas.svg`, `racha.svg`) but no logic |
| Achievements | Missing | Mentioned in About sheet only |

### AI / language tools

| Feature | State | Evidence / notes |
|---|---|---|
| English ↔ Twi translation | Live (external API) | GhanaNLP `translation-api.ghananlp.org/v1/translate` |
| Translation to/from 10+ Ghanaian/African languages | Live via API | Twi, Ga, Ewe, Fante, Dagbani, Gurene, Yoruba, Kikuyu, Luo, Kimeru |
| "Auto-detect" source language | Fake | Defaults to English (`chat_service.dart`) |
| Text-to-speech | Live (external API) | Twi, Ewe, Kikuyu voices; `tts_service.dart` |
| Speech-to-text | Disabled | Screen exists, navigation commented out in `ai_screen.dart` |
| AI tutor personas / chat | Missing | Backend it pointed at is dead; UI hidden |

### Account and monetisation

| Feature | State | Evidence / notes |
|---|---|---|
| Email/password sign-up and login | Live | Firebase Auth |
| Google sign-in | Live | Firebase Auth |
| Anonymous/guest sign-in | Partial | Auto-created in `main_navigation.dart:47`, but the welcome flow asks users to log in or register first |
| Subscription plans | Mock | `$4.99/month`, `$39.99/year` UI only; no payment provider (`subscription_sheet.dart:17-33`) |
| Pro feature gating | Missing | Everything is available; "Go Pro" opens a sheet that does nothing |
| Push notifications | Missing | No notification integration found |

---

## 3. The live curriculum (use this on the landing page)

Pulled from the production Sanity dataset (`projectId 96cstzg4`, dataset `production`).

| Unit | Lessons | Example lesson topics |
|---|---|---|
| Unit 1: Basic Greetings | 6 | Hello and thank you; asking "How are you?"; cultural greetings; parting phrases |
| Unit 2: Introducing Yourself & Others | 7 | Stating your name; where you are from; nationality; introducing others; age; family; traits |
| Unit 3: Numbers, Time and Days | 7 | Counting 1–10; hours; days of the week; routines; counting beyond 10; months and dates |
| Unit 4: Everyday Communication | 7 | Asking for help/directions; shopping and prices; needs and feelings; offers; apologies |
| Unit 5: Food & Eating | 7 | Common foods; drinks; asking for food; likes/dislikes; meals; cooking; buying/selling food |
| Unit 6: Places and Directions | 7 | Common places; asking for directions; direction vocabulary; getting around town; locations |

Totals: **6 units · 41 linked lessons · 132 exercises · 24 vocabulary words · 6 treasures · 13 proverbs · 8 idioms · 1 folktale**.

Exercise mix:
- Translation: 40
- Matching: 37
- Multiple choice: 35
- Audio selection: 11
- Image selection: 7
- Speaking: 1
- Listening: 1

**Landing-page-safe proof points:** "6 units", "40+ lessons", "130+ exercises", "proverbs and idioms", "Twi–English translation", "text-to-speech".

**Avoid:** "hundreds of lessons", "all Ghanaian languages", "AI tutor", "speech feedback", "offline mode".

### Content problems to fix before publishing the app widely

1. **Schema text calls the language "Akango".** In `akango-studio/schemaTypes/folktale.ts:38-44`, `idiom.ts:39`, and `proverb.ts:39`, fields say "Original Title (Akango)", "Story (Akango)", "original Akango language". The language is **Akan/Twi**, not Akango. This is a factual error that will appear in the CMS UI and potentially in marketing copy.
2. **Placeholder seed content is wrong.** `initial-content/lessons.json` is titled "Introduction to Tei", `vocabulary.json` uses a `teiWord` field, and `proverbs.json` contains a **Lingala** sentence (`Mokili mobimba ezali na nzoto moko`) labelled as an Akango proverb. This seed content is not the production content, but it should be deleted or corrected so it never gets imported by mistake.
3. **Grammar rules are empty.** The schema exists (`grammarRule.ts`) but production has zero grammar-rule documents.
4. **Only one folktale exists**, and the Folktales category is commented out in the Explore UI (`categories_section.dart`). Don't advertise a folktale library yet.
5. **Lesson count mismatch:** 47 lesson documents exist, but 41 are linked into units. Find and either link or delete the 6 orphans.

---

## 4. How the app actually works (architecture)

```
Flutter app
  |
  |-- Firebase Auth .............. email/password + Google login
  |-- Cloud Firestore ............ user_progress (completed lessons)
  |                                user_scores  (points, leaderboard)
  |-- Sanity Content Lake ........ units, lessons, exercises, vocabulary,
  |                                treasures, proverbs, idioms, folktales
  |-- GhanaNLP APIs .............. translation + text-to-speech
  |
  X-- Django/Heroku backend ...... NOT IN USE (empty scaffold; dead URL)
```

Key facts:
- **Sanity is the real content backend.** Queries are made directly from the Flutter client with no auth (`sanity_service.dart`). The project/dataset is public-readable. This is fine for a prototype.
- **Firebase is the real user backend.** Auth plus two Firestore collections store progress and score. There is no server-side validation of scores, so a determined user could write arbitrary scores; that is acceptable for a prototype but not for a competitive leaderboard.
- **`akango-backend` is not the backend of the running app.** It is a fresh `django-admin startproject` scaffold: `core/models.py` is empty, `core/views.py` is empty, and `urlpatterns` only exposes `/admin/`. The README describes an API that does not exist in the repo.
- **The production API URL in the app is dead.** `api_config.dart` points at `https://akango-ai-eda0c8326166.herokuapp.com/api/v1`; that host now returns Heroku's "No such app" page. Only the AI/chat code paths use it, and those screens are hidden. Translation/TTS do not depend on it.
- **The GhanaNLP subscription key is committed in the client** (`api_config.dart:65`). Before the repo is made public or a web build is shipped, rotate the key and move calls behind a small proxy/serverless function.

### Data flow example (concrete)

1. App launches → `SanityService.getUnits()` fetches Unit 1 with its lessons, exercises, and treasure.
2. Learner taps the first star in Unit 1 → `ExercisesScreen` opens Lesson 1.1.
3. Each exercise checks the answer locally (text normalisation handles `3` → `ɛ` and `)` → `ɔ`).
4. On the last exercise, the app writes the lesson ID to Firestore `user_progress/{uid}.completed_lessons` and adds points to `user_scores/{uid}.score`.
5. Returning home re-reads progress, unlocks Lesson 1.2, and the leaderboard reads the updated score.

---

## 5. Brand and visual direction (already in the app)

### Colours

| Role | Value |
|---|---|
| Primary purple | `#7C3AED` |
| Background | `#0F0F23` |
| Card / surface | `#1E1B4B` |
| Deep accent | `#5B21B6` |
| In-app highlight | `#8B6FF7` |
| Success green | `#4DD18B` |
| Gold / Pro | `#FFD700` → `#FFA500` |
| Text secondary | `#B0B0B0` |

The app is **dark purple with gold reward accents** — a "night-mode Duolingo" feel. The landing page should continue that, not invent a light pastel palette.

### Type

- **Poppins** for UI and headings (Google Fonts).
- **Noto Sans** for Twi glyphs (ɛ, ɔ) — bundled at `assets/fonts/NotoSans-*.ttf`.
- Landing recommendation: one display font plus Noto Sans for Twi words. Do not set Twi in a font that lacks ɛ/ɔ.

### Visual motifs and assets

Existing in-app assets (`akango_flutter/assets/images/`):
- Treasure chest: `cofre.svg`, `cofre-ruta.svg`
- Star lesson node: `estrella.svg`
- Gem, shield, heart, flame/streak: `diamante.svg`, `escudo.svg`, `vidas.svg`, `racha.svg`
- Lesson/practice/home icons: `leccion.svg`, `practica.svg`, `inicio.svg`
- Cultural objects: `wisdom-pot.png`, `stool.png`
- Google logo: `google_logo.svg`
- Leftover/unused: `italian.svg` (template residue)

**Missing for a landing page:** a real logo/wordmark, an app icon, screenshots, a demo video, and an OG/social image. The app currently uses a generic Material `Icons.language` as its "logo" on splash, welcome, and About screens.

### Voice

Current in-app copy is warm and simple: "Akwaaba", "Learn Akan with ease", "Keep up the great work!", "Your African Language Learning Companion". The landing page should sound like that: friendly, Ghanaian, not corporate.

---

## 6. Who it is for (and why they would care)

Use concrete personas on the landing page rather than "language enthusiasts".

1. **The diaspora learner** — a Ghanaian raised in London/New York/Toronto who understands some Twi but freezes when relatives speak. Wants to speak with family, not just read vocabulary.
2. **The returning visitor** — travelling to Ghana and wants greetings, prices, directions, and food phrases that are actually useful.
3. **The beginner student** — has no Twi background and wants a structured, low-pressure path with quick wins.
4. **The heritage parent** — wants their children to connect with Akan culture and proverbs, not only phrases.

### Value propositions, ranked by what the product can actually support

1. **A structured path, not a phrasebook.** 6 units and 41 lessons from greetings to directions.
2. **Learning by doing.** 130+ exercises across multiple formats, with instant feedback.
3. **Culture included.** Real Twi proverbs and idioms with meanings and context.
4. **Quick translation when you need it.** English ↔ Twi and other Ghanaian languages.
5. **Hear the language.** Text-to-speech pronunciation in Twi.
6. **A reason to come back.** Points and a leaderboard (but not yet streaks/leagues).

---

## 7. Recommended landing page plan

### Decision first

| Option | Best when | Hero CTA | Proof section |
|---|---|---|---|
| **A. Product / waitlist** (recommended) | You plan to release the app to users | "Join the waitlist" / "Get early access" | Curriculum counts, screenshots, demo video |
| **B. FYP showcase** | The page is for your portfolio, defence, or supervisor | "Watch the demo" / "View the project" | Problem, approach, architecture, what you learned |
| **C. Hybrid** | You want both | "Get early access" + "See how it was built" | Product story first, "Built with" section lower |

If the page is for an FYP defence, the most important content is **the problem, the build, and the demo** — not pricing. If it is for real users, the most important content is **the first lesson and the waitlist**. Pick one primary goal; do not try to do both equally.

### Suggested structure (Option A)

1. **Nav** — wordmark; links: Why Akango, Curriculum, Culture, FAQ; button: Join waitlist.
2. **Hero**
   - Headline: **"Learn Twi. One small lesson at a time."**
   - Sub: "Akango turns Akan into a daily habit with bite-sized lessons, listening and translation practice, and the proverbs that carry the culture."
   - CTAs: **Join the waitlist** (primary), **See the curriculum** (secondary).
   - Visual: phone mockup showing the Unit 1 lesson path and a treasure chest.
   - Trust line: "Built in Ghana · 6 units · 40+ lessons · 130+ exercises".
3. **The problem** — "Twi is spoken by millions, but most apps treat it as a dictionary." Concrete example: a learner can look up "maakye" but cannot hold a greeting exchange. Akango teaches the exchange.
4. **The learning loop** — four cards: Learn a unit → Practise with exercises → Unlock the treasure → Track your score.
5. **Curriculum** — the six units with a few real lesson titles. This is the most credible section because the content exists.
6. **Culture** — show one real proverb with translation and meaning. Example: *"Prayɛ, sɛ woyi baako a na ebu; wokabomu a emmu"* — "When you pull one out, it breaks; when you pull together, it does not." Meaning: unity. Then: 13 proverbs and 8 idioms in the app.
7. **Language tools** — "Translate between English and Twi (plus Ga, Ewe, Fante, Dagbani, Gurene, Yoruba, Kikuyu, Luo, and Kimeru), and hear Twi spoken aloud." Do not call it an AI tutor.
8. **Progress** — score and leaderboard; "see yourself move up". Do not show fake streaks or leagues.
9. **Who it is for** — the four personas above.
10. **FAQ** — see the truthful answers below.
11. **Final CTA** — waitlist form, plus a line about the FYP if relevant.
12. **Footer** — contact, GitHub/org link (only if you make it public), privacy note, "Built with Flutter, Firebase, Sanity, and GhanaNLP".

### Suggested structure (Option B, FYP showcase)

1. Hero: project name, one-line description, "Watch demo" + "View code".
2. The problem and motivation.
3. The product: screenshots and the learning loop.
4. The build: Flutter, Firebase Auth/Firestore, Sanity CMS, GhanaNLP; architecture diagram.
5. Content design: units → lessons → exercises → treasures; 7 exercise types.
6. Challenges and decisions: e.g. Twi glyph input normalisation (`3` → `ɛ`), CMS-driven content, offline/auth trade-offs.
7. What is next.
8. Team, supervisor, university, contact.
9. Demo video / APK download (if available).

### Hero copy options

- **Direct:** "Learn Twi in bite-sized lessons — with the proverbs and idioms that make Akan feel alive."
- **Outcome:** "Hold your first Twi conversation in six units, not six months."
- **Cultural:** "Learn the language your family speaks. One lesson, one proverb, one treasure at a time."

Do not use "Speak fluent Twi in 30 days" — the app does not have the content or the assessment to support that claim.

### FAQ answers that are true today

- **What language does Akango teach?** Twi (Akan), starting from greetings and everyday conversation.
- **Is it free?** The prototype is free to use; a Pro plan is designed but not live. If the landing page has a waitlist, say "early access is free" only if that will be true.
- **Can I use it offline?** Not yet. Lessons are loaded from Sanity.
- **Does it give pronunciation feedback?** Not yet. It has listening exercises, audio playback, and text-to-speech, but not speech scoring.
- **Is there an AI tutor?** The app includes AI-powered translation and text-to-speech. A conversational tutor is not part of the current build.
- **Where can I download it?** Not published yet — join the waitlist. (Only say this if you actually collect emails.)
- **Does it teach other languages?** Lessons are Twi only. The translation tool supports additional Ghanaian/African languages.

---

## 8. Claims checklist

### Safe to claim now

- Gamified Twi course with 6 units, 41 lessons, and 132 exercises.
- Seven exercise formats (be specific: translation, matching, multiple choice, audio selection, image selection, speaking, listening — noting speaking/listening are limited).
- Vocabulary treasures for each unit (24 words total).
- 13 Twi proverbs and 8 idioms with meanings and cultural context.
- English ↔ Twi translation and Twi text-to-speech, powered by GhanaNLP.
- Firebase login (email/password and Google).
- Points and a global leaderboard.
- Built with Flutter, Firebase, Sanity, and GhanaNLP.
- "Built in Ghana" (if you are comfortable with that framing; the org and developer are Ghana-based, but confirm the wording).

### Not safe to claim yet

- AI tutor / conversation practice / role-play characters.
- Speech recognition or pronunciation scoring.
- Offline mode.
- Streaks, leagues, daily challenges, hearts/lives.
- Family sharing, unlimited translations as a paid benefit, priority support.
- Available on the App Store or Google Play.
- Teaches 10+ languages as courses (only translation supports them).
- Real-time payments or a working Pro subscription.
- "Backed by Django" or "full backend API" — the Django repo is an empty scaffold.
- "Auto language detection" — the app defaults to English.

### Grey area — verify before using

- **"Free"** — define what is free. The prototype is free; the Pro plan is not implemented.
- **"AI-powered"** — accurate for translation/TTS (GhanaNLP models), misleading if it implies a chatbot.
- **"Duolingo-style"** — fine as a category reference, but do not imply affiliation.
- **"Conversational Twi"** — the curriculum includes dialogues and everyday communication, but there is no live conversation partner. Say "everyday communication" instead.
- **"For diaspora"** — a positioning choice; the app is not localised for diaspora languages or billing.

---

## 9. Risks and open questions

1. **Brand name must be settled first.** Akango vs AkanGo changes the logo, domain, copy, and SEO.
2. **Purpose must be settled first.** Waitlist vs showcase changes the whole page.
3. **No public build.** There is no APK, TestFlight link, web URL, or store listing. The page cannot honestly say "Download".
4. **Content QA.** Fix the "Akango language" schema labels and remove the Lingala/"Tei" placeholders before showing the CMS or exporting content.
5. **Feature expectations.** Avoid showcasing streaks/leagues/speech feedback in screenshots if they are hardcoded or simulated. A screenshot of "7-day streak" would be a false claim.
6. **Security.** Rotate the GhanaNLP key and proxy it before any public web build. Do not put the key in the landing page or a public repo.
7. **Backend confusion.** Decide whether the product will keep using Sanity + Firebase or build a real API. Update or archive the Django repo so future contributors are not misled.
8. **Analytics and SEO.** No analytics, OG image, sitemap, or privacy policy yet. A waitlist page needs at least a privacy note and a data destination (e.g. Firebase, Tally, Formspree, Supabase).
9. **Academic credit.** If this is an FYP, decide whether the page credits the university, supervisor, and team. Check your department's rules about public project pages.

---

## 10. Recommended next steps

1. **Decide:** brand spelling, page purpose (waitlist vs showcase vs hybrid), and whether a demo build exists.
2. **Collect assets:** logo/wordmark, 6–8 clean screenshots (home path, exercise, treasure, proverbs, translation, profile), a 20–30 second screen recording, team/university info.
3. **Prepare the demo:** build the Flutter web or Android app and verify that Sanity content loads and that the GhanaNLP translation key still works. If the key is dead, replace it before recording.
4. **Scaffold the landing page:** Next.js 15 + Tailwind in this `akango-landing` repo (same stack as the admin frontend). Keep it static-first, one page, fast.
5. **Write the copy from the safe-claims list.** Use real curriculum counts, not invented numbers.
6. **Add the waitlist:** a simple form (Tally/Formspree/Firebase) and a thank-you state. Store emails somewhere you will actually check.
7. **Add metadata:** title, description, OG image, favicon, and a privacy note.
8. **Deploy:** Vercel is the fastest option; AWS Amplify matches the existing admin project if you prefer one cloud.
9. **After launch:** add analytics, then iterate on the hero CTA based on signups.

### What I would build first

A single-page Next.js site with:
- `Hero` (headline, subhead, waitlist form, phone mockup)
- `ProofBar` (6 units · 41 lessons · 132 exercises · 13 proverbs)
- `LearningLoop` (4 steps)
- `Curriculum` (6 unit cards with real lesson titles)
- `Culture` (one proverb example, then the library count)
- `LanguageTools` (translation + TTS, with supported-language chips)
- `WhoItsFor` (4 personas)
- `FAQ` (truthful answers above)
- `Footer`

That structure works for both a waitlist and a showcase page; only the hero CTA and one "Built with" section need to change.

---

## Appendix A — Where everything lives

### `akango_flutter` (app)

| Concern | File |
|---|---|
| App entry, routes | `lib/main.dart` |
| App name | `lib/core/constants/app_constants.dart:3` |
| Theme/colours | `lib/core/theme/app_theme.dart` |
| Bottom navigation (Home, Community, AI, Explore, Profile) | `lib/screens/main_navigation.dart:30` |
| Home learning path | `lib/screens/home_screen.dart`, `lib/screens/home_screen/widgets/unit_section.dart` |
| Lesson runner | `lib/screens/exercises_screen.dart` |
| Exercise types | `lib/screens/exercise/types/*.dart` |
| Translation / TTS | `lib/screens/ai/translation_screen.dart`, `lib/screens/ai/text_to_speech_screen.dart` |
| GhanaNLP calls | `lib/services/chat_service.dart`, `lib/services/tts_service.dart` |
| Sanity content queries | `lib/services/sanity_service.dart` |
| Progress | `lib/services/lesson_progress_service.dart` |
| Score | `lib/services/user_score_service.dart` |
| Auth | `lib/services/firebase_auth_service.dart` |
| Fake subscription plans | `lib/widgets/profile/subscription_sheet.dart` |
| Fake stats | `lib/widgets/profile/stats_grid.dart` |
| Fake leagues | `lib/screens/community/widgets/leagues_widget.dart` |
| API config + dead Heroku URL + committed key | `lib/config/api_config.dart` |

### `akango-studio` (Sanity)

| Concern | File |
|---|---|
| Schema registration | `schemaTypes/index.ts` |
| Curriculum schemas | `schemaTypes/unit.ts`, `lesson.ts`, `exercise.ts`, `vocabulary.ts`, `treasure.ts` |
| Culture schemas | `schemaTypes/proverb.ts`, `idiom.ts`, `folktale.ts` |
| Grammar schema (unused) | `schemaTypes/grammarRule.ts` |
| Seed content (contains placeholder errors) | `initial-content/*.json` |

### `akango-backend` (Django)

| Concern | File |
|---|---|
| Empty models | `core/models.py:3` |
| Empty views | `core/views.py` |
| Only `/admin/` route | `akango_backend/urls.py:20` |
| SQLite config | `akango_backend/settings.py:75` |

### External services

| Service | Identifier |
|---|---|
| Sanity project | `96cstzg4`, dataset `production`, API version `2024-03-20` |
| Firebase project | `akango-2626` |
| Android application ID | `com.akango.akango` |
| GhanaNLP translation | `https://translation-api.ghananlp.org/v1/translate` |
| GhanaNLP TTS | `https://translation-api.ghananlp.org/tts/v1` |

---

## Appendix B — Note about the current workspace

This brief lives in the empty `akango-landing` repo. The opencode session that produced it was started in `livestockly-admin-frontend`, whose `README.md` has a stray `# akango-landing` line at the bottom (line 52). That line is unrelated to the Livestockly admin project and can be removed. The Akango work should happen in `/home/stez/Desktop/sterl/akango-landing`.
