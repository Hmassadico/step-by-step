/* Step by Step — language learning app. Vanilla JS, no build step. */
(() => {
"use strict";

/* ---------- helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = a => a[Math.floor(Math.random() * a.length)];
const today = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; };
const dayKey = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const reduced = () => window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
const norm = s => String(s ?? "").toLowerCase().replace(/ё/g, "е").replace(/[’‘`´]/g, "'").replace(/\s+/g, " ").trim().replace(/[.!?…,;:]+$/, "").trim();
const isCyr = s => /[а-яё]/i.test(s);

/* ---------- icons ---------- */
const I = {
  speak: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z" fill="currentColor"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>',
  slow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16c0-4 3.5-7 8-7s8 3 8 7z"/><path d="M20 16h2M5 16l-1 3M10 16v3M15 16v3M19 16l1 3"/><circle cx="21" cy="12" r="1.5"/></svg>',
  back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  path: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19h4v-5h4V9h4V5h4"/><circle cx="4" cy="19" r="1.5" fill="currentColor"/></svg>',
  daily: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4.5" width="18" height="16" rx="3"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4M8.5 15l2.5 2.5 4.5-5"/></svg>',
  review: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 4v7h-7"/></svg>',
  me: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/></svg>',
  mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2.5" width="6" height="12" rx="3" fill="currentColor"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3.5M8.5 21.5h7"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="7" width="19" height="11" rx="5.5"/><path d="M7.5 10.5v4M5.5 12.5h4"/><circle cx="15.5" cy="11.5" r="1" fill="currentColor"/><circle cx="17.5" cy="13.8" r="1" fill="currentColor"/></svg>',
  install: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2.5" width="12" height="19" rx="2.5"/><path d="M12 7v7M9 11.5l3 3 3-3M10 18.5h4"/></svg>',
  share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M8 7l4-4 4 4"/><path d="M6 11H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-1"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/></svg>',
  cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18h10a4 4 0 0 0 .7-7.9A6 6 0 0 0 6.2 9.4 4.3 4.3 0 0 0 7 18z"/></svg>',
  backspace: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 5H9l-6 7 6 7h12z"/><path d="m12 9 6 6M18 9l-6 6"/></svg>'
};

/* ---------- UI strings (main = English, sub = helper language) ---------- */
const S = {
  path: ["Path", "Путь", "Caminho"], daily: ["Daily", "День", "Diário"], review: ["Review", "Ошибки", "Revisão"], me: ["Me", "Я", "Eu"],
  hi: ["Hi", "Привет", "Olá"], continue: ["Continue", "Продолжить", "Continuar"], startPractice: ["Start practice", "К практике", "Praticar"],
  check: ["Check", "Проверить", "Verificar"], next: ["Continue", "Дальше", "Continuar"], learn: ["Learn", "Теория", "Aprender"],
  watchOut: ["Watch out!", "Осторожно!", "Atenção!"], correctAnswer: ["Correct answer", "Правильный ответ", "Resposta certa"],
  dailyCheck: ["Daily check", "Ежедневная проверка", "Teste diário"], todayGoal: ["Today's goal", "Цель на сегодня", "Meta de hoje"],
  mistakes: ["Your mistakes", "Твои ошибки", "Os teus erros"], level: ["Level", "Уровень", "Nível"],
  chooseWord: ["Choose the right answer", "Выбери правильный ответ", "Escolhe a resposta certa"],
  typeGap: ["Type the missing word", "Впиши пропущенное слово", "Escreve a palavra que falta"],
  buildSentence: ["Build the sentence", "Собери предложение", "Monta a frase"],
  translate: ["Choose the translation", "Выбери перевод", "Escolhe a tradução"],
  listen: ["Listen and choose", "Послушай и выбери", "Ouve e escolhe"],
  match: ["Match the pairs", "Соедини пары", "Liga os pares"],
  speak: ["Say it out loud", "Скажи вслух", "Diz em voz alta"],
  fixIt: ["Find the mistake", "Найди ошибку", "Encontra o erro"],
  sortIt: ["Sort the words", "Распредели слова", "Organiza as palavras"],
  scramble: ["Unscramble the word", "Собери слово из букв", "Ordena as letras"],
  play: ["Play", "Игры", "Jogos"],
};
const HL = { ru: 1, pt: 2 };

/* ---------- courses ---------- */
const COURSES = {
  en: {
    id: "en", name: "English Grammar", sub: "Английская грамматика", help: "ru", helpLabel: "RU", speak: "en-GB", bird: "robin",
    levels: [
      { n: 1, title: "Foundations", sub: "Основы", tag: "A1" },
      { n: 2, title: "Everyday English", sub: "Английский на каждый день", tag: "A2" },
      { n: 3, title: "Getting Confident", sub: "Уверенный уровень", tag: "B1" },
      { n: 4, title: "Advanced Steps", sub: "Продвинутый уровень", tag: "B2" },
      { n: 5, title: "Sounding Natural", sub: "Естественная речь", tag: "C1" }
    ],
    raw: () => window.LESSONS_DATA || []
  },
  ru: {
    id: "ru", name: "Russian from Zero", sub: "Русский с нуля", help: "pt", helpLabel: "PT", speak: "ru-RU", bird: "bullfinch",
    levels: [
      { n: 1, title: "Alphabet & Reading", sub: "Алфавит и чтение", tag: "АБВ" },
      { n: 2, title: "First Words & Sentences", sub: "Первые слова", tag: "A1" },
      { n: 3, title: "Everyday Russian", sub: "Русский каждый день", tag: "A1+" },
      { n: 4, title: "Real Conversations", sub: "Живой разговор", tag: "A2" }
    ],
    raw: () => window.RU_LESSONS || []
  }
};
function buildCourse(c) {
  const H = c.help === "ru" ? "Ru" : "Pt";
  const ST = c.id === "en" ? (window.LESSON_STEPS || {}) : {};
  c.lessons = c.raw().slice().sort((a, b) => a.level - b.level || a.order - b.order).map(L => ({
    id: L.id, level: L.level, order: L.order, emoji: L.emoji, title: L.title, sub: L.titleRu, intro: L.intro, introH: L["intro" + H],
    sections: L.sections.map(s => ({
      title: s.title, titleH: s["title" + H], text: s.text, textH: s["text" + H], table: s.table,
      examples: (s.examples || []).map(e => c.id === "en" ? { main: e.en, sub: e.ru } : { main: e.ru, tr: e.tr, sub: e.en })
    })),
    tip: { main: L.tip.en, sub: L.tip[c.help] },
    exercises: L.exercises.map((e, i) => ({ ...e, key: L.id + "#" + i, lesson: L.id, meaning: c.id === "en" ? e.ru : e.prompt, explainH: e["explain" + H], qH: e["q" + H] })),
    steps: (ST[L.id] || []).map((s, si) => ({
      id: s.id, n: si + 1, title: s.title, sub: s.titleRu, rule: s.rule, ruleH: s.ruleRu, table: s.table,
      examples: (s.examples || []).map(e => ({ main: e.en, sub: e.ru })),
      exercises: (s.exercises || []).map((e, i) => ({ ...e, key: `${L.id}~${s.id}#${i}`, lesson: L.id, step: s.id, meaning: e.ru, explainH: e.explainRu, qH: e.qRu }))
    }))
  }));
  c.byId = Object.fromEntries(c.lessons.map(L => [L.id, L]));
  c.exByKey = {}; c.lessons.forEach(L => { L.exercises.forEach(e => c.exByKey[e.key] = e); L.steps.forEach(st => st.exercises.forEach(e => c.exByKey[e.key] = e)); });
}
Object.values(COURSES).forEach(buildCourse);

/* ---------- storage ---------- */
const KEY = "stepbystep.v1";
let DB = { profiles: [], current: null, data: {}, theme: "system" };
try { const s = JSON.parse(localStorage.getItem(KEY) || "null"); if (s && s.profiles) DB = Object.assign(DB, s); } catch (e) {}
const save = (touch = true) => {
  if (touch) { const p = DB.profiles.find(x => x.id === DB.current); if (p) p.updatedAt = Date.now(); }
  try { localStorage.setItem(KEY, JSON.stringify(DB)); } catch (e) {}
  if (touch) Sync.schedule();
};
const P = () => DB.profiles.find(p => p.id === DB.current);
const D = () => { const p = P(); if (!p) return null; return DB.data[p.id] || (DB.data[p.id] = { lessons: {}, mistakes: {}, daily: {}, xpDay: {}, xp: 0, startLevel: 1 }); };
const C = () => COURSES[P().course];
const t = (k) => { const p = P(); const row = S[k]; const help = p ? COURSES[p.course].help : "ru"; return { main: row[0], sub: row[HL[help]] }; };
const tt = (k, cls = "") => { const x = t(k); const showH = !P() || P().help !== false; return `${esc(x.main)}${showH ? ` <span class="sub ${cls}">${esc(x.sub)}</span>` : ""}`; };
const helpOn = () => P() && P().help !== false;

/* ---------- cloud sync (Supabase) ---------- */
const Sync = (() => {
  const CFG = window.APP_CONFIG || {};
  const framed = (() => { try { return window.self !== window.top; } catch (e) { return true; } })();
  const available = !!(CFG.supabaseUrl && CFG.supabaseKey) && !framed && /^https?:$/.test(location.protocol);
  let sb = null, user = null, timer = null, busy = false, again = false;
  const st = { state: "off", last: null, error: "" };
  function loadLib() {
    return new Promise((res, rej) => {
      if (window.supabase && window.supabase.createClient) return res();
      const sc = document.createElement("script");
      sc.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.js";
      sc.onload = () => res(); sc.onerror = () => rej(new Error("Couldn't load the sync library — check your internet."));
      document.head.appendChild(sc);
    });
  }
  async function init() {
    if (!available) return;
    try {
      await loadLib();
      sb = window.supabase.createClient(CFG.supabaseUrl, CFG.supabaseKey, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, storageKey: "stepbystep-auth" } });
      const { data } = await sb.auth.getSession();
      user = data.session ? data.session.user : null;
      sb.auth.onAuthStateChange((ev, session) => {
        const was = user; user = session ? session.user : null;
        if (ev === "PASSWORD_RECOVERY") { st.recovery = true; setTimeout(() => { stack = [{ view: P() ? "me" : "welcome", params: {} }, { view: "cloud", params: {} }]; render(); }, 0); }
        else if (ev === "SIGNED_IN" && !was && user) { setTimeout(async () => { await now(); toast("Signed in · Вход выполнен ✓"); if (!P() && DB.profiles.length) stack = [{ view: "profiles", params: {} }]; softRender(); }, 0); }
      });
      if (user) await now();
      document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible" && user) now(); });
      window.addEventListener("online", () => user && now());
    } catch (e) { st.state = "error"; st.error = e.message || String(e); }
  }
  function snapshot() { return { v: 1, profiles: DB.profiles, data: DB.data }; }
  // merge rule: for each learner, the copy changed most recently wins
  function merge(remote) {
    if (!remote || !Array.isArray(remote.profiles)) return false;
    let changed = false;
    const map = new Map(DB.profiles.map(p => [p.id, { p, d: DB.data[p.id] }]));
    for (const rp of remote.profiles) {
      const loc = map.get(rp.id);
      if (!loc || (rp.updatedAt || 0) > (loc.p.updatedAt || 0)) {
        map.set(rp.id, { p: rp, d: (remote.data || {})[rp.id] }); changed = true;
      }
    }
    if (changed) {
      const ordered = [...map.values()].sort((a, b) => a.p.id.localeCompare(b.p.id));
      DB.profiles = ordered.map(x => x.p);
      DB.data = Object.fromEntries(ordered.filter(x => x.d).map(x => [x.p.id, x.d]));
      if (DB.current && !map.has(DB.current)) DB.current = null;
    }
    return changed;
  }
  async function now() {
    if (!sb || !user) return;
    if (busy) { again = true; return; }
    busy = true; st.state = "syncing"; refreshBadge();
    try {
      const { data, error } = await sb.from("progress").select("data").eq("user_id", user.id).maybeSingle();
      if (error) throw error;
      const changed = merge(data && data.data);
      if (changed) { save(false); }
      const { error: e2 } = await sb.from("progress").upsert({ user_id: user.id, data: snapshot() });
      if (e2) throw e2;
      st.state = "ok"; st.last = new Date(); st.error = "";
      if (changed) softRender();
    } catch (e) { st.state = "error"; st.error = e.message || String(e); }
    busy = false; refreshBadge();
    if (again) { again = false; now(); }
  }
  function schedule() { if (!user) return; clearTimeout(timer); timer = setTimeout(now, 2500); }
  const back = () => location.origin + location.pathname;
  async function sendLink(email) {
    const { error } = await sb.auth.signInWithOtp({ email, options: { shouldCreateUser: true, emailRedirectTo: back() } });
    if (error) throw error;
  }
  async function signIn(email, password) {
    const { data, error } = await sb.auth.signInWithPassword({ email, password });
    if (error) throw error;
    user = data.user; await now();
  }
  async function signUp(email, password) {
    const { data, error } = await sb.auth.signUp({ email, password, options: { emailRedirectTo: back() } });
    if (error) throw error;
    if (data.session) { user = data.user; await now(); return "in"; }
    return "confirm";
  }
  async function resetPw(email) { const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo: back() }); if (error) throw error; }
  async function updatePw(password) { const { error } = await sb.auth.updateUser({ password }); if (error) throw error; st.recovery = false; }
  async function signOut() { await sb.auth.signOut(); user = null; st.state = "off"; }
  async function listBackups() {
    const { data, error } = await sb.from("progress_backups").select("id, kind, created_at, data").order("created_at", { ascending: false }).limit(20);
    if (error) throw error; return data || [];
  }
  async function backupNow() {
    const { error } = await sb.from("progress_backups").insert({ user_id: user.id, data: snapshot(), kind: "manual" });
    if (error) throw error;
  }
  async function restore(data) {
    if (!data || !Array.isArray(data.profiles)) throw new Error("This backup is empty.");
    try { await backupNow(); } catch (e) {} // safety copy of what we have now
    const t0 = Date.now();
    DB.profiles = data.profiles.map(p => ({ ...p, updatedAt: t0 }));
    DB.data = data.data || {};
    if (!DB.profiles.find(p => p.id === DB.current)) DB.current = DB.profiles[0] ? DB.profiles[0].id : null;
    save(false);
    const { error } = await sb.from("progress").upsert({ user_id: user.id, data: snapshot() });
    if (error) throw error;
    st.last = new Date();
  }
  return { init, now, schedule, sendLink, signIn, signUp, resetPw, updatePw, signOut, listBackups, backupNow, restore, st, get user() { return user; }, get available() { return available; }, get ready() { return !!sb; } };
})();
function softRender() {
  const top = stack[stack.length - 1];
  if (top && ["home", "daily", "review", "me", "profiles", "welcome"].includes(top.view)) render();
}
function refreshBadge() {
  const b = document.querySelector("#sync-badge"); if (!b) return;
  b.dataset.state = Sync.st.state; b.title = Sync.st.state === "error" ? Sync.st.error : Sync.st.state;
}

/* ---------- theme ---------- */
function applyTheme() {
  const r = document.documentElement;
  const p = P();
  r.dataset.skin = p ? p.skin : "rose";
  if (DB.theme === "light" || DB.theme === "dark") r.dataset.theme = DB.theme; else delete r.dataset.theme;
}

/* ---------- sound ---------- */
let AC = null;
function tone(notes, type = "sine", vol = .12) {
  const p = P(); if (p && p.sound === false) return;
  try {
    AC = AC || new (window.AudioContext || window.webkitAudioContext)();
    let t0 = AC.currentTime + .01;
    notes.forEach(([f, d]) => {
      const o = AC.createOscillator(), g = AC.createGain();
      o.type = type; o.frequency.value = f; g.gain.setValueAtTime(0, t0);
      g.gain.linearRampToValueAtTime(vol, t0 + .015); g.gain.exponentialRampToValueAtTime(.0001, t0 + d);
      o.connect(g).connect(AC.destination); o.start(t0); o.stop(t0 + d + .05); t0 += d * .7;
    });
  } catch (e) {}
}
const sfx = {
  ok: () => tone([[660, .12], [880, .18]], "triangle"),
  no: () => { tone([[220, .22]], "sine", .1); try { navigator.vibrate && navigator.vibrate(60); } catch (e) {} },
  tap: () => tone([[520, .05]], "triangle", .05),
  win: () => tone([[523, .14], [659, .14], [784, .14], [1047, .35]], "triangle"),
  pop: () => tone([[880, .06]], "sine", .06)
};

/* ---------- speech ---------- */
let voices = [];
function loadVoices() { try { voices = speechSynthesis.getVoices() || []; } catch (e) { voices = []; } }
if ("speechSynthesis" in window) { loadVoices(); try { speechSynthesis.onvoiceschanged = loadVoices; } catch (e) {} }
function voiceFor(lang) {
  const p = P(); const pref = p && p.voices && p.voices[lang];
  const pre = lang.slice(0, 2);
  return voices.find(v => v.voiceURI === pref) || voices.find(v => v.lang && v.lang.replace("_", "-") === lang) || voices.find(v => v.lang && v.lang.toLowerCase().startsWith(pre));
}
function speak(text, lang, slow) {
  if (!("speechSynthesis" in window) || !text) return;
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(String(text).replace(/«|»/g, ""));
    u.lang = lang; const v = voiceFor(lang); if (v) u.voice = v;
    const base = (P() && P().rate) || .95; u.rate = slow ? Math.max(.5, base * .65) : base;
    speechSynthesis.speak(u);
  } catch (e) {}
}
const sayBtn = (text, lang, cls = "say") => `<button class="${cls}" data-say="${esc(text)}" data-lang="${lang}" aria-label="Listen">${I.speak}</button>`;

