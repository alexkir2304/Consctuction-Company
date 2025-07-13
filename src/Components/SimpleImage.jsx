import React from 'react';

const SimpleImage = ({src}) => {
    return (
        <div className="simpleImage overflow-hidden rounded-2xl">
            <img src={src} alt=""/>
        </div>
    );
};

export default SimpleImage;