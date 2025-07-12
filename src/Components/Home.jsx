import React from 'react';

const Home = () => {
    return (
        <div className='home w-full'>
            <header className='home-header w-full'>
                <div className="home-header__video w-full h-[100vh] ">
                    <video src="/home-video.mp4" className='w-[100%] h-full object-cover object-center' autoPlay={false} muted loop playsInline={true} ></video>
                </div>
            </header>

            <div className='h-[100vh]'>sometext</div>
            <div className='h-[100vh]'>sometext</div>
        </div>
    );
};

export default Home;