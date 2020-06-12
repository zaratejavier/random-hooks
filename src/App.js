import React from 'react';
import { Route, Switch } from "react-router-dom";
// import { Container } from 'semantic-ui-react';
import NavBar from "./components/NavBar";
import Shawn from "./Shawn/Shawn";
import Javier from "./Javier/Javier";
import Joey from "./Joey/Joey";

import './App.css';

function App() {
  return (
    <div>
    <NavBar />
    <Switch>
      <Route exact path='/Shawn' component={Shawn} />
      <Route exact path='/Javier' component={Javier} />
      <Route exact path='/Joey' component= {Joey} />
    </Switch>
  </div>
  );
}

export default App;
