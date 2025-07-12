import React from 'react';
import {Link} from "react-router";

const Home = () => {
    return (
        <div >
            <header className='home'>

                <div className="home-popup">
                    <div onClick={() => {

                        const el = document.getElementsByClassName('home-popup');
                        el[0].classList.remove('home-popup__active')
                        document.body.style.overflow = 'auto';

                    }} className="home-popup__closeButton">
                        <button>
                            <span></span>
                            <span></span>
                        </button>
                    </div>

                    <div className="home-popup__item">
                        <div className="home-popup__item__image">
                            <img src="/images/49916-001_thumb-page-popup.jpg" alt=""/>
                        </div>
                        <div className="home-popup__item__items">

                            <div className="home-popup__item__title">
                                <h1>A Project</h1>
                            </div>
                            <div className="home-popup__item__text">
                                <p>As a builder, we undertake large, complex projects, foster innovation, embrace emerging technologies, and make a difference in the community.</p>
                            </div>
                            <div className="home-popup__item__link">
                                <Link to={'/careers'}>Browse our projects <span><img src="/images/btn-arrow-white.svg" alt=""/></span></Link>
                            </div>

                        </div>
                    </div>

                    <div className="home-popup__item">
                        <div className="home-popup__item__image">
                            <img src="/images/04262023-stock-001_thumb-page-popup.jpg" alt=""/>
                        </div>
                        <div className="home-popup__item__items">
                            <div className="home-popup__item__title">
                                <h1>A Career</h1>
                            </div>
                            <div className="home-popup__item__text">
                                <p>At Turner, team members are involved in exciting projects in diverse locations. Opportunities are available for engineers, trade workers, veterans and more.</p>
                            </div>
                            <div className="home-popup__item__link">
                                <Link to={'/projects'}>Browse our career opportunities <span><img
                                    src="/images/btn-arrow-white.svg" alt=""/></span></Link>
                            </div>
                        </div>
                    </div>

                    <div className="home-popup__item">
                        <div className="home-popup__item__image">
                            <img src="/images/international-vietnam-cc007_thumb-page-popup.jpg" alt=""/>
                        </div>
                        <div className="home-popup__item__items">
                            <div className="home-popup__item__title">
                                <h1>A Better Future</h1>
                            </div>
                            <div className="home-popup__item__text">
                                <p>Our shared values connect our team and clients and allow us to do meaningful work every day.</p>
                            </div>
                            <div className="home-popup__item__link">
                                <Link to={'/projects'}>Learn more <span><img src="/images/btn-arrow-white.svg" alt=""/></span></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="home-video w-full h-[100vh] ">
                    <video src="/home-video.mp4" className='w-[100%] h-full object-cover object-center' autoPlay={false}
                           muted loop playsInline={true}></video>
                </div>

                <div className="home-title">
                    <h1>
                        Making a <span className='passions-conflict-regular'>Difference</span>
                    </h1>
                    <div onClick={() => {

                        const el = document.getElementsByClassName('home-popup');
                        el[0].classList.add('home-popup__active')
                        document.body.style.overflow = 'hidden';

                    }} className="home-title__item">
                        <div className='question'>What do you want to build?</div>
                        <div className='link'><img src="/orange-arrow.svg" alt=""/></div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Home;