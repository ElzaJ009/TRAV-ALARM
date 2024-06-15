self.addEventListener('install', function (event) {
  self.skipWaiting();
  console.log('Service Worker installed');
});

self.addEventListener('activate', function (event) {
  console.log('Service Worker activated');
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  event.waitUntil(
      clients.openWindow('list-of-restaurants.html') // Replace with your desired URL
  );
});
