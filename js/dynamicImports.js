/**
 * 初始化时不会加载
 * @param text
 */
// button.onclick = e => import(/* webpackChunkName: "print" */ '../js/dynamicImports').then(module => {
//     const print = module.default;
//     print(1111);
// });
export default function dynamicImports(text) {
    console.log(text);
};