/* ---------- mascot ---------- */
const BIRDS = {
  robin: { body: "#8a6a4f", belly: "#f4e6d4", breast: "#e8673a", cap: null, wing: "#6d523c", beak: "#3b2f2a" },
  bullfinch: { body: "#7d8796", belly: "#f1f1f4", breast: "#e2566f", cap: "#22252e", wing: "#2f3440", beak: "#22252e" }
};
function birdSVG(kind, size = 96) {
  const b = BIRDS[kind] || BIRDS.robin;
  return `<svg class="bird-svg" viewBox="0 0 120 120" width="${size}" height="${size}" aria-hidden="true">
  <ellipse cx="60" cy="112" rx="30" ry="4" fill="currentColor" opacity=".12"/>
  <path class="tail" d="M22 78 L4 92 L10 70 Z" fill="${b.wing}"/>
  <g class="legs" stroke="#c98a4b" stroke-width="3.5" stroke-linecap="round"><path d="M50 100v9M70 100v9M46 109h8M66 109h8"/></g>
  <ellipse cx="60" cy="66" rx="40" ry="38" fill="${b.body}"/>
  ${b.cap ? `<path d="M26 52 Q30 24 60 24 Q90 24 94 52 Q78 40 60 41 Q42 40 26 52Z" fill="${b.cap}"/>` : ""}
  <ellipse cx="60" cy="80" rx="29" ry="25" fill="${b.breast}"/>
  <ellipse cx="60" cy="94" rx="18" ry="10" fill="${b.belly}" opacity=".9"/>
  <g class="wing-l"><ellipse cx="25" cy="74" rx="11" ry="20" fill="${b.wing}" transform="rotate(18 25 74)"/></g>
  <g class="wing-r"><ellipse cx="95" cy="74" rx="11" ry="20" fill="${b.wing}" transform="rotate(-18 95 74)"/></g>
  <g class="eyes-open"><circle cx="47" cy="57" r="6" fill="#1b1b22"/><circle cx="73" cy="57" r="6" fill="#1b1b22"/><circle class="glint" cx="49" cy="55" r="2" fill="#fff"/><circle class="glint" cx="75" cy="55" r="2" fill="#fff"/></g>
  <g class="eyes-happy" fill="none" stroke="#1b1b22" stroke-width="3.5" stroke-linecap="round"><path d="M41 59 Q47 51 53 59"/><path d="M67 59 Q73 51 79 59"/></g>
  <g class="eyes-sad" fill="none" stroke="#1b1b22" stroke-width="3.5" stroke-linecap="round"><path d="M41 55 Q47 61 53 57"/><path d="M67 57 Q73 61 79 55"/></g>
  <circle class="cheek" cx="38" cy="68" r="5" fill="#ff8fab" opacity=".55"/><circle class="cheek" cx="82" cy="68" r="5" fill="#ff8fab" opacity=".55"/>
  <path d="M54 65 L66 65 L60 74 Z" fill="${b.beak}"/>
  </svg>`;
}
function mascot(mood = "idle", bubble = "", bubbleSub = "", size = 96) {
  return `<div class="mascot ${mood}">
    <div class="bird">${birdSVG(C ? (P() ? C().bird : "robin") : "robin", size)}</div>
    ${bubble ? `<div class="bubble"><b>${esc(bubble)}</b>${bubbleSub ? `<span>${esc(bubbleSub)}</span>` : ""}</div>` : ""}
  </div>`;
}
const CHEERS = {
  en: { ok: [["Brilliant!", "Умница!"], ["Lovely!", "Прекрасно!"], ["Spot on!", "В точку!"], ["Well done!", "Молодец!"], ["Perfect!", "Идеально!"], ["You've got it!", "Получилось!"]],
        no: [["Nearly!", "Почти!"], ["No worries", "Ничего страшного"], ["Good try!", "Хорошая попытка!"], ["We'll get it", "Мы справимся"]] },
  ru: { ok: [["Молодец!", "Well done!"], ["Отлично!", "Excellent!"], ["Здорово!", "Great!"], ["Супер!", "Super!"], ["Верно!", "Correct!"]],
        no: [["Почти!", "Almost!"], ["Ничего!", "No problem!"], ["Ещё раз!", "Once more!"]] }
};

/* ---------- confetti ---------- */
function confetti(n = 90) {
  if (reduced()) return;
  const cv = document.createElement("canvas"); cv.className = "confetti"; document.body.appendChild(cv);
  const ctx = cv.getContext("2d"); const W = cv.width = innerWidth * devicePixelRatio, H = cv.height = innerHeight * devicePixelRatio;
  const cs = getComputedStyle(document.documentElement);
  const cols = ["--pen", "--gold", "--green", "--accent2", "--red"].map(v => cs.getPropertyValue(v).trim() || "#e05");
  const ps = Array.from({ length: n }, () => ({ x: W / 2 + (Math.random() - .5) * W * .3, y: H * .35, vx: (Math.random() - .5) * 16 * devicePixelRatio, vy: (-Math.random() * 16 - 6) * devicePixelRatio, r: Math.random() * Math.PI, vr: (Math.random() - .5) * .4, s: (5 + Math.random() * 6) * devicePixelRatio, c: pick(cols), shape: Math.random() < .3 ? "h" : "r" }));
  let f = 0;
  (function loop() {
    ctx.clearRect(0, 0, W, H);
    ps.forEach(p => { p.vy += .45 * devicePixelRatio; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.r += p.vr;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillStyle = p.c;
      if (p.shape === "h") { ctx.beginPath(); const s = p.s * .6; ctx.moveTo(0, s * .4); ctx.bezierCurveTo(-s, -s * .4, -s * .4, -s * 1.1, 0, -s * .4); ctx.bezierCurveTo(s * .4, -s * 1.1, s, -s * .4, 0, s * .4); ctx.fill(); }
      else ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2);
      ctx.restore(); });
    if (++f < 150) requestAnimationFrame(loop); else cv.remove();
  })();
}
function toast(msg) {
  const el = document.createElement("div"); el.className = "toast"; el.textContent = msg; document.body.appendChild(el);
  setTimeout(() => el.remove(), 2200);
}

/* ---------- progress helpers ---------- */
function lessonState(id) { return D().lessons[id] || {}; }
function stepState(id, sid) { const s = lessonState(id); return (s.steps || {})[sid] || {}; }
function nextStep(L) { return L.steps.find(st => !stepState(L.id, st.id).done) || null; }
function topicProgress(L) { const n = L.steps.length + 1; const k = L.steps.filter(st => stepState(L.id, st.id).done).length + (lessonState(L.id).done ? 1 : 0); return { k, n }; }
function stepDots(L) {
  if (!L.steps.length) return "";
  return `<span class="dots">${L.steps.map(st => `<i class="${stepState(L.id, st.id).done ? "on" : ""}"></i>`).join("")}<i class="test ${lessonState(L.id).done ? "on" : ""}"></i></span>`;
}
function nextLesson() {
  const c = C(), d = D();
  return c.lessons.find(L => L.level >= (d.startLevel || 1) && !lessonState(L.id).done) || c.lessons.find(L => !lessonState(L.id).done) || null;
}
function addXP(n) {
  const d = D(); d.xp = (d.xp || 0) + n; const k = today(); d.xpDay[k] = (d.xpDay[k] || 0) + n; save();
}
function streak() {
  const d = D(); let n = 0; const dt = new Date();
  if (!d.xpDay[dayKey(dt)]) dt.setDate(dt.getDate() - 1);
  while (d.xpDay[dayKey(dt)]) { n++; dt.setDate(dt.getDate() - 1); }
  return n;
}
const GOAL = 50;
function starsFor(pct) { return pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 50 ? 1 : 0; }
const starHTML = (n, total = 3) => `<span class="stars">${Array.from({ length: total }, (_, i) => `<span class="${i < n ? "on" : ""}">★</span>`).join("")}</span>`;
function mistakeCount() { return Object.keys(D().mistakes).filter(k => C().exByKey[k]).length; }
function knownLesson(L) { const s = lessonState(L.id); return s.done || s.learned || L.level < (D().startLevel || 1) || Object.keys(s.steps || {}).length > 0; }
// all practice items of a topic that the learner has already met (topic test + steps she has started)
function topicItems(L) { const s = lessonState(L.id); return L.exercises.concat(L.steps.filter(st => s.done || L.level < (D().startLevel || 1) || (s.steps || {})[st.id]).flatMap(st => st.exercises)); }

