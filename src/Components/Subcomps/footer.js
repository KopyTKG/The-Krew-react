import React from "react";

class footer extends React.Component {
    render() {
        let link = "";
        switch(this.props.link){
            case "blue":
                link = "https://cz.pinterest.com/pin/575194183663852210/";
                break;
            case "gray":
                link = "https://wallpaperboat.com/wp-content/uploads/2020/04/dark-city-wallpaper-1920x1080-1.jpg";
                break;
            default:
                break;
        }
        return(
            <footer className="bottom">
                <a href={link} rel="noreferrer" className="text-white" target="_blank">Image source</a>
            </footer>
        );
    }
}

export default footer;