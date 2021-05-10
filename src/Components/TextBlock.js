import { Row, Col } from "reactstrap";

const TextBlock = ({title, text, img, click, size, radius}) => {
    let lines = text.replace("\r", "").split("<br>");
    let style = "img-"+size;
    if(radius) style += " img-radius";
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
                    <Col xs="6" className="block-img-slot">
                        <a  href={click}
                            target="_blank" 
                            rel="noreferrer"
                        >
                        {img &&
                            <img src={img} className={"block-filler-img " + style} alt="def"/>
                        }
                        </a>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}


export default TextBlock;