/* ---------- speaking (speech recognition) ---------- */
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
const canSpeak = () => !!SR && P() && P().speakOn !== false;
function speakItems(L, n) {
  const c = C(), seen = new Set(), cand = [];
  L.sections.forEach(sec => sec.examples.forEach(e => {
    const w = e.main.trim().split(/\s+/).length;
    const rightLang = c.id === "ru" ? isCyr(e.main) : !isCyr(e.main);
    if (rightLang && w >= (c.id === "ru" ? 1 : 2) && w <= 12 && !seen.has(e.main)) { seen.add(e.main); cand.push(e); }
  }));
  return shuffle(cand).slice(0, n).map((e, i) => ({ type: "speak", say: e.main, meaning: e.sub, tr: e.tr, key: `${L.id}#s${i}`, lesson: L.id, explain: "", explainH: "" }));
}
function withSpeaking(L, list) {
  if (!canSpeak()) return list;
  const out = list.slice(); const sp = speakItems(L, 2);
  if (sp[0]) out.splice(Math.min(4, out.length), 0, sp[0]);
  if (sp[1]) out.push(sp[1]);
  return out;
}
const expand = s => " " + String(s).toLowerCase().replace(/ё/g, "е").replace(/[’‘`]/g, "'")
  .replace(/\bcan't\b/g, "can not").replace(/\bcannot\b/g, "can not").replace(/\bwon't\b/g, "will not").replace(/\bshan't\b/g, "shall not")
  .replace(/n't\b/g, " not").replace(/'m\b/g, " am").replace(/'re\b/g, " are").replace(/'ve\b/g, " have").replace(/'ll\b/g, " will").replace(/'d\b/g, " would").replace(/'s\b/g, " is") + " ";
const toks = s => expand(s).replace(/[^\p{L}\p{N}' ]/gu, " ").split(/\s+/).filter(Boolean);
function scoreSpeech(target, heard) {
  const words = target.trim().split(/\s+/);
  const flat = []; words.forEach((w, wi) => toks(w).forEach(t => flat.push({ t, wi })));
  const h = toks(heard);
  const n = flat.length, m = h.length, dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) dp[i][j] = flat[i].t === h[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const hit = new Array(n).fill(false);
  for (let i = 0, j = 0; i < n && j < m;) { if (flat[i].t === h[j]) { hit[i] = true; i++; j++; } else if (dp[i + 1][j] >= dp[i][j + 1]) i++; else j++; }
  const wordOk = words.map((_, wi) => flat.every((f, k) => f.wi !== wi || hit[k]));
  const score = n ? hit.filter(Boolean).length / n : 0;
  return { score, html: words.map((w, i) => `<span class="${wordOk[i] ? "hit" : "miss"}">${esc(w)}</span>`).join(" ") };
}

/* ---------- navigation ---------- */
const app = () => $("#app");
let stack = [];
let run = null;
function go(view, params = {}, replace = false) {
  if (replace) stack[stack.length - 1] = { view, params }; else stack.push({ view, params });
  try { if (!replace) history.pushState({ d: stack.length }, ""); } catch (e) {}
  render();
}
function back() { if (stack.length > 1) { stack.pop(); render(); } else { stack = [{ view: "home", params: {} }]; render(); } }
window.addEventListener("popstate", () => { if (run && stack[stack.length - 1].view === "practice") { quitPractice(); return; } if (stack.length > 1) { stack.pop(); render(); } });

function render() {
  stopTimers();
  applyTheme();
  try { speechSynthesis.cancel(); } catch (e) {}
  $$("body > .feedback, body > .check-bar").forEach(x => x.remove());
  const top = stack[stack.length - 1] || { view: "home", params: {} };
  if (!P() && !["welcome", "newProfile", "cloud"].includes(top.view)) { stack = [{ view: DB.profiles.length ? "profiles" : "welcome", params: {} }]; return render(); }
  const V = views[top.view] || views.home;
  const root = app();
  root.innerHTML = `<div class="view enter">${V(top.params)}</div>`;
  const hasNav = ["home", "daily", "play", "review", "me"].includes(top.view);
  $("#nav").hidden = !hasNav;
  if (hasNav) renderNav(top.view);
  bindCommon(root);
  if (V.bind) V.bind(root, top.params);
  // fixed bars live on <body> so animated parents can't displace them
  $$(".check-bar", root).forEach(x => document.body.appendChild(x));
  window.scrollTo(0, 0);
}
function renderNav(active) {
  const m = mistakeCount();
  $("#nav").innerHTML = `<div class="inner">${[["home", "path", "path"], ["daily", "daily", "daily"], ["play", "play", "play"], ["review", "review", "review"], ["me", "me", "me"]].map(([v, ic, k]) =>
    `<button class="${active === v ? "on" : ""}" data-nav="${v}">${I[ic]}<span>${esc(t(k).main)}</span>${v === "review" && m ? `<i class="dot">${m > 99 ? "99+" : m}</i>` : ""}${v === "daily" && D() && !D().daily[today()] ? '<i class="dot pulse"></i>' : ""}</button>`).join("")}</div>`;
  $$("#nav [data-nav]").forEach(b => b.onclick = () => { sfx.tap(); stack = [{ view: b.dataset.nav, params: {} }]; render(); });
}
function bindCommon(root) {
  $$("[data-say]", root).forEach(b => b.addEventListener("click", e => { e.stopPropagation(); b.classList.remove("ping"); void b.offsetWidth; b.classList.add("ping"); speak(b.dataset.say, b.dataset.lang, b.dataset.slow === "1"); }));
  $$("[data-back]", root).forEach(b => b.onclick = () => { sfx.tap(); back(); });
  $$("[data-go]", root).forEach(b => b.onclick = () => { sfx.tap(); go(b.dataset.go, b.dataset.id ? { id: b.dataset.id } : {}); });
  $$(".mascot .bird", root).forEach(b => b.onclick = () => { const m = b.closest(".mascot"); m.classList.remove("poke"); void m.offsetWidth; m.classList.add("poke"); sfx.pop(); });
}

/* ---------- views ---------- */
const views = {};

/* Welcome / profiles */
views.welcome = () => `
  <div class="stack center welcome">
    ${`<div class="mascot-duo"><div class="mascot cheer"><div class="bird">${birdSVG("robin", 104)}</div></div><div class="mascot cheer delay"><div class="bird">${birdSVG("bullfinch", 104)}</div></div></div>`}
    <h1 class="big-title">Step by Step<br><span class="hand">Шаг за шагом</span></h1>
    <p class="muted">Learn a language a little every day — with games, audio and a daily check-up.<br><span class="sub">Учи язык понемногу каждый день — с играми, аудио и ежедневной проверкой.</span></p>
    <button class="btn block big" data-go="newProfile">Let's start · Начнём</button>
    ${Sync.available ? `<button class="btn ghost block" data-go="cloud">${I.cloud} I already have an account · У меня есть аккаунт</button>` : ""}
  </div>`;

views.profiles = () => `
  <div class="stack">
    <h1>Who's learning?<br><span class="hand accent">Кто учится?</span></h1>
    <div class="profile-grid">
      ${DB.profiles.map((p, i) => `<button class="profile-card skin-${p.skin}" data-profile="${p.id}" style="--i:${i}">
        <div class="bird">${birdSVG(COURSES[p.course].bird, 64)}</div><b>${esc(p.name)}</b><span>${esc(COURSES[p.course].name)}</span></button>`).join("")}
      <button class="profile-card add" data-go="newProfile" style="--i:${DB.profiles.length}"><div class="plus">+</div><b>Add person</b><span>Добавить</span></button>
    </div>
    ${Sync.available ? `<button class="btn ghost block" data-go="cloud">${I.cloud} ${Sync.user ? "Cloud sync is on · Синхронизация включена" : "Sync with the cloud · Синхронизация"}</button>` : ""}
  </div>`;
views.profiles.bind = (root) => {
  $$("[data-profile]", root).forEach(b => b.onclick = () => { sfx.pop(); DB.current = b.dataset.profile; save(); stack = [{ view: "home", params: {} }]; render(); });
};

const SKINS = [
  { id: "rose", name: "Rose", sub: "Розовый" }, { id: "lavender", name: "Lavender", sub: "Лаванда" },
  { id: "ocean", name: "Ocean", sub: "Океан" }, { id: "forest", name: "Forest", sub: "Лес" }
];
views.newProfile = () => `
  <div class="stack">
    <div class="row">${DB.profiles.length ? `<button class="icon-btn" data-back aria-label="Back">${I.back}</button>` : ""}<h1>New learner <span class="hand accent">Новый ученик</span></h1></div>
    <div class="card stack">
      <label class="label" for="np-name">Name · Имя</label>
      <input id="np-name" class="text-input" maxlength="20" placeholder="e.g. Anna" autocomplete="off">
    </div>
    <div class="stack">
      <span class="label">What do you want to learn?</span>
      <div class="course-pick">
        <button class="course-card on" data-course="en"><div class="bird">${birdSVG("robin", 60)}</div><b>English</b><span>Я учу английский<br><small>Explanations in Russian</small></span></button>
        <button class="course-card" data-course="ru"><div class="bird">${birdSVG("bullfinch", 60)}</div><b>Russian · Русский</b><span>I'm learning Russian<br><small>Explained in English + Português</small></span></button>
      </div>
    </div>
    <div class="stack">
      <span class="label">Pick your look · Выбери стиль</span>
      <div class="skin-pick">${SKINS.map(s => `<button class="skin-swatch skin-${s.id} ${s.id === "rose" ? "on" : ""}" data-skin="${s.id}"><i></i><b>${s.name}</b><span>${s.sub}</span></button>`).join("")}</div>
    </div>
    <button class="btn block big" id="np-go">Create · Создать</button>
  </div>`;
views.newProfile.bind = (root) => {
  let course = "en", skin = "rose";
  const setSkin = s => { skin = s; document.documentElement.dataset.skin = s; $$("[data-skin]", root).forEach(x => x.classList.toggle("on", x.dataset.skin === s)); };
  setSkin("rose");
  $$("[data-course]", root).forEach(b => b.onclick = () => { sfx.tap(); course = b.dataset.course; $$("[data-course]", root).forEach(x => x.classList.toggle("on", x === b)); setSkin(course === "ru" ? "ocean" : "rose"); });
  $$("[data-skin]", root).forEach(b => b.onclick = () => { sfx.tap(); setSkin(b.dataset.skin); });
  $("#np-go", root).onclick = () => {
    const name = $("#np-name", root).value.trim();
    if (!name) { $("#np-name", root).classList.add("shake"); $("#np-name", root).focus(); setTimeout(() => $("#np-name", root).classList.remove("shake"), 400); return; }
    const p = { id: "p" + Date.now().toString(36), name, course, skin, help: true, sound: true, rate: .95 };
    DB.profiles.push(p); DB.current = p.id; save(); sfx.win();
    stack = [{ view: "home", params: {} }];
    if (course === "en") stack.push({ view: "startChoice", params: {} });
    render();
  };
};

views.startChoice = () => `
  <div class="stack center">
    ${mascot("cheer", `Nice to meet you, ${P().name}!`, "Приятно познакомиться!", 110)}
    <h1>Where should we start?<br><span class="hand accent">С чего начнём?</span></h1>
    <button class="choice-card" id="sc-test"><b>🎯 Take a quick placement check</b><span>12 questions, about 3 minutes. I'll find the right level for you.<br><span class="sub">12 вопросов, около 3 минут. Я подберу твой уровень.</span></span></button>
    <button class="choice-card" id="sc-zero"><b>🌱 Start from the beginning</b><span>Go through everything step by step.<br><span class="sub">Пройти всё по порядку, шаг за шагом.</span></span></button>
  </div>`;
views.startChoice.bind = (root) => {
  $("#sc-test", root).onclick = () => startPlacement();
  $("#sc-zero", root).onclick = () => { D().startLevel = 1; save(); stack = [{ view: "home", params: {} }]; render(); };
};

/* Home / path */
views.home = () => {
  const p = P(), d = D(), c = C(), nx = nextLesson();
  const xpToday = d.xpDay[today()] || 0, pct = Math.min(100, Math.round(xpToday / GOAL * 100));
  const dailyDone = d.daily[today()];
  const doneCount = c.lessons.filter(L => lessonState(L.id).done).length;
  const greet = p.course === "ru" ? ["Привет", "Hi"] : ["Hi", "Привет"];
  const R = 26, CIRC = 2 * Math.PI * R;
  return `
  <header class="top">
    <button class="who" data-go="profiles" aria-label="Switch learner"><span class="av">${esc(p.name[0] || "?")}</span></button>
    <div class="chips">
      <span class="chip fire ${streak() ? "lit" : ""}"><span class="i">🔥</span><b data-count="${streak()}">${streak()}</b></span>
      <span class="chip"><span class="i">✨</span><b data-count="${d.xp || 0}">${d.xp || 0}</b> XP</span>
    </div>
  </header>
  <section class="hello">
    ${mascot("idle", `${greet[0]}, ${p.name}!`, nx ? (p.course === "ru" ? "Ready for the next step?" : "Готова к следующему шагу?") : "", 92)}
    <div class="goal" title="Daily goal">
      <svg viewBox="0 0 64 64" width="72" height="72"><circle cx="32" cy="32" r="${R}" class="ring-bg"/><circle cx="32" cy="32" r="${R}" class="ring" style="stroke-dasharray:${CIRC};stroke-dashoffset:${CIRC * (1 - pct / 100)}"/></svg>
      <div class="goal-in"><b>${xpToday}</b><span>/${GOAL}</span></div>
      <span class="label">${esc(t("todayGoal").main)}</span>
    </div>
  </section>
  ${nx ? `<button class="card hero continue" data-go="lesson" data-id="${nx.id}">
      <div class="em big">${nx.emoji}</div>
      <div class="t"><span class="label">${tt("continue")}</span><h2>${esc(nx.title)}</h2>${helpOn() ? `<span class="sub">${esc(nx.sub)}</span>` : ""}${nx.steps.length ? `<span class="next-step">${nextStep(nx) ? `Step ${nextStep(nx).n} of ${nx.steps.length} · ${esc(nextStep(nx).title)}` : "Topic test"}</span>${stepDots(nx)}` : ""}</div>
      <span class="go-arrow">→</span>
    </button>` : `<div class="card hero center"><h2>🎓 Course complete!</h2><p class="muted">Keep your skills fresh with the daily check.</p></div>`}
  <button class="card daily-card ${dailyDone ? "done" : ""}" data-nav-to="daily">
    <span class="em">${dailyDone ? "✅" : "📝"}</span>
    <div class="t"><b>${tt("dailyCheck")}</b><span class="muted">${dailyDone ? `Today: ${dailyDone.score}/${dailyDone.total}` : "10 quick questions from what you've learned"}</span></div>
  </button>
  ${installBanner()}
  <div class="overall"><span class="label">${doneCount} / ${c.lessons.length} ${c.id === "en" ? "topics" : "lessons"}</span><div class="bar"><i style="width:${doneCount / c.lessons.length * 100}%"></i></div></div>
  ${c.levels.map(lv => {
    const ls = c.lessons.filter(L => L.level === lv.n);
    const skipped = lv.n < (d.startLevel || 1);
    return `<section class="level ${skipped ? "skipped" : ""}">
      <div class="level-head"><div><span class="label">${esc(t("level").main)} ${lv.n}</span><h2>${esc(lv.title)}</h2>${helpOn() ? `<span class="sub">${esc(lv.sub)}</span>` : ""}</div><span class="cefr">${esc(lv.tag)}</span></div>
      ${skipped ? `<p class="skip-note">✓ Your placement check says you know this level. You can still review any lesson.</p>` : ""}
      <div class="trail">
      ${ls.map((L, i) => {
        const s = lessonState(L.id); const isNext = nx && nx.id === L.id;
        return `<button class="lesson-row ${s.done ? "done" : ""} ${isNext ? "next" : ""}" data-go="lesson" data-id="${L.id}" style="--i:${i}">
          <span class="em">${L.emoji}</span>
          <span class="t"><b>${esc(L.title)}</b>${helpOn() ? `<span>${esc(L.sub)}</span>` : ""}${stepDots(L)}</span>
          <span class="end">${isNext ? `<span class="next-tag">Next</span>` : s.done ? starHTML(s.stars || 0) : s.learned ? `<span class="muted small">${s.best || 0}%</span>` : ""}</span>
        </button>`;
      }).join("")}
      </div>
    </section>`;
  }).join("")}`;
};
views.home.bind = (root) => {
  const ig = $("#inst-go", root); if (ig) ig.onclick = () => doInstall();
  const ix = $("#inst-x", root); if (ix) ix.onclick = () => { try { localStorage.setItem("sbs.hideInstall", "1"); } catch (e) {} render(); };
  $$("[data-nav-to]", root).forEach(b => b.onclick = () => { sfx.tap(); stack = [{ view: b.dataset.navTo, params: {} }]; render(); });
  countUp(root);
};
function countUp(root) {
  if (reduced()) return;
  $$("[data-count]", root).forEach(el => {
    const to = +el.dataset.count; if (!to) return; const t0 = performance.now(), dur = 700;
    const step = now => { const k = Math.min(1, (now - t0) / dur); el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  });
}

/* Lesson = one grammar topic: explanation + steps + topic test */
function explainHTML(L) {
  const c = C(), lang = c.speak, showH = helpOn();
  return `${L.sections.map((s, i) => `
      <section class="card section reveal" style="--i:${i}">
        <h2>${esc(s.title)}</h2>${showH && s.titleH ? `<span class="sub">${esc(s.titleH)}</span>` : ""}
        <p>${esc(s.text)}</p>
        ${showH && s.textH ? `<p class="help">${esc(s.textH)}</p>` : ""}
        ${tableHTML(s.table)}
        ${examplesHTML(s.examples, lang)}
      </section>`).join("")}
    <aside class="tip reveal" style="--i:${L.sections.length}"><span class="hand">${tt("watchOut")}</span><p>${esc(L.tip.main)}</p>${showH ? `<p class="help">${esc(L.tip.sub)}</p>` : ""}</aside>`;
}
const tableHTML = tb => tb ? `<div class="table-wrap"><table><thead><tr>${tb.head.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${tb.rows.map(r => `<tr>${r.map(x => `<td>${esc(x)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>` : "";
const examplesHTML = (exs, lang) => exs && exs.length ? `<div class="examples">${exs.map(e => `<div class="ex">${sayBtn(e.main, lang)}<div><div class="en">${esc(e.main)}${e.tr ? ` <span class="tr">${esc(e.tr)}</span>` : ""}</div>${helpOn() || C().id === "ru" ? `<div class="exsub">${esc(e.sub)}</div>` : ""}</div></div>`).join("")}</div>` : "";

views.lesson = ({ id }) => {
  const c = C(), L = c.byId[id]; if (!L) return views.home();
  const showH = helpOn();
  const head = `<header class="lesson-head">
      <button class="icon-btn" data-back aria-label="Back">${I.back}</button>
      <span class="label">${esc(t("level").main)} ${L.level} · ${L.steps.length ? "Grammar topic" : esc(t("learn").main)}</span>
    </header>
    <div class="lesson-title"><span class="em big pop">${L.emoji}</span><div><h1>${esc(L.title)}</h1>${showH ? `<span class="sub">${esc(L.sub)}</span>` : ""}</div></div>`;
  if (!L.steps.length) {
    return `${head}<div class="stack">${mascot("idle", L.intro, showH ? L.introH : "", 70)}${explainHTML(L)}</div>
    <div class="check-bar"><div class="inner"><button class="btn block big" id="go-practice">${tt("startPractice", "on-btn")} →</button></div></div>`;
  }
  const st = lessonState(L.id), nxs = nextStep(L), started = Object.keys(st.steps || {}).length > 0 || st.done;
  const { k, n } = topicProgress(L);
  return `${head}
  <div class="stack">
    ${mascot("idle", L.intro, showH ? L.introH : "", 64)}
    <section class="card stack topic-path">
      <div class="spread"><span class="label">Your path through this topic · Твой путь</span><span class="chip small-chip">${k}/${n}</span></div>
      <div class="bar"><i style="width:${k / n * 100}%"></i></div>
      <ol class="steps">
        ${L.steps.map((sp, i) => { const ss = stepState(L.id, sp.id); const isNext = nxs && nxs.id === sp.id;
          return `<li><button class="step-row ${ss.done ? "done" : ""} ${isNext ? "next" : ""}" data-step="${sp.id}" style="--i:${i}">
            <span class="step-num">${ss.done ? "✓" : sp.n}</span>
            <span class="t"><b>${esc(sp.title)}</b>${showH ? `<span>${esc(sp.sub)}</span>` : ""}</span>
            <span class="end">${ss.done ? starHTML(ss.stars || 0) : isNext ? `<span class="next-tag">Next</span>` : ss.best != null ? `<span class="muted small">${ss.best}%</span>` : `<span class="muted small">10 ex.</span>`}</span>
          </button></li>`; }).join("")}
        <li><button class="step-row test ${st.done ? "done" : ""} ${!nxs && !st.done ? "next" : ""}" data-test="1" style="--i:${L.steps.length}">
          <span class="step-num">🏁</span>
          <span class="t"><b>Topic test</b>${showH ? `<span>Итоговый тест по теме</span>` : ""}</span>
          <span class="end">${st.done ? starHTML(st.stars || 0) : !nxs ? `<span class="next-tag">Next</span>` : `<span class="muted small">${L.exercises.length} ex.</span>`}</span>
        </button></li>
      </ol>
    </section>
    <details class="explain-all" ${started ? "" : "open"}>
      <summary><span>📖 The whole topic explained</span><span class="sub">Вся тема с объяснением</span></summary>
      <div class="stack">${explainHTML(L)}</div>
    </details>
  </div>
  <div class="check-bar"><div class="inner"><button class="btn block big" id="go-next">${nxs ? `Step ${nxs.n}: ${esc(nxs.title)} →` : st.done ? "↻ Take the topic test again" : "🏁 Take the topic test →"}</button></div></div>`;
};
views.lesson.bind = (root, { id }) => {
  const L = C().byId[id];
  const markLearned = () => { const s = D().lessons[id] || (D().lessons[id] = {}); s.learned = true; save(); };
  const startTest = () => { markLearned(); startRun("lesson", withSpeaking(L, shuffleKeepMatch(L.exercises)), { lessonId: id }); };
  const gp = $("#go-practice", root); if (gp) gp.onclick = startTest;
  $$("[data-step]", root).forEach(b => b.onclick = () => { sfx.tap(); go("step", { id, step: b.dataset.step }); });
  $$("[data-test]", root).forEach(b => b.onclick = () => { sfx.tap(); startTest(); });
  const gn = $("#go-next", root);
  if (gn) gn.onclick = () => { const nx = nextStep(L); sfx.tap(); if (nx) go("step", { id, step: nx.id }); else startTest(); };
};

/* One grammar step: rule card → 10 focused exercises */
views.step = ({ id, step }) => {
  const c = C(), L = c.byId[id]; const sp = L && L.steps.find(x => x.id === step); if (!sp) return views.home();
  const showH = helpOn();
  return `<header class="lesson-head">
      <button class="icon-btn" data-back aria-label="Back">${I.back}</button>
      <span class="label">${L.emoji} ${esc(L.title)} · Step ${sp.n}/${L.steps.length}</span>
    </header>
    <div class="stack">
      <div class="step-hero"><span class="step-big">${sp.n}</span><div><h1>${esc(sp.title)}</h1>${showH ? `<span class="sub">${esc(sp.sub)}</span>` : ""}</div></div>
      <section class="card stack rule-card reveal">
        <span class="label">The rule · Правило</span>
        <p class="rule">${esc(sp.rule)}</p>
        ${showH ? `<p class="help">${esc(sp.ruleH)}</p>` : ""}
        ${tableHTML(sp.table)}
        ${examplesHTML(sp.examples, c.speak)}
      </section>
      ${mascot("idle", "10 exercises — all about this one rule", "10 упражнений только на это правило", 60)}
    </div>
    <div class="check-bar"><div class="inner"><button class="btn block big" id="go-step">Practise this step →</button></div></div>`;
};
views.step.bind = (root, { id, step }) => {
  $("#go-step", root).onclick = () => {
    const L = C().byId[id], sp = L.steps.find(x => x.id === step);
    const s = D().lessons[id] || (D().lessons[id] = {}); s.learned = true; s.steps = s.steps || {}; s.steps[step] = s.steps[step] || {}; save();
    let list = sp.exercises.slice(); // keep the author's easy → hard order
    if (canSpeak() && sp.examples.length) {
      const e = pick(sp.examples.filter(x => x.main.split(/\s+/).length >= 2) || sp.examples);
      if (e) list.splice(5, 0, { type: "speak", say: e.main, meaning: e.sub, key: `${id}~${step}#say`, lesson: id, step, explain: "", explainH: "" });
    }
    startRun("step", list, { lessonId: id, stepId: step });
  };
};
// mix exercises but keep variety: shuffle, then make sure first item is not a "match"
function shuffleKeepMatch(list) { const a = shuffle(list); const i = a.findIndex(e => e.type !== "match"); if (i > 0) [a[0], a[i]] = [a[i], a[0]]; return a; }

/* ---------- practice runner ---------- */
function startRun(mode, exercises, extra = {}) {
  run = { mode, queue: exercises.slice(), idx: 0, total: exercises.length, first: {}, spoken: {}, answered: 0, retried: new Set(), xp: 0, ...extra };
  go("practice", {});
}
function quitPractice() { run = null; stack = stack.filter(s => s.view !== "practice"); if (!stack.length) stack = [{ view: "home", params: {} }]; render(); }
views.practice = () => {
  if (!run) return views.home();
  const ex = run.queue[run.idx];
  const pct = Math.round(run.answered / run.total * 100);
  return `
  <header class="practice-top">
    <button class="icon-btn" id="quit" aria-label="Quit">${I.close}</button>
    <div class="bar"><i style="width:${pct}%"></i></div>
    <span class="count">${Math.min(run.answered + 1, run.total)}/${run.total}</span>
    <div id="ex-mascot" class="ex-mascot">${mascot("idle", "", "", 46)}</div>
  </header>
  ${topicChip(ex)}
  ${run.retried.has(ex.key) && run.first[ex.key] === false ? `<div class="again-tag">↻ Let's try this one again · Ещё раз</div>` : ""}
  <div class="exercise ex-${ex.type}" id="ex">${renderExercise(ex)}</div>`;
};
views.practice.bind = (root) => {
  const ex = run.queue[run.idx];
  $("#quit", root).onclick = () => { sfx.tap(); quitPractice(); };
  bindExercise(ex, root);
};

function topicChip(ex) {
  const c = C(), L = ex.lesson && c.byId[ex.lesson]; if (!L) return "";
  const sp = ex.step && L.steps.find(x => x.id === ex.step);
  return `<div class="topic-chip">${L.emoji} ${esc(L.title)}${sp ? ` <span>· ${esc(sp.title)}</span>` : ""}</div>`;
}
function taskLabel(k, ex) {
  const x = t(k); const showH = helpOn();
  if ((ex.type === "match" || ex.type === "sort") && ex.q) return `<div class="task">${esc(ex.q)}${showH && ex.qH ? `<span>${esc(ex.qH)}</span>` : ""}</div>`;
  return `<div class="task">${esc(x.main)}${showH ? `<span>${esc(x.sub)}</span>` : ""}</div>`;
}
const blankify = q => esc(q).replace("___", '<span class="blank">&nbsp;?&nbsp;</span>');
function renderExercise(ex) {
  const c = C();
  switch (ex.type) {
    case "choice":
      return `${taskLabel("chooseWord", ex)}<p class="prompt">${blankify(ex.q)}</p><div class="options">${shuffle(ex.options).map((o, i) => `<button class="opt" data-opt="${esc(o)}" style="--i:${i}">${esc(o)}</button>`).join("")}</div>`;
    case "translate":
      return `${taskLabel("translate", ex)}<p class="prompt meaning">${esc(ex.meaning)}</p><div class="options">${shuffle(ex.options).map((o, i) => `<button class="opt" data-opt="${esc(o)}" style="--i:${i}">${esc(o)}</button>`).join("")}</div>`;
    case "listen":
      return `${taskLabel("listen", ex)}<div class="listen-big"><button id="play" class="pulse-ring" aria-label="Play">${I.speak}</button><button id="play-slow" class="slow" aria-label="Play slowly">${I.slow}</button></div><div class="options">${shuffle(ex.options).map((o, i) => `<button class="opt" data-opt="${esc(o)}" style="--i:${i}">${esc(o)}</button>`).join("")}</div>`;
    case "gap": {
      const [a, b] = ex.q.split("___");
      return `${taskLabel("typeGap", ex)}<p class="prompt gap-line">${esc(a)}<input id="gap" class="gap-input" autocomplete="off" autocapitalize="off" spellcheck="false" ${c.id === "ru" ? 'inputmode="none"' : ""} aria-label="Answer">${esc(b)}</p>
        ${c.id === "ru" ? cyrKeyboard() : ""}
        <div class="check-bar"><div class="inner"><button class="btn block big" id="check" disabled>${tt("check", "on-btn")}</button></div></div>`;
    }
    case "order": {
      const parts = orderParts(ex.answer);
      const tiles = shuffle(parts.tiles.map((w, i) => ({ w, i })));
      return `${taskLabel("buildSentence", ex)}<p class="prompt meaning">${esc(ex.meaning)}</p>
        <div class="answer-line" id="line"></div>
        <div class="tiles" id="bank">${tiles.map((x, k) => `<button class="tile" data-ti="${x.i}" style="--i:${k}">${esc(x.w)}</button>`).join("")}</div>
        <div class="check-bar"><div class="inner"><button class="btn block big" id="check" disabled>${tt("check", "on-btn")}</button></div></div>`;
    }
    case "speak":
      return `${taskLabel("speak", ex)}<div class="speak-card">
          <div class="speak-line">${sayBtn(ex.say, c.speak)}<p class="prompt">${esc(ex.say)}</p></div>
          ${ex.tr ? `<p class="tr">${esc(ex.tr)}</p>` : ""}${(c.id === "ru" || helpOn()) && ex.meaning ? `<p class="muted">${esc(ex.meaning)}</p>` : ""}
        </div>
        <div class="mic-wrap"><button id="mic" class="mic" aria-label="Start speaking">${I.mic}</button>
          <p id="mic-msg" class="muted center-text">Tap the microphone and read the sentence aloud<br><span class="sub">Нажми на микрофон и прочитай вслух</span></p></div>
        <div id="heard" class="heard" aria-live="polite"></div>
        <div class="row center-row"><button class="btn ghost small" id="skip-speak">Can't speak now · Пропустить</button></div>`;
    case "fix": {
      const words = ex.sentence.trim().split(/\s+/);
      return `${taskLabel("fixIt", ex)}<p class="prompt fix-line" id="fixline">${words.map((w, i) => `<button class="fword" data-w="${i}" style="--i:${i}">${esc(w)}</button>`).join(" ")}</p>
        <p class="muted small" id="fixhint">Tap the word that is wrong · Нажми на неправильное слово</p>
        <div class="options" id="fixopts" hidden>${shuffle(ex.options).map((o, i) => `<button class="opt" data-opt="${esc(o)}" style="--i:${i}">${o === "—" ? "✕ Remove the word · Убрать слово" : esc(o)}</button>`).join("")}</div>`;
    }
    case "sort": {
      const items = shuffle(ex.items.map((it, i) => ({ t: it[0], i })));
      return `${taskLabel("sortIt", ex)}
        <div class="sort-pool" id="pool">${items.map((it, k) => `<button class="tile" data-si="${it.i}" style="--i:${k}">${esc(it.t)}</button>`).join("")}</div>
        <p class="muted small center-text" id="sorthint">Tap a word, then tap its box · Выбери слово, потом коробку</p>
        <div class="buckets b${ex.buckets.length}">${ex.buckets.map((b, bi) => `<div class="bucket" data-b="${bi}" role="button" tabindex="0"><span class="bucket-title">${esc(b)}</span><div class="bucket-items"></div></div>`).join("")}</div>`;
    }
    case "scramble": {
      const letters = shuffle(ex.word.split("").map((ch, i) => ({ ch, i })));
      return `${taskLabel("scramble", ex)}<p class="prompt">${blankify(ex.q)}</p>
        <div class="slots" id="slots">${ex.word.split("").map((_, i) => `<span class="slot" data-slot="${i}"></span>`).join("")}</div>
        <div class="tiles letters" id="letters">${letters.map((x, k) => `<button class="tile letter" data-li="${k}" data-ch="${esc(x.ch)}" style="--i:${k}">${esc(x.ch)}</button>`).join("")}</div>
        <div class="row center-row"><button class="btn ghost small" id="hint">💡 Hint · Подсказка</button><button class="btn ghost small" id="clear">↺ Clear</button></div>`;
    }
    case "match": {
      const rights = shuffle(ex.pairs.map((p, i) => ({ t: p[1], i })));
      return `${taskLabel("match", ex)}<div class="match">
        <div class="col">${ex.pairs.map((p, i) => `<button class="tile" data-l="${i}" style="--i:${i}">${esc(p[0])}</button>`).join("")}</div>
        <div class="col">${rights.map((r, k) => `<button class="tile" data-r="${r.i}" style="--i:${k}">${esc(r.t)}</button>`).join("")}</div></div>`;
    }
  }
  return "";
}
function orderParts(answer) {
  const tiles = answer.trim().split(/\s+/);
  const m = tiles[tiles.length - 1].match(/^(.*?)([.!?…]+)$/);
  let punct = "";
  if (m && m[1]) { tiles[tiles.length - 1] = m[1]; punct = m[2]; }
  return { tiles, punct };
}
function cyrKeyboard() {
  const rows = ["йцукенгшщзхъ", "фывапролджэ", "ячсмитьбюё"];
  return `<div class="kbd" id="kbd">${rows.map((r, ri) => `<div class="kr">${r.split("").map(ch => `<button data-k="${ch}">${ch}</button>`).join("")}${ri === 2 ? `<button data-k="⌫" class="wide" aria-label="Backspace">${I.backspace}</button>` : ""}</div>`).join("")}<div class="kr"><button data-k=" " class="space">space · пробел</button></div></div>`;
}

function bindExercise(ex, root) {
  const c = C();
  const lock = () => $$(".opt, .tile, #check, .kbd button", root).forEach(b => b.disabled = true);
  if (["choice", "translate", "listen"].includes(ex.type)) {
    if (ex.type === "listen") {
      $("#play", root).onclick = () => { speak(ex.say, c.speak); $("#play", root).classList.remove("pulse-ring"); };
      $("#play-slow", root).onclick = () => speak(ex.say, c.speak, true);
      setTimeout(() => speak(ex.say, c.speak), 350);
    }
    $$(".opt", root).forEach(b => b.onclick = () => {
      lock();
      const ok = b.dataset.opt === ex.answer;
      b.classList.add(ok ? "right" : "wrong");
      if (!ok) $$(".opt", root).find(x => x.dataset.opt === ex.answer)?.classList.add("right");
      answer(ex, ok);
    });
  }
  if (ex.type === "gap") {
    const inp = $("#gap", root), btn = $("#check", root);
    const sync = () => { btn.disabled = !inp.value.trim(); inp.style.width = Math.max(6, inp.value.length + 2) + "ch"; };
    inp.addEventListener("input", sync);
    inp.addEventListener("keydown", e => { if (e.key === "Enter" && !btn.disabled) btn.click(); });
    if (c.id !== "ru") setTimeout(() => { try { inp.focus({ preventScroll: true }); } catch (e) {} }, 250);
    $$("#kbd [data-k]", root).forEach(k => k.onclick = () => {
      sfx.tap(); const v = k.dataset.k;
      inp.value = v === "⌫" ? inp.value.slice(0, -1) : inp.value + v; sync();
      k.classList.remove("press"); void k.offsetWidth; k.classList.add("press");
    });
    btn.onclick = () => {
      const ok = ex.answer.some(a => norm(a) === norm(inp.value));
      inp.readOnly = true; inp.classList.add(ok ? "right" : "wrong"); lock();
      answer(ex, ok, { typed: inp.value });
    };
  }
  if (ex.type === "order") {
    const parts = orderParts(ex.answer);
    const line = $("#line", root), btn = $("#check", root);
    const placed = [];
    const draw = () => {
      line.innerHTML = placed.map((ti, k) => `<button class="tile placed" data-pi="${k}">${esc(parts.tiles[ti])}</button>`).join("") + (placed.length === parts.tiles.length && parts.punct ? `<span class="punct">${esc(parts.punct)}</span>` : "");
      $$("[data-ti]", root).forEach(b => b.classList.toggle("used", placed.includes(+b.dataset.ti)));
      btn.disabled = placed.length !== parts.tiles.length;
      $$("[data-pi]", line).forEach(b => b.onclick = () => { sfx.tap(); placed.splice(+b.dataset.pi, 1); draw(); });
    };
    $$("[data-ti]", root).forEach(b => b.onclick = () => { if (b.classList.contains("used")) return; sfx.tap(); placed.push(+b.dataset.ti); draw(); });
    btn.onclick = () => {
      const built = norm(placed.map(i => parts.tiles[i]).join(" "));
      const accepted = [ex.answer, ...(ex.alt || [])].map(norm);
      const ok = accepted.includes(built);
      line.classList.add(ok ? "ok" : "bad"); lock();
      answer(ex, ok);
    };
  }
  if (ex.type === "speak") {
    const mic = $("#mic", root), msg = $("#mic-msg", root), heard = $("#heard", root);
    let rec = null, listening = false, tries = 0, done = false;
    const say = (t, sub) => { msg.innerHTML = `${esc(t)}${sub ? `<br><span class="sub">${esc(sub)}</span>` : ""}`; };
    const finish = (ok) => { if (done) return; done = true; try { rec && rec.abort(); } catch (e) {} answer(ex, ok); };
    $("#skip-speak", root).onclick = () => { sfx.tap(); done = true; try { rec && rec.abort(); } catch (e) {} if (!(ex.key in run.spoken)) { run.spoken[ex.key] = "skip"; run.answered++; } advance(); };
    const judge = (alts) => {
      tries++;
      let best = { score: -1 };
      alts.forEach(a => { const r = scoreSpeech(ex.say, a); if (r.score > best.score) best = r; });
      heard.innerHTML = `<div class="label">What I heard · Распознано</div><p>${best.html}</p><div class="meter"><i style="width:${Math.round(best.score * 100)}%"></i></div>`;
      if (best.score >= .8) { finish(true); return; }
      sfx.no();
      const mm = $("#ex-mascot"); if (mm) mm.innerHTML = mascot("sad", "", "", 46);
      if (tries >= 3) { say("Good effort! Listen once more and keep practising.", "Хорошая попытка! Послушай ещё раз."); setTimeout(() => finish(false), 900); }
      else say(`Almost — say the red words again (${3 - tries} ${3 - tries === 1 ? "try" : "tries"} left)`, "Почти! Повтори слова, отмеченные красным");
    };
    mic.onclick = () => {
      if (done) return;
      if (listening) { try { rec.stop(); } catch (e) {} return; }
      try { speechSynthesis.cancel(); } catch (e) {}
      rec = new SR(); rec.lang = C().speak; rec.interimResults = true; rec.maxAlternatives = 3; rec.continuous = false;
      let alts = null;
      rec.onstart = () => { listening = true; mic.classList.add("on"); say("Listening… speak now", "Слушаю… говори"); sfx.tap(); };
      rec.onresult = (e) => {
        const last = e.results[e.results.length - 1];
        heard.innerHTML = `<p class="interim">${esc(Array.from(e.results).map(r => r[0].transcript).join(" "))}</p>`;
        if (last.isFinal) alts = Array.from(last).map(a => a.transcript);
      };
      rec.onerror = (e) => {
        if (e.error === "not-allowed" || e.error === "service-not-allowed") say("The microphone is blocked. Allow microphone access for this site in your browser settings, or tap “Can't speak now”.", "Микрофон заблокирован — разреши доступ в настройках браузера.");
        else if (e.error === "no-speech") say("I didn't hear anything — tap and try again", "Ничего не слышно — попробуй ещё раз");
        else if (e.error === "network") say("Speech recognition needs internet — try again when you're online", "Нужен интернет");
      };
      rec.onend = () => { listening = false; mic.classList.remove("on"); if (alts && !done) judge(alts); };
      try { rec.start(); } catch (e) { say("Couldn't start the microphone — tap again", ""); }
    };
  }
  if (ex.type === "fix") {
    const words = ex.sentence.trim().split(/\s+/);
    const bareW = w => w.replace(/^[«"“(]+|[.,!?…:;»"”)]+$/g, "");
    const wi = words.findIndex(w => bareW(w) === ex.wrong);
    let spotted = false;
    $$(".fword", root).forEach(b => b.onclick = () => {
      const i = +b.dataset.w; $$(".fword", root).forEach(x => x.disabled = true);
      spotted = i === wi;
      if (spotted) { sfx.pop(); b.classList.add("found"); }
      else { sfx.no(); b.classList.add("miss"); $(`.fword[data-w="${wi}"]`, root).classList.add("found"); }
      $("#fixhint", root).innerHTML = spotted ? "Yes! Now choose the right word · Теперь выбери правильное слово" : "This was the wrong word. Choose the correction · Ошибка была здесь. Выбери исправление";
      $("#fixopts", root).hidden = false;
    });
    $$("#fixopts .opt", root).forEach(b => b.onclick = () => {
      lock();
      const right = b.dataset.opt === ex.answer;
      b.classList.add(right ? "right" : "wrong");
      if (!right) $$("#fixopts .opt", root).find(x => x.dataset.opt === ex.answer)?.classList.add("right");
      const fw = $(`.fword[data-w="${wi}"]`, root); if (fw) { if (ex.answer === "—") fw.classList.add("removed"); else { fw.classList.add("fixed"); fw.textContent = words[wi].replace(ex.wrong, ex.answer); } }
      answer(ex, right && spotted);
    });
  }
  if (ex.type === "sort") {
    let sel = null, mistakes = 0, placed = 0;
    const hint = $("#sorthint", root);
    $$("#pool .tile", root).forEach(b => b.onclick = () => { sfx.tap(); $$("#pool .tile", root).forEach(x => x.classList.remove("sel")); sel = b; b.classList.add("sel"); });
    $$(".bucket", root).forEach(bk => bk.onclick = () => {
      if (!sel) { bk.classList.remove("nudge"); void bk.offsetWidth; bk.classList.add("nudge"); hint.classList.add("flash"); return; }
      const it = ex.items[+sel.dataset.si];
      if (it[1] === +bk.dataset.b) {
        sfx.pop(); placed++;
        const chip = document.createElement("span"); chip.className = "chip-in"; chip.textContent = it[0];
        $(".bucket-items", bk).appendChild(chip); sel.remove(); sel = null;
        bk.classList.remove("good"); void bk.offsetWidth; bk.classList.add("good");
        if (placed === ex.items.length) setTimeout(() => answer(ex, mistakes === 0, { mistakes }), 350);
      } else {
        mistakes++; sfx.no();
        [bk, sel].forEach(x => { x.classList.remove("bad"); void x.offsetWidth; x.classList.add("bad"); });
      }
    });
  }
  if (ex.type === "scramble") {
    const filled = []; let hints = 0;
    const slots = $$(".slot", root), letters = $$(".letter", root);
    const draw = () => {
      slots.forEach((sl, i) => { const li = filled[i]; sl.textContent = li != null ? letters[li].dataset.ch : ""; sl.classList.toggle("on", li != null); });
      letters.forEach((b, k) => b.classList.toggle("used", filled.includes(k)));
      if (filled.length === ex.word.length) {
        const built = filled.map(k => letters[k].dataset.ch).join("");
        const ok = built.toLowerCase() === ex.word.toLowerCase();
        lock(); $("#slots", root).classList.add(ok ? "ok" : "bad");
        setTimeout(() => answer(ex, ok, { hints }), 250);
      }
    };
    letters.forEach((b, k) => b.onclick = () => { if (b.classList.contains("used")) return; sfx.tap(); filled.push(k); draw(); });
    slots.forEach((sl, i) => sl.onclick = () => { if (i < filled.length && filled.length < ex.word.length) { filled.splice(i); sfx.tap(); draw(); } });
    $("#clear", root).onclick = () => { filled.length = 0; draw(); };
    $("#hint", root).onclick = () => {
      // fix the prefix, then place the next correct letter
      const want = ex.word.toLowerCase();
      let okLen = 0; while (okLen < filled.length && letters[filled[okLen]].dataset.ch.toLowerCase() === want[okLen]) okLen++;
      filled.splice(okLen);
      const k = letters.findIndex((b, j) => !filled.includes(j) && b.dataset.ch.toLowerCase() === want[okLen]);
      if (k >= 0) { hints++; filled.push(k); sfx.pop(); draw(); }
    };
  }
  if (ex.type === "match") {
    let sel = null, mistakes = 0, done = 0;
    const all = $$(".match .tile", root);
    const clear = () => all.forEach(x => x.classList.remove("sel"));
    all.forEach(b => b.onclick = () => {
      if (b.classList.contains("ok")) return;
      sfx.tap();
      if (!sel || (sel.dataset.l !== undefined) === (b.dataset.l !== undefined)) { clear(); sel = b; b.classList.add("sel"); return; }
      const l = sel.dataset.l ?? b.dataset.l, r = sel.dataset.r ?? b.dataset.r;
      if (l === r) {
        [sel, b].forEach(x => { x.classList.remove("sel"); x.classList.add("ok"); x.disabled = true; });
        sfx.pop(); done++;
        speak(ex.pairs[+l][c.id === "ru" ? 0 : 0], isCyr(ex.pairs[+l][0]) ? "ru-RU" : c.id === "en" ? c.speak : "en-GB");
        if (done === ex.pairs.length) setTimeout(() => answer(ex, mistakes === 0, { matched: true, mistakes }), 350);
      } else {
        mistakes++; sfx.no();
        [sel, b].forEach(x => { x.classList.remove("sel"); x.classList.add("bad"); setTimeout(() => x.classList.remove("bad"), 400); });
      }
      sel = null;
    });
  }
}

function fullSentence(ex) {
  const c = C();
  if (ex.type === "order") return ex.answer;
  if (ex.type === "translate" || ex.type === "listen") return ex.answer;
  if (ex.type === "speak") return ex.say;
  if (ex.type === "fix") return ex.correct;
  if (ex.type === "sort") return null;
  if (ex.type === "scramble") return ex.q.includes("___") ? ex.q.split(" — ")[0].replace(/\s*\([^)]*\)\s*$/, "").replace("___", ex.word).trim() : ex.word;
  if (ex.type === "gap" || (ex.type === "choice" && ex.q.includes("___"))) {
    const ans = Array.isArray(ex.answer) ? ex.answer[0] : ex.answer;
    return ex.q.split(" — ")[0].replace(/\s*\([^)]*\)\s*$/, "").replace(/\s*\((?:[^)]*)\)/g, "").replace("___", ans).replace(/\s+([.,!?])/g, "$1").trim();
  }
  if (ex.type === "choice") {
    if (c.id === "ru" && !isCyr(ex.answer)) { const m = ex.q.match(/«([^»]+)»/); return m ? m[1] : null; }
    return ex.answer;
  }
  return null;
}
function correctText(ex) {
  if (ex.type === "gap") return ex.answer[0];
  if (ex.type === "speak") return ex.say;
  if (ex.type === "fix") return ex.correct;
  if (ex.type === "scramble") return ex.word;
  if (ex.type === "sort") return ex.buckets.map((b, bi) => `${b}: ${ex.items.filter(i => i[1] === bi).map(i => i[0]).join(", ")}`).join(" · ");
  if (ex.type === "match") return ex.pairs.map(p => `${p[0]} — ${p[1]}`).join(" · ");
  return ex.answer;
}

