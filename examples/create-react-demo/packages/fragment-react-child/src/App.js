import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './components/Index'
import About from './components/Home'
function App() {
  return (
    <Router>
      <div className="App">
        <h2>This is React</h2>
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

        <Route path="/index" exact component={Index} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
