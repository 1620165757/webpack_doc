import Print from './print';
import {file, parse} from './globals.js'


if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}


function component() {
    const element = document.createElement('div');

    const button = document.createElement('button');
    const br = document.createElement('br');

    button.innerHTML = 'Click me and look at the console!？';
    button.onclick = Print.bind(null, 'Hello webpack!');

    //new webpack.ProvidePlugin
    element.innerHTML = join(['Hello', 'webpack'], ' ');

    element.appendChild(br);
    element.appendChild(button);

    console.log(file);
    /**
     * 动态导入代码
     */
    // Note that because a network request is involved, some indication
    // of loading would need to be shown in a production-level site/app.
    // button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
    //     const print = module.default;
    //
    //     print();
    // });

    return element;
}


document.body.appendChild(component());
