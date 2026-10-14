# Russian course — lesson schema (learner: English/Portuguese speaker learning Russian)

Files `lessons/ru-levelN.js` append to a separate global array:

```js
window.RU_LESSONS = (window.RU_LESSONS || []).concat([ { /* lesson */ } ]);
```

The learner is a man who speaks Portuguese natively and also English, Spanish, French and Italian. He knows no Russian
and no Cyrillic. Explanations are in simple English (`...`) with a Portuguese help line (`...Pt`, Brazilian or European
neutral, natural and correct). Comparisons with Portuguese/Spanish/English sounds are welcome ("Р is rolled like the
Spanish/Portuguese r in 'caro'"). His motivation: speaking with his Russian partner and her family, so warm, real-life
examples (home, food, family, compliments, plans) are perfect.

## Lesson

```js
{
  id: "ru-alphabet-1",               // unique, prefix "ru-"
  level: 1, order: 1,
  emoji: "🔤",
  title: "Easy letters: А К М О Т",   // English
  titleRu: "Лёгкие буквы",            // short Russian title (shown small)
  intro: "English, 1–2 friendly sentences.", introPt: "Portuguese.",
  sections: [                         // 2–4
    {
      title: "...", titlePt: "...",
      text: "English explanation (1–3 sentences).", textPt: "Portuguese.",
      table: { head: ["Letter", "Sound", "Like in"], rows: [["А а", "a", "Portuguese 'casa'"]] },  // optional, short cells
      examples: [ { ru: "мама", tr: "MA-ma", en: "mum" } ]   // 2–5; tr = simple Latin transliteration with STRESSED syllable in CAPITALS
    }
  ],
  tip: { en: "A typical trap for an English/Portuguese speaker.", pt: "Portuguese." },
  exercises: [ /* exactly 10 */ ]
}
```

Russian text: always correct, natural, with **ё** written where it belongs. Mark stress only via `tr` capitals.
In alphabet lessons use only letters already taught where reasonably possible.

## Exercises — exactly 10 per lesson

At least: 3 `choice`, 2 `gap`, 2 `order`, 1 `translate`, 1 `listen`, 1 `match`. Every exercise has `explain` (English, 1 sentence)
and `explainPt` (Portuguese).

### choice
```js
{ type: "choice", q: "How do you read «кот»?", options: ["kot", "rot", "kom"], answer: "kot", explain: "...", explainPt: "..." }
```
`q` can be English with Russian inside «», or a Russian sentence with `___`. `answer` ∈ `options`, 3–4 options.

### gap — the learner types in Cyrillic with an on-screen Russian keyboard
```js
{ type: "gap", q: "Я ___ (работать) дома. — I work at home.", answer: ["работаю"], explain: "...", explainPt: "..." }
```
`q` contains `___` exactly once. Keep typed answers SHORT (1 word, ideally 2–8 letters). Accept е/ё variants by listing both
(the checker also treats е and ё as equal). In alphabet lessons a gap can be a single letter: "Fill the missing letter: м_ма → ___".

### order — build a Russian sentence from tiles
```js
{ type: "order", prompt: "This is my house.", answer: "Это мой дом.", explain: "...", explainPt: "..." }
```
`prompt` = English meaning. `answer` split on spaces → 3–8 tiles, first word capitalised, final punctuation attached.
Optional `alt: [...]` for other natural orders of the SAME tiles (Russian word order is flexible — add alts generously
when another order is natural, but tiles must be identical including capitals and punctuation).

### translate — pick the correct Russian for an English sentence
```js
{ type: "translate", prompt: "I love you.", options: ["Я люблю тебя.", "Я любить ты.", "Я люблю ты."], answer: "Я люблю тебя.", explain: "...", explainPt: "..." }
```
Wrong options = typical beginner mistakes.

### listen — the app speaks Russian (ru-RU voice); pick what was said
```js
{ type: "listen", say: "Привет!", options: ["Привет!", "Пока!", "Спасибо!"], answer: "Привет!", explain: "...", explainPt: "..." }
```
`answer` must equal `say`. For alphabet lessons, single words are perfect (дом / том / ком).

### match
```js
{ type: "match", q: "Match the word to its meaning.", qPt: "Liga a palavra ao significado.",
  pairs: [["мама", "mum"], ["кот", "cat"], ["дом", "house"], ["вода", "water"]], explain: "...", explainPt: "..." }
```
4–5 pairs, unique left items, unique right items.
