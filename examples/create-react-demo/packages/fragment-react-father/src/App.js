import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './components/Index'
import Home from './components/Home'
import Chaoxi, {globalEvent} from './global'

function App({baseUrl}) {
  return (
    <Router basename={baseUrl}>
      <div className={`App ${Chaoxi.classNamespace}`}>
        <h2>This is father React {baseUrl}</h2>
        <nav>
          <ul>
            <li>
              <Link to="/reactchild">child</Link>
            </li>
            <li>
              <Link to="/index">index</Link>
            </li>
          </ul>
        </nav>
  
        <Route path="/reactchild" component={Home} />
        <Route path="/index" component={Index} />
      </div>
    </Router>
  );
}

export default App;
