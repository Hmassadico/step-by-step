// Offline cache: the app works without internet after the first visit.
const CACHE = "stepbystep-v4";
const FILES = ["./", "index.html", "styles.css", "app.js", "manifest.webmanifest", "icons/icon.svg", "icons/icon-192.png",
  "lessons/level1.js", "lessons/level2.js", "lessons/level3.js", "lessons/level4.js", "lessons/level5.js",
  "lessons/ru-level1.js", "lessons/ru-level2.js", "lessons/ru-level3.js", "lessons/ru-level4.js", "config.js", "data/irregular-verbs.js", "data/tenses.js", "data/ru-alphabet.js", "icons/icon-512.png", "icons/icon-maskable-512.png",
  "lessons/steps/en-a.js", "lessons/steps/en-b.js", "lessons/steps/en-c.js", "lessons/steps/en-d.js", "lessons/steps/en-e.js", "lessons/steps/en-f.js", "lessons/steps/en-g.js", "lessons/steps/en-h.js", "lessons/steps/en-i.js", "lessons/steps/en-j.js"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || !e.request.url.startsWith(self.location.origin) || e.request.url.includes("/_vercel/")) return; // never cache Supabase calls
  // network first (so updates arrive), cache as fallback when offline
  e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {}); return r; }).catch(() => caches.match(e.request)));
});
