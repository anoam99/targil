import './App.css';
import React from 'react';
import Countrypicker from './components/CountryPicker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CountryData from './components/CountryData'

 
function App() {


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Countrypicker/>
          </Route>
          <Route path='/:country'>
            <CountryData/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
