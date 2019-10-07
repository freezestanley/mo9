import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './components/Index'
import About from './components/Home'
import Chaoxi, {globalEvent} from './global'

function App({baseUrl}) {
  return (
    <Router basename={baseUrl}>
      <div className={`App ${Chaoxi.classNamespace}`}>
        <h2>This is React son</h2>
        <nav>
          <ul>
            <li>
              <Link to="/index">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        =========={process.env.REACT_APP_TYPE}===========
        <Route path="/index" exact component={Index} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;