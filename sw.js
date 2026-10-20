/* HaHe ©2026 | hahe.totogutomo.com
   Penyimpan offline: aplikasi tetap bisa dimainkan tanpa internet. */
const CACHE = 'hahe-v4';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/maskable-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Halaman utama: utamakan versi terbaru, cadangan dari simpanan
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put('index.html', cp)); return r; }).catch(() => caches.match('index.html')));
    return;
  }
  // Huruf Google: simpan agar tetap tampil saat offline
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.open(CACHE).then(c => c.match(req).then(hit => {
      const net = fetch(req).then(r => { if (r.ok || r.type === 'opaque') c.put(req, r.clone()); return r; }).catch(() => hit);
      return hit || net;
    })));
    return;
  }
  // Berkas lain di situs ini (ikon, backsound): ambil dari simpanan dulu
  if (url.origin === location.origin) {
    if (req.headers.has('range')) return;
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
      if (r.status === 200) { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); }
      return r;
    })));
  }
});
