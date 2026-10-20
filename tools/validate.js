// Usage: node tools/validate.js lessons/*.js lessons/steps/*.js data/*.js
const fs = require("fs");
const vm = require("vm");

const files = process.argv.slice(2);
const ctx = { window: {} };
vm.createContext(ctx);
let errors = 0;
const err = (where, msg) => { errors++; console.log(`✗ ${where}: ${msg}`); };
const norm = s => String(s).toLowerCase().replace(/ё/g, "е").replace(/[’‘`]/g, "'").replace(/\s+/g, " ").trim();
const nonEmpty = (v) => typeof v === "string" && v.trim().length > 0;
const bare = w => String(w).replace(/^[«"“(]+|[.,!?…:;»"”)]+$/g, "");

for (const f of files) {
  try { vm.runInContext(fs.readFileSync(f, "utf8"), ctx, { filename: f }); }
  catch (e) { err(f, "does not parse: " + e.message); continue; }
  console.log(`${f}: loaded`);
}

function checkExercise(e, x, H, ru) {
  if (!nonEmpty(e.explain) || !nonEmpty(e["explain" + H])) err(x, "missing explain/explain" + H);
  switch (e.type) {
    case "choice":
      if (!nonEmpty(e.q)) err(x, "missing q");
      if (!Array.isArray(e.options) || e.options.length < 2) err(x, "options");
      else if (!e.options.includes(e.answer)) err(x, "answer not in options");
      else if (new Set(e.options).size !== e.options.length) err(x, "duplicate options");
      break;
    case "gap":
      if (!nonEmpty(e.q) || (e.q.match(/___/g) || []).length !== 1) err(x, "q must contain ___ once");
      if (!Array.isArray(e.answer) || !e.answer.length || !e.answer.every(nonEmpty)) err(x, "answer must be non-empty list");
      break;
    case "order": {
      if (!nonEmpty(ru ? e.prompt : e.ru) || !nonEmpty(e.answer)) err(x, "missing prompt/answer");
      const toks = e.answer.trim().split(/\s+/);
      if (toks.length < 3 || toks.length > 10) err(x, `${toks.length} tiles`);
      const key = a => a.trim().replace(/[.!?…]+$/, "").split(/\s+/).map(norm).sort().join("|");
      (e.alt || []).forEach(a => { if (key(a) !== key(e.answer)) err(x, `alt "${a}" uses different tiles`); });
      break;
    }
    case "translate":
      if (!nonEmpty(ru ? e.prompt : e.ru)) err(x, "missing prompt");
      if (!Array.isArray(e.options) || !e.options.includes(e.answer)) err(x, "answer not in options");
      else if (new Set(e.options).size !== e.options.length) err(x, "duplicate options");
      break;
    case "listen":
      if (!nonEmpty(e.say)) err(x, "missing say");
      if (e.answer !== e.say) err(x, "answer must equal say");
      if (!Array.isArray(e.options) || !e.options.includes(e.answer)) err(x, "answer not in options");
      else if (new Set(e.options).size !== e.options.length) err(x, "duplicate options");
      break;
    case "match": {
      if (!Array.isArray(e.pairs) || e.pairs.length < 3 || e.pairs.length > 6) { err(x, "3-6 pairs"); break; }
      const L2 = e.pairs.map(p => norm(p[0])), R = e.pairs.map(p => norm(p[1]));
      if (new Set(L2).size !== L2.length) err(x, "duplicate left items");
      if (new Set(R).size !== R.length) err(x, "duplicate right items");
      if (!nonEmpty(e.q)) err(x, "missing q");
      break;
    }
    case "fix": {
      if (!nonEmpty(e.sentence) || !nonEmpty(e.wrong) || !nonEmpty(e.answer)) { err(x, "needs sentence, wrong, answer"); break; }
      const words = e.sentence.trim().split(/\s+/).map(bare);
      const hits = words.filter(w => w === e.wrong).length;
      if (hits !== 1) err(x, `"wrong" must appear exactly once as a whole word in the sentence (found ${hits})`);
      if (e.wrong.includes(" ")) err(x, `"wrong" must be a single word`);
      if (!Array.isArray(e.options) || e.options.length < 2 || !e.options.includes(e.answer)) err(x, "answer not in options");
      else if (new Set(e.options).size !== e.options.length) err(x, "duplicate options");
      else if (e.options.includes(e.wrong)) err(x, "options must not include the wrong word itself");
      if (!nonEmpty(e.correct)) err(x, "missing correct (the full corrected sentence)");
      break;
    }
    case "sort": {
      if (!nonEmpty(e.q)) err(x, "missing q");
      if (!Array.isArray(e.buckets) || e.buckets.length < 2 || e.buckets.length > 3) { err(x, "2-3 buckets"); break; }
      if (!Array.isArray(e.items) || e.items.length < 4 || e.items.length > 8) { err(x, "4-8 items"); break; }
      e.items.forEach((it, i) => { if (!Array.isArray(it) || !nonEmpty(it[0]) || typeof it[1] !== "number" || it[1] < 0 || it[1] >= e.buckets.length) err(x, `item ${i} must be ["text", bucketIndex]`); });
      if (new Set(e.items.map(i => norm(i[0]))).size !== e.items.length) err(x, "duplicate items");
      e.buckets.forEach((b, bi) => { if (!e.items.some(i => i[1] === bi)) err(x, `bucket "${b}" has no items`); });
      break;
    }
    default: err(x, "unknown type " + e.type);
  }
}

const RU = (ctx.window.RU_LESSONS || []).map(L => ({ ...L, _ru: true }));
const all = (ctx.window.LESSONS_DATA || []).concat(RU);
const STEPS = ctx.window.LESSON_STEPS || {};
const ids = new Set();
let stepCount = 0, stepEx = 0;
for (const L of all) {
  const w = `[${L.id}]`;
  if (ids.has(L.id)) err(w, "duplicate id"); ids.add(L.id);
  const H = L._ru ? "Pt" : "Ru";
  for (const k of ["id", "emoji", "title", "titleRu", "intro", "intro" + H]) if (!nonEmpty(L[k])) err(w, "missing " + k);
  if (![1, 2, 3, 4, 5].includes(L.level)) err(w, "bad level");
  if (typeof L.order !== "number") err(w, "missing order");
  if (!Array.isArray(L.sections) || L.sections.length < 1) err(w, "no sections");
  (L.sections || []).forEach((s, i) => {
    for (const k of ["title", "title" + H, "text", "text" + H]) if (!nonEmpty(s[k])) err(`${w} section ${i}`, "missing " + k);
    if (s.table) {
      if (!Array.isArray(s.table.head) || !Array.isArray(s.table.rows)) err(`${w} section ${i}`, "bad table");
      else s.table.rows.forEach((r, j) => { if (r.length !== s.table.head.length) err(`${w} section ${i}`, `table row ${j} width`); });
    }
    (s.examples || []).forEach((e, j) => { if (!nonEmpty(e.en) || !nonEmpty(e.ru) || (L._ru && !nonEmpty(e.tr))) err(`${w} section ${i}`, `example ${j}`); });
  });
  if (!L.tip || !nonEmpty(L.tip.en) || !nonEmpty(L.tip[L._ru ? "pt" : "ru"])) err(w, "missing tip");
  const ex = L.exercises || [];
  if (ex.length < 8) err(w, `only ${ex.length} exercises`);
  const count = t => ex.filter(e => e.type === t).length;
  const need = { choice: 3, gap: 2, order: 2, translate: 1, listen: 1, match: 1 };
  for (const [t, n] of Object.entries(need)) if (count(t) < n) err(w, `needs ${n} ${t}, has ${count(t)}`);
  ex.forEach((e, i) => checkExercise(e, `${w} ex${i + 1} (${e.type})`, H, L._ru));

  // grammar steps (English course)
  const st = STEPS[L.id];
  if (st) {
    if (!Array.isArray(st) || st.length < 2 || st.length > 4) { err(w, "steps must be an array of 2-4 steps"); continue; }
    const sids = new Set();
    let fixes = 0, sorts = 0;
    st.forEach((s, si) => {
      const sw = `${w} step ${si + 1}${s.id ? " (" + s.id + ")" : ""}`;
      if (!nonEmpty(s.id) || !/^[a-z0-9-]+$/.test(s.id)) err(sw, "id must be kebab-case");
      if (sids.has(s.id)) err(sw, "duplicate step id"); sids.add(s.id);
      for (const k of ["title", "titleRu", "rule", "ruleRu"]) if (!nonEmpty(s[k])) err(sw, "missing " + k);
      if (!Array.isArray(s.examples) || s.examples.length < 2 || s.examples.length > 4) err(sw, "2-4 examples");
      else s.examples.forEach((e, j) => { if (!nonEmpty(e.en) || !nonEmpty(e.ru)) err(sw, `example ${j}`); });
      if (s.table) {
        if (!Array.isArray(s.table.head) || !Array.isArray(s.table.rows)) err(sw, "bad table");
        else s.table.rows.forEach((r, j) => { if (r.length !== s.table.head.length) err(sw, `table row ${j} width`); });
      }
      const sx = s.exercises || [];
      if (sx.length !== 10) err(sw, `needs exactly 10 exercises, has ${sx.length}`);
      const c = t => sx.filter(e => e.type === t).length;
      if (c("choice") < 2) err(sw, "needs ≥2 choice");
      if (c("gap") < 2) err(sw, "needs ≥2 gap");
      if (c("order") < 1) err(sw, "needs ≥1 order");
      if (c("fix") < 1) err(sw, "needs ≥1 fix");
      if (c("listen") + c("translate") < 1) err(sw, "needs ≥1 listen or translate");
      fixes += c("fix"); sorts += c("sort");
      sx.forEach((e, i) => checkExercise(e, `${sw} ex${i + 1} (${e.type})`, "Ru", false));
      stepCount++; stepEx += sx.length;
    });
    if (sorts < 1) err(w, "steps need at least 1 sort exercise in total");
  }
}
for (const id of Object.keys(STEPS)) if (!ids.has(id)) err(`[steps ${id}]`, "no lesson with this id");

// reference data
const IV = ctx.window.IRREGULAR_VERBS;
if (IV) {
  const seen = new Set();
  IV.forEach((v, i) => {
    if (!Array.isArray(v) || v.length !== 4 || !v.every(nonEmpty)) err(`irregular verb ${i}`, "must be [base, past, participle, russian]");
    else { if (seen.has(v[0])) err(`irregular verb ${v[0]}`, "duplicate"); seen.add(v[0]); }
  });
  console.log(`${IV.length} irregular verbs`);
}
const TN = ctx.window.TENSES;
if (TN) {
  TN.forEach((t, i) => {
    const tw = `tense ${t.id || i}`;
    for (const k of ["id", "name", "nameRu", "group", "use", "useRu", "timeline"]) if (!nonEmpty(t[k])) err(tw, "missing " + k);
    if (!t.forms || !nonEmpty(t.forms.pos) || !nonEmpty(t.forms.neg) || !nonEmpty(t.forms.q)) err(tw, "forms.pos/neg/q");
    if (!Array.isArray(t.examples) || t.examples.length < 2) err(tw, "2+ examples");
    if (t.lesson && !ids.has(t.lesson)) err(tw, `lesson "${t.lesson}" not found`);
  });
  console.log(`${TN.length} tenses`);
}

const exTotal = all.reduce((n, L) => n + (L.exercises || []).length, 0) + stepEx;
console.log(`\n${all.length} lessons, ${stepCount} grammar steps, ${exTotal} exercises, ${errors} errors`);
process.exit(errors ? 1 : 0);
