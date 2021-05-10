const Footer = (link) => {
    return(
        <footer className="bottom">
            <a href={link.link} rel="noreferrer" className="text-white" target="_blank">
                Image source
            </a>
        </footer>
    );
    
}

export default Footer;