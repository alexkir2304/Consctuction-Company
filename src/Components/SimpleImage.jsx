import React from 'react';

const SimpleImage = ({src}) => {
    return (
        <div className="simpleImage w-full h-full overflow-hidden rounded-[0.5rem] relative z-10">
            <img className='simpleImage__parallax rounded-[0.5rem] overflow-hidden w-full h-full z-999999 relative' src={src} alt=""/>
        </div>
    );
};

export default SimpleImage;