import _ from 'lodash';
import react from 'react'


function component() {
  var element = document.createElement('div');
  element.innerHTML = 'aaa';
  return element;
}

document.body.appendChild(component());
