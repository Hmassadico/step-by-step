# Grammar steps — schema (English course)

Each English lesson is ONE grammar topic. Besides its explanation page and its 10-question topic test (`exercises`
in `lessons/levelN.js`), every topic has **2–4 grammar steps**. A step teaches ONE sub-point of the topic and drills
only that sub-point with 10 exercises. The learner does Step 1 → Step 2 → Step 3 → Topic test.

Example for "To be: am / is / are":
- step `positive` — I am / he is / we are (+ short forms)
- step `negative` — I'm not / isn't / aren't
- step `questions` — Am I…? Is she…? + short answers (Yes, she is. / No, they aren't.)

Example for "Past Simple":
- step `regular` — -ed endings and spelling (worked, stopped, studied)
- step `irregular` — went, saw, bought…
- step `neg-questions` — didn't + base verb, Did you…? (never "did … went")

Steps never drift into other topics: a "to be" step must not test Present Simple, a Past Simple step must not test
Present Perfect. Later steps may reuse earlier steps of the SAME topic (e.g. questions may include positive forms).

## File format

Files `lessons/steps/<anything>.js` add entries to a global object keyed by lesson id:

```js
window.LESSON_STEPS = Object.assign(window.LESSON_STEPS || {}, {
  "to-be": [
    {
      id: "positive",                                   // kebab-case, unique inside the lesson
      title: "Positive: am / is / are",
      titleRu: "Утверждение: am / is / are",
      rule: "One or two short English sentences: the exact rule for this step.",
      ruleRu: "The same rule in clear Russian (may be a little fuller).",
      table: { head: ["Subject", "be"], rows: [["I", "am"], ["he / she / it", "is"]] },  // optional, short cells
      examples: [ { en: "I am a student.", ru: "Я студентка." }, { en: "...", ru: "..." } ], // 2–4
      exercises: [ /* exactly 10 */ ]
    },
    { /* step 2 */ }, { /* step 3 */ }
  ],
  "articles": [ ... ]
});
```

## Exercises in a step (exactly 10)

Minimum per step: 2 `choice`, 2 `gap`, 1 `order`, 1 `fix`, 1 `listen` or `translate`. Across the topic's steps, at
least 1 `sort`. `match` is welcome. Every exercise has `explain` (English, 1 sentence) and `explainRu` (Russian).

All the types from `SCHEMA.md` work the same here: `choice`, `gap`, `order` (with `ru`), `translate` (with `ru`),
`listen`, `match`. Two extra puzzle types:

### fix — spot the mistake
The learner taps the wrong word in the sentence, then picks its correction.
```js
{ type: "fix", sentence: "She don't like coffee.", wrong: "don't", options: ["doesn't", "isn't", "not"],
  answer: "doesn't", correct: "She doesn't like coffee.",
  explain: "With he / she / it we use doesn't.", explainRu: "С he / she / it используем doesn't." }
```
- `wrong` is ONE word that appears exactly once in `sentence` (punctuation is ignored when matching).
- Exactly one mistake per sentence; every other word must be correct.
- `options` (3) contain `answer` and must NOT contain `wrong`. `correct` = the full fixed sentence.

### sort — put the words into the right box
```js
{ type: "sort", q: "Regular or irregular past?", qRu: "Правильный или неправильный глагол?",
  buckets: ["Regular (-ed)", "Irregular"],
  items: [["worked", 0], ["went", 1], ["played", 0], ["bought", 1], ["studied", 0], ["saw", 1]],
  explain: "...", explainRu: "..." }
```
- 2–3 buckets, 4–8 items, item = `["text", bucketIndex]`, each bucket gets at least one item, items unique.
- Each item must belong to exactly one bucket without doubt.

## Style (same as SCHEMA.md)
British English; everyday UK life (college, work, Tesco, the bus, the GP, the weather, family, cooking).
Russian natural and correct, learner addressed as «ты», feminine forms when she speaks (Я устала).
Distractors = mistakes a Russian speaker really makes. Gap answers list every correct variant (short + full forms).
Order: 3–9 tiles; the app removes final punctuation, so add `alt` for other natural orders of the same words.
Match: only one correct pairing possible. Explanations short, warm, and specific to the answer.
Difficulty grows inside a step: first exercises easy and obvious, last ones a little harder.
