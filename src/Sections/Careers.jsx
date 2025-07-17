import React from 'react';
import MainImageOrVideo from "../Components/MainImageOrVideo.jsx";
import MainTitle from "../Components/MainTitle.jsx";
import SimpleImage from "../Components/SimpleImage.jsx";
import {Link} from "react-router";
import Footer from "./Footer.jsx";

const Careers = () => {
    return (
        <div>
            <div className="careers">
                <header>
                    <MainImageOrVideo type={'image'}
                                      src={'/images/careers/041923-stock-001_thumb-life-turner-header.jpg'}/>
                    <MainTitle mainText={'We do'} mainTextOrange={'  great things together'}/>
                </header>

                <div className="title">
                    <h1>A Welcoming Place for All</h1>
                    <p>We work hard to ensure that everyone feels physically and psychologically safe. To create a
                        collaborative team and inclusive environment, our employees and trade partners participate in
                        anti-racism, anti-discrimination, and anti-harassment training.</p>
                </div>

                <div className="services flex flex-col relative w-full">
                    <div className="cards">
                        <div className='cards-title'>
                            <h1>Life at Turner</h1>
                            <h1>Meet our people.</h1>
                        </div>

                        <div className='cards-container'>
                            <div className="cards-card">
                                <div className="cards-card__item z-40">
                                    <SimpleImage
                                        src={'/images/careers/CJ-at-work_thumb-blocks-linked-item.png'}/>
                                    <div
                                        className="cards-card__item__title">
                                        <p>Project Director</p>
                                        <span>WCJ Chen <br/> "Never say this is a once-a-lifetime project at Turner; I have said that three times!"</span>
                                    </div>
                                </div>
                            </div>

                            <div className="cards-card">
                                <div className="cards-card__item z-30">
                                    <SimpleImage
                                        src={'/images/careers/matt-at-pride_thumb-blocks-linked-item.png'}/>
                                    <div
                                        className="cards-card__item__title">
                                        <p>Project Manager</p>
                                        <span>Matt Hyde <br/> "The Pride Network, Turner's LGBTQ Employee Resource Group, has helped me make so many connections."</span>
                                    </div>
                                </div>
                            </div>

                            <div className="cards-card">
                                <div className="cards-card__item z-20">
                                    <SimpleImage
                                        src={'/images/careers/brishae-biking_thumb-blocks-linked-item.png'}/>
                                    <div
                                        className="cards-card__item__title">
                                        <p>Engineer</p>
                                        <span>Bri'Shae Anderson <br/> "My team was outstanding and they really set the standard on how to run a successsful project."</span>
                                    </div>
                                </div>
                            </div>

                            <div className="cards-card">
                                <div className="cards-card__item z-10">
                                    <SimpleImage
                                        src={'/images/careers/lisa-ballantyne_thumb-blocks-linked-item (1).png'}/>
                                    <div
                                        className="cards-card__item__title">
                                        <p>Senior Vice President</p>
                                        <span>Lisa Ballantyne <br/>"Each opportunity brings new challenges and experiences. Working with the Turner team is the most rewarding part of the job."</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <Footer/>
        </div>
    );
};

export default Careers;