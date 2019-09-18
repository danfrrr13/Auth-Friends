import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute/';
import Login from './components/Login/';
import Friends from './components/Friends/';


function App() {
  return (
    <Router>
      <div className="App">
        <Link to='/login'>Login</Link>
        <Link to='/protected'>Protected</Link>
        <Switch>
          <PrivateRoute exact path='/protected' component={Friends} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