function answer(ex, ok, info = {}) {
  const d = D(), c = C();
  const isSpeak = ex.type === "speak";
  const firstTime = isSpeak ? !(ex.key in run.spoken) : !(ex.key in run.first);
  if (isSpeak) { if (firstTime) { run.spoken[ex.key] = ok; run.answered++; } if (ok) { run.xp += 10; addXP(10); } }
  else if (firstTime) { run.first[ex.key] = ok; run.answered++; }
  if (run.mode !== "placement" && !isSpeak) {
    const gain = ok ? (firstTime ? 10 : 5) : 0;
    if (gain) { run.xp += gain; addXP(gain); }
    if (!ok) d.mistakes[ex.key] = (d.mistakes[ex.key] || 0) + 1;
    else if (run.mode === "review" && d.mistakes[ex.key]) { delete d.mistakes[ex.key]; }
    if (!ok && firstTime && !run.retried.has(ex.key)) { run.retried.add(ex.key); run.queue.push(ex); }
    save();
  }
  ok ? sfx.ok() : sfx.no();
  // mascot reaction
  const m = $("#ex-mascot");
  const lines = CHEERS[c.id][ok ? "ok" : "no"]; const ln = pick(lines);
  if (m) m.innerHTML = mascot(ok ? "happy" : "sad", "", "", 46);
  if (ok && !reduced() && Math.random() < .35) confetti(36);
  $(".exercise")?.classList.add(ok ? "flash-ok" : "flash-no");
  const sent = fullSentence(ex);
  const showH = helpOn();
  const speakLang = sent && isCyr(sent) ? "ru-RU" : (c.id === "en" ? c.speak : "en-GB");
  const fb = document.createElement("div");
  fb.className = `feedback ${ok ? "ok" : "no"}`;
  fb.innerHTML = `<div class="inner">
      <div class="spread"><span class="hand">${esc(ln[0])} <small>${esc(ln[1])}</small></span>${run.mode !== "placement" && ok ? `<span class="xp-pop">+${isSpeak || firstTime ? 10 : 5} XP</span>` : ""}</div>
      ${!ok ? `<div class="correct"><span class="label">${esc(t("correctAnswer").main)}</span></div><div class="correct">${sent ? sayBtn(sent, speakLang) : ""}<span>${esc(["gap", "choice", "scramble"].includes(ex.type) ? (sent || correctText(ex)) : correctText(ex))}</span></div>` :
        sent ? `<div class="correct">${sayBtn(sent, speakLang)}<span>${esc(sent)}</span></div>` : ""}
      ${ex.explain ? `<p class="explain">${esc(ex.explain)}</p>` : ""}${showH && ex.explainH ? `<p class="help">${esc(ex.explainH)}</p>` : ""}
      <button class="btn block big ${ok ? "green" : "red"}" id="next">${tt("next", "on-btn")} →</button>
    </div>`;
  $(".check-bar")?.remove();
  document.body.appendChild(fb);
  bindCommon(fb);
  if (ok && sent && !isSpeak) setTimeout(() => speak(sent, speakLang), 250);
  const nb = $("#next", fb); try { nb.focus({ preventScroll: true }); } catch (e) {}
  nb.onclick = () => { sfx.tap(); fb.remove(); advance(); };
}

