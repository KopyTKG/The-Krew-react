import React from "react";
import Logo from "./logo";

class HomeNutton extends React.Component {
    render() {
        return(
            <div className="home">
            <a href="/"><Logo modifier="5"/></a>
            </div>
        );
    }
}

export default HomeNutton;
