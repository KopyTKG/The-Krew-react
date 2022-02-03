import React from "react"
import { Col, Row } from "reactstrap";
import KrewLogo from "src/assets/img/TheKrew.png";

const Index = () => {
    return(
        <>
        <div id="home" className="m-1x">
            <img src={KrewLogo} className="m-1x" alt="temp slot"/>
        </div>
        <div id="about" className="m-2x">
            <div className="center">
                <Row>
                <Col>
                    <div className="sw-1x sh-1x"></div>
                    <div className="sh-spacer"></div>
                    <div className="sw-1x sh-1x"></div>
                    <div className="sh-spacer"></div>
                    <div className="sw-1x sh-2x"></div>
                </Col>
                <Col>
                    <div className="sw-1x sh-1x"></div>
                    <div className="sh-spacer"></div>
                    <div className="sw-1x sh-2x"></div>
                    <div className="sh-spacer"></div>
                    <div className="sw-1x sh-1x"></div>
                </Col>
                </Row>

            </div>
        </div>
        <div className="m-1x">
            <img src={KrewLogo} className="m-1x" alt="temp slot"/>
        </div>
        <div id="crew" className="m-2x">
            <div className="center">
                <Row>
                <Col>
                    <div className="sw-1x sh-1x"></div>
                    <div className="sh-spacer"></div>
                    <div className="sw-1x sh-1x"></div>
                    <div className="sh-spacer"></div>
                    <div className="sw-1x sh-2x"></div>
                </Col>
                <Col>
                    <div className="sw-1x sh-2x"></div>
                    <div className="sh-spacer"></div>
                    <div className="sw-1x sh-1x"></div>
                    <div className="sh-spacer"></div>
                    <div className="sw-1x sh-1x"></div>
                </Col>
                </Row>
            </div>
        </div>
        </>
    )
}

export default Index;