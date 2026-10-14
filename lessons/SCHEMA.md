# Lesson data schema

Each level file (`lessons/levelN.js`) appends lessons to a global array:

```js
window.LESSONS_DATA = (window.LESSONS_DATA || []).concat([
  { /* lesson */ },
  { /* lesson */ }
]);
```

## Lesson

```js
{
  id: "to-be",                       // unique kebab-case
  level: 1,                          // 1..5
  order: 1,                          // position inside the level (1, 2, 3...)
  emoji: "👋",                       // one emoji for the lesson tile
  title: "To be: am / is / are",
  titleRu: "Глагол to be: am / is / are",
  intro: "One or two friendly English sentences about what this lesson teaches and why it matters.",
  introRu: "Same in Russian.",
  sections: [                        // 2–4 sections
    {
      title: "Positive", titleRu: "Утвердительная форма",
      text: "Short, simple English explanation (1–3 sentences).",
      textRu: "Clear Russian explanation (may be a bit fuller than the English).",
      table: { head: ["Subject", "Verb"], rows: [["I", "am"], ["he / she / it", "is"]] },   // optional
      examples: [ { en: "I am tired.", ru: "Я устала." }, ... ]                          // 2–4 examples
    }
  ],
  tip: {                             // "Watch out!" — a mistake Russian speakers typically make
    en: "...",
    ru: "..."
  },
  exercises: [ /* exactly 10, see below */ ]
}
```

## Exercises (10 per lesson)

Every lesson must contain **at least**: 3 `choice`, 2 `gap`, 2 `order`, 1 `translate`, 1 `listen`, 1 `match`.
Every exercise has `explain` (English, 1 sentence) and `explainRu` (Russian, 1–2 sentences) shown after answering.

### choice — pick the right word / sentence
```js
{ type: "choice", q: "She ___ a doctor.", options: ["am", "is", "are"], answer: "is",
  explain: "...", explainRu: "..." }
```
`answer` must be exactly one of `options`. 3–4 options. `q` may contain `___` or be a full question like "Which sentence is correct?".

### gap — type the missing word(s)
```js
{ type: "gap", q: "They ___ from Moscow. (be)", answer: ["are"], explain: "...", explainRu: "..." }
```
`q` contains `___` exactly once; put the base word in brackets at the end when helpful. `answer` is a list of all
acceptable answers (lowercase fine; checking ignores case, extra spaces and curly vs straight apostrophes).
Include contracted and full forms when both are correct, e.g. `["isn't", "is not"]`.

### order — build the sentence from shuffled words
```js
{ type: "order", ru: "Она счастлива.", answer: "She is happy.", alt: ["Is she happy?"] /* optional */,
  explain: "...", explainRu: "..." }
```
The app splits `answer` on spaces into tiles and shuffles them. 3–9 words. Capital letter and final punctuation
are part of the tiles. `ru` is the Russian meaning shown as the prompt. `alt` = other equally correct orders made of the same tiles.

### translate — choose the correct English for a Russian sentence
```js
{ type: "translate", ru: "Я не голодна.", options: ["I not hungry.", "I am not hungry.", "I don't hungry."],
  answer: "I am not hungry.", explain: "...", explainRu: "..." }
```
Wrong options should be the typical mistakes a Russian speaker would make.

### listen — hear an English sentence (spoken by the app) and pick what was said
```js
{ type: "listen", say: "She is at work.", options: ["She is at work.", "She's a work.", "She was at work."],
  answer: "She is at work.", explain: "...", explainRu: "..." }
```
`answer` must equal `say` and be one of `options`. Distractors should differ in the grammar point being practised.

### match — connect pairs
```js
{ type: "match", q: "Match the subject with the verb.", qRu: "Соедини подлежащее с глаголом.",
  pairs: [["I", "am"], ["She", "is"], ["We", "are"], ["It", "is cold"]], explain: "...", explainRu: "..." }
```
4–5 pairs. Left items unique, right items unique (no two identical right sides).

## Style

- British English spelling and vocabulary (flat, mum, holiday, rubbish, queue, autumn, colour...). Everyday UK life
  examples are great: shopping at Tesco, the bus, the GP, the weather, work, cooking, family.
- Explanations: simple, warm, clear. The learner is a woman whose first language is Russian — address her as «ты»,
  use feminine forms where she is the speaker in Russian (Я устала, Я готова).
- Russian must be natural and grammatically correct. Use the Russian grammatical terms she would recognise
  (подлежащее, сказуемое, вспомогательный глагол, причастие...) but keep them gentle.
- Tables: keep cells short (phone screens).
