import React from 'react';

const SimpleImage = ({src}) => {
    return (
        <div className="simpleImage w-full h-full overflow-hidden rounded-2xl">
            <img className='rounded-2xl overflow-hidden w-full h-full' src={src} alt=""/>
        </div>
    );
};

export default SimpleImage;