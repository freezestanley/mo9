import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Chaoxi, {globalEvent} from './global'

export default {
  bootstrap: async function bootstrap() {
    console.log('react app bootstraped');
  },
  mount: async function mount(contain, baseUrl, appinfo) {
    ReactDOM.render(<App baseUrl={baseUrl}  appinfo={appinfo}/>, contain)
   
  },
  unmount: async function unmount(contain) {
    ReactDOM.unmountComponentAtNode(contain)
  }
}
serviceWorker.unregister();
