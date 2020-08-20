import React from 'react'
import './footer.css'
import FacebookLogo from '../img/facebook.svg'
import TwitterLogo from '../img/twitter.svg'
import YoutubeLogo from '../img/youtube.svg'
import PaypalLogo from '../img/paypal.svg'
import GmailLogo from '../img/gmail.svg'


export default function Footer(){
    return(
        <div className="footer">
            <div className="wrap">
                <div className="footer-items">
                    <div className="footer-item">
                        <p className="titles">SIGNUP TO OUR NEWSLETTER</p>
                        <button className="subs-button">SUBSCRIBE</button>
                    </div>
                    <div className="footer-item">
                        <p className="titles">SERVICE TIMES</p>
                        <p className="time">Sundays at 9:30 & 11:30 AM</p>
                        <p className="lorem">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="footer-item">
                        <p className="titles">CONNECT WITH US</p>
                        <div className="social">
                        <img src={FacebookLogo} alt="FacebookLogo"></img>
                        <img src={TwitterLogo} alt="TwitterLogo"></img>
                        <img src={YoutubeLogo} alt="YoutubeLogo"></img>
                        <img src={PaypalLogo} alt="PaypalLogo"></img>
                        <img src={GmailLogo} alt="GmailLogo"></img>
                    </div>
                    </div>
                </div>
                <hr/>
                <p className="copyright">© Copyright 2017 SevenOaks. All rights reserved.  Privacy Policy  |  Share This</p>
            </div>
        </div>
    )
}