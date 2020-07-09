import trim from 'lodash/trim';
import react from 'react'


function component() {
  var element = document.createElement('div');
  element.innerHTML = 'aa1a';
  return element;
}

document.body.appendChild(component());
