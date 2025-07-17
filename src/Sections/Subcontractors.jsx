import React from 'react';
import MainImageOrVideo from "../Components/MainImageOrVideo.jsx";
import MainTitle from "../Components/MainTitle.jsx";
import PicturePlusText from "../Components/PicturePlusText.jsx";
import {Link} from "react-router";
import Footer from "./Footer.jsx";

const Subcontractors = () => {
    return (

        <div>
            <div className="subcontractors">
                <header>
                    <div className="header-image">
                        <MainImageOrVideo type={'image'}
                                          src={'/images/subcontractos/041123-stock-035_thumb-page-header.jpg'}/>
                    </div>

                    <MainTitle mainText={'Become a Subcontractor'} />
                </header>

                <div className="mainQuote">
                    <div className="mainQuote-item">
                        <p>In "Our House", we foster a caring environment, where every person has a sense of belonging, feels included and respected.  Our goal is to provide our subcontractors with an injury-free, safe work environment that  supports a healthy</p>
                    </div>
                    <div className="mainQuote-item">
                        <p>and more equitable future for our people, our business, and our planet.  Through it all, we pride ourselves on upholding the highest standards of integrity in all aspects of our business  Join us in "Our House".</p>
                    </div>
                </div>

                <div className="title">
                    <h1>Important Policies</h1>
                    <p>Please read these two important policies as they outline the essential conduct for our projects.</p>

                    <PicturePlusText src={'/images/subcontractos/GetSharepointImage-8_thumb-blocks-banner-view.jpg'}
                                     pictureLeft={true}
                    >
                        <p>Outlines our code of conduct for Business Partners regarding Business Integrity, Labor and Human Rights, Health and Safety, and Environmental Protection</p>
                        <Link to={'/'}>Business Partner Code of Conduct <sub><span
                            className='text-primary-dark-blue text-4xl ml-2 '>→</span></sub> </Link>
                    </PicturePlusText>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default Subcontractors;