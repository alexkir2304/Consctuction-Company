import React, {useState} from 'react';
import MainImageOrVideo from "../Components/MainImageOrVideo.jsx";
import MainTitle from "../Components/MainTitle.jsx";
import {Link} from "react-router";
import PicturePlusText from "../Components/PicturePlusText.jsx";
import {aboutSlider} from "../constants/index.js";
import Slider from "../Components/Slider.jsx";

const About = () => {

    const [sliderIndex, setSliderIndex] = useState(1);


    return (
        <div>
            <div className='about'>
                <header>
                    <MainImageOrVideo type={'image'} src={'/images/aboutImage.jpg'}/>
                    <MainTitle mainText={'Making a Difference in the Lives of'} mainTextOrange={'  Our People, Customers, and Community'}/>
                </header>


                <PicturePlusText
                    pictureLeft={false}
                    textWhite={'About Turner'}
                >

                    <p>Turner is a North American-based, international construction services company and a leading builder in diverse market segments. The company has earned recognition for undertaking large and complex projects, fostering innovation, embracing emerging technologies, and making a difference for its clients, employees, and community. With over 11,000 employees, the company completes $17 billion of construction on 1,500 projects each year. Turner offers clients the accessibility and support of a local firm with the stability and resources of a multi-national organization.</p>

                </PicturePlusText>

                <PicturePlusText src={'images/about/38049-004_thumb-blocks-right-view.jpg'}
                                 pictureLeft={false}
                >
                    <h1>Who We Are</h1>
                    <p>Our vision is to be the highest value provider of global construction services and technical expertise. We plan and deliver building projects of all types and sizes—schools and hospitals, stadiums and museums, airports, data centers, offices and more—throughout North America and in 30 countries around the world. </p>
                    <p>Our reputation for integrity, working safely, delivering complex and challenging projects, and driving innovation to bring our whole industry forward has been earned over many years.</p>

                </PicturePlusText>

                <PicturePlusText src={'images/about/075-Brooklyn-Bridge-Station_thumb-blocks-left-view.jpg'}
                                 pictureLeft={true}
                >
                    <h1>A Legacy Built on Trust</h1>
                    <p>Henry Turner founded Turner Construction Company in 1902 based on the core values of teamwork, integrity and commitment.</p>
                    <p>Our work has resulted in the transformation of skylines, communities, and the construction industry. Turner first made its mark on the industry by pioneering the use of steel-reinforced concrete for general building, which allowed our company to deliver safer, stronger, and more efficient buildings to our clients. Today, our reach is global, and our people uphold Henry Turner's vision to provide valuable services to clients and build partnerships in the community.</p>
                    <p>“A promise made is a promise delivered,” rings as true today as it did in 1902.</p>
                </PicturePlusText>

                <PicturePlusText textWhite={'Our Culture'}
                                 pictureLeft={true}
                >
                    <p>Throughout Turner’s history, we set ambitious goals and made formal commitments to enhance safety, care for others, increase diversity and impact in the community, uphold high standards for business integrity, and build ever more sustainable and resilient buildings</p>
                    <p>We are now connecting these and other efforts in an Environmental, Social and Governance (ESG) strategy to enhance and strengthen our company and the industry. This is an authentic extension of our culture and includes how we actively care for people, how we build sustainably, and how we conduct business with transparency and accountability.</p>

                </PicturePlusText>

                <Slider sliderIndex={sliderIndex} setSliderIndex={setSliderIndex} rootArray={aboutSlider} />
            </div>
        </div>
    );
};

export default About;