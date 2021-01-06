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
                        <input className="Signup__field" type="text" placeholder="Purpose of Application" multiline/>
                        <input className="Signup__field" type="text" placeholder="Requested Dataset"/>
                        <label style={{alignSelf:"flex-start", marginBottom:"10px", color:"#555"}}htmlFor="citation">Citation - Please use the citation in your work</label>
                        <textarea className="Signup__field" id="citation" name="citation" rows="4" cols="50" readonly>
                            Global Barometer Survey, Wave 1 (2005-2011) Pooled Datafile, https://www.globalbarometer.net/. Taipei: Hu Fu Center for East Asia Democratic Studies, NTU [distributor], 2020.
                            Global Barometer Survey, Wave 2 (2011-2013) Pooled Datafile, https://www.globalbarometer.net/. Taipei: Hu Fu Center for East Asia Democratic Studies, NTU [distributor], 2020.
                            Global Barometer Survey, Wave 3 (2014-2016) Pooled Datafile, https://www.globalbarometer.net/. Taipei: Hu Fu Center for East Asia Democratic Studies, NTU [distributor], 2020.
                        </textarea>
                        <label style={{alignSelf:"flex-start", marginBottom:"10px", color:"#555"}}htmlFor="personal">Personal Data Protection Act</label>
                        <textarea className="Signup__field" id="personal" name="personal" rows="4" cols="50" readonly>
                            According to the Enforcement Rules of the Personal Data Protection Act (PDPA), we hereby inform you about the data collection process involving your personal data.

                            This link collects, processes, and uses your personal data, including identifying names, affiliation, title, and e-mail address. The collection, processing and utilization of this personal data will be carried out by Global Barometer Surveys (GBS) and will abide by the provisions of the PDPA.

                            In accordance with Article 3 of the PDPA, you have the right to make an inquiry of and to review your personal data; request a copy of your personal data; supplement or correct your personal data; demand the cessation of the collection, processing or use of your personal data; and erase your personal data. If you have any questions, please contact us by email at asianbarometer@ntu.edu.tw. You have the right not to reveal your personal data. However, we will unable to provide access to GBS data if you do not provide the required personal data.
                                    
                        </textarea>
                        <div>
		                    The APPLICANT hereby is in good faith on agreeing to obey the<br/> RULES AND OBLIGATIONS GOVERNING THE ACCESS TO GLOBAL<br/> BAROMETER SURVEY DATA
		                </div>
                    </div>
                   <div className="Signup__button">Sign Up</div> 
                </div>
            </div>
        </div>

    )
}

export default Signup
