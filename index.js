Notification.requestPermission(function(permission) {
  if (permission === 'granted') {
    var notification = new Notification('Notifications API', {
      body: 'Hello from the Notifications API!',
      icon: 'glasses36.png'
    });
    notification.onclick = function() {
      notifiction.close();
      window.open().close();
      window.focus();
    };
  } else {
    alert('whyyyyy?');
  }
});
