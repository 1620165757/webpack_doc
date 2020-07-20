console.log('serviceWorker','serviceWorker' in navigator);
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

function component() {
  var btn = document.createElement('button');

  btn.innerHTML = 'stop work';
  btn.onclick = function () {
    navigator.serviceWorker.getRegistration('/service-worker.js').then(registration => {
      registration.unregister();
    });
  };

  return btn;
}

document.body.appendChild(component());
