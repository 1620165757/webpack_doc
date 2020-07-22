// import _ from 'lodash'
import './other/css/test.css';
import test from "otherJs/test";

function component() {
  const a = null;
  console.log(a?.b?.c);
  console.log(test);
  const btn = document.createElement('button');
  // import('./test.ts').then();

  btn.innerHTML = 'stop work1111';

  return btn;
}

document.body.appendChild(component());
