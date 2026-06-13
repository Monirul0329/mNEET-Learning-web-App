const CACHE_NAME = 'mneet-app-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './dashboard.html',
  './study_zone.html',
  './study.html',
  './ncert_reader.html',
  './quiz.html',
  './error_book.html',
  './mstore.html',
  './special_hub.html',
  './support.html',
  './manifest.json'
];

// Installation Cycle Hook Cache Data Loops
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('mNEET Engine: Operational service workers assets caching success!');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Intercept Request Telemetry for Instant Offline Returns Logic
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
