import './Login.css';
import React from 'react'
import {Link} from "react-router-dom";

function Login() {
    return (
        <div className="Login">
            <div className="Login__header">
                <div className="Login__logo">Focus Group Chat</div>
                
            </div>
            <div className="Login__main">
                <div className="Login__left">
                    <div className="Login__bigText">Sign-In</div>
                </div>
                <div className="Login__right">
                    <div className="Login__right_form">
                        <input className="Login__field" type="email" placeholder="Email Address"/>
                        <input className="Login__field" type="password" placeholder="Password"/>
                        <Link to="/forgot-password"><div className="Login__forgot_pass">Forgot Password</div></Link>
                    </div>
                   <div className="Login__button">Sign In</div> 
                </div>
            </div>
        </div>
    )
}

export default Login
