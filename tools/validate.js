// Usage: node tools/validate.js lessons/level1.js [lessons/level2.js ...]
const fs = require("fs");
const vm = require("vm");

const files = process.argv.slice(2);
const ctx = { window: {} };
vm.createContext(ctx);
let errors = 0;
const err = (where, msg) => { errors++; console.log(`✗ ${where}: ${msg}`); };
const norm = s => String(s).toLowerCase().replace(/ё/g, "е").replace(/[’‘`]/g, "'").replace(/\s+/g, " ").trim();
const nonEmpty = (v) => typeof v === "string" && v.trim().length > 0;

for (const f of files) {
    try { vm.runInContext(fs.readFileSync(f, "utf8"), ctx, { filename: f }); }
  catch (e) { err(f, "does not parse: " + e.message); continue; }
  console.log(`${f}: loaded`);
}

const RU = (ctx.window.RU_LESSONS || []).map(L => ({ ...L, _ru: true }));
const all = (ctx.window.LESSONS_DATA || []).concat(RU);
const ids = new Set();
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
  ex.forEach((e, i) => {
    const x = `${w} ex${i + 1} (${e.type})`;
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
        if (!nonEmpty(L._ru ? e.prompt : e.ru) || !nonEmpty(e.answer)) err(x, "missing prompt/answer");
        const toks = e.answer.trim().split(/\s+/);
        if (toks.length < 3 || toks.length > 10) err(x, `${toks.length} tiles`);
        const key = a => a.trim().replace(/[.!?…]+$/, "").split(/\s+/).map(norm).sort().join("|");
        (e.alt || []).forEach(a => { if (key(a) !== key(e.answer)) err(x, `alt "${a}" uses different tiles`); });
        break;
      }
      case "translate":
        if (!nonEmpty(L._ru ? e.prompt : e.ru)) err(x, "missing prompt");
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
      default: err(x, "unknown type");
    }
  });
}
console.log(`\n${all.length} lessons, ${all.reduce((n, L) => n + (L.exercises || []).length, 0)} exercises, ${errors} errors`);
process.exit(errors ? 1 : 0);
