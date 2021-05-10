import { Row, Col } from "reactstrap";

const TextBlock = ({title, text, img}) => {
    let lines = text.replace("\r", "").split("<br>");

    return(
        <Row className="block">
            <Col>
                <Row>
                    <Col className="block-header">
                        <div>{title}</div>
                    </Col>
                </Row>
                <Row>
                    <Col xs="6">
                        {lines && lines.map((line, index) => {
                            return(
                                line
                                );
                        })}
                    </Col>
                    <Col xs="6">
                        {img &&
                            <img src={img} className="block-filler-img"/>
                        }
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}


export default TextBlock;