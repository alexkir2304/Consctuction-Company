import React from 'react';
import {Link} from "react-router";
import PicturePlusText from "../Components/PicturePlusText.jsx";
import MainImageOrVideo from "../Components/MainImageOrVideo.jsx";
import MainTitle from "../Components/MainTitle.jsx";
import SimpleImage from "../Components/SimpleImage.jsx";

const Services = () => {
    return (

        <div>
            <div className='services'>
                <header className='title flex-center w-full relative'>
                    <MainImageOrVideo type={'image'} src={'/images/services/041123-stock-254_thumb-blocks-banner-view.jpg'}/>
                    <MainTitle  mainTextOrange={'  Making It Happen'}/>
                </header>

                <div className="content">
                    <div className="mainTitles">
                        <PicturePlusText src={'/images/services/041223-stock-074_thumb-blocks-right-view.jpg'}
                                         pictureLeft={false}
                        >
                            <h1>Preconstruction</h1>
                            <p>Turner’s collaborative approach to preconstruction, founded on transparency and accountability is the most trusted and comprehensive in the industry.</p>
                            <Link to={'/'}>Get to know Turner's approach to Preconstruction <sub><span
                                className='text-primary-dark-blue text-4xl ml-2 '>→</span></sub> </Link>
                        </PicturePlusText>

                        <PicturePlusText src={'/images/services/1937-001_thumb-blocks-left-view (1).jpg'}
                                         pictureLeft={true}
                        >
                            <h1>Construction Management</h1>
                            <p>With a proven track record of excellence spanning over a century, Turner is the leading provider of construction services in North America, and throughout the world.</p>
                            <Link to={'/'}>Learn about Construction Management with Turner <sub><span
                                className='text-primary-dark-blue text-4xl ml-2 '>→</span></sub> </Link>
                        </PicturePlusText>

                        <PicturePlusText src={'/images/services/041123-stock-199_thumb-blocks-right-view.jpg'}
                                         pictureLeft={false}
                        >
                            <h1>Project Management</h1>
                            <p>We are uniquely positioned to leverage our extensive experience to deliver comprehensive project management services.</p>
                            <Link to={'/'}>How does Turner manage projects? <sub><span
                                className='text-primary-dark-blue text-4xl ml-2 '>→</span></sub> </Link>
                        </PicturePlusText>

                        <PicturePlusText src={'/images/services/041123-stock-266_thumb-blocks-left-view.jpg'}
                                         pictureLeft={true}
                        >
                            <h1>Lean Construction</h1>
                            <p>Lean is a philosophy that emphasizes the elimination of waste to create a smoothly flowing production process that produces only what is needed, when it is needed, and in the quantity needed.</p>
                            <Link to={'/'}>How does Turner eliminate project waste? <sub><span
                                className='text-primary-dark-blue text-4xl ml-2 '>→</span></sub> </Link>
                        </PicturePlusText>
                    </div>

                    <div className="cards">
                        <div className='cards-title'>
                            <h1>Areas of Expertise</h1>
                            <h1>Meeting your construction needs</h1>
                        </div>

                        <div className='cards-container'>
                            <div className="cards-card">
                                <div className="cards-card__item z-40">
                                    <SimpleImage src={'/images/services/growCards/061119-stock-009_thumb-blocks-linked-item.jpg'}/>
                                    <div
                                        className="cards-card__item__title">
                                        <p>Fabrication shop</p>
                                        <span>We meet our client’s fabrication requirements through innovative production means and methods that make the construction process more efficient, cost-effective, and safer.</span>
                                        <span><Link to={'/'}>Learn more about our fabrication shop<span
                                            className='text-white text-2xl  ml-2 '>→</span></Link></span>
                                    </div>
                                </div>
                            </div>

                            <div className="cards-card">
                                <div className="cards-card__item z-30">
                                    <SimpleImage src={'/images/services/growCards/101113-stock-002_thumb-blocks-linked-item.jpg'}/>
                                    <div
                                        className="cards-card__item__title">
                                        <p>Offsite Construction</p>
                                        <span>Offsite construction is transforming the construction industry and driving traditional building activity away from the project site and into safer and more efficient, controlled manufacturing-like environments.</span>
                                        <span><Link to={'/'}>Learn more about offsite construction<span
                                            className='text-white text-2xl ml-2 '>→</span></Link></span>
                                    </div>
                                </div>
                            </div>

                            <div className="cards-card">
                                <div className="cards-card__item z-20">
                                    <SimpleImage src={'/images/services/growCards/50859-002_thumb-blocks-linked-item.jpg'}/>
                                    <div
                                        className="cards-card__item__title">
                                        <p>Supply Chain Management</p>
                                        <span>SourceBlue transforms the traditional supply chain process by delivering increasing clients' visibility.</span>
                                        <span><Link to={'/'}>Learn more about supply chain management<span
                                            className='text-white text-2xl ml-2 '>→</span></Link></span>
                                    </div>
                                </div>
                            </div>

                            <div className="cards-card">
                                <div className="cards-card__item z-10">
                                    <SimpleImage src={'/images/services/growCards/BIM-and-Design-Build-1_thumb-blocks-linked-item.png'}/>
                                    <div
                                        className="cards-card__item__title">
                                        <p>Virtual Design & Construction</p>
                                        <span>Our team’s ability to visualize complex scopes of work empowers us to deliver project certainty, while maximizing safety, cost-saving opportunities, and overall quality.</span>
                                        <span><Link to={'/'}>Learn more about VDC<span
                                            className='text-white text-2xl ml-2 '>→</span></Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Services;