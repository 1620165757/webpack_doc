// import Print from './print';
// import {file, parse} from './globals.js';
import _ from 'lodash';

console.log(
    _.join(['Another', 'module', 'loaded!'], ' ')
);

function component() {
    const element = document.createElement('div');
    const br = document.createElement('br');
    const dynamicImportsBtn = document.createElement('button');
    dynamicImportsBtn.innerHTML = 'dynamicImports';
    element.appendChild(dynamicImportsBtn);
    element.appendChild(br);
    /**
     * 动态导入代码
     */
    dynamicImportsBtn.onclick = e => import(/* webpackChunkName: "dynamicImports" */ '../js/dynamicImports').then(module => {
        const print = module.default;
        print(1111);
    });
    return element;
}

document.body.appendChild(component());
