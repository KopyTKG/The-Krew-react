import { Row, Col, Container } from 'reactstrap';
import Title from '../Components/SVG/title';
import TextBlock from "../Components/TextBlock";

const App = () => {
    return(
        <>
        <Container className="bg-white-transparent margin-top ">
            <Row xs="12">
                <Col xs="12" className="center-line">
                    <Title title="About"/>
                </Col>
            </Row>
            <Container className="bg-white-transparent bg-radius">
                <TextBlock
                    title="The Krew Group [TKG]"
                    text="We are group of friends and gamers. <br>
                        Some of us are mentally ill (#Bword)."
                    img={process.env.PUBLIC_URL + "/logo.png"} />
            </Container>
            <br/>
            <Container>
                <Row className="bg-white-transparent bg-radius">
                    <Col xs="6">
                        <Row xs="12" className="text-medium text-title">
                            <Col xs="1"/>
                            <Col xs="11">
                            Active users:
                            </Col>
                        </Row>
                        <Row xs="12" className="text-smaller text-black">
                            <Col xs="1"/>
                            <Col xs="11">
                                Kopy.TKG (Owner / dev - web dev) <br/>
                                D4vEOFF (main admin / bot dev)<br/>
                                ByBye  (admin / meme master) <br/>
                                Marty11 (admin / <b>Bword</b> hater)<br/>
                                Seeya (admin / network master) <br/>
                            </Col>
                            
                        </Row>
                    </Col>
                    <Col>
                        <Row xs="12" className="text-medium text-title">
                        <Col xs="11">
                            Server Roles:
                        </Col>
                        <Col xs="1"/>
                        </Row>
                        <Row xs="12" className="text-smaller text-black">
                            <Col xs="11">
                            DEM0NS -{">"} Admins<br/>
                            HIGH END USER -{">"} Active user<br/>
                            LOW END USER -{">"} Better user<br/>
                            The Krew Member -{">"} user<br/>
                            </Col>
                            <Col xs="1"/>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <br/>
        </Container>
        </>
    )
}

export default App;