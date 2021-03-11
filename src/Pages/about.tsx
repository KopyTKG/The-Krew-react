import React from "react"
import { Row, Col, Container } from 'reactstrap';
import Title from '../Components/Subcomps/title';

const App: React.FC = () => {
    return(
        <>
        <Container className=" bg-white-transparent margin-top inner">
            <Row xs="12">
                <Col xs="12" className="center-line">
                    <Title title="About"/>
                </Col>
            </Row>
            <br/>
            <Row xs="12">
                <Col xs="1"/>
                <Col xs="3" className="bg-white-transparent bg-radius-left">
                    <a href="https://discord.gg/ZtjNUMHm8C" target="_blank" rel="noreferrer"><div className="logo"/></a>
                </Col>
                <Col className="bg-white-transparent bg-radius-right">
                    <Row xs="12" className="text-medium text-title">
                    The krew group [TKG]
                    </Row>
                    <Row className="text-small text-black">
                    We are group of friends and gamers.<br/> Some of us are mentally ill (#Bword). <br/>He likes to spam “EY” so watch out.<br/> Last thing don’t be like bobo, nobody likes bobo!
                    </Row>
                </Col>
                <Col xs="1"/>
            </Row>
            <br/>
            <Row xs="12">
                <Col xs="1"/>
                <Col xs="5" className="bg-white-transparent bg-radius-left">
                    <Row xs="12" className="text-medium text-title">
                        <Col xs="1"/>
                        <Col xs="11">
                        Active users:
                        </Col>
                    </Row>
                    <Row xs="12" className="text-smaller text-black">
                        <Col xs="1"/>
                        <Col xs="11">
                            Kopy.TKG -{">"} the server owner <br/>
                            D4vEOFF -{">"} main admin / bot dev <br/>
                            ByBye -{">"} admin / meme master <br/>
                            Marty11 -{">"} admin / <b>bobo hater</b> <br/>
                            Seeya -{">"} admin / network master <br/>
                        </Col>
                        
                    </Row>
                </Col>
                <Col className="bg-white-transparent bg-radius-right">
                    <Row xs="12" className="text-medium text-title">
                    <Col xs="11">
                        Server Roles:
                    </Col>
                    <Col xs="1"/>
                    </Row>
                    <Row xs="12" className="text-smaller text-black">
                        <Col xs="11">
                        G0DS -{">"} Owner / main admin<br/>
                        DEM0NS -{">"} Admins<br/>
                        HIGH END USER -{">"} all perm but not admin<br/>
                        LOW END USER -{">"} Access to all rooms<br/>
                        The Krew Member -{">"} user<br/>
                        PLEBS [NEW] -{">"} new user<br/>
                        </Col>
                        <Col xs="1"/>
                    </Row>
                </Col>
                <Col xs="1"/>
            </Row>
        </Container>
        </>
    )
}

export default App;