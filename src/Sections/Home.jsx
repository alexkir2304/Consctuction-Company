import React, {useEffect, useRef} from 'react';
import {Link} from "react-router";
import MainImageOrVideo from "../Components/MainImageOrVideo.jsx";
import MainTitle from "../Components/MainTitle.jsx";
import SimpleImage from "../Components/SimpleImage.jsx";
import NewsCard from "../Components/NewsCard.jsx";

const Home = () => {

    const handleClick = () =>{
        const el = document.getElementsByClassName('home-popup');
        el[0].classList.add('home-popup__active')
        document.body.style.overflow = 'hidden';

        console.log('hi')
    }

    return (
        <div>
            <header className='home'>

                <div className='flex-center w-full relative'>
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
                </div>

                <div className="home-content">
                    <div className="home-content__news">

                        <div className='w-full flex flex-col'>
                            <div className="home-content__news__title">
                                News and Insights
                            </div>

                            <div className="flex flex-col md:flex-row">
                                <div  className='home-content__news__bigNews'>
                                    <NewsCard src={'images/news/070125-Palo-Alto-Hospital-pr.jpg'}>
                                        <h1 className='p-5'>Turner/Byrne/Straight Line JV Reaches...</h1>
                                    </NewsCard>
                                </div>

                                <div className='home-content__news__smallNews'>
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


                    </div>

                    <div className="home-content__location">

                    </div>

                    <div className="home-content__culture">

                    </div>

                    <div className="home-content__careers">

                    </div>
                </div>

            </header>


        </div>
    );
};

export default Home;