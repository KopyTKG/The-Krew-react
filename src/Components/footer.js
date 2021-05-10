
const Footer = ({link,git}) => {
    return(
        <footer className="bottom">
            <a href={link} rel="noreferrer" className="text-white" target="_blank">
                Image source
            </a>
            &nbsp; &nbsp; &nbsp;
            <a href={git} rel="noreferrer" className="text-white" target="_blank">
                Github repo
            </a>
        </footer>
    );
    
}

export default Footer;