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
            <div className="nav-strip"></div>
            <Row lg="12" md="12" sm="12" xs="12">
                <Col>
                    <HomeNutton/>
                </Col> 
                <Col>
                    <Row xs="12" sm="12" md="12" lg="12" xl="12">
                        <Col xs="0" sm="0" md="3"></Col>
                        <Col xs="6" sm="6" md="4">
                            <NavButton text="About" link="about"/>
                        </Col>
                        <Col xs="6" sm="6" md="3">
                            <NavButton text="Join" link="join"/>
                        </Col>
                    </Row>
                </Col>
                
            </Row>
        </Container>
        );
    }
}

export default Nav;

