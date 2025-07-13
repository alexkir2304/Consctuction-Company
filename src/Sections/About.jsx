import React from 'react';
import MainImageOrVideo from "../Components/MainImageOrVideo.jsx";
import MainTitle from "../Components/MainTitle.jsx";

const About = () => {
    return (
        <div>
            <header className='flex-center w-full relative'>

                <MainImageOrVideo type={'image'} src={'/images/aboutImage.jpg'}/>
                <MainTitle mainText={'Making a Difference in the Lives of'} mainTextOrange={'  Our People, Customers, and Community'}/>

            </header>
        </div>
    );
};

export default About;