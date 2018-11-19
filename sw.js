// workbox.routing.registerRoute(
//   ({ url, event }) => {
//     return url.pathname.endsWith('mp4')
//   },
//   workbox.strategies.cacheFirst({ plugins: [ new workbox.rangeRequests.Plugin() ] }), 'GET'
// );

workbox.routing.registerRoute(
  ({ url, event }) => {
    return !url.pathname.endsWith('mp4')
  },
  workbox.strategies.networkFirst(), 'GET'
);
