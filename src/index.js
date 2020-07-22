// import _ from 'lodash'
import './other/css/test.css';
import {name} from 'webpackTest';
import test from "otherJs/test";

function component() {
  console.log('name',name);
  const btn = document.createElement('button');
  // import('./test.ts').then();

  btn.innerHTML = 'stop work1111';

  return btn;
}

document.body.appendChild(component());
