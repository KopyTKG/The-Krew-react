import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// css files
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/scss/index.scss";

// custome components
import Nav from './Components/NavBar';
import Footer from './Components/footer';

// sites
import Index from './views/index'
// import Join from './views/join'
// import About from './views/about'
// import Error from './views/error'
import ThemeContextWrapper from './Components/theme/themeWrapper';




ReactDOM.render(
  <React.StrictMode>
    <ThemeContextWrapper>
    <Router>
      <Nav/>
      <Switch>
        <Route path="/" component={Index}/>
        {/* <Route path="/join" component={Join}/>
        <Route path="/about" component={About}/>
        <Route path="/" component={Error}/> */}
      </Switch>
      {/*
      * Footer -> /src/Components/Footer.js
      */}
      <Footer 
      link="https://www.toptal.com/designers/subtlepatterns/"
      git="https://github.com/KopyTKG/ReactApp"
      />
    </Router>
    </ThemeContextWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);
