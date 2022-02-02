import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
// javascript plugin used to create scrollbars on windows

import {Github} from "../../assets/@svg/react/solid/"

import routes from "../../routes.js";

var ps;

const Default = ({Back}) => {
  const location = useLocation();
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

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
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
                    <Redirect from="*" to="/default/home" />
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
