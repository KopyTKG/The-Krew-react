import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

import Nav from './Components/NavBar';
import Footer from './Components/Subcomps/footer';


import Join from './Pages/join'
import Index from './Pages/index'
import Error from './Pages/error'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav/>
      <Switch>
        <Route path="/" exact component={Index}/>
        <Route path="/join" component={Join}/>
        <Route path="/about" component={Error}/>
        <Route path="/contact" component={Error}/>
        <Route path="/" component={Error}/>

      </Switch>
      <Footer link="blue"/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
