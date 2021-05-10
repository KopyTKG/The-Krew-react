import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// css files
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/Style/style.css";
import "./assets/Style/index.css";
import "./assets/Style/textblock.css";

// custome components
import Nav from './Components/NavBar';
import Footer from './Components/footer';

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
      * Footer -> /src/Components/Footer.js
      */}
      <Footer 
      link="https://www.toptal.com/designers/subtlepatterns/"
      git="https://github.com/KopyTKG/ReactApp"
      />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
