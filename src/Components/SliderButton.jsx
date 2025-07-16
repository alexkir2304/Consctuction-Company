import React from 'react';

const SliderButton = ({tableTitle, tableNumber, setSliderIndex, sliderIndex}) => {

    const [isChosen, setIsChosen] = React.useState(false);

    return (
        <div onClick={() => {
            setSliderIndex(+tableNumber);
            setIsChosen(true);
        }} className={`opacity-70 ${sliderIndex ===tableNumber ? 'text-[1.1rem] md:text-[1.2rem] lg:text-[1.6rem] xl:text-[1.8rem] opacity-100 before:content[*] before:absolute before:left-0 before:top-[50%] before:bg-white before:w-[10px] before:h-[2px]' : ''} relative pl-8 before:w-[0px] before:h-[0px] before:duration-200 ease-out duration-200 ease-out cursor-pointer`}>
            <div className='inline-block text-nowrap text-[1rem] '>{'0' + tableNumber}</div>
            <div className='inline-block text-nowrap ml-5'>{tableTitle}</div>
        </div>
    );
};

export default SliderButton;