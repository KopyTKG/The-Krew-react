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
                    img={process.env.PUBLIC_URL + "/logo.png"}
                    click="https://the-krew.github.io"
                    size="3xl"
                    />
            </Container>
            <br/>
            <Container className="bg-white-transparent bg-radius">
                <TextBlock 
                    title="KopyTKG"
                    text="Server owner. <br> Web dev and bot dev.<br>  Takes care of the server."
                    img={process.env.PUBLIC_URL + "/img/kopy.png"}
                    click="https://steamcommunity.com/id/kopy123/"
                    size="xl"
                    radius={true}
                />
            </Container>
            <br/>
            <Container className="bg-white-transparent bg-radius">
                <TextBlock 
                    title="D4vEOFF"
                    text="Server coowner. <br> Bot dev and math genius.<br> He is good at helping people. #CSGO1V1 <- try it i bet you, you dare (Server helper)."
                    img={process.env.PUBLIC_URL + "/img/d4ve.png"}
                    click="https://steamcommunity.com/id/D4vEOFF/"
                    size="xl"
                    radius={true}
                />
            </Container>
            <br/>
            <Container className="bg-white-transparent bg-radius">
                <TextBlock 
                    title="ByBye (BeBe / Barbar)"
                    text="Server admin. <br> future dev and memer <br> He is really good at memeing people. #BwordCreater  (Anime fan)."
                    img={process.env.PUBLIC_URL + "/img/bebe.png"}
                    click="https://steamcommunity.com/profiles/76561198051043165"
                    size="xl"
                    radius={true}
                />
            </Container>
            <br/>
            <Container className="bg-white-transparent bg-radius">
                <TextBlock 
                    title="Marty11"
                    text="Server admin. <br> ehm idk what to say just regular gamer i guess ??"
                    img={process.env.PUBLIC_URL + "/img/Marty.png"}
                    click="https://steamcommunity.com/profiles/76561198119098985"
                    size="xl"
                    radius={true}
                />
            </Container>
            <br/>
            <Container className="bg-white-transparent bg-radius">
                <TextBlock 
                    title="Seeya"
                    text="Server admin. <br> tech support / network support (you dont know that from here!)"
                    img={process.env.PUBLIC_URL + "/img/seeya.png"}
                    click="https://steamcommunity.com/profiles/76561198065007518"
                    size="xl"
                    radius={true}
                />
            </Container>
            <br/>
            <Container className="bg-white-transparent bg-radius">
                <TextBlock 
                    title="Oncee (Varpa)"
                    text="Server admin. <br> He has loud ass brother that will give u a earrape all day long. So be warned!!"
                    img={process.env.PUBLIC_URL + "/img/oncee.png"}
                    click="https://steamcommunity.com/profiles/76561198095482345"
                    size="xl"
                    radius={true}
                />
            </Container>
            <br/>
        </Container>
        </>
    )
}

export default App;