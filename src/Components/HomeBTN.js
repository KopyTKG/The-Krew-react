import React from "react";
import Logo from "./SVG/logo";

class HomeNutton extends React.Component {
    render() {
        let mod = 0;
        if(window.innerWidth < 450) {
            mod = 5.5;
        }
        else {
            mod = 5;
        }
        return(
            <div className="home">
            <a href="/"><Logo modifier={mod}/></a>
            </div>
        );
    }
}

export default HomeNutton;
