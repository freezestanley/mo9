import { importEntry } from 'import-html-entry'
import clearTemplate from './utils/clearTemplate'
import fragment from './utils/fragment'
import { getSandbox } from './utils/sandbox'



class ctrlApps {
    constructor () {
        this.sonApplication = []
    }
    findApp (name) {
        return this.sonApplication.find(function (app) {
            return name === app.name
        })
    }
    unregisterApps (name) {
        const result = this.findApp(name)
        result.unmount()
    }
    registerApps (applist) {
        const _self = this
        applist.forEach(
            async app => {
                const result = this.findApp(app.name)
                if (result) {
                    console.error(`register app name:${app.name} should unique`)
                } else {
                    const { template, execScripts, getExternalScripts, getExternalStyleSheets } = await importEntry(app.entry)
                    const sandbox = getSandbox()
                    console.log(sandbox)
                    const script  = await execScripts(sandbox)
                    const extScript = await getExternalScripts(sandbox)
                    const styles = await getExternalStyleSheets()
                    app.template = template
                    app.styles = styles
                    app.module = sandbox[app.name]
                    const sonApplication = new fragment(app)
                    // delete window[app.name]
                    // window[app.name] = null
                    sonApplication.mount()
                    this.sonApplication.push(sonApplication)
                }
            }
        )
    }
}




const instanceApp = new ctrlApps()
const init = function () {
    window.addEventListener('load', function(e) {
        clearTemplate()
        // const reapps = [ 
        //     { name: 'other', entry: 'http://localhost:7010', contain: document.getElementById('other') } 
        // ]
        // instanceApp.registerApps(reapps)
    })
}
init ()
export const app = instanceApp
