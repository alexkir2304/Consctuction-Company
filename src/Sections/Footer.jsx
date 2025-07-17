import React from 'react';
import {Link} from "react-router";

const Footer = () => {
    return (
        <div className="footer">
            <div className='firstLine'>
                <div className="firstLine-item">
                    <Link to={'/home'} className='firstLine-item__logo'>
                        <h1>
                            Turner
                        </h1>
                    </Link>
                </div>
                <div className="firstLine-item">
                    <Link to={'/'} className="firstLine-item__link">Our company</Link>
                    <Link to={'/services'} className="firstLine-item__link">Our services</Link>
                    <Link to={'/projects'} className="firstLine-item__link">Projects</Link>
                    <a href={'#news'} className="firstLine-item__link">News & insights</a>
                    <Link to={'/careers'} className="firstLine-item__link">Careers</Link>
                </div>
                <div className="firstLine-item">
                    <div className="firstLine-item__mediaLink"><img src="/images/footer/FacebookLogo.svg" alt=""/></div>
                    <div className="firstLine-item__mediaLink"><img src="/images/footer/InstagramLogo.svg" alt=""/></div>
                    <div className="firstLine-item__mediaLink"><img src="/images/footer/LinkedinLogo.svg" alt=""/></div>
                    <div className="firstLine-item__mediaLink"><img src="/images/footer/TwitterLogo.svg" alt=""/></div>
                    <div className="firstLine-item__mediaLink"><img src="/images/footer/YoutubeLogo.svg" alt=""/></div>
                </div>
            </div>
            <div className='secondLine'>
                <div className="secondLine-item"><p>© 2025 Turner Construction Company
                    All rights reserved</p></div>
                <div className="secondLine-item"><p>Turner is an Equal Opportunity Employer - race, color, religion, sex, sexual orientation, gender identity, national origin, disability, status as a protected veteran, or other characteristics protected by applicable law.</p></div>
                <div className="secondLine-item"><p>Fraud Alert | Privacy Policy | Cookie Settings</p></div>
            </div>

        </div>
    );
};

export default Footer;