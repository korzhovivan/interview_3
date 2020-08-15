import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from './slider/style';
import "./header.css"



export default function Header(){
    
    return(
        <>
        <div className="header">
            <div className="top-menu">
                    <div className="left-col">
                        <img src={require("../img/logo.png")} alt={"logo"}></img>
                        <p>
                            <span className="movie">MOVIE</span>
                            <br/>
                            <span className="collection">collection</span>
                        </p>
                    </div>
                    <div className="right-col">
                        <a href={""}>ABOUT</a>
                        <a href={""}>MEDIA</a>
                        <a href={""}>EVENTS</a>
                        <a href={""}>SHOP</a>
                        <a href={""}>GIVE</a>
                    </div>
            </div>
            <AwesomeSlider>
            <div data-src={require("../img/banner.png")} />
            <div data-src={require("../img/banner2.JPG")} />
            <div data-src={require("../img/banner3.jpg")} />
            </AwesomeSlider>
            <div className="greeting">
                <div><span>Welcome to MovieCollection website</span> which is run by the friends of MovieCollection.</div>
            </div>
        </div>
        
        </>
    )
}