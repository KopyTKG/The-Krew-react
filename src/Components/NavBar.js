import React from "react";
import { Col, Row, Container } from "reactstrap";

import NavButton from "./Subcomps/NavBTN";

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeNutton from "./Subcomps/HomeBTN";


class Nav extends React.Component {
    render() {
        return( 
        <Container>
            <HomeNutton/>
            <div className="nav-strip"></div>
            <Row xs="12">
                <Col xs="3">
                </Col> 
                <Col xs="6">
                    <Row xs="12">
                        <NavButton text="About" link="ReactApp/about"/>
                        <NavButton text="Join" link="ReactApp/join"/>
                        <NavButton text="Contact" link="ReactApp/contact"/>
                    </Row>
                </Col>
                <Col xs="3"/>
                
            </Row>
        </Container>
        );
    }
}

export default Nav;

