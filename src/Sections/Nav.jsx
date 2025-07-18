import React, {useEffect} from 'react';
import {navigation} from "../constants/index.js";
import {Link} from "react-router";

const Nav = () => {

    const el = document.getElementsByClassName("navbar");
    let lastScrollY = window.scrollY;
    const handleScroll = () => {

        const navBarScroll = () => {
            let currentScrollY = window.scrollY;

            if (currentScrollY < lastScrollY) {                                     //the user is scrolling up
                el[0].classList.remove("navbar-hidden")
                window.scrollY >= 200 ?  el[0].classList.add("nabvar-scrolled-up") : el[0].classList.remove("nabvar-scrolled-up")
            } else {                                                                //the user is scrolling down
                if (window.scrollY >= 200 )  {
                    el[0].classList.remove("nabvar-scrolled-up")
                    el[0].classList.add("navbar-hidden")
                } else if (window.scrollY >= 100 && window.scrollY < 200)  {
                    el[0].classList.add("navbar-hidden");
                }
            }

            lastScrollY = currentScrollY;
        }
        window.addEventListener("scroll", navBarScroll);

    }

    useEffect(() => {
        handleScroll()
    },[])

    return (

        <div>
            <div className='navbar'>
                <Link to={'/home'} className='navbar-logo' >
                    <h1>
                        Turner
                    </h1>
                </Link>

                <div className='navbar-menu'>
                    {navigation.map((item, index) => (
                        <div key={index} className='navbar-menu__item relative'>

                            <Link to={item.link} className='navbar-menu__item__mainLink'>{item.title}</Link>

                            <div className='navbar-menu__item__dropdown '>
                                {item.menuSectors && item.menuSectors.map((sector, index) => (
                                    <div key={index} className='navbar-menu__item__dropdown__item '>
                                        <h1>{sector.title}</h1>
                                        <p>{sector.text && sector.text}</p>
                                        <div className='links '>{sector.links && sector.links.map((link, index) => (
                                            <a href={link.url} key={index}  className='link'>{link.title}</a>
                                        ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div onClick={() => {
                        const el = document.getElementsByClassName('navbarMobile')[0];
                        console.log(el)
                        // el.style.visibility = 'visible';
                        el.classList.add('navbarMobile-active');

                    }} className='navbar-menu__hamburger'>
                        <div className='flex flex-col justify-center items-end gap-2 w-[70%]'>
                            <span className="navbar-menu__hamburger__item"></span>
                            <span className="navbar-menu__hamburger__item"></span>
                            <span className="navbar-menu__hamburger__item"></span>
                        </div>
                    </div>
                </div>

                <div className='navbar-sideLinks '>
                    <button onClick={() => {
                        const el = document.getElementsByClassName('popup')[0];
                        el.classList.add('active');
                        document.body.style.overflowY = 'hidden';

                    }} className='navbar-sideLinks__item w-1/3'> Contact us</button>
                    <a href={'/subcontractors'} className='navbar-sideLinks__item w-2/3'>Become a subcontractor</a>
                </div>

                <div className="popup ">
                    <div className="popup-item">
                        <div className="flex-center ml-10">
                            CONTACTS
                        </div>

                        <button onClick={() => {
                            const el = document.getElementsByClassName('popup')
                            el[0].classList.remove('active');
                        }}>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    <div className="popup-item">
                        <div>Phone</div>
                        <div>+111123456789</div>
                    </div>
                    <div className="popup-item">
                        <div>EMAIL</div>
                        <div>iLoveCreatingPetProjects@ gmail.com</div>
                    </div>
                    <div className="popup-item">
                        <div>Address</div>
                        <div>White house, Washington DC</div>
                    </div>
                    <div className="popup-item">
                        <div>Address #2</div>
                        <div>Kremlin, Moscow</div>
                    </div>
                </div>
            </div>

            <div className="navbarMobile">

                <div className="navbarMobile-sidelineLeft"></div>

                <div className="navbarMobile-menu">
                    <div className="navbarMobile-menu__button">
                        <button onClick={() => {
                            const el = document.getElementsByClassName('navbarMobile')[0];
                            el.classList.remove('navbarMobile-active');
                        }}>

                            <span></span>
                            <span></span>
                        </button>
                    </div>

                    {navigation.map((item, index) => (
                        <div key={index} className="navbarMobile-menu__item">
                            <div className='navbarMobile-menu__item__title'>
                                <a onClick={() => {

                                    const mobileNav = document.getElementsByClassName('navbarMobile')[0];
                                    mobileNav.classList.remove('navbarMobile-active');

                                }} href={item.link}>
                                    {item.title}
                                </a>
                                <button onClick={(e) => {

                                    const el = e.target.parentNode.parentNode.lastChild
                                    el.classList.toggle("navbarMobile-menu__item__content__active")

                                    console.log(el.scrollHeight)

                                    if (el.style.maxHeight) {
                                        el.style.maxHeight = null
                                    } else {
                                        el.style.maxHeight = el.scrollHeight + 'px'
                                    }

                                }} className="navbarMobile-menu__item__btn">
                                    <img onClick={(e) => e.target = e.target.parentNode} src="/orange-arrow.svg"
                                         alt=""/>
                                </button>
                            </div>

                            <div className='navbarMobile-menu__item__content'>

                                {item.menuSectors && item.menuSectors.map((sector, index) => (
                                    <div key={index} className='content'>
                                        <h1>{sector.title}</h1>
                                        {/*<p>{sector.text && sector.text}</p>*/}
                                        <div className='links '>{sector.links && sector.links.map((link, index) => (
                                            <a onClick={() => {

                                                const mobileNav = document.getElementsByClassName('navbarMobile')[0];
                                                mobileNav.classList.remove('navbarMobile-active');

                                            }} key={index} href={link.url} className='link'>{link.title}</a>
                                        ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                    ))}

                    <button onClick={() => {

                        const el = document.getElementsByClassName('popup')[0];
                        const el2 = document.getElementsByClassName('navbarMobile')[0];

                        el.classList.add('active');
                        el2.classList.remove('navbarMobile-active');

                    }} className='navbar-sideLinks__item w-full h-[20%] text-3xl cursor-pointer hover:text-primary-dark-blue'> Contact us
                    </button>
                </div>
                <div className="navbarMobile-sidelineLeft">

                </div>
            </div>
        </div>

    );
};

export default Nav;