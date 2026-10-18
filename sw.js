/* GataVelhaAI 1.7 - PWA offline (somente arquivos estáticos do próprio app) */
const CACHE_NAME = 'gatavelhaai-pwa-1.7';
const PRECACHE = [
  "./",
  "./index.html",
  "./GataVelhaAI1.7.html",
  "./manifest.webmanifest",
  "./icons/apple-touch-icon.png",
  "./icons/favicon-16x16.png",
  "./icons/favicon-32x32.png",
  "./icons/favicon-48x48.png",
  "./icons/favicon.ico",
  "./icons/icon-128x128.png",
  "./icons/icon-144x144.png",
  "./icons/icon-152x152.png",
  "./icons/icon-167x167.png",
  "./icons/icon-16x16.png",
  "./icons/icon-180x180.png",
  "./icons/icon-192x192.png",
  "./icons/icon-256x256.png",
  "./icons/icon-32x32.png",
  "./icons/icon-384x384.png",
  "./icons/icon-48x48.png",
  "./icons/icon-512x512.png",
  "./icons/icon-64x64.png",
  "./icons/icon-72x72.png",
  "./icons/icon-96x96.png",
  "./icons/maskable-icon-192x192.png",
  "./icons/maskable-icon-512x512.png"
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key.startsWith('gatavelhaai-pwa-') && key !== CACHE_NAME).map(key => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  // Firestore, Authentication e módulos Firebase utilizam a rede;
  // respostas de API jamais devem ser substituídas pelo HTML do app.
  if (url.origin !== self.location.origin) return;
  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).then(response => {
      if (response.ok) { const copy = response.clone(); caches.open(CACHE_NAME).then(cache => cache.put(request, copy)).catch(() => {}); }
      return response;
    }).catch(() => caches.match(request).then(match => match || caches.match('./index.html'))));
    return;
  }
  event.respondWith(caches.match(request).then(cached => cached || fetch(request).then(response => {
    if (response.ok && (response.type === 'basic')) {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(request,copy)).catch(() => {});
    }
    return response;
  })));
});
