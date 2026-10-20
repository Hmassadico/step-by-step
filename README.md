# Step by Step · Шаг за шагом

A phone-friendly language app with two courses:

- **English Grammar** (for Russian speakers) — 40 grammar topics in 5 levels, A1 → C1, explained in English *and*
  Russian. Each topic = full explanation → 3 focused grammar steps (rule card + 10 exercises on that one rule) →
  topic test. 120 steps, ~1,600 English exercises.
- **Russian from Zero** (for English/Portuguese speakers) — 26 lessons in 4 levels: alphabet & reading, first sentences, everyday Russian, real conversations.

Exercise types: multiple choice, type-the-word, build-the-sentence, match the pairs, listen & choose, translate,
spot-the-mistake, sort-into-boxes, say it out loud.

**Play tab:** Speed Run (60 s), Memory Match, Spot the Mistake, Word Scramble, Sort It, Irregular Verbs Gym
(Letter Sounds for the Russian course) — each can focus on one topic. **Tools:** all 12 tenses with timelines,
115 irregular verbs with audio, the Russian alphabet.

**Install:** an *Install* button in the app (Android/desktop Chrome) or step-by-step instructions (iPhone).
Plus: placement check, daily check (10 questions, brings back old mistakes), mistakes review, streaks, XP,
daily goal, several learner profiles on one phone, four looks (Rose, Lavender, Ocean, Forest), light/dark mode,
works offline once opened.

**Speaking practice:** each lesson includes "Say it out loud" exercises — tap the microphone, read the sentence,
and the app shows which words it understood (green) and which need another go (red). There's also a 6-sentence
speaking session on the Daily tab. Works in Chrome on Android and Safari on iPhone (needs internet).

**Cloud sync (Supabase):** sign in with email + password (or an email link); progress is synced between phones, with daily cloud backups you can restore.

**What's new banner:** a bilingual (English/Russian) card on the home screen announces each update once; edit `NEWS` and bump `NEWS_VER` in `app.js` for the next release.

No build step — plain HTML/CSS/JS. Progress is always saved on the phone, and also in the cloud once signed in.

## Put it online with Vercel (5 minutes)

**Option A — through GitHub (recommended, updates automatically):**
1. Create a new GitHub repository (e.g. `step-by-step`) and upload everything in this folder.
2. Go to <https://vercel.com/new>, sign in with GitHub, pick the repository.
3. Framework preset: **Other**. Leave build command and output directory empty. Click **Deploy**.
4. You get a link like `step-by-step.vercel.app`.

**Option B — from your computer:**
```bash
cd englishpath
npx vercel        # first time: log in, accept defaults
npx vercel --prod # publish
```

## Cloud sync & backups (Supabase)

The Supabase project **step-by-step** (organisation "language", London region) is set up:
- `progress` table: one private row per account (row-level security — nobody can see anyone else's data).
- `progress_backups` table: an automatic snapshot of the previous progress every 12 hours of use, plus manual
  "Back up now" copies; the newest 40 are kept. Restore any of them from **Me → Cloud sync → Backups**.
- Auth: Site URL `https://step-by-step-ochre.vercel.app`, redirect allow-list `https://step-by-step-ochre.vercel.app/**`.

Signing in (Me → Cloud sync):
- **Email + password** (recommended; works in the home-screen app on iPhone and Android). *Create account* sends a
  confirmation email — tap its link once, then sign in. *Forgot password?* emails a reset link.
- **Email link** — passwordless; open the email on the same phone and tap “Sign in”.

Supabase's built-in email sender is limited to a few emails per hour, which is fine for a family. To customise the
emails (e.g. add a 6-digit code) you'd add your own SMTP sender in Supabase → Authentication → Emails.
Free projects pause after a week with no activity; open the dashboard and press *Restore* if that happens.

## Install it on her phone

Open the Vercel link on the phone, then:
- **iPhone (Safari):** Share button → **Add to Home Screen**.
- **Android (Chrome):** ⋮ menu → **Add to Home screen** / **Install app**.

It then opens full-screen like a normal app, with its own icon.

## Good to know

- **Audio** uses the phone's built-in voices. For the Russian course, the phone needs a Russian voice: on iPhone
  Settings → Accessibility → Spoken Content → Voices → Russian; on Android, Google TTS includes Russian.
  In the app: Me → Voice lets you pick the nicest one.
- **Progress** is saved on the device and, when signed in, in Supabase. Without signing in you can still move it
  with Me → Back up progress → Copy code, then "Restore from code" on the new phone.
- **Speaking:** the first time, the phone asks for microphone permission — tap Allow. If you can't speak out loud
  right now, tap "Can't speak now", or turn speaking off in Me → Speaking exercises.
- **Several people on one phone:** tap the round letter at the top-left → "Add person".

## Adding or editing lessons

Lessons are plain data in `lessons/`. The format is described in `lessons/SCHEMA.md` (English course) and
`lessons/SCHEMA_RU.md` (Russian course); grammar steps in `lessons/SCHEMA_STEPS.md` (files in `lessons/steps/`). After editing, check everything with:

```bash
node tools/validate.js lessons/*.js lessons/steps/*.js data/irregular-verbs.js data/tenses.js
```
