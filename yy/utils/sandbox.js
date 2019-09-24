import { isFunction, cloneDeep } from 'lodash'
export function getSandbox(appName) {
    debugger
    // let proxyWindow = new Proxy(window, {
    //     get: function(target,name,property) {
    //         if (name in target) {
    //            console.log(`success:${name}`)                              
    //         } else {
    //            console.log(`error:${name}`)
    //         }
    //     //    if (name === 'navigator' || name === 'history' || name === 'addEventListener') {
    //     //         return window[name]
    //     //     } else {
    //     //         return Reflect.get(target,name,property)
    //     //     }
    //         if (target.hasOwnProperty(name)) {
    //             return target[name] //Reflect.get(target,name,property)
    //         } else {
    //             return target[name]
    //         }
    //     }
    // })
    let iframe = document.createElement('iframe')    
    document.body.appendChild(iframe)
    let proxyWindow = iframe.contentWindow
    for (var i in window) {
        console.log(i)
    }
        iframe.src = 'http://localhost:8080/blank'
        iframe.style.display = 'none'
        iframe.style.width = '0px;'
        iframe.style.height = '0px;'
        proxyWindow.app = window.app
        proxyWindow.react = window.react
        proxyWindow.ReactDOM = window.ReactDOM
        proxyWindow.propTypes = window.propTypes
        proxyWindow.classnames = window.classnames
        proxyWindow.proppy = window.proppy
        proxyWindow.proppyReact = window.proppyReact
        proxyWindow.webpackJsonpdemo = window.webpackJsonpdemo
        proxyWindow.demo = window.demo
    // let heads = proxyWindow.document.getElementsByTagName('head')
    // let srcipt = proxyWindow.document.createElement('script')
    // srcipt.src = 'http://localhost:8080/bundle.js'
    // heads[0].appendChild(srcipt)
    // let load = new Promise((resolve, reject) => {
    //     srcipt.onload = function () {
    //         resolve('done')
    //     }
    // })
    // let result = await load
    return proxyWindow
}