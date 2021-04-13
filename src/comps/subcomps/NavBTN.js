import React from "react";
import { Col } from "reactstrap";

class NavNutton extends React.Component {
    render() {
        return(
           <a href={"/"+this.props.link}>
           <Col className="nav-text">{this.props.text}</Col>
           </a>
        );
    }
}

export default NavNutton;

