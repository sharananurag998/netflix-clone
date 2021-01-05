import './Header.css';
import React from 'react'
import UserIcon from '../../assets/images/User.png';

function Header() {
    return (
        <div className="Header">
            <div className="logo">
                Focus Group Chat
            </div>
            <div className="Header__right">
                <div className="Header__link active">Home</div>
                <div className="Header__link">Features</div>
                <div className="Header__link">How it works</div>
                <div className="Header__link">Get in touch</div>
                <div className="Header__icon">
                    <img src={UserIcon} alt="User icon"/>
                </div>
                
            </div>
            
        </div>
    )
}

export default Header;