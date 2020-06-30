import React from "react";
import Navbar from './components/Navbar';
import Applications from './pages/Applications';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Applications} />
          <Route exact path="/tracker" component={Applications} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={CreateAccount} />
          <Route component={Applications} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
