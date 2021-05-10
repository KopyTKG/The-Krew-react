import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// css files
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Style/style.css";
import "./Style/index.css";
import "./Style/textblock.css";

// custome components
import Nav from './Components/NavBar';
import Footer from './Components/footer';
import Background from './Components/Background';

// sites
import Join from './Pages/join'
import About from './Pages/about'
import Index from './Pages/index'
import Error from './Pages/error'




ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/*
        * Nav bar -> /src/Components/NavBar.js
      */}
      <Nav/>
      {/* 
      * Switch for inner body
      * DO NOT ENTER STATIC obj
      */}
      <Switch>
        <Route path="/" exact component={Index}/>
        <Route path="/join" component={Join}/>
        <Route path="/about" component={About}/>
        <Route path="/" component={Error}/>
      </Switch>
      {/*
      * Background img
      */}
      <Background url="/img/background-gray.jpg"/>
      {/*
      * Footer -> /src/Components/Footer.js
      */}
      <Footer link="gray"/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
