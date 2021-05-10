import React from "react"
import { Row, Col, Container } from 'reactstrap';
import Title from '../Components/SVG/title';
import TextBlock from "../Components/TextBlock";

const Join = () => {
    return(
        <Container className="inner-join bg-white-transparent margin-top">
            <Row xs="12">
                <Col xs="12" className="center-line">
                    <Title title="Join"/>
                </Col>
            </Row>
            <Container className="bg-white-transparent bg-radius">
                <TextBlock 
                    title="Discord server"
                    text=" Hey, you looking for good discord server?? <br> Come, join our server. <br> <b> Click the icon to join server. ---> <b>"
                    img={process.env.PUBLIC_URL + "/Image/discord.png"}
                    click="https://discord.gg/ZtjNUMHm8C"
                    size="l"
                />
            </Container>
            <br/>
            <Container className="bg-white-transparent bg-radius">
                <TextBlock 
                    title="Old website"
                    text="Just remider. What we use to have. <br> <b> All build by using HTML, CSS, JS.<b> <br> <b><b>New website is powered by React"
                    img={process.env.PUBLIC_URL + "/logo.png"}
                    click="https://the-krew.github.io"
                    size="l"
                />
            </Container>
        </Container>
    )
}

export default Join;