import React from 'react';
import SimpleImage from "./SimpleImage.jsx";
import {Link} from "react-router";

const NewsCard = ({src, children, isTransformed}) => {
    return (
        <div className={`${isTransformed ? 'newsCard2' : 'newsCard'}`}>
            <div className='h-[60%]'>
                <SimpleImage src={src}/>
            </div>

            {children}

            <div className=" flex self-start pl-5 ">
                <Link to={''}>Read more   </Link> <img src="/orange-arrow.svg" alt="" className='rotate-[-90deg] ml-5'/>
            </div>
        </div>
    );
};

export default NewsCard;