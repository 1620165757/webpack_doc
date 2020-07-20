import test from "./test.ts";

function component() {

  console.log('test', test);
  const btn = document.createElement('button');

  btn.innerHTML = 'stop work';

  return btn;
}

document.body.appendChild(component());
