import './Signup.css';
import React from 'react';
import {Link} from "react-router-dom";


function Signup() {
    return (
        <div className="Signup">
            <div className="Signup__header">
                <div className="Signup__logo">Focus Group Chat</div>
                
            </div>
            <div className="Signup__main">
                <div className="Signup__left">
                    <div className="Signup__bigText">Sign-Up</div>
                    <div className="Signup__smallText">Already signed up?  <Link className="Signup__left_link" to="/login">Login Here</Link></div>
                </div>
                <div className="Signup__right">
                    <div className="Signup__right_form">
                        <input className="Signup__field" type="text" placeholder="First Name"/>
                        <input className="Signup__field" type="text" placeholder="Last Name"/>
                        <input className="Signup__field" type="text" placeholder="Organization"/>
                        <input className="Signup__field" type="text" placeholder="Title"/>
                        <input className="Signup__field" type="email" placeholder="Email"/>
                        <input className="Signup__field" type="text" placeholder="Intended Use"/>
                        <input className="Signup__field" type="text" placeholder="Purpose of Application"/>
                    </div>
                   <div className="Signup__button">Sign Up</div> 
                </div>
            </div>
        </div>

    )
}

export default Signup
