import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route }  from "react-router-dom";
import SBNavbar from './components/navbar'
import Elevkveld040320 from './elevkvelder/elevkveld040320'
import Opplegg040320 from './elevkvelder/opplegg040320'

function App() {
  return (
    <div className="App">
      <SBNavbar/>
      <Switch>
          <Route path="/elevkveld040320">
            <Elevkveld040320 />
          </Route>
          <Route path="/opplegg040320">
            <Opplegg040320 />
          </Route>
          <Route path="/opplegg">
            <Opplegg040320 />
          </Route>
          <Route path="/">
            <Elevkveld040320 />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
