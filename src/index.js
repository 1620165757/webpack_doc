import _ from 'lodash';
import './style.css';
import printMe from './print.js'
function component() {
    let element = document.createElement('div');
    let btn = document.createElement('button')
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());