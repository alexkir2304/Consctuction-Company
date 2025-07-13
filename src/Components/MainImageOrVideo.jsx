import React from 'react';

const MainImageOrVideo = ({type, src}) => {
    return (

            <div className="mainImageOrVideo">

                {type === 'video' ? (
                    <video src={src} autoPlay={false} muted loop playsInline={true}></video>) :

                    <img src={src} alt="" />
                }

            </div>

    );
};

export default MainImageOrVideo;