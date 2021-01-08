import './Login.css';
import React from 'react'
import {Link} from "react-router-dom";

function Login() {
    return (
        <div className="Login">
            <div className="Homepage__bgbox1 hide_on_mobile" />
            {/* <div className="Homepage__bgbox2 hide_on_mobile" /> */}

            <div className="Login__main" style={{marginBottom: "200px", marginTop: "100px"}}>
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
