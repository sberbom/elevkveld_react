import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route }  from "react-router-dom";
import SBNavbar from './components/navbar'
import Elevkveld040320 from './elevkvelder/elevkveld040320'
import Elevkveld240920 from './elevkvelder/elevkveld240920'
import Elevkveld261020 from './elevkvelder/elevkveld261020'
import Opplegg040320 from './elevkvelder/opplegg040320'
import Opplegg240920 from './elevkvelder/opplegg240920'
import Inspirasjonskveld20 from './elevkvelder/inspirasjonskveld20'
import Inspirasjonskveld20Opplegg from './elevkvelder/inspirasjonskveld20opplegg'

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
          <Route path="/elevkveld240920">
            <Elevkveld240920 />
          </Route>
          <Route path="/opplegg240920">
            <Opplegg240920 />
          </Route>
          <Route path="/inspirasjonskveld20">
            <Inspirasjonskveld20 />
          </Route>
          <Route path="/inspirasjonskveld20Opplegg">
            <Inspirasjonskveld20Opplegg />
          </Route>
          <Route path="/opplegg">
            <Opplegg240920 />
          </Route>
          <Route path="/">
            <Elevkveld261020 />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
