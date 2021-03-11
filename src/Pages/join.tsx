import React from "react"
import { Row, Col, Container } from 'reactstrap';
import Title from '../Components/Subcomps/title';

const App: React.FC = () => {
    return(
        <>
        <Container className=" bg-white-transparent margin-top inner">
            <Row xs="12">
                <Col xs="12" className="center-line">
                    <Title title="Join"/>
                </Col>
            </Row>
            <Row xs="12">
                <Col xs="1"/>
                <Col xs="3" className="bg-white-transparent bg-radius-left">
                    <a href="https://discord.gg/ZtjNUMHm8C" target="_blank" rel="noreferrer"><div className="dis"/></a>
                </Col>
                <Col className="bg-white-transparent bg-radius-right">
                    <Row xs="12" className="text-small">
                    Hey, you looking for good discord server?? <br/> Come, join out server.
                    </Row>
                    <Row className="text-medium text-black text-title">
                        {"<"}- Click to join server
                    </Row>
                </Col>
                <Col xs="1"/>
            </Row>
        </Container>
        </>
    )
}

export default App;