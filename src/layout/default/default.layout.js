import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
// javascript plugin used to create scrollbars on windows

import {Github} from "../../assets/@svg/react/solid/"

import routes from "../../routes.js";

const Default = ({Back}) => {
  const mainPanelRef = React.useRef(null);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/default") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  return (
        <React.Fragment>
          <div className="wrapper">
            {/* <Sidebar
              routes={routes}
              logo={{
                outterLink: "https://thekrew.vercel.app/",
                text: "The Krew Site",
                imgSrc: logo,
              }}
              toggleSidebar={toggleSidebar}
              layout="/admin"
            /> */}
            <div className="main-panel" ref={mainPanelRef}>
                <Switch>
                {getRoutes(routes)}
                    <Redirect from="*" to="/default/about" />
                </Switch>
            </div>
            <footer className="bottom">
                <a href="https://github.com/KopyTKG/ReactApp" rel="noreferrer" target="_blank">
                    <Github style={{stroke: "gray", fill: "gray", height: 35, marginBottom: 5}} />
                </a>
            </footer>
      </div>   
    </React.Fragment>
  );
}

export default Default;