function advance() {
  run.idx++;
  if (run.idx >= run.queue.length) return finishRun();
  go("practice", {}, true);
}

function finishRun() {
  const d = D(), c = C();
  const scored = run.mode === "speaking" ? run.spoken : run.first;
  const keys = Object.keys(scored).filter(k => scored[k] !== "skip");
  const correct = keys.filter(k => scored[k] === true).length;
  const pct = Math.round(correct / Math.max(1, keys.length) * 100);
  const res = { mode: run.mode, correct, total: keys.length, pct, xp: run.xp, lessonId: run.lessonId };
  if (run.mode === "lesson") {
    const s = d.lessons[run.lessonId] || (d.lessons[run.lessonId] = {});
    s.learned = true; s.attempts = (s.attempts || 0) + 1;
    s.best = Math.max(s.best || 0, pct); s.stars = Math.max(s.stars || 0, starsFor(pct));
    if (pct >= 60 && !s.done) { s.done = true; addXP(20); res.xp += 20; res.unlocked = true; }
  }
  if (run.mode === "step") {
    const s = d.lessons[run.lessonId] || (d.lessons[run.lessonId] = {}); s.steps = s.steps || {};
    const ss = s.steps[run.stepId] || (s.steps[run.stepId] = {});
    ss.attempts = (ss.attempts || 0) + 1; ss.best = Math.max(ss.best || 0, pct); ss.stars = Math.max(ss.stars || 0, starsFor(pct));
    if (pct >= 60 && !ss.done) { ss.done = true; addXP(10); res.xp += 10; res.unlocked = true; }
    res.stepId = run.stepId;
  }
  if (run.mode === "game") { res.game = run.game; const g = (d.games = d.games || {}); g[run.game] = Math.max(g[run.game] || 0, pct); }
  if (run.mode === "daily") { d.daily[today()] = { score: correct, total: keys.length, pct }; addXP(30); res.xp += 30; }
  if (run.mode === "placement") {
    const byLevel = {};
    keys.forEach(k => { const lv = c.byId[c.exByKey[k].lesson].level; byLevel[lv] = byLevel[lv] || { ok: 0, n: 0 }; byLevel[lv].n++; if (run.first[k]) byLevel[lv].ok++; });
    let start = 1;
    for (const lv of c.levels.map(l => l.n)) { const b = byLevel[lv]; if (b && b.ok / b.n >= .67) start = lv + 1; else break; }
    start = Math.min(start, c.levels.length);
    d.startLevel = start; res.byLevel = byLevel; res.start = start;
  }
  save();
  run = null;
  stack = stack.filter(s => s.view !== "practice");
  go("result", res, false);
}

views.result = (r) => {
  const c = C();
  if (r.mode === "placement") {
    const lv = c.levels.find(l => l.n === r.start);
    return `<div class="stack center result">
      ${mascot("cheer", "All done!", "Готово!", 110)}
      <h1>Start at Level ${r.start}<br><span class="hand accent">${esc(lv.title)} · ${esc(lv.tag)}</span></h1>
      <div class="card stack" style="width:100%">${c.levels.map(l => { const b = r.byLevel[l.n] || { ok: 0, n: 0 }; return `<div class="spread"><span>${l.tag} · ${esc(l.title)}</span><b>${b.ok}/${b.n}</b></div><div class="bar"><i style="width:${b.n ? b.ok / b.n * 100 : 0}%"></i></div>`; }).join("")}</div>
      <p class="muted">Levels before this are marked as known — you can still open any lesson.<br><span class="sub">Предыдущие уровни отмечены как пройденные — но любой урок можно открыть.</span></p>
      <button class="btn block big" id="res-home">Let's go · Поехали →</button>
    </div>`;
  }
  const st = starsFor(r.pct);
  const L = r.lessonId && c.byId[r.lessonId];
  const idx = L ? c.lessons.indexOf(L) : -1; const nextL = idx >= 0 ? c.lessons[idx + 1] : null;
  const stamp = r.pct >= 90 ? (c.id === "en" ? "Отлично!" : "Отлично!") : r.pct >= 70 ? "Хорошо!" : r.pct >= 50 ? "Неплохо!" : "Ещё раз!";
  const sub = r.pct >= 90 ? "Excellent!" : r.pct >= 70 ? "Good job!" : r.pct >= 50 ? "Not bad!" : "Let's practise again";
  return `<div class="stack center result">
    ${mascot(r.pct >= 50 ? "cheer" : "sad", r.mode === "daily" ? "Daily check done!" : r.mode === "speaking" ? "Speaking practice done!" : r.mode === "game" ? (GAMES[r.game] ? GAMES[r.game].title : "Game over!") : r.mode === "step" && L ? `Step ${L.steps.find(x => x.id === r.stepId).n}: ${L.steps.find(x => x.id === r.stepId).title}` : L ? L.title : "Review done!", "", 110)}
    <div class="score-big"><span data-count="${r.pct}">${r.pct}</span>%</div>
    ${r.mode === "lesson" || r.mode === "step" ? `<div class="result-stars">${[0, 1, 2].map(i => `<span class="${i < st ? "on" : ""}" style="--i:${i}">★</span>`).join("")}</div>` : ""}
    <div class="stamp">${stamp}</div><span class="muted">${sub}</span>
    <div class="row center-row"><span class="chip">✅ ${r.correct}/${r.total}</span><span class="chip">✨ +${r.xp} XP</span>${r.unlocked ? `<span class="chip">🔓 ${r.mode === "step" ? "Step" : "Topic"} complete</span>` : ""}</div>
    <div class="stack" style="width:100%">
      ${r.mode === "step" ? stepResultButtons(L, r) : ""}
      ${r.mode === "game" ? `<button class="btn block big" id="again-game">↻ Play again · Ещё раз</button>` : ""}
      ${r.mode === "lesson" && r.pct >= 60 && nextL ? `<button class="btn block big" data-go="lesson" data-id="${nextL.id}">Next lesson · ${esc(nextL.title)} →</button>` : ""}
      ${r.mode === "lesson" ? `<button class="btn block ${r.pct >= 60 ? "ghost" : "big"}" id="again">↻ Practise again · Ещё раз</button>` : ""}
      ${r.mode === "lesson" ? `<button class="btn block ghost" data-go="lesson" data-id="${r.lessonId}">📖 Re-read the explanation</button>` : ""}
      <button class="btn block ghost" id="res-home">Back to the path</button>
    </div>
  </div>`;
};
function stepResultButtons(L, r) {
  const i = L.steps.findIndex(x => x.id === r.stepId); const nx = L.steps[i + 1];
  if (r.pct < 60) return `<button class="btn block big" id="again-step">↻ Practise this step again</button><button class="btn block ghost" data-goto-step="${r.stepId}">📖 Read the rule again</button>`;
  return `${nx ? `<button class="btn block big" data-goto-step="${nx.id}">Step ${nx.n}: ${esc(nx.title)} →</button>` : `<button class="btn block big" id="go-test">🏁 Take the topic test →</button>`}
    <button class="btn block ghost" id="again-step">↻ Practise this step again</button>
    <button class="btn block ghost" data-go-topic="1">Back to the topic</button>`;
}
views.result.bind = (root, r) => {
  setTimeout(() => { if (r.pct >= 70 || r.mode === "placement") { sfx.win(); confetti(140); } }, 250);
  countUp(root);
  $("#res-home", root).onclick = () => { stack = [{ view: "home", params: {} }]; render(); };
  const ag = $("#again", root); if (ag) ag.onclick = () => startRun("lesson", withSpeaking(C().byId[r.lessonId], shuffleKeepMatch(C().byId[r.lessonId].exercises)), { lessonId: r.lessonId });
  $$("[data-go='lesson']", root).forEach(b => b.onclick = () => { stack = [{ view: "home", params: {} }, { view: "lesson", params: { id: b.dataset.id } }]; render(); });
  const topicStack = () => [{ view: "home", params: {} }, { view: "lesson", params: { id: r.lessonId } }];
  $$("[data-goto-step]", root).forEach(b => b.onclick = () => { stack = topicStack().concat([{ view: "step", params: { id: r.lessonId, step: b.dataset.gotoStep } }]); render(); });
  $$("[data-go-topic]", root).forEach(b => b.onclick = () => { stack = topicStack(); render(); });
  const as = $("#again-step", root); if (as) as.onclick = () => { stack = topicStack().concat([{ view: "step", params: { id: r.lessonId, step: r.stepId } }]); render(); $("#go-step") && $("#go-step").click(); };
  const gt = $("#go-test", root); if (gt) gt.onclick = () => { stack = topicStack(); const L = C().byId[r.lessonId]; startRun("lesson", withSpeaking(L, shuffleKeepMatch(L.exercises)), { lessonId: r.lessonId }); };
  const ag2 = $("#again-game", root); if (ag2) ag2.onclick = () => { stack = [{ view: "play", params: {} }]; GAMES[r.game].start(); };
};

function startPlacement() {
  const c = C();
  const pool = [];
  c.levels.forEach(lv => {
    const ex = shuffle(c.lessons.filter(L => L.level === lv.n).flatMap(L => L.exercises.filter(e => e.type === "choice" || e.type === "translate")));
    // spread over lessons: one per lesson first
    const seen = new Set(), chosen = [];
    for (const e of ex) { if (chosen.length >= 3) break; if (!seen.has(e.lesson)) { seen.add(e.lesson); chosen.push(e); } }
    pool.push(...chosen);
  });
  startRun("placement", pool, {});
}

