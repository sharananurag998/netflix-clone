import './Homepage.css';
import React from 'react';
import iPhoneImage from '../../assets/images/iPhones.png';
import BrowserImage from '../../assets/images/Browser.png';
import iPhoneWithImage from '../../assets/images/iPhoneWithImage.png';
import IdeaIcon from '../../assets/images/Idea.png';
import iPhoneCrop from '../../assets/images/iPhoneCrop.png';
import {Link} from "react-router-dom";

function Homepage() {
    return (
        <div className="Homepage">
            <div className="Homepage__bgbox1 hide_on_mobile" />
            <div className="Homepage__bgbox2 hide_on_mobile" />
            <div className="Homepage__top">
                <div className="Homepage__titleText">
                    Focus groups made easy<br/>The easy, fast and free way to run focus groups
                </div>
                <div className="Homepage__smallText">
                    Start your free focus group today
                </div>
                <div className="Homepage__buttons">
                    <Link to="/signup" style={{textDecoration: "none"}}><button className="Homepage__button primary">Sign up</button></Link>
                    <Link to="/login" style={{textDecoration: "none"}}><button className="Homepage__button">Login</button></Link>
                </div>
                <img src={iPhoneImage} className="Homepage__iphone" alt="iPhones"/>
                <img src={BrowserImage} className="Homepage__browser" alt="browser"/>

            </div>
            <div className="Homepage__features">
                <div className="Homepage__featureTitle">
                    Get your focus group chat now in just 10 minutes
                </div>
                <div className="Homepage__steps">
                    <div className="Homepage__card">
                        <div className="Homepage__number">1</div>
                        <div className="Homepage__card_title">Create your focus group</div>
                        <div className="Homepage__card_description">Get your focus group started in 10 minutes (or less) by creating it and make a topic for participants .</div>
                    </div>
                    <div className="Homepage__card">
                        <div className="Homepage__number">2</div>
                        <div className="Homepage__card_title">Invite participants to join</div>
                        <div className="Homepage__card_description">Share your secure group link to your social networks, customer lists and website, or add it to the end of any online survey.</div>
                    </div>
                    <div className="Homepage__card">
                        <div className="Homepage__number">3</div>
                        <div className="Homepage__card_title">Moderate the discussion</div>
                        <div className="Homepage__card_description">Participants can respond to you and each other. Run your groups as long as you want .</div>
                    </div>
                    <div className="Homepage__card">
                        <div className="Homepage__number">4</div>
                        <div className="Homepage__card_title">Invite hosts for help</div>
                        <div className="Homepage__card_description">Send email to whoever you want to be your chat group host .</div>
                    </div>
                </div>
                <button className="Homepage__button primary" style={{marginBottom: "100px"}}>
                    Start Now
                    <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft:"40px"}}width="24" fill="white" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
                </button>
            </div>

            <div className="Homepage__display">
                <img src={iPhoneWithImage} className="Homepage__display_left hide_on_mobile" alt="iPhone"/>
                <div className="Homepage__display_right">
                    <img src={IdeaIcon} alt="Idea"/>
                    <div className="Homepage__display_title">
                        easy, fast way to gather qualitative feedback online.
                    </div>
                    <div className="Homepage__display_description">
                         In order to make the best decisions possible, organizations should be using both quantitative (surveys) and qualitative (focus group) methods. 
                    </div>
                    <button className="Homepage__button primary" style={{marginBottom: "100px"}}>
                        Learn More
                    </button>
                </div>
                <img src={iPhoneCrop} className="show_on_mobile" alt="iPhone Crop"/>
            </div>
        </div>
    )
}

export default Homepage
