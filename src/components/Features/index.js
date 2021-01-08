import './Features.css';
import React from 'react';
import DocumentIcon from '../../assets/images/Document.png';
import StarIcon from '../../assets/images/Star.png';
import ClockIcon from '../../assets/images/Clock.png';
import iPhone from '../../assets/images/iPhone.png';
import Browser from '../../assets/images/Browser_2.png';
import Star from '../../assets/images/Star.png';

function Features() {
    return (
        <div className="Features">
            <div className="Features_1">
                <div className="Features__featureTitle">    
                    Great Features
                </div>
                <div className="Features__cards">
                    <div className="Features__card">
                        <img src={DocumentIcon} alt="Documents"/>
                        <div className="Features__card_title">Great Documentation &<br/>Organized Files</div>
                        <div className="Features__card_description">All layers are well named & grouped, documentation looks pretty cool also.</div>
                    </div>
                    <div className="Features__card_elevated">
                        <img src={StarIcon} alt="Star"/>
                        <div className="Features__card_title">Well Designed <br/>Components & Templates</div>
                        <div className="Features__card_description">Hundreds of amazing designed components in 1170px grid.</div>
                        <button className="Features__button primary" style={{marginTop:"20px", color:"white"}}>Design your Website</button>
                    </div>
                    <div className="Features__card">
                        <img src={ClockIcon} alt="Clock"/>
                        <div className="Features__card_title">Save Hours of Designing <br/>& Developing</div>
                        <div className="Features__card_description">Bunch of components will help you to prototype, design & build much faster.</div>
                    </div>
                </div>    
            </div>
            <div className="Features_2">
                <div className="Homepage__steps Features_steps">
                    <div className="Homepage__card" style={{alignItems: "flex-end", textAlign:"right"}}>
                        <div className="Homepage__number">1</div>
                        <div className="Homepage__card_title">Esther Howard</div>
                        <div className="Homepage__card_description">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                    </div>
                    <div className="Homepage__card" style={{alignItems: "flex-end", textAlign:"right"}}>
                        <div className="Homepage__number">3</div>
                        <div className="Homepage__card_title">Ralph Edwards</div>
                        <div className="Homepage__card_description">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                    </div>
                </div>
                <img src={iPhone} alt="iPhone"/>
                <div className="Homepage__steps Features_steps">
                    <div className="Homepage__card">
                        <div className="Homepage__number">2</div>
                        <div className="Homepage__card_title">Cody Fisher</div>
                        <div className="Homepage__card_description">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                    </div>
                    <div className="Homepage__card">
                        <div className="Homepage__number">4</div>
                        <div className="Homepage__card_title">Annette Black</div>
                        <div className="Homepage__card_description">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                    </div>
                </div>
            </div>

            <div className="Features_3">
                <div className="Features_3__left">
                    <img src={Star} alt="Star"/>
                    <div className="Features__featureTitle" style={{marginTop: "50px"}}>Annette Black</div>
                    <div className="Homepage__display_description">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                    <button className="Features__button primary" style={{marginTop:"20px", color:"white"}}>Design your Website</button>                    
                </div>
                <img src={Browser} alt="Browser" className="Features_3__right"/>
            </div>
        </div>
    )
}

export default Features
