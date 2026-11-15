const CACHE='musiexplora-v3';
const FILES=['./','./index.html','./styles.css','./data.js','./app.js','./icon.svg','./manifest.webmanifest','./assets/musicala.png','./assets/exploracion-musical.webp','./assets/exploracion-visual.webp'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',e=>{if(e.request.method==='GET'&&new URL(e.request.url).origin===location.origin){e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))}});
