import React, {useState} from 'react';
import {Link, useParams} from "react-router";
import {cultureSlider, projects} from "../constants/index.js";
import MainImageOrVideo from "../Components/MainImageOrVideo.jsx";
import MainTitle from "../Components/MainTitle.jsx";
import MainProjectsBar from "../Components/MainProjectsBar.jsx";
import PicturePlusText from "../Components/PicturePlusText.jsx";
import Slider from "../Components/Slider.jsx";

const Project = () => {

    const [sliderIndex, setSliderIndex] = useState(1);

    const {projectId} = useParams();
    console.log(projectId);
    console.log(projects)


    const  result = projects.filter((project) => project.id === +projectId);
    console.log(result);


    return (

        <div>
            <div className="project">
                <header>
                    <div className="header-image">
                        <MainImageOrVideo type={'image'}
                                          src={result[0].data.mainImage}/>
                    </div>

                    <MainProjectsBar location={result[0].data.location} maintext={result[0].data.mainTitle}/>
                </header>

                <div id='content' className="content">
                    <div className="title">
                        <h1>{result[0].data.mainTitle}</h1>
                        <p>{result[0].data.mainText}</p>
                    </div>

                    <div className="text">
                        <PicturePlusText src={result[0].data.picturePlusTextData.imageUrl}>
                            <p>{result[0].data.picturePlusTextData.textContent}</p>
                        </PicturePlusText>
                    </div>

                    <div className="gallery">
                        <Slider sliderIndex={sliderIndex} setSliderIndex={setSliderIndex} rootArray={result[0].data.galleryArrayForSlider} />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Project;