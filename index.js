if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(function(registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ',
      registration.scope);
    Notification.requestPermission(function(permission) {
      if (permission === 'granted') {
        registration.showNotification('Service Worker', {
          body: 'ServiceWorker registration successful with scope: ' +
            registration.scope
        });
      } else {
        alert('whyyyyy?');
      }
    });
  }).catch(function(err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });
}
