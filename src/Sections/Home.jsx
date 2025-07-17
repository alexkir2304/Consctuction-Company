import React, {useEffect, useRef, useState} from 'react';
import {Link} from "react-router";
import MainImageOrVideo from "../Components/MainImageOrVideo.jsx";
import MainTitle from "../Components/MainTitle.jsx";
import SimpleImage from "../Components/SimpleImage.jsx";
import NewsCard from "../Components/NewsCard.jsx";
import {cultureSlider} from "../constants/index.js";
import SliderButton from "../Components/SliderButton.jsx";
import PicturePlusText from "../Components/PicturePlusText.jsx";
import Slider from "../Components/Slider.jsx";
import Footer from "./Footer.jsx";

const Home = () => {

    const [sliderIndex, setSliderIndex] = useState(1);

    const handleClick = () =>{
        const el = document.getElementsByClassName('home-popup');
        el[0].classList.add('home-popup__active')
        document.body.style.overflow = 'hidden';

        console.log('hi')
    }

    return (
        <div id='wrapper'>
            <div id='home' className='home'>

                <header className='flex-center w-full relative'>
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
                                    <p>As a builder, we undertake large, complex projects, foster innovation, embrace
                                        emerging technologies, and make a difference in the community.</p>
                                </div>
                                <div className="home-popup__item__link">
                                    <Link to={'/projects'}>Browse our projects <span><img
                                        src="/images/btn-arrow-white.svg"
                                        alt=""/></span></Link>
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
                                    <p>At Turner, team members are involved in exciting projects in diverse locations.
                                        Opportunities are available for engineers, trade workers, veterans and more.</p>
                                </div>
                                <div className="home-popup__item__link">
                                    <Link to={'/careers'}>Browse our career opportunities <span><img
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
                                    <p>Our shared values connect our team and clients and allow us to do meaningful work
                                        every day.</p>
                                </div>
                                <div className="home-popup__item__link">
                                    <Link to={'/projects'}>Learn more <span><img src="/images/btn-arrow-white.svg"
                                                                                 alt=""/></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <MainImageOrVideo type={'video'} src={'/home-video.mp4'}/>

                    <MainTitle mainText={'Making a'} mainTextOrange={' Difference'} handleClick={handleClick}>
                        <div className='message'>What do you want to build</div>
                    </MainTitle>
                </header>

                <div className="content">
                    <div id='news' className="content-news">


                            <div className="content-news__title">
                                News and Insights
                            </div>

                            <div className="content-news__size">

                                {/*TODO make a complex scrolling for columns*/}

                                <div  className='content-news__bigNews'>
                                    <NewsCard src={'images/news/070125-Palo-Alto-Hospital-pr.jpg'}>
                                        <h1 className='p-5'>Turner/Byrne/Straight Line JV Reaches...</h1>
                                    </NewsCard>
                                </div>

                                <div className='content-news__smallNews'>
                                    <NewsCard src={'images/news/063025-Dornan-pr_thumb-insights-list-home.jpg'}>
                                        <h1 className='p-5'>Dornan Recognized as One of Ireland’s Best...</h1>
                                    </NewsCard>
                                    <NewsCard src={'images/news/062625-Botanical-Gardens-pr.jpg'}>
                                        <h1 className='p-5'>Buffalo and Erie County Botanical Gardens’ $31...</h1>
                                    </NewsCard>
                                    <NewsCard src={'images/news/062425-One-Beverly-Hills-pr.jpg'}>
                                        <h1 className='p-5'>Turner Selected as One of the Contractors to...</h1>
                                    </NewsCard>
                                    <NewsCard src={'images/news/061725-Sarasota-Hospital-pr.jpg'}>
                                        <h1 className='p-5'>Turner Reaches Major Milestones on Sarasota...</h1>
                                    </NewsCard>
                                    <NewsCard src={'images/news/070125-Palo-Alto-Hospital-pr.jpg'}>
                                        <h1 className='p-5'>Turner Named Nation’s Top Healthcare...</h1>
                                    </NewsCard>
                                    <NewsCard src={'images/news/061225-Modern-Healthcare-pr.jpg'}>
                                        <h1 className='p-5'>Turner Construction Company to Build Soccer...</h1>
                                    </NewsCard>
                                </div>
                            </div>


                    </div>

                    <div className="content-location">

                        <div className='content-location__wrapper1'>
                            <div className="content-location__image">
                                <SimpleImage
                                    src={'/images/locations/international-turkey-hero-banner_thumb-bu-closest-unit.jpg'}
                                    alt=""/>
                            </div>

                            <div className="content-location__title">
                                <p ><span>Türkiye</span></p>
                                <h1>Our Work In Your Local Community</h1>
                                <p>Together we can grow communities, strengthen economies, and improve lives</p>
                            </div>
                        </div>

                        <div className='content-location__wrapper2'>

                            <div  className='content-location__links' >
                                <Link to={'/'}>MEET THE Türkiye TEAM</Link>
                                <Link to={'/'}>CHOSE ANOTHER LOCATION</Link>
                            </div>

                        </div>

                    </div>

                    <div className="content-culture">
                        <div className='content-culture__title'>
                            <div className="content-culture__title__content">
                                <h1>Our Culture</h1>
                                <p>Our vision is to be the highest-value provider of global construction services and
                                    technical expertise while we make a difference in the lives of people, customers,
                                    the
                                    community, and the environment.</p>
                            </div>
                        </div>

                        <Slider sliderIndex={sliderIndex} setSliderIndex={setSliderIndex} rootArray={cultureSlider} />

                    </div>

                    <div className="content-careers">

                        <PicturePlusText src={'images/careers/041223-stock-089_1_thumb-blocks-left-view.jpg'}
                                         pictureLeft={true}
                        >
                            <p><span>Life At Turner</span></p>
                            <h1>Ambitious People, Impactful Work</h1>
                            <p>At Turner, you will work with people who share your passion for solving challenging
                                problems and
                                making a difference.</p>
                            <Link to={'/careers'}>Explore a career with Turner <sub><span
                                className='text-primary-dark-blue text-4xl ml-2 '>→</span></sub> </Link>
                        </PicturePlusText>

                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    );
};

export default Home;