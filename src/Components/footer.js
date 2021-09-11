import {Github} from "../assets/@svg/react/solid/"


const Footer = ({link,git}) => {
    return(
        <footer className="bottom">
            {/* <a href={link} rel="noreferrer" className="text-white" target="_blank">
                Image source
            </a>
            &nbsp; &nbsp; &nbsp; */}
            <a href={git} rel="noreferrer" target="_blank">
                <Github style={{stroke: "gray", fill: "gray", height: 35, marginBottom: 5}} />
            </a>
        </footer>
    );
    
}

export default Footer;