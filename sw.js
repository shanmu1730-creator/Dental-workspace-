// Minimal service worker — just enough to make this a valid, installable PWA
// (required by PWABuilder / Android's app-wrapping tools). It doesn't need
// to do offline caching for this app to work, since it always needs a live
// connection to Supabase anyway.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Pass everything straight through to the network.
  event.respondWith(fetch(event.request));
});
