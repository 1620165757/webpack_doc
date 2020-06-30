import './style.css';
import {cube} from './math.js';
import _ from 'lodash';

function component() {

  if (process.env.NODE_ENV === 'production') {
    console.log('生产环境！！！');
  }

  var element = document.createElement('pre');

  element.innerHTML = ['Hello webpack!', '5 cubed is equal to ' + cube(5)].join('\n\n');

  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
  })
}
