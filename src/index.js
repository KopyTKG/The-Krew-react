import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// css files
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/scss/index.scss";

// custome components
import Nav from './Components/NavBar';

import DefaultLayout from './layout/default/default.layout';

import ThemeContextWrapper from './Components/theme/themeWrapper';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextWrapper>
    <Router>
      {/* <Nav/> */}
      <Switch>
        <Route path="/default" render={(props) => <DefaultLayout/>} />
      </Switch>
    </Router>
    </ThemeContextWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);
