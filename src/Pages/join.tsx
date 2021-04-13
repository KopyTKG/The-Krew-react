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
            <Container className="bg-white-transparent bg-radius">
                <Row>
                    <Col>
                        <a href="https://discord.gg/ZtjNUMHm8C" target="_blank" rel="noreferrer">
                            <div className="dis"/>
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <Row className="text-small">
                            <Col>
                                Hey, you looking for good discord server?? <br/> Come, join out server.
                            </Col>
                        </Row>
                        <Row className="text-medium text-black text-title">
                            <Col>
                                Click icon to join server
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
        </>
    )
}

export default App;