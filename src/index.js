import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route,Redirect} from 'react-router-dom';

// css files
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/scss/index.scss";

// custome components
import DefaultLayout from './layout/default/default.layout';
import ThemeContextWrapper from './Components/theme/themeWrapper';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextWrapper>
    <Router>
      {/* <Nav/> */}
      <Switch>
        <Route path="/" render={(props) => <DefaultLayout/>} />
        <Route exact path="/">
            <Redirect from="/" to="/" />
        </Route>
      </Switch>
    </Router>
    </ThemeContextWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);
