import { importEntry } from 'import-html-entry'
import clearTemplate from './utils/clearTemplate'

const init = function () {
    window.addEventListener('load', function(e) {
        clearTemplate()
    })
}
init ()

/**
 * [
 *  {
 *      "name": "app1",
 *      "entry": "http://localhost:7100",
 *      "content": "demo"
 *  }
 * ]
 * @param [] applist 
 */


async function loadApp(app) {
    const { template: appContent, execScripts, getExternalScripts, getExternalStyleSheets } = await importEntry(app.entry)
    const { bootstrap: bootstrapApp, mount, unmount } = await execScripts(window)
  }

function registerApps (applist) {
    applist.forEach(
        async app => {
            const { template: appContent, execScripts, getExternalScripts, getExternalStyleSheets } = await importEntry(app.entry)
            const aa  = await execScripts(window)
            console.log('============================')
        }
    )
}

export default registerApps

