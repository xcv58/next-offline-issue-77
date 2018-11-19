workbox.routing.registerRoute(
  /.mp4$/,
  workbox.strategies.cacheFirst({ plugins: [ new workbox.rangeRequests.Plugin() ] }), 'GET'
);
