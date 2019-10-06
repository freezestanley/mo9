import React from 'react';
import {withRouter} from 'react-router-dom';
import Chaoxi, {globalEvent} from '../../global'

class Foo extends React.Component {
  constructor(props) {
    super(props);
    this.handle = this.handle.bind(this);
  }
  componentDidMount() {
    console.log("123123123123123123123")
    const appinfo = [
      {
          name: "a86",
          application_name: "reactson",
          entry: "http://localhost:5010/app",
          contain: this.refs.container,
          baseUrl: "/about",
          canActive() {
            debugger
            return window.location.pathname.startsWith(`${Chaoxi.info.baseUrl}/about`);
          }
      }
    ]
    Chaoxi.registerApps(appinfo)
  }
  render() {
    return <div>
            <input ref={el => {this.eleInput = el}}/>
            <button onClick = {this.handle}>聚焦</button>
            <div ref="container"></div>
           </div>
  }
  
  handle() {
    this.eleInput.focus();
  }
}
  export default withRouter(Foo)