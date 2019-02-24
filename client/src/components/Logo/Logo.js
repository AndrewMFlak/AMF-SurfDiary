import React from "react";
import MainLogo from "../../assets/images/Andrew_SurfDiary_logo.png";
import "./Logo.css";

class Logo extends React.Component {
    render() {
        return (
            <a href="https://github.com/AndrewMFlak/AMF-SurfDiary">
                <img className="logo" id="mainLogoID" src={MainLogo} alt="Surf Diary Logo"/>
            </a>
        );
    }
}    

export default Logo;