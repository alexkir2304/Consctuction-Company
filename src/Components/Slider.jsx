import React from 'react';
import SliderButton from "./SliderButton.jsx";
import {Link} from "react-router";
import SimpleImage from "./SimpleImage.jsx";

const Slider = ({sliderIndex, setSliderIndex, rootArray}) => {
    return (
        <div className='slider'>
            <div className='slider__controls '>
                {rootArray.map((item, index) => (
                    <SliderButton key={index} tableTitle={item.tableTitle} tableNumber={item.tableNumber}
                                  setSliderIndex={setSliderIndex} sliderIndex={sliderIndex}/>
                ))}
            </div>
            <div className='slider__container'>
                <div className='slider__container__choochooContainerxD'
                     style={{
                         left: `-${((sliderIndex - 1) * 100)}%`
                     }}
                >
                    {rootArray.map((item, index) => (
                        <div className={`flex absolute  w-full h-full overflow-hidden `}
                             key={index}
                             style={{
                                 left: `${(item.tableNumber - 1) * 100}%`
                             }}
                        >
                            <div className='flex flex-col items-start w-2/5 h-full p-5'>
                                <h1 className='text-[1.1rem] text-primary-dark-blue pb-5'>{item.sliderTitle}</h1>
                                <h1 className='md:text-2xl'>{item.sliderTitle2}</h1>
                                <p className='md:p-5 mt-5'>{item.sliderText}</p>

                                {
                                    item.sliderText &&
                                    <Link to={'/'}>Learn more <sub><span
                                        className='text-primary-dark-blue text-4xl ml-2 '>→</span></sub> </Link>
                                }


                            </div>
                            <div className='flex-center-col w-3/5 h-full'>
                                <SimpleImage src={item.sliderImageUrl} alt=""/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slider;