/* Daily check */
function dailyPool() {
  const c = C(), d = D();
  const known = c.lessons.filter(knownLesson);
  return { known, exercises: known.flatMap(L => topicItems(L)) };
}
// keep questions grouped by grammar topic (path order), so a session moves topic by topic
function byTopic(list) { const c = C(); const pos = L => c.lessons.findIndex(x => x.id === L); return list.slice().sort((a, b) => pos(a.lesson) - pos(b.lesson)); }
views.daily = () => {
  const d = D(), c = C(); const done = d.daily[today()];
  const { known } = dailyPool();
  const days = []; const dt = new Date(); dt.setDate(dt.getDate() - 13);
  for (let i = 0; i < 14; i++) { const k = dayKey(dt); days.push({ k, d: dt.getDate(), v: d.daily[k] }); dt.setDate(dt.getDate() + 1); }
  return `
  <header class="page-head"><h1>${tt("dailyCheck")}</h1></header>
  ${done ? `<div class="card stack center done-card">${mascot("happy", `Today: ${done.score}/${done.total}`, "Сегодня проверка пройдена", 84)}
      <p class="muted">Come back tomorrow to keep your streak 🔥 · Возвращайся завтра!</p>
      <button class="btn ghost" id="more">Extra practice · Ещё практика</button></div>`
  : known.length ? `<div class="card hero stack center">${mascot("idle", "10 questions from your lessons", "10 вопросов из пройденных уроков", 84)}
      <p class="muted">Mistakes you've made before come back here so they stick.</p>
      <button class="btn block big" id="start-daily">Start today's check · Начать</button></div>`
  : `<div class="card stack center">${mascot("idle", "Finish your first lesson", "Сначала пройди первый урок", 84)}<button class="btn" data-go="lesson" data-id="${nextLesson()?.id || c.lessons[0].id}">Go to lesson →</button></div>`}
  ${known.length || C().lessons.length ? `<button class="card speak-mode" id="start-speaking">
    <span class="mic small-mic">${I.mic}</span>
    <span class="t"><b>Speaking practice <span class="sub">${C().id === "ru" ? "Говорим по-русски" : "Говорим по-английски"}</span></b><span class="muted small">${SR ? "6 sentences to say out loud — I'll check your pronunciation" : "This browser can't listen. Try Chrome on Android or Safari on iPhone."}</span></span>
  </button>` : ""}
  <section class="card stack">
    <span class="label">Last 14 days · Последние 14 дней</span>
    <div class="chart">${days.map(x => `<div class="col" title="${x.k}"><div class="b ${x.v ? "" : "none"}" style="height:${x.v ? Math.max(6, x.v.pct) : 3}%"></div></div>`).join("")}</div>
    <div class="chart-x">${days.map(x => `<span>${x.d}</span>`).join("")}</div>
  </section>`;
};
views.daily.bind = (root) => {
  const go1 = () => {
    const d = D(), c = C(); const { exercises } = dailyPool();
    const mk = shuffle(Object.keys(d.mistakes).filter(k => c.exByKey[k]).map(k => c.exByKey[k])).slice(0, 4);
    // focus on at most 3 topics per day: mistakes first, then the most recent topics
    const recent = c.lessons.filter(knownLesson).slice(-3).map(L => L.id);
    const topics = [...new Set([...mk.map(e => e.lesson), ...recent])].slice(0, 3);
    const rest = shuffle(exercises.filter(e => !mk.includes(e) && e.type !== "match" && topics.includes(e.lesson))).slice(0, 10 - mk.length);
    startRun("daily", byTopic([...mk, ...rest]));
  };
  $("#start-daily", root) && ($("#start-daily", root).onclick = go1);
  const sk = $("#start-speaking", root);
  if (sk) sk.onclick = () => {
    if (!SR) { toast("Speech recognition isn't available in this browser"); return; }
    if (P().speakOn === false) { toast("Turn on speaking exercises in Me → Settings"); return; }
    const c = C(); const { known } = dailyPool();
    const src = known.length ? known : [nextLesson() || c.lessons[0]];
    const items = shuffle(src.flatMap(L => speakItems(L, 3))).slice(0, 6);
    startRun("speaking", items);
  };
  $("#more", root) && ($("#more", root).onclick = () => { const { exercises } = dailyPool(); startRun("extra", byTopic(shuffle(exercises.filter(e => e.type !== "match")).slice(0, 10))); });
};

/* Review mistakes */
views.review = () => {
  const d = D(), c = C();
  const keys = Object.keys(d.mistakes).filter(k => c.exByKey[k]);
  const byLesson = {};
  keys.forEach(k => { const L = c.byId[c.exByKey[k].lesson]; byLesson[L.id] = (byLesson[L.id] || 0) + 1; });
  return `
  <header class="page-head"><h1>${tt("mistakes")}</h1></header>
  ${keys.length ? `<div class="card hero stack center">${mascot("idle", `${keys.length} to fix`, "Давай исправим ошибки", 84)}
     <p class="muted">Get one right here and it leaves this list. · Правильный ответ убирает её из списка.</p>
     <button class="btn block big" id="start-review">Practise my mistakes · Начать</button></div>
     <section class="stack"><span class="label">By lesson</span>${Object.entries(byLesson).sort((a, b) => b[1] - a[1]).map(([id, n]) => `<button class="lesson-row" data-go="lesson" data-id="${id}"><span class="em">${c.byId[id].emoji}</span><span class="t"><b>${esc(c.byId[id].title)}</b>${helpOn() ? `<span>${esc(c.byId[id].sub)}</span>` : ""}</span><span class="end"><span class="mcount">${n}</span></span></button>`).join("")}</section>`
  : `<div class="card stack center">${mascot("happy", "No mistakes to fix!", "Ошибок нет — умница!", 90)}<p class="muted">Wrong answers from lessons and daily checks will collect here.</p></div>`}`;
};
views.review.bind = (root) => {
  const b = $("#start-review", root);
  if (b) b.onclick = () => { const d = D(), c = C(); startRun("review", byTopic(shuffle(Object.keys(d.mistakes).filter(k => c.exByKey[k]).map(k => c.exByKey[k])).slice(0, 10))); };
};

/* ---------- play: games & tools ---------- */
let timers = [];
function stopTimers() { timers.forEach(t => { clearInterval(t); clearTimeout(t); cancelAnimationFrame(t); }); timers = []; }
function playPool() {
  const c = C(), p = P();
  const topic = p.playTopic || "all";
  let lessons = topic !== "all" && c.byId[topic] ? [c.byId[topic]] : c.lessons.filter(knownLesson);
  let fallback = false;
  if (!lessons.length) { fallback = true; const nx = nextLesson() || c.lessons[0]; lessons = c.lessons.filter(L => L.level === nx.level).slice(0, 3); }
  const all = L => L.exercises.concat(L.steps.flatMap(st => st.exercises));
  const items = lessons.flatMap(L => topic !== "all" || fallback ? all(L) : topicItems(L));
  // a wider pool for games that need more material: her topics in full + the rest of her current level
  const lvl = (nextLesson() || lessons[lessons.length - 1] || c.lessons[0]).level;
  const wideL = topic !== "all" ? lessons : [...new Set([...lessons, ...c.lessons.filter(L => L.level === lvl)])];
  const wide = wideL.flatMap(all);
  return { lessons, items, wide, topic };
}
// pick from her own topics first; top up from the wider pool if there aren't enough
function gameItems(filter, min) { const { items, wide } = playPool(); const a = items.filter(filter); return a.length >= min ? a : [...new Set(a.concat(wide.filter(filter)))]; }
const IV = () => window.IRREGULAR_VERBS || [];
function verbQuiz(n = 10) {
  const vs = shuffle(IV().slice(0, 70)).slice(0, n);
  return vs.map(([base, past, pp, ru], i) => {
    const kind = i % 4 === 3 ? "pp" : "past";
    const form = kind === "past" ? past : pp;
    const explain = `${base} – ${past} – ${pp}`;
    const lesson = kind === "past" ? "past-simple" : "present-perfect";
    if (i % 2 === 0) {
      const others = shuffle(IV().filter(v => v[0] !== base)).slice(0, 2).map(v => kind === "past" ? v[1] : v[2]);
      const opts = [...new Set([form, kind === "past" ? pp : past, base.replace(/e$/, "") + "ed", ...others])].filter(Boolean).slice(0, 4);
      if (!opts.includes(form)) opts[0] = form;
      return { type: "choice", q: `${kind === "past" ? "Past Simple" : "Past participle"} of “${base}” (${ru})`, options: opts, answer: form, explain, explainH: ru, key: `verbs:${base}:${kind}`, lesson };
    }
    return { type: "gap", q: `${base} → ${kind === "past" ? "past" : "participle"}: ___ (${ru})`, answer: form.split(" / "), explain, explainH: ru, key: `verbs:${base}:${kind}g`, lesson };
  });
}
function scrambleItems(items) {
  return items.filter(e => e.type === "gap" && /^[A-Za-zА-Яа-яЁё']{3,10}$/.test(e.answer[0]))
    .map(e => ({ type: "scramble", q: e.q, word: e.answer[0], key: e.key + "~scr", lesson: e.lesson, step: e.step, explain: e.explain, explainH: e.explainH }));
}
function memoryPairs() {
  const L = new Set(), R = new Set(), out = [];
  shuffle(gameItems(e => e.type === "match", 3).flatMap(e => e.pairs)).forEach(([a, b]) => { const ka = a.toLowerCase(), kb = b.toLowerCase(); if (!L.has(ka) && !R.has(kb) && !L.has(kb) && !R.has(ka) && a.length < 28 && b.length < 28) { L.add(ka); R.add(kb); out.push([a, b]); } });
  if (out.length < 6 && C().id === "en") shuffle(IV().slice(0, 40)).forEach(v => { if (out.length < 6 && !L.has(v[0]) && !R.has(v[1])) { L.add(v[0]); R.add(v[1]); out.push([v[0], v[1]]); } });
  return out.slice(0, 6);
}
function speedPool() {
  let pool = gameItems(e => (e.type === "choice" || e.type === "translate") && e.options.length <= 4, 12);
  if (pool.length < 12 && C().id === "en") pool = pool.concat(verbQuiz(20).filter(e => e.type === "choice"));
  return pool;
}
const GAMES = {
  speed: { emoji: "⚡", title: "Speed Run", sub: "60 seconds — how many can you get right?", subH: "60 секунд — сколько успеешь?", subPt: "60 segundos — quantas consegues?", ok: () => speedPool().length >= 6, start: () => go("speed"), best: g => g.speedBest ? `Best: ${g.speedBest}` : "" },
  memory: { emoji: "🃏", title: "Memory Match", sub: "Flip the cards and find the pairs", subH: "Переворачивай карточки и находи пары", subPt: "Vira as cartas e encontra os pares", ok: () => memoryPairs().length >= 4, start: () => go("memory"), best: g => g.memoryBest ? `Best: ${g.memoryBest} moves` : "" },
  mistakes: { en: true, emoji: "🔍", title: "Spot the Mistake", sub: "Find the wrong word and fix it", subH: "Найди ошибку и исправь её", ok: () => gameItems(e => e.type === "fix", 8).length >= 3, start: () => startRun("game", byTopic(shuffle(gameItems(e => e.type === "fix", 8)).slice(0, 10)), { game: "mistakes" }), best: g => g.mistakes ? `Best: ${g.mistakes}%` : "" },
  scramble: { emoji: "🔤", title: "Word Scramble", sub: "Put the letters in order", subH: "Собери слово из букв", subPt: "Ordena as letras da palavra", ok: () => scrambleItems(gameItems(e => e.type === "gap", 12)).length >= 3, start: () => startRun("game", byTopic(shuffle(scrambleItems(gameItems(e => e.type === "gap", 12))).slice(0, 8)), { game: "scramble" }), best: g => g.scramble ? `Best: ${g.scramble}%` : "" },
  sort: { en: true, emoji: "🧺", title: "Sort It", sub: "Drop each word into the right box", subH: "Разложи слова по коробкам", ok: () => gameItems(e => e.type === "sort", 3).length >= 1, start: () => startRun("game", byTopic(shuffle(gameItems(e => e.type === "sort", 3)).slice(0, 6)), { game: "sort" }), best: g => g.sort ? `Best: ${g.sort}%` : "" },
  verbs: { emoji: "🏋️", title: "Irregular Verbs Gym", sub: "go – went – gone: 10 quick reps", subH: "Неправильные глаголы", en: true, ok: () => IV().length > 10, start: () => startRun("game", verbQuiz(10), { game: "verbs" }), best: g => g.verbs ? `Best: ${g.verbs}%` : "" },
  letters: { emoji: "🔠", title: "Letter Sounds", sub: "Read Cyrillic letters fast", subH: "Lê as letras russas", ru: true, ok: () => (window.RU_ALPHABET || []).length > 0, start: () => startRun("game", letterQuiz(), { game: "letters" }), best: g => g.letters ? `Best: ${g.letters}%` : "" }
};
function letterQuiz() {
  const A = (window.RU_ALPHABET || []).filter(a => a[2] !== "—" && a[2] !== "ʲ");
  return shuffle(A).slice(0, 10).map((a, i) => {
    if (i % 2) { const opts = shuffle([a[2], ...shuffle(A.filter(x => x[2] !== a[2])).slice(0, 3).map(x => x[2])]);
      return { type: "choice", q: `Which sound does «${a[0]} ${a[1]}» make?`, options: opts, answer: a[2], explain: `${a[0]} ${a[1]} = “${a[2]}” — ${a[3]}. Example: ${a[4]} (${a[5]}) = ${a[6]}.`, key: `abc:${a[0]}:s` }; }
    const opts = shuffle([a[4], ...shuffle(A.filter(x => x[4] !== a[4])).slice(0, 2).map(x => x[4])]);
    return { type: "listen", say: a[4], options: opts, answer: a[4], explain: `${a[4]} (${a[5]}) = ${a[6]}`, key: `abc:${a[0]}:l` };
  });
}
function gameList() { const c = C(); return Object.entries(GAMES).filter(([, g]) => (!g.en || c.id === "en") && (!g.ru || c.id === "ru")); }

views.play = () => {
  const c = C(), p = P(), d = D(), g = d.games || {}; const { topic } = playPool();
  const showH = helpOn();
  return `
  <header class="page-head"><h1>Play & practise <span class="hand accent">Играй и учись</span></h1></header>
  <label class="topic-select card"><span class="label">Practise · Что тренируем</span>
    <select id="pl-topic">
      <option value="all" ${topic === "all" ? "selected" : ""}>Everything I've studied</option>
      ${c.levels.map(lv => `<optgroup label="${esc(t("level").main)} ${lv.n} · ${esc(lv.title)}">${c.lessons.filter(L => L.level === lv.n).map(L => `<option value="${L.id}" ${topic === L.id ? "selected" : ""}>${L.emoji} ${esc(L.title)}</option>`).join("")}</optgroup>`).join("")}
    </select>
  </label>
  <div class="game-grid">
    ${gameList().map(([id, gm], i) => { const ok = gm.ok(); return `<button class="game-card ${ok ? "" : "off"}" data-game="${id}" style="--i:${i}" ${ok ? "" : "disabled"}>
      <span class="game-emoji">${gm.emoji}</span><b>${esc(gm.title)}</b><span class="gs">${esc(gm.sub)}</span>${showH ? `<span class="sub">${esc(c.id === "ru" ? (gm.subPt || gm.subH) : gm.subH)}</span>` : ""}
      <span class="best">${ok ? esc(gm.best(g)) : topic === "all" ? "Unlocks after a few more lessons" : "Not for this topic"}</span></button>`; }).join("")}
  </div>
  <h2 class="tools-title">Tools · Полезное</h2>
  <div class="stack">
    ${c.id === "en" ? `
    <button class="card tool-card" data-go="tenses"><span class="em">🕰️</span><span class="t"><b>All the tenses</b><span class="muted small">Timelines, forms and examples on one page${showH ? " · Все времена на одной странице" : ""}</span></span><span class="go-arrow">→</span></button>
    <button class="card tool-card" data-go="verbs"><span class="em">📒</span><span class="t"><b>Irregular verbs</b><span class="muted small">${IV().length} verbs with audio and Russian${showH ? " · Таблица неправильных глаголов" : ""}</span></span><span class="go-arrow">→</span></button>`
    : `<button class="card tool-card" data-go="alphabet"><span class="em">🔤</span><span class="t"><b>Russian alphabet</b><span class="muted small">All 33 letters with sounds and audio · O alfabeto russo</span></span><span class="go-arrow">→</span></button>`}
    <button class="card tool-card" id="speak-tool"><span class="em">🎙️</span><span class="t"><b>Speaking practice</b><span class="muted small">Say sentences aloud — I check your pronunciation</span></span><span class="go-arrow">→</span></button>
  </div>`;
};
views.play.bind = (root) => {
  $("#pl-topic", root).onchange = e => { P().playTopic = e.target.value; save(); render(); };
  $$("[data-game]", root).forEach(b => b.onclick = () => { sfx.tap(); GAMES[b.dataset.game].start(); });
  $("#speak-tool", root).onclick = () => { stack = [{ view: "daily", params: {} }]; render(); const b = $("#start-speaking"); b && b.click(); };
};

/* Speed Run */
views.speed = () => `
  <header class="practice-top">
    <button class="icon-btn" id="quit" aria-label="Quit">${I.close}</button>
    <div class="bar timer"><i id="tbar" style="width:100%"></i></div>
    <span class="count" id="tleft">60</span>
  </header>
  <div class="speed-head"><div><span class="label">Score</span><b id="sc" class="speed-score">0</b></div><span id="combo" class="combo"></span></div>
  <div id="sq" class="exercise speed-q"></div>`;
views.speed.bind = (root) => {
  const pool = shuffle(speedPool()); const d = D(); const g = (d.games = d.games || {});
  let score = 0, combo = 0, qi = 0, ended = false; const T = 60, t0 = performance.now();
  $("#quit", root).onclick = () => { stopTimers(); stack = [{ view: "play", params: {} }]; render(); };
  const sq = $("#sq", root);
  const show = () => {
    if (ended) return;
    const ex = pool[qi++ % pool.length];
    const prompt = ex.type === "translate" ? `<p class="prompt meaning">${esc(ex.meaning)}</p>` : `<p class="prompt">${blankify(ex.q)}</p>`;
    sq.innerHTML = `${topicChip(ex)}${prompt}<div class="options">${shuffle(ex.options).map(o => `<button class="opt" data-opt="${esc(o)}">${esc(o)}</button>`).join("")}</div>`;
    sq.classList.remove("pop-in"); void sq.offsetWidth; sq.classList.add("pop-in");
    $$(".opt", sq).forEach(b => b.onclick = () => {
      $$(".opt", sq).forEach(x => x.disabled = true);
      const ok = b.dataset.opt === ex.answer;
      if (ok) { combo++; score += combo >= 3 ? 2 : 1; sfx.ok(); b.classList.add("right"); }
      else { combo = 0; sfx.no(); b.classList.add("wrong"); $$(".opt", sq).find(x => x.dataset.opt === ex.answer)?.classList.add("right"); if (C().exByKey[ex.key]) { d.mistakes[ex.key] = (d.mistakes[ex.key] || 0) + 1; } }
      $("#sc", root).textContent = score; const sc = $("#sc", root); sc.classList.remove("bump"); void sc.offsetWidth; sc.classList.add("bump");
      $("#combo", root).textContent = combo >= 3 ? `🔥 x2 combo ${combo}` : "";
      timers.push(setTimeout(show, ok ? 220 : 900));
    });
  };
  const tick = () => {
    if (ended) return;
    const left = Math.max(0, T - (performance.now() - t0) / 1000);
    $("#tbar", root).style.width = (left / T * 100) + "%"; $("#tleft", root).textContent = Math.ceil(left);
    $("#tbar", root).classList.toggle("low", left < 10);
    if (left <= 0) return finish();
    timers.push(requestAnimationFrame(tick));
  };
  const finish = () => {
    ended = true; stopTimers();
    const best = g.speedBest || 0, isBest = score > best; if (isBest) g.speedBest = score;
    if (score) addXP(Math.min(score, 40)); else save();
    sq.innerHTML = `<div class="stack center">${mascot(score >= 10 ? "cheer" : "happy", `${score} ${score === 1 ? "point" : "points"}!`, isBest ? "New best! · Новый рекорд!" : `Best: ${Math.max(best, score)}`, 100)}
      <div class="row center-row"><span class="chip">✨ +${Math.min(score, 40)} XP</span></div>
      <button class="btn block big" id="sp-again">↻ Play again · Ещё раз</button><button class="btn block ghost" id="sp-back">Back to games</button></div>`;
    $("#combo", root).textContent = "";
    if (isBest && score) { sfx.win(); confetti(120); }
    $("#sp-again", root).onclick = () => render();
    $("#sp-back", root).onclick = () => { stack = [{ view: "play", params: {} }]; render(); };
  };
  show(); tick();
};

/* Memory Match */
views.memory = () => `
  <header class="practice-top">
    <button class="icon-btn" id="quit" aria-label="Quit">${I.close}</button>
    <span class="label grow">Memory Match · Найди пары</span>
    <span class="count" id="moves">0 moves</span>
  </header>
  <div class="mem-grid" id="mem"></div>`;
views.memory.bind = (root) => {
  const pairs = memoryPairs(); const d = D(); const g = (d.games = d.games || {});
  const cards = shuffle(pairs.flatMap((pr, i) => [{ t: pr[0], pid: i, side: 0 }, { t: pr[1], pid: i, side: 1 }]));
  const grid = $("#mem", root);
  grid.innerHTML = cards.map((cd, k) => `<button class="mem-card" data-k="${k}" style="--i:${k}"><span class="face back">?</span><span class="face front ${cd.side ? "alt" : ""}">${esc(cd.t)}</span></button>`).join("");
  let open = [], moves = 0, found = 0, lockB = false;
  $("#quit", root).onclick = () => { stack = [{ view: "play", params: {} }]; render(); };
  $$(".mem-card", grid).forEach(b => b.onclick = () => {
    if (lockB || b.classList.contains("flip") || b.classList.contains("done")) return;
    sfx.tap(); b.classList.add("flip"); open.push(b);
    if (open.length < 2) return;
    moves++; $("#moves", root).textContent = `${moves} moves`;
    const [a, c2] = open.map(x => cards[+x.dataset.k]);
    if (a.pid === c2.pid) {
      open.forEach(x => x.classList.add("done")); open = []; found++; sfx.pop();
      const txt = a.side === 0 ? a.t : c2.t; speak(txt, isCyr(txt) ? "ru-RU" : C().id === "en" ? C().speak : "en-GB");
      if (found === pairs.length) {
        const best = g.memoryBest || 0, isBest = !best || moves < best; if (isBest) g.memoryBest = moves; addXP(15);
        timers.push(setTimeout(() => {
          sfx.win(); confetti(120);
          grid.insertAdjacentHTML("afterend", `<div class="stack center mem-done">${mascot("cheer", `All pairs in ${moves} moves!`, isBest ? "New best! · Новый рекорд!" : `Best: ${best} moves`, 90)}<button class="btn block big" id="mm-again">↻ Play again</button><button class="btn block ghost" id="mm-back">Back to games</button></div>`);
          $("#mm-again", root).onclick = () => render();
          $("#mm-back", root).onclick = () => { stack = [{ view: "play", params: {} }]; render(); };
        }, 500));
      }
    } else {
      lockB = true; sfx.no();
      const pair = open; open = [];
      timers.push(setTimeout(() => { pair.forEach(x => x.classList.remove("flip")); lockB = false; }, 850));
    }
  });
};

/* Tools: irregular verbs table */
views.verbs = () => `
  <header class="lesson-head"><button class="icon-btn" data-back aria-label="Back">${I.back}</button><h1>Irregular verbs <span class="hand accent">Неправильные глаголы</span></h1></header>
  <label class="search"><span>${I.search}</span><input id="v-q" type="search" placeholder="Search: go, бежать…" autocomplete="off"></label>
  <div class="table-wrap verbs-table"><table><thead><tr><th></th><th>Base</th><th>Past</th><th>Participle</th><th>Русский</th></tr></thead><tbody>
    ${IV().map(v => `<tr data-s="${esc(v.join(" ").toLowerCase())}"><td>${sayBtn(`${v[0]}, ${v[1].replace(" / ", ", ")}, ${v[2].replace(" / ", ", ")}`, "en-GB")}</td><td><b>${esc(v[0])}</b></td><td>${esc(v[1])}</td><td>${esc(v[2])}</td><td class="muted">${esc(v[3])}</td></tr>`).join("")}
  </tbody></table></div>
  <button class="btn block" id="v-gym">🏋️ Practise 10 verbs</button>`;
views.verbs.bind = (root) => {
  $("#v-q", root).oninput = e => { const q = e.target.value.trim().toLowerCase(); $$("tbody tr", root).forEach(tr => tr.hidden = q && !tr.dataset.s.includes(q)); };
  $("#v-gym", root).onclick = () => GAMES.verbs.start();
};

/* Tools: tenses cheat sheet */
function timelineSVG(kind) {
  const W = 300, Y = 34, N = 200; // NOW at x=200
  const x = (v) => v;
  const wave = (a, b) => { let d = `M${a} ${Y}`; for (let i = a; i < b; i += 10) d += ` q5 -7 10 0`; return `<path d="${d}" class="tl-act" fill="none"/>`; };
  const cross = (cx) => `<path d="M${cx - 6} ${Y - 6} l12 12 M${cx + 6} ${Y - 6} l-12 12" class="tl-act"/>`;
  const dot = (cx, filled = true) => `<circle cx="${cx}" cy="${Y}" r="5" class="${filled ? "tl-dot" : "tl-ring"}"/>`;
  const marks = {
    "habit": [60, 100, 140, 180, 220, 260].map(cross).join(""),
    "now": wave(170, 230),
    "period": wave(150, 250),
    "point": cross(90),
    "past-progress": wave(60, 130) + dot(100, false),
    "before-point": cross(70) + dot(130, false) + `<path d="M82 ${Y - 16} q24 -12 44 6" class="tl-arrow" fill="none"/>`,
    "past-before-progress": wave(50, 120) + dot(125, false),
    "up-to-now": cross(110) + `<path d="M110 ${Y - 10} q45 -24 90 -2" class="tl-arrow" fill="none"/>`,
    "up-to-now-continuous": wave(90, 200),
    "future-point": cross(260),
    "future-progress": wave(235, 290) + dot(260, false),
    "future-before": cross(235) + dot(275, false)
  };
  return `<svg class="timeline" viewBox="0 0 ${W} 58" role="img" aria-label="timeline">
    <line x1="8" y1="${Y}" x2="${W - 8}" y2="${Y}" class="tl-line"/><path d="M${W - 14} ${Y - 5} l6 5 -6 5" class="tl-line" fill="none"/>
    <line x1="${N}" y1="${Y - 14}" x2="${N}" y2="${Y + 14}" class="tl-now"/>
    <text x="${N}" y="56" class="tl-txt" text-anchor="middle">NOW</text><text x="14" y="56" class="tl-txt">past</text><text x="${W - 14}" y="56" class="tl-txt" text-anchor="end">future</text>
    ${marks[kind] || ""}</svg>`;
}
views.tenses = () => {
  const T = window.TENSES || []; const c = C(); const showH = helpOn();
  const groups = [["present", "Present · Настоящее"], ["past", "Past · Прошедшее"], ["future", "Future · Будущее"]];
  return `<header class="lesson-head"><button class="icon-btn" data-back aria-label="Back">${I.back}</button><h1>All the tenses <span class="hand accent">Все времена</span></h1></header>
  <div class="tense-jump">${T.map(tn => `<a href="#t-${tn.id}" class="chip">${esc(tn.name)}</a>`).join("")}</div>
  ${groups.map(([gid, gname]) => `<h2 class="tools-title">${gname}</h2>
    ${T.filter(tn => tn.group === gid).map(tn => `<section class="card stack tense-card" id="t-${tn.id}">
      <div><h2>${esc(tn.name)}</h2>${showH ? `<span class="sub">${esc(tn.nameRu)}</span>` : ""}</div>
      ${timelineSVG(tn.timeline)}
      <p>${esc(tn.use)}</p>${showH ? `<p class="help">${esc(tn.useRu)}</p>` : ""}
      <div class="forms"><div><span class="fsign">+</span>${esc(tn.forms.pos)}</div><div><span class="fsign">−</span>${esc(tn.forms.neg)}</div><div><span class="fsign">?</span>${esc(tn.forms.q)}</div></div>
      ${tn.signals && tn.signals.length ? `<div class="row signals">${tn.signals.map(sg => `<span class="chip small-chip">${esc(sg)}</span>`).join("")}</div>` : ""}
      ${examplesHTML(tn.examples.map(e => ({ main: e.en, sub: e.ru })), c.speak)}
      ${showH && tn.ruNote ? `<p class="help">💡 ${esc(tn.ruNote)}</p>` : ""}
      ${tn.lesson && c.byId[tn.lesson] ? `<button class="btn ghost small" data-go="lesson" data-id="${tn.lesson}">Open the lesson →</button>` : ""}
    </section>`).join("")}`).join("")}`;
};
views.tenses.bind = (root) => {
  $$(".tense-jump a", root).forEach(a => a.onclick = e => { e.preventDefault(); const el = document.querySelector(a.getAttribute("href")); el && el.scrollIntoView({ behavior: reduced() ? "auto" : "smooth", block: "start" }); });
};

/* Tools: Russian alphabet */
views.alphabet = () => `
  <header class="lesson-head"><button class="icon-btn" data-back aria-label="Back">${I.back}</button><h1>Russian alphabet <span class="hand accent">Алфавит</span></h1></header>
  <p class="muted">Tap a letter to hear its example word. · Toca numa letra para ouvir.</p>
  <div class="abc-grid">${(window.RU_ALPHABET || []).map((a, i) => `<button class="abc" data-say="${esc(a[4])}" data-lang="ru-RU" style="--i:${i}">
    <span class="abc-l">${esc(a[0])}${esc(a[1])}</span><span class="abc-s">${esc(a[2])}</span><span class="abc-w">${esc(a[4])}</span><span class="abc-m">${esc(a[6])}</span></button>`).join("")}</div>
  <div class="stack">${(window.RU_ALPHABET || []).map(a => `<div class="abc-row"><b>${esc(a[0])} ${esc(a[1])}</b><span>${esc(a[3])}</span><span class="muted">${esc(a[4])} · ${esc(a[5])} · ${esc(a[6])}</span></div>`).join("")}</div>
  <button class="btn block" id="abc-game">🔠 Practise the letters</button>`;
views.alphabet.bind = (root) => { $("#abc-game", root).onclick = () => GAMES.letters.start(); };

/* ---------- install the app ---------- */
let installEvt = null;
window.addEventListener("beforeinstallprompt", e => { e.preventDefault(); installEvt = e; softRender(); });
window.addEventListener("appinstalled", () => { installEvt = null; toast("Installed ✓ · Установлено"); softRender(); });
const isStandalone = () => (window.matchMedia && matchMedia("(display-mode: standalone)").matches) || navigator.standalone === true;
const isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
const inFrame = (() => { try { return window.self !== window.top; } catch (e) { return true; } })();
function canInstall() { return !isStandalone() && !inFrame; }
async function doInstall() {
  if (installEvt) { installEvt.prompt(); try { const r = await installEvt.userChoice; if (r.outcome === "accepted") toast("Installing… · Устанавливаем…"); } catch (e) {} installEvt = null; render(); }
  else go("installHelp");
}
function installBanner() {
  let hidden = false; try { hidden = localStorage.getItem("sbs.hideInstall") === "1"; } catch (e) {}
  if (!canInstall() || hidden) return "";
  return `<div class="card install-card"><span class="em">${I.install}</span><span class="t"><b>Install Step by Step</b><span class="muted small">Opens like an app, works offline · Установи как приложение</span></span>
    <span class="row"><button class="btn small" id="inst-go">Install</button><button class="icon-btn small-x" id="inst-x" aria-label="Hide">${I.close}</button></span></div>`;
}
views.installHelp = () => `
  <header class="lesson-head"><button class="icon-btn" data-back aria-label="Back">${I.back}</button><h1>Install the app <span class="hand accent">Установка</span></h1></header>
  ${mascot("cheer", "Put me on your home screen!", "Добавь меня на главный экран", 80)}
  ${isIOS() ? `<ol class="card stack how">
    <li><b>Open this page in Safari.</b> <span class="sub">Открой страницу в Safari.</span></li>
    <li><b>Tap Share</b> <span class="inl">${I.share}</span> at the bottom of the screen. <span class="sub">Нажми «Поделиться».</span></li>
    <li><b>Choose “Add to Home Screen”</b>, then <b>Add</b>. <span class="sub">Выбери «На экран „Домой“», затем «Добавить».</span></li>
  </ol>` : `<ol class="card stack how">
    <li><b>Open this page in Chrome.</b> <span class="sub">Открой страницу в Chrome.</span></li>
    <li><b>Tap the ⋮ menu</b> at the top right. <span class="sub">Нажми ⋮ в правом верхнем углу.</span></li>
    <li><b>Choose “Install app”</b> (or “Add to Home screen”), then <b>Install</b>. <span class="sub">Выбери «Установить приложение».</span></li>
  </ol>`}
  <p class="muted small">The app gets its own icon, opens full-screen and keeps working without internet. Your progress stays the same.</p>`;

/* Cloud sign-in */
let cloudEmail = "", cloudStep = "password", cloudMsg = "", cloudInfo = "";
views.cloud = () => {
  if (!Sync.available) return `<header class="lesson-head"><button class="icon-btn" data-back aria-label="Back">${I.back}</button><h1>Cloud sync</h1></header>
    <div class="card stack">${mascot("idle", "Sync works in the installed app", "Синхронизация работает в установленном приложении", 72)}<p class="muted">Open the app from its own web address (your Vercel link) to sign in and keep progress safe across phones.</p></div>`;
  const u = Sync.user;
  return `
  <header class="lesson-head"><button class="icon-btn" data-back aria-label="Back">${I.back}</button><h1>Cloud sync <span class="hand accent">Облако</span></h1></header>
  ${u ? `<div class="card stack center">
      ${mascot("happy", "Your progress is backed up", "Прогресс сохранён в облаке", 84)}
      <p>Signed in as <b>${esc(u.email || "")}</b></p>
      <p class="muted small">${Sync.st.state === "error" ? `⚠️ ${esc(Sync.st.error)}` : Sync.st.last ? `Last synced ${Sync.st.last.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}` : "Syncing…"}</p>
      <div class="row center-row"><button class="btn small" id="c-sync">Sync now · Синхронизировать</button><button class="btn ghost small" id="c-out">Sign out</button></div>
      <p class="muted small">Sign in with the same email on another phone and everyone's progress appears there too.<br><span class="sub">Войди с той же почтой на другом телефоне — и весь прогресс появится там.</span></p>
    </div>
    <section class="card stack" id="backups">
      <div class="spread"><b>Backups <span class="sub">Резервные копии</span></b><button class="btn small" id="c-backup">Back up now</button></div>
      <p class="muted small">A copy is saved automatically every day you practise. Restore one if progress ever goes missing.<br><span class="sub">Копия сохраняется автоматически каждый день.</span></p>
      <div id="b-list" class="b-list"><p class="muted small">Loading backups…</p></div>
    </section>`
  : Sync.st.recovery ? `<div class="card stack">
      ${mascot("idle", "Choose a new password", "Придумай новый пароль", 70)}
      <label class="label" for="c-np">New password · Новый пароль</label>
      <input id="c-np" class="text-input" type="password" autocomplete="new-password" minlength="6" placeholder="At least 6 characters">
      <button class="btn block big" id="c-setpw">Save password · Сохранить</button>
      ${cloudMsg ? `<p class="form-msg">${esc(cloudMsg)}</p>` : ""}
    </div>`
  : `<div class="card stack">
      ${mascot("idle", "Keep progress safe on every phone", "Сохраняй прогресс на всех телефонах", 76)}
      <div class="seg" role="tablist">
        <button class="${cloudStep !== "link" ? "on" : ""}" data-mode="password">Email + password</button>
        <button class="${cloudStep === "link" ? "on" : ""}" data-mode="link">Email link</button>
      </div>
      <label class="label" for="c-email">Email · Почта</label>
      <input id="c-email" class="text-input" type="email" inputmode="email" autocomplete="email" placeholder="you@example.com" value="${esc(cloudEmail)}">
      ${cloudStep !== "link" ? `
        <label class="label" for="c-pw">Password · Пароль</label>
        <input id="c-pw" class="text-input" type="password" autocomplete="current-password" placeholder="At least 6 characters">
        <button class="btn block big" id="c-in">Sign in · Войти</button>
        <div class="row center-row"><button class="btn ghost small" id="c-up">Create account · Создать аккаунт</button><button class="linkish" id="c-forgot">Forgot password?</button></div>
        <p class="muted small">Works everywhere, including the app on your home screen. Use one account for the family, or one each.<br><span class="sub">Работает везде, в том числе в установленном приложении.</span></p>`
      : `
        <button class="btn block big" id="c-link">Email me a sign-in link</button>
        <p class="muted small">No password: open the email on <b>this phone</b> and tap “Sign in”. On iPhone, the home-screen app can't receive links — use email + password there.<br><span class="sub">Открой письмо на этом телефоне и нажми «Sign in».</span></p>`}
      ${cloudInfo ? `<p class="form-ok">${esc(cloudInfo)}</p>` : ""}
      ${cloudMsg ? `<p class="form-msg">${esc(cloudMsg)}</p>` : ""}
    </div>`}`;
};
views.cloud.bind = (root) => {
  const busy = (b, on) => { if (b) { b.disabled = on; b.dataset.label = b.dataset.label || b.innerHTML; b.innerHTML = on ? "…" : b.dataset.label; } };
  const emailOK = em => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em);
  const getEmail = () => { const em = ($("#c-email", root) || {}).value; if (em != null) cloudEmail = em.trim(); return cloudEmail; };
  const nice = e => { const m = (e && e.message) || ""; return /rate|seconds|limit/i.test(m) ? "Too many emails just now — wait a minute, then try again." : /invalid login/i.test(m) ? "Email or password is wrong. Check them, or tap “Forgot password?”." : /not confirmed/i.test(m) ? "Please confirm your email first — tap the link we sent you, then sign in." : /already registered/i.test(m) ? "This email already has an account — just sign in." : m || "Something went wrong. Check your internet and try again."; };
  const done = () => { cloudMsg = ""; cloudInfo = ""; sfx.win(); confetti(80); toast("Signed in · Вход выполнен ✓"); if (!P() && DB.profiles.length) stack = [{ view: "profiles", params: {} }]; render(); };
  $$("[data-mode]", root).forEach(b => b.onclick = () => { getEmail(); cloudStep = b.dataset.mode; cloudMsg = ""; cloudInfo = ""; render(); });
  const pwOf = () => ($("#c-pw", root) || {}).value || "";
  const bIn = $("#c-in", root);
  if (bIn) bIn.onclick = async () => {
    const em = getEmail(), pw = pwOf();
    if (!emailOK(em)) { cloudMsg = "Please type a full email address, like name@gmail.com."; return render(); }
    if (pw.length < 6) { cloudMsg = "Passwords have at least 6 characters."; return render(); }
    busy(bIn, true);
    try { await Sync.signIn(em, pw); done(); } catch (e) { cloudMsg = nice(e); cloudInfo = ""; render(); }
  };
  const bUp = $("#c-up", root);
  if (bUp) bUp.onclick = async () => {
    const em = getEmail(), pw = pwOf();
    if (!emailOK(em)) { cloudMsg = "Please type a full email address, like name@gmail.com."; return render(); }
    if (pw.length < 6) { cloudMsg = "Choose a password with at least 6 characters, then tap Create account."; return render(); }
    busy(bUp, true);
    try { const r = await Sync.signUp(em, pw); if (r === "in") return done(); cloudMsg = ""; cloudInfo = "Account created! Open the email we sent and tap the link to confirm, then sign in here. · Подтверди почту по ссылке из письма."; }
    catch (e) { cloudMsg = nice(e); cloudInfo = ""; }
    render();
  };
  const bF = $("#c-forgot", root);
  if (bF) bF.onclick = async () => {
    const em = getEmail();
    if (!emailOK(em)) { cloudMsg = "Type your email first, then tap “Forgot password?”."; return render(); }
    try { await Sync.resetPw(em); cloudMsg = ""; cloudInfo = "We emailed you a link to choose a new password. Open it on this phone."; } catch (e) { cloudMsg = nice(e); }
    render();
  };
  const bL = $("#c-link", root);
  if (bL) bL.onclick = async () => {
    const em = getEmail();
    if (!emailOK(em)) { cloudMsg = "Please type a full email address, like name@gmail.com."; return render(); }
    busy(bL, true);
    try { await Sync.sendLink(em); cloudMsg = ""; cloudInfo = `Sign-in link sent to ${em}. Open the email on this phone and tap “Sign in”.`; } catch (e) { cloudMsg = nice(e); cloudInfo = ""; }
    render();
  };
  const bNp = $("#c-setpw", root);
  if (bNp) bNp.onclick = async () => {
    const pw = $("#c-np", root).value;
    if (pw.length < 6) { cloudMsg = "Use at least 6 characters."; return render(); }
    busy(bNp, true);
    try { await Sync.updatePw(pw); cloudMsg = ""; toast("Password saved ✓ · Пароль сохранён"); render(); } catch (e) { cloudMsg = nice(e); render(); }
  };
  const sy = $("#c-sync", root); if (sy) sy.onclick = async () => { busy(sy, true); await Sync.now(); render(); };
  const bl = $("#b-list", root);
  if (bl) {
    const fmt = iso => new Date(iso).toLocaleString([], { weekday: "short", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
    const summary = dt => { const ps = (dt && dt.profiles) || []; const xp = ps.reduce((n, p) => n + (((dt.data || {})[p.id] || {}).xp || 0), 0); return `${ps.map(p => esc(p.name)).join(", ") || "no learners"} · ${xp} XP`; };
    let pending = null;
    const load = async () => {
      try {
        const rows = await Sync.listBackups();
        bl.innerHTML = rows.length ? rows.map(r => `<div class="b-row"><div><b>${fmt(r.created_at)}</b> <span class="chip small-chip">${r.kind === "manual" ? "manual" : "auto"}</span><br><span class="muted small">${summary(r.data)}</span></div>
          ${pending === r.id ? `<span class="row"><button class="btn red small" data-yes="${r.id}">Yes, restore</button><button class="btn ghost small" data-no="1">Cancel</button></span>` : `<button class="btn ghost small" data-restore="${r.id}">Restore</button>`}</div>`).join("")
          : `<p class="muted small">No backups yet. The first one is made tomorrow, or tap “Back up now”.</p>`;
        $$("[data-restore]", bl).forEach(b => b.onclick = () => { pending = +b.dataset.restore; load(); });
        $$("[data-no]", bl).forEach(b => b.onclick = () => { pending = null; load(); });
        $$("[data-yes]", bl).forEach(b => b.onclick = async () => {
          b.disabled = true; b.textContent = "…";
          try { const row = rows.find(r => r.id === +b.dataset.yes); await Sync.restore(row.data); sfx.win(); toast("Progress restored ✓ · Восстановлено"); pending = null; render(); }
          catch (e) { toast(e.message || "Couldn't restore — check your internet and try again"); load(); }
        });
      } catch (e) { bl.innerHTML = `<p class="form-msg">Couldn't load backups: ${esc(e.message || "check your internet")}</p>`; }
    };
    load();
    $("#c-backup", root).onclick = async () => { const b = $("#c-backup", root); b.disabled = true; try { await Sync.now(); await Sync.backupNow(); toast("Backup saved ✓ · Копия сохранена"); load(); } catch (e) { toast(e.message || "Backup failed — try again"); } b.disabled = false; };
  }
  const out = $("#c-out", root); if (out) out.onclick = async () => { await Sync.signOut(); toast("Signed out — progress stays on this phone"); render(); };
};

/* Me / settings */
let confirmReset = false;
views.me = () => {
  const p = P(), d = D(), c = C();
  const done = c.lessons.filter(L => lessonState(L.id).done).length;
  const tried = c.lessons.map(L => lessonState(L.id)).filter(s => s.best != null);
  const avg = tried.length ? Math.round(tried.reduce((a, s) => a + s.best, 0) / tried.length) : 0;
  const lang = c.speak;
  const vs = voices.filter(v => v.lang && v.lang.toLowerCase().startsWith(lang.slice(0, 2)));
  const days = []; const dt = new Date(); dt.setDate(dt.getDate() - 13);
  for (let i = 0; i < 14; i++) { const k = dayKey(dt); days.push({ d: dt.getDate(), v: d.xpDay[k] || 0 }); dt.setDate(dt.getDate() + 1); }
  const maxV = Math.max(GOAL, ...days.map(x => x.v));
  return `
  <header class="page-head spread"><h1>${esc(p.name)}</h1><button class="btn ghost small" data-go="profiles">Switch · Сменить</button></header>
  <div class="stat-grid">
    <div class="stat"><b>${done}/${c.lessons.length}</b><span>${c.id === "en" ? "Topics done" : "Lessons done"}</span></div>
    <div class="stat"><b>${streak()}🔥</b><span>Day streak</span></div>
    <div class="stat"><b>${d.xp || 0}</b><span>Total XP</span></div>
    <div class="stat"><b>${avg}%</b><span>Average score</span></div>
    <div class="stat"><b>${Object.keys(d.daily).length}</b><span>Daily checks</span></div>
    <div class="stat"><b>${mistakeCount()}</b><span>Mistakes to fix</span></div>
  </div>
  <section class="card stack">
    <span class="label">XP per day · последние 14 дней</span>
    <div class="chart">${days.map(x => `<div class="col"><div class="b ${x.v ? "" : "none"}" style="height:${x.v ? Math.max(4, x.v / maxV * 100) : 2}%"></div></div>`).join("")}</div>
    <div class="chart-x">${days.map(x => `<span>${x.d}</span>`).join("")}</div>
  </section>
  <section class="card">
    <div class="setting"><div><b>Show ${c.helpLabel === "RU" ? "Russian" : "Portuguese"} help</b><br><span class="muted small">${c.helpLabel === "RU" ? "Перевод и объяснения по-русски" : "Explicações em português"}</span></div><input type="checkbox" class="switch" id="s-help" ${p.help !== false ? "checked" : ""}></div>
    <div class="setting"><div><b>Speaking exercises</b><br><span class="muted small">${SR ? "Говорить вслух в уроках" : "Not supported in this browser"}</span></div><input type="checkbox" class="switch" id="s-speak" ${p.speakOn !== false && SR ? "checked" : ""} ${SR ? "" : "disabled"}></div>
    <div class="setting"><div><b>Sounds</b><br><span class="muted small">Звуки</span></div><input type="checkbox" class="switch" id="s-sound" ${p.sound !== false ? "checked" : ""}></div>
    <div class="setting"><div><b>Speech speed</b><br><span class="muted small">Скорость речи</span></div><div class="row"><input type="range" id="s-rate" min="0.6" max="1.2" step="0.05" value="${p.rate || .95}">${sayBtn(c.id === "en" ? "Hello! How are you today?" : "Привет! Как дела?", lang)}</div></div>
    <div class="setting"><div><b>Voice</b><br><span class="muted small">${vs.length ? `${vs.length} available` : `No ${lang} voice found on this device`}</span></div>${vs.length ? `<select id="s-voice"><option value="">Automatic</option>${vs.map(v => `<option value="${esc(v.voiceURI)}" ${(p.voices || {})[lang] === v.voiceURI ? "selected" : ""}>${esc(v.name)}</option>`).join("")}</select>` : ""}</div>
    <div class="setting col-set"><div><b>Look</b> <span class="muted small">Стиль</span></div><div class="skin-pick small">${SKINS.map(s => `<button class="skin-swatch skin-${s.id} ${p.skin === s.id ? "on" : ""}" data-skin="${s.id}"><i></i><b>${s.name}</b></button>`).join("")}</div></div>
    <div class="setting"><div><b>Light / dark</b><br><span class="muted small">Тема</span></div><select id="s-theme">${[["system", "Automatic"], ["light", "Light"], ["dark", "Dark"]].map(([v, n]) => `<option value="${v}" ${DB.theme === v ? "selected" : ""}>${n}</option>`).join("")}</select></div>
  </section>
  ${canInstall() ? `<button class="card cloud-card" id="me-install"><span class="em">${I.install}</span><span class="t"><b>Install the app <span class="sub">Установить</span></b><span class="muted small">Home-screen icon, full screen, works offline</span></span><span class="go-arrow">→</span></button>` : ""}
  <button class="card cloud-card" data-go="cloud"><span class="em">${I.cloud}</span><span class="t"><b>Cloud sync <span class="sub">Облако</span></b><span class="muted small">${!Sync.available ? "Available in the installed app" : Sync.user ? `On · ${esc(Sync.user.email || "")}` : "Off — sign in to keep progress safe on every phone"}</span></span><i id="sync-badge" class="sync-dot" data-state="${Sync.st.state}"></i></button>
  <section class="card stack">
    <b>Back up progress</b>
    <p class="muted small">Copy this code to move ${esc(p.name)}'s progress to another phone, then paste it there. · Скопируй код, чтобы перенести прогресс на другой телефон.</p>
    <textarea id="s-code" readonly>${esc(btoa(unescape(encodeURIComponent(JSON.stringify({ p, d })))))}</textarea>
    <div class="row"><button class="btn small" id="s-copy">Copy code</button><button class="btn ghost small" id="s-restore">Restore from code</button></div>
    <textarea id="s-paste" placeholder="Paste a backup code here" hidden></textarea>
  </section>
  <section class="stack">
    ${confirmReset ? `<div class="confirm"><b>Delete all of ${esc(p.name)}'s progress? This can't be undone.</b><div class="row"><button class="btn red small" id="s-reset-yes">Yes, delete</button><button class="btn ghost small" id="s-reset-no">Keep it</button></div></div>`
      : `<button class="btn ghost small danger" id="s-reset">Reset progress</button>`}
  </section>`;
};
views.me.bind = (root) => {
  const p = P();
  const mi = $("#me-install", root); if (mi) mi.onclick = () => doInstall();
  $("#s-help", root).onchange = e => { p.help = e.target.checked; save(); };
  $("#s-speak", root).onchange = e => { p.speakOn = e.target.checked; save(); };
  $("#s-sound", root).onchange = e => { p.sound = e.target.checked; save(); sfx.ok(); };
  $("#s-rate", root).oninput = e => { p.rate = +e.target.value; save(); };
  const sv = $("#s-voice", root); if (sv) sv.onchange = e => { p.voices = p.voices || {}; p.voices[C().speak] = e.target.value; save(); speak(C().id === "en" ? "Hello there!" : "Привет!", C().speak); };
  $("#s-theme", root).onchange = e => { DB.theme = e.target.value; save(); applyTheme(); };
  $$("[data-skin]", root).forEach(b => b.onclick = () => { p.skin = b.dataset.skin; save(); sfx.pop(); render(); });
  $("#s-copy", root).onclick = () => { const ta = $("#s-code", root); const done = () => toast("Copied · Скопировано"); try { navigator.clipboard.writeText(ta.value).then(done, () => { ta.select(); toast("Press copy on your keyboard"); }); } catch (e) { ta.select(); } };
  $("#s-restore", root).onclick = () => {
    const ta = $("#s-paste", root);
    if (ta.hidden) { ta.hidden = false; ta.focus(); $("#s-restore", root).textContent = "Apply code"; return; }
    try {
      const o = JSON.parse(decodeURIComponent(escape(atob(ta.value.trim()))));
      if (!o.p || !o.d) throw 0;
      Object.assign(p, { name: o.p.name, course: o.p.course, skin: o.p.skin, help: o.p.help, sound: o.p.sound, rate: o.p.rate });
      DB.data[p.id] = o.d; save(); toast("Progress restored ✓"); render();
    } catch (e) { toast("That code didn't work — copy the whole code and try again"); }
  };
  const r = $("#s-reset", root); if (r) r.onclick = () => { confirmReset = true; render(); };
  const ry = $("#s-reset-yes", root); if (ry) ry.onclick = () => { DB.data[p.id] = null; delete DB.data[p.id]; confirmReset = false; save(); toast("Progress reset"); render(); };
  const rn = $("#s-reset-no", root); if (rn) rn.onclick = () => { confirmReset = false; render(); };
};

/* ---------- boot ---------- */
function boot() {
  const want = (location.hash || "").replace("#", "");
  stack = [{ view: P() ? (["daily", "play", "review", "me"].includes(want) ? want : "home") : DB.profiles.length ? "profiles" : "welcome", params: {} }];
  try { history.replaceState({ d: 1 }, ""); } catch (e) {}
  render();
  Sync.init().then(() => { if (Sync.user) softRender(); });
  if ("serviceWorker" in navigator && location.protocol === "https:" && window.self === window.top && !/claude/.test(location.hostname)) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
}
boot();
})();
