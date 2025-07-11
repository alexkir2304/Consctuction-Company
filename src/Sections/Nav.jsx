import React from 'react';
import {navigation} from "../constants/index.js";
import {Link} from "react-router";


const Nav = () => {
    return (
        <div className='navbar'>
            <Link to={'/'} className='navbar-logo '>
                <h1>
                    Turner
                </h1>
            </Link>

            <div className='navbar-menu'>
                {navigation.map((item, index) => (
                    <div key={index} className='navbar-menu__item relative'>

                        <Link to={item.link} className=''>{item.title}</Link>

                        <div className='navbar-menu__item__dropdown '>
                            {item.menuSectors && item.menuSectors.map((sector, index) => (
                                <div key={index} className='navbar-menu__item__dropdown__item '>
                                    <h1>{sector.title}</h1>
                                    <p>{sector.text && sector.text}</p>
                                    <div className='links '>{sector.links && sector.links.map((link, index) => (
                                        <Link key={index} to={link.url} className='link'>{link.title}</Link>
                                    ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <div className='navbar-menu__hamburger'>
                    <div className='flex flex-col justify-center items-end gap-3 w-1/2'>
                        <span className="navbar-menu__hamburger__item"></span>
                        <span className="navbar-menu__hamburger__item"></span>
                        <span className="navbar-menu__hamburger__item"></span>
                    </div>

                </div>
            </div>

            <div className='navbar-sideLinks '>
                <button className='navbar-sideLinks__item w-1/3'> Contact us </button>
                <Link to={'/subcontractors'} className='navbar-sideLinks__item w-2/3'>Become a subcontractor</Link>
            </div>
        </div>
    );
};

export default Nav;