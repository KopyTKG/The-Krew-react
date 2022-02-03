import React from "react"

import {Discord} from "../assets/@svg/react/solid/"


const KrewLogo = process.env.PUBLIC_URL + "/Image/TheKrew.png";

const Index = () => {
    return(
        <>
        <div id="home" className="m-1x">
            <img src={KrewLogo} className="m-1x" alt="temp slot"/>
        </div>
        <div id="about" className="m-2x">
            <div className="center">
                <div className="ms">
                    <div className="slot sw-1x sh-1x">
                        <Discord fill="#26004D" stroke="white" strokeWidth={0.2}/>
                    </div>
                    <div className="slot sh-spacer"></div>
                    <div className="slot sw-1x sh-1x"></div>
                    <div className="slot sh-spacer"></div>
                    <div className="sw-1x sh-2x"></div>
                </div>
                <div className="ms">
                    <div className="slot sw-1x sh-1x sr-1 text">
                        testing text
                    </div>
                    <div className="slot sh-spacer"></div>
                    <div className="sw-1x sh-2x">
                        <iframe src="https://discord.com/widget?id=548602262466068497&theme=dark" className="s-item" allowtransparency="False" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"/>
                    </div>
                    <div className="slot sh-spacer"></div>
                    <div className="slot sw-1x sh-1x"></div>
                </div>
            </div>
        </div>
        {/* <div className="m-1x">
            <img src={KrewLogo} className="m-1x" alt="temp slot"/>
        </div> */}
        {/* <div id="crew" className="m-2x">
            <div className="center">
                <div className="ms">
                    <div className="sw-1x sh-1x"></div>
                    <div className="sh-spacer"></div>
                    <div className="sw-1x sh-1x"></div>
                    <div className="sh-spacer"></div>
                    <div className="sw-1x sh-2x"></div>
                </div>
                <div className="ms">
                    <div className="sw-1x sh-2x"></div>
                    <div className="sh-spacer"></div>
                    <div className="sw-1x sh-1x"></div>
                    <div className="sh-spacer"></div>
                    <div className="sw-1x sh-1x"></div>
                </div>
            </div>
        </div> */}
        </>
    )
}

export default Index;