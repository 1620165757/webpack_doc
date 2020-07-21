// import test from "./test.ts";
import _ from 'lodash'
// import './test.css'

function component() {

  console.error('test');
  const btn = document.createElement('button');
  import('./test.ts').then();

  btn.innerHTML = 'stop work1111';

  return btn;
}

document.body.appendChild(component());
