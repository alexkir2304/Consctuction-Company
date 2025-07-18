import React from 'react';

const MainImageOrVideo = ({type, src}) => {
    return (

            <div className="mainImageOrVideo overflow-hidden">

                {type === 'video' ? (
                    <video className='mainImageOrVideo__parallax'  src={src} autoPlay={true} muted loop playsInline={true}></video>) :

                    <img className='mainImageOrVideo__parallax' src={src} alt="" />
                }

            </div>

    );
};

export default MainImageOrVideo;