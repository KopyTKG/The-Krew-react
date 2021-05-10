import {useState} from "react";

const Footer = (link) => {
    
    const [linkState, setLink] = useState("");

    switch(link){
        case "blue":
            setLink("https://cz.pinterest.com/pin/575194183663852210/");
            break;
        case "gray":
            setLink("https://wallpaperboat.com/wp-content/uploads/2020/04/dark-city-wallpaper-1920x1080-1.jpg");
            break;
        default:
            break;
    }
    return(
        <footer className="bottom">
            <a href={linkState} rel="noreferrer" className="text-white" target="_blank">
                Image source
            </a>
        </footer>
    );
    
}

export default Footer;