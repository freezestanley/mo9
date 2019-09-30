import { importEntry } from 'html-entry'
import clearTemplate from './utils/clearTemplate'
import fragment from './utils/fragment'
import { getSandbox } from './utils/sandbox'
import EventEmit from 'eventemitter2';

const globalEvent = new EventEmit({
    // set this to `true` to use wildcards. It defaults to `false`.
    wildcard: true,
    // the delimiter used to segment namespaces, defaults to `.`.
    delimiter: '.',
    // set this to `true` if you want to emit the newListener event. The default value is `true`.
    newListener: false,
    // the maximum amount of listeners that can be assigned to an event, default 10.
    maxListeners: Number.MAX_VALUE,
    // show event name in memory leak message when more than maximum amount of listeners is assigned, default false
    verboseMemoryLeak: false
})

class CtrlApps extends EventEmit {
    constructor(baseUrl, options) {
        super(options);
        this.sonApplication = []
        this.baseUrl = baseUrl || '';
    }
    findApp(name) {
        return this.sonApplication.find(function (app) {
            return name === app.name
        })
    }
    unregisterApps(name) {
        const result = this.findApp(name)
        result.unmount()
    }
    registerApps(applist) {
        const _self = this
        applist.forEach(
            async app => {
                const result = this.findApp(app.name)
                if (result) {
                    console.warning(`Duplicate app name: ${app.name} `)
                }
                if (typeof app.canActive !== 'function') {
                    app.canActive = () => true
                }
                const { template, execScripts, getExternalScripts, getExternalStyleSheets } = await importEntry(app.entry)
                const sandbox = getSandbox()
                console.log(sandbox)
                const script = await execScripts(sandbox)
                const extScript = await getExternalScripts(sandbox)
                const styles = await getExternalStyleSheets()
                app.template = template
                app.styles = styles
                app.module = sandbox[app.name]
                app.free = sandbox.__tailor_free;
                app.baseUrl = _self.baseUrl + (app.baseUrl || '')
                const sonApplication = new fragment(app)
                // delete window[app.name]
                // window[app.name] = null
                if (app.canActive()) {
                    sonApplication.mount()
                }
                this.sonApplication.push(sonApplication)
            }
        )
    }
    agentPopState() {
        let _self = this
        window.addEventListener('popstate', e => {
            _self.sonApplication.forEach(item => {
                if (item.app.canActive()) {
                    item.mount()
                } else {
                    item.unmount()
                }
            })
        })
    }
}

// const instanceApp = new CtrlApps()
window.addEventListener('load', function (e) {
    clearTemplate()
})

export {
    globalEvent
};
export default CtrlApps;

// exports.app = CtrlApps
// export const app = CtrlApps