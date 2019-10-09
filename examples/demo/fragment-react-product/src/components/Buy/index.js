import React from 'react';
import {withRouter} from 'react-router-dom';
import Chaoxi, {globalEvent} from '../../global'

class Buy extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const appinfo = [
      {
          name: "a90",
          application_name: "vuemaster",
          entry: "http://localhost:9099/app",
          contain: this.refs.container,
          baseUrl: "/buy",
          canActive(path) {
            console.log("98098908090987098709")
            // return window.location.pathname.startsWith(this.baseUrl);
            return true
          }
      }
    ]
    Chaoxi.registerApps(appinfo)
  }
  render() {
     return (<div ref="container" id="asdf">阿斯顿发顺丰</div>)
  }
  

}
  export default withRouter(Buy)