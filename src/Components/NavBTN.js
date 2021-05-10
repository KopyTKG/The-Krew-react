import { Col } from "reactstrap";

const NavNutton = ({link, text}) => {
    return(
       <a href={"/"+ link}>
       <Col className="nav-text">{text}</Col>
       </a>
    );
}

export default NavNutton;

