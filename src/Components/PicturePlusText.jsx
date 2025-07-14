import React from 'react';
import SimpleImage from "./SimpleImage.jsx";
import {Link} from "react-router";

const PicturePlusText = ({src, pictureLeft, children, textWhite}) => {
    return (
        <div className='picturePlusText '>
            <div className='picturePlusText__wrapper1'>
                <div className={`picturePlusText__image ${pictureLeft ? 'order-1' : 'order-2'}`}>
                    {src ? (
                        <SimpleImage
                            src={src}
                            alt=""/>
                    ) : (
                        <div className='flex-center w-full h-full text-6xl'>
                            <span> {textWhite}</span>
                        </div>
                    )}

                </div>

                <div className={`picturePlusText__title ${pictureLeft ? 'order-2' : 'order-1'}`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default PicturePlusText;