import './Homepage.css';
import React from 'react';
import iPhoneIcon from '../../assets/images/iPhones.png';
import DocumentIcon from '../../assets/images/Document.png';
import StarIcon from '../../assets/images/Star.png';
import ClockIcon from '../../assets/images/Clock.png';
import EmailIcon from '../../assets/images/Email Icon.png';
import PhoneIcon from '../../assets/images/Phone Icon.png';
import AddressIcon from '../../assets/images/Address Icon.png';

function Homepage() {
    return (
        <div className="Homepage">
            <div className="Homepage__bgbox1" />
            <div className="Homepage__bgbox2" />
            <div className="Homepage__titleText">
                Focus groups made easy<br/>The easy, fast and free way to run focus groups
            </div>
            <div className="Homepage__smallText">
                Start your free focus group today
            </div>
            <div className="Homepage__buttons">
                <button className="Homepage__button primary">Sign up</button>
                <button className="Homepage__button">Login</button>
            </div>
            <img src={iPhoneIcon} className="Homepage__iphone" alt="iPhones"/>

            <div className="Homepage__features">
                <div className="Homepage__featureTitle">
                    Great Features
                </div>
                <div className="Homepage__cards">
                    <div className="Homepage__card">
                        <img src={DocumentIcon} alt="Documents"/>
                        <div className="Homepage__card_title">Great Documentation &<br/>Organized Files</div>
                        <div className="Homepage__card_description">All layers are well named & grouped, documentation looks pretty cool also.</div>
                    </div>
                    <div className="Homepage__card_elevated">
                        <img src={StarIcon} alt="Star"/>
                        <div className="Homepage__card_title">Well Designed <br/>Components & Templates</div>
                        <div className="Homepage__card_description">Hundreds of amazing designed components in 1170px grid.</div>
                        <button className="Homepage__button primary" style={{marginTop:"20px"}}>Design your Website</button>
                    </div>
                    <div className="Homepage__card">
                        <img src={ClockIcon} alt="Clock"/>
                        <div className="Homepage__card_title">Save Hours of Designing <br/>& Developing</div>
                        <div className="Homepage__card_description">Bunch of components will help you to prototype, design & build much faster.</div>
                    </div>
                </div>
                <div className="Homepage__terms">
                    <div className="Homepage__number">1</div>
                    <div className="Homepage__titleText" style={{marginTop: "50px"}}>
                        You may want to put ur terms or <br/>privacy somewhere
                    </div>
                    <div className="Homepage__termsText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
                        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
                        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
                        in pretium orci vestibulum eget.
                    </div>
                </div>
            </div>

            <div className="Homepage__footer">
                <div className="Homepage__footerCard">
                    <img src={EmailIcon} alt="Email Icon"/>
                    <div className="Homepage__footerText">hello@email.com</div>
                    <div className="Homepage__footerSmallText">Email</div>
                </div>
                <div className="Homepage__footerCard">
                    <img src={PhoneIcon} alt="Phone Icon"/>
                    <div className="Homepage__footerText">+399 399 233 166</div>
                    <div className="Homepage__footerSmallText">Phone</div>
                </div>
                <div className="Homepage__footerCard">
                    <img src={AddressIcon} alt="Email Icon"/>
                    <div className="Homepage__footerText">Main Street 32b, NYC</div>
                    <div className="Homepage__footerSmallText">Address</div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
