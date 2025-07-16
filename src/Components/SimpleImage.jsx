import React from 'react';

const SimpleImage = ({src}) => {
    return (
        <div className="simpleImage w-full h-full overflow-hidden rounded-[0.5rem] relative z-10">
            <img className='rounded-[0.5rem] overflow-hidden w-full h-full' src={src} alt=""/>
        </div>
    );
};

export default SimpleImage;