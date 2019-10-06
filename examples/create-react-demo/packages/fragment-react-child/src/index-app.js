import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Chaoxi, {globalEvent} from './global'

// ReactDOM.render(<App />, document.getElementById('root'));

console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@1')
export default {
  bootstrap: async function bootstrap(parent) {
    console.log('react app bootstraped');
    Chaoxi.parent = parent
  },
  mount: async function mount(contain, baseUrl, appinfo, parent) {
    Chaoxi.parent = parent
    ReactDOM.render(<App baseUrl={baseUrl} appinfo={appinfo}/>, contain)
   
  },
  unmount: async function unmount(contain) {
    ReactDOM.unmountComponentAtNode(contain)
  }
}
serviceWorker.unregister();
