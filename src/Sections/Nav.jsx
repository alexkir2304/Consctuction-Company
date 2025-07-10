import React from 'react';
import {navigation} from "../constants/index.js";


const Nav = () => {
    return (
        <div className='nav'>
            <div className='w-[25vw]'>
                <h1>
                    Turner
                </h1>
            </div>

            <div className='flex justify-around gap-0 w-[50vw] '>
                {navigation.map((item, index) => (
                    <div key={index} className='relative'>
                        <div>
                            <a href={item.link}>{item.title}</a>
                        </div>
                        <div className='flex absolute fixed top-[100px] left-0 w-[100vw]'>
                            {item.menuSectors && item.menuSectors.map((sector, index) => (
                                <div key={index} className='flex flex-col w-1/4'>
                                    <div>{sector.title}</div>
                                    <div>{sector.text && sector.text}</div>
                                    <div className='flex flex-col'>{sector.links && sector.links.map((link, index) => (
                                        <a key={index} href={link.url}>{link.title}</a>
                                    ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <div>
                    HAMBURGER
                </div>
            </div>

            <div className='w-[25vw]'>
                <div>Contact us</div>
                <div>Become a subcontractor</div>
            </div>
        </div>
    );
};

export default Nav;