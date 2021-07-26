const cacheName = '77b2e91afdaf806bead82bff7944f118';

const urlsToCache = [
  '/',
  '/favicon.ico',
  '/manifest.json',
  '/assets/application-03bd0c5d42dedb56602758cd7152eb0668e08898201c2d43faf5eec0be64d5a9.js',
  '/assets/application-f7876202bd31145f4f44aa062ee7c3235fd70b9272c44b1eb2430a60284f776b.css',
  '/assets/sprites/docs-d6795da1049cadf416b0081d435a52ee3a93e65eaf0067f0ca6e6bd648d1bfff.png',
  '/assets/sprites/docs@2x-709fe1cfa5a07f81675d711eb8325ad1505646a388de7b70606f3bfdc658a665.png',
  '/assets/docs-8981bdaf1a44ed4d37ca9ef59f6bf401adc9cdf70645602ce2d65a66973b3a65.js',
  '/docs/css/index.json?1620325829',
  '/docs/dom/index.json?1620333193',
  '/docs/html/index.json?1620316918',
  '/docs/http/index.json?1605738379',
  '/docs/javascript/index.json?1620315814',
];

self.addEventListener('install', event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(urlsToCache)),
  );
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    const jobs = keys.map(key => key !== cacheName ? caches.delete(key) : Promise.resolve());
    return Promise.all(jobs);
  })());
});

self.addEventListener('fetch', event => {
  event.respondWith((async () => {
    const cachedResponse = await caches.match(event.request);
    if (cachedResponse) return cachedResponse;

    try {
      const response = await fetch(event.request);
      return response;
    } catch (err) {
      const url = new URL(event.request.url);

      const pathname = url.pathname;
      const filename = pathname.substr(1 + pathname.lastIndexOf('/')).split(/\#|\?/g)[0];
      const extensions = ['.html', '.css', '.js', '.json', '.png', '.ico', '.svg', '.xml'];

      if (url.origin === location.origin && !extensions.some(ext => filename.endsWith(ext))) {
        const cachedIndex = await caches.match('/');
        if (cachedIndex) return cachedIndex;
      }

      throw err;
    }
  })());
});
