/**
 * name: application name
 * entry: 'http://localhost:8009/'
 * contain: document.getElementById('root')
 * template: '<html>...</html>'
 */
class fragment {
    constructor (app) {
        const { name, entry, contain, template, styles, module , baseUrl, free} = app;
        const _self = this
        this.app = app;
        this.name = name
        this.entry = entry
        this.style = []
        this.contain = contain
        this.template = template
        this.baseUrl = baseUrl
        this.__module = module
        this.__free = free
        if (styles) {
            styles.map((ele) => {
                _self.addStyle(ele)
            })
        }
    }

    canActive(){
        return this.app.canActive()
    }
    // export async function bootstrap() {
    //     console.log('react app bootstraped')
    //   }
      
    //   export async function mount(props) {
    //     ReactDOM.render(<Router/>, document.getElementById('other'))
    //   }
      
    //   export async function unmount() {
    //     ReactDOM.unmountComponentAtNode(document.getElementById('other'))
    //   }
    unmount () {
        this.__module.unmount(this.contain)
        this.__free()
    }
    mount (props) {
        if (!this.contain) {
            console.error(`Application name ${this.name} contain is null`)
        }
        this.__module.mount(this.contain, this.baseUrl)
    }
    addStyle (txt) {
        let link = document.createElement('style')
        link.innerHTML = txt
        let heads = document.getElementsByTagName('head')
        if(heads.length) {
            heads[0].appendChild(link)
        } else {
            document.documentElement.appendChild(link)
        }
        this.style.push(link)
    }
}
export default fragment