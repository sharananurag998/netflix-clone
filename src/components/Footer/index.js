import React from 'react';
import VkontakteIcon from '../../assets/images/Vk.png';
import PinterestIcon from '../../assets/images/Pinterest.png';
import InstagramIcon from '../../assets/images/Instagram.png';
import TwitterIcon from '../../assets/images/Twitter.png';
import FacebookIcon from '../../assets/images/Facebook.png';

function Footer() {
    return (
        <div className="Homepage__footer">
                <div className="Homepage__footer_bgbox" />
                <div className="Homepage__footer_1">
                    <div className="Homepage__footer_1_title">
                        Focus Group Chat
                    </div>
                    <div className="Homepage__footer_1_bigText">
                        The easy, fast and free way to run group chat
                    </div>
                    <div className="Homepage__footer_1_smallText">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
                    </div>
                    <div className="Homepage__footer_1_socials">
                        <img src={VkontakteIcon} className="Homepage__social_icon" alt="vkontakte"/>
                        <img src={PinterestIcon} className="Homepage__social_icon" alt="pinterest"/>
                        <img src={InstagramIcon} className="Homepage__social_icon" alt="instagram"/>
                        <img src={TwitterIcon} className="Homepage__social_icon" alt="twitter"/>
                        <img src={FacebookIcon} className="Homepage__social_icon" alt="facebook"/>
                    </div>
                </div>
                <div className="Homepage__footer_2">
                    <div className="Homepage__footer_2_bigText">Navigation</div>
                    <div className="Homepage__navigation_items">
                        <div className="Homepage__footer_2_smallText">Homepage</div>
                        <div className="Homepage__footer_2_smallText">About</div>
                        <div className="Homepage__footer_2_smallText">Terms</div>
                        <div className="Homepage__footer_2_smallText">Privacy</div>
                    </div>
                </div>
                <div className="Homepage__footer_3">
                    <div className="Homepage__footer_2_bigText">Get in Touch</div>
                    <div className="Homepage__footer_2_smallText">todaywebuikit.com</div>
                    <div className="Homepage__footer_2_smallText">hello@email.com</div>
                    <div className="Homepage__footer_2_smallText">+377 8832 9903</div>
                </div>
            </div>
    )
}

export default Footer
