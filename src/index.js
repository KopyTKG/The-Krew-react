import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route,Redirect} from 'react-router-dom';

// css files
import "./assets/scss/index.scss";

// custome components
import DefaultLayout from './layout/default/default.layout';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" render={() => <DefaultLayout/>} />
        <Route exact path="/">
            <Redirect from="/" to="/" />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
