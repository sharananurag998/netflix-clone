import './Header.css';
import React from 'react'
import UserIcon from '../../assets/images/User.png';

function Header() {
    return (
        <div className="Header">
            <div className="logo">
                Focus&nbsp;Group&nbsp;Chat
            </div>
            <div className="Header__right">
                <div className="Header__link active">Home</div>
                <div className="Header__link">Features</div>
                <div className="Header__link">How&nbsp;it&nbsp;works</div>
                <div className="Header__link">Get&nbsp;in&nbsp;touch</div>
                <div className="Header__icon">
                    <img src={UserIcon} alt="User icon"/>
                </div>
                
                <ul class="menu"        >
                    <li><a href="#a">Home</a></li>
                    <li><a href="#b">Features</a></li>
                    <li><a href="#c">About</a></li>
                    <li><a href="#c">Privacy</a></li>
                    <li><a href="#c">Terms</a></li>
                    <li><a href="#d">Get&nbsp;in&nbsp;touch</a></li>
                </ul>

                <input class="menu-btn" type="checkbox" id="menu-btn" />
                <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
            </div>
            
        </div>
    )
}

export default Header;