import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from '../Home'
import Detail from '../Detail'
import Chat from '../Chat'
import classNames from 'classnames'
import './style.scss'

function Index() {
    return <h2>Home</h2>
  }
  
  function About() {
    return <h2>About</h2>
  }
  
  function Users() {
    return <h2>Users</h2>
  }

const AppRouter = () => (
    <Router>
      <div className={classNames('app')}>
        <h2>This is React</h2>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
            <li>
              <Link to="/home/">home</Link>
            </li> 
            <li>
              <Link to="/detail/">detail</Link>
            </li>
            <li>
              <Link to="/chat/">Chat</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about" component={About} />
        <Route path="/users/" component={Users} />
        <Route path="/home/" component={Home} />
        <Route path="/detail/" component={Detail} />
        <Route path="/chat/" component={Chat} />
      </div>
    </Router>
);


export default AppRouter;