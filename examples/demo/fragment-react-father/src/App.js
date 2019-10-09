import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './components/Index'
import Home from './components/Home'
import Header from './components/header'
import Footer from './components/footer'

import Chaoxi, {globalEvent} from './global'

function App({baseUrl}) {
        
  return (
    <Router basename={baseUrl}>
      <div className={`App ${Chaoxi.classNamespace}`}>
        <Route path="/" component={Index} />
        <Route path="/reactchild" component={Home} />
      </div>
    </Router>
  );
}

export default App;
