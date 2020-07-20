function component() {
  var btn = document.createElement('button');

  btn.innerHTML = 'stop work';

  return btn;
}

document.body.appendChild(component());
