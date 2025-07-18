import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router";
import {cultureSlider, projects} from "../constants/index.js";
import MainImageOrVideo from "../Components/MainImageOrVideo.jsx";
import MainTitle from "../Components/MainTitle.jsx";
import MainProjectsBar from "../Components/MainProjectsBar.jsx";
import PicturePlusText from "../Components/PicturePlusText.jsx";
import Slider from "../Components/Slider.jsx";
import Footer from "./Footer.jsx";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollSmoother} from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Project = () => {

    const [sliderIndex, setSliderIndex] = useState(1);

    const {projectId} = useParams();
    console.log(projectId);
    console.log(projects)

    const  result = projects.filter((project) => project.id === +projectId);
    console.log(result);

    // GSAP animations
    useGSAP(()=> {
        const el = document.getElementsByClassName('mainImageOrVideo__parallax')[0];

        ScrollTrigger.create({
            trigger: ".mainImageOrVideo__parallax",
            start: "bottom bottom",
            end: "",
            onUpdate: (self) => {
                const coords =  self.progress * 100/5

                el.style.transform = `translateY(${coords}%)`
            },
        });
    }, [])

    useEffect(()=> {
        window.scrollTo(0, 0);
    },[])

    return (

        <div>
            <div className="project">
                <header>
                    <div className="header-image">
                        <MainImageOrVideo type={'image'}
                                          src={result[0].data.mainImage}/>
                    </div>

                    <MainProjectsBar location={result[0].data.location}
                                     maintext={result[0].data.mainTitle}
                                     handleClick={() => {
                                         const el =  document.getElementsByClassName('popup2')
                                         el[0].classList.toggle('active');
                                     }}
                    />

                    <div className="popup2">
                        <div className="popup-item">
                            <div className="flex-center ml-10">
                                PROJECT OVERVIEW
                            </div>

                            <button onClick={() => {
                                const el =  document.getElementsByClassName('popup')
                                el[0].classList.remove('active');
                            }}>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                        <div className="popup-item">
                            <div>Business Unit(s)</div>
                            <div>{result[0].data.businessUnit}</div>
                        </div>
                        <div className="popup-item">
                            <div>Business Unit(s)</div>
                            <div>{result[0].data.yearComplited}</div>
                        </div>
                        <div className="popup-item">
                            <div>Business Unit(s)</div>
                            <div>{result[0].data.clients}</div>
                        </div>
                        <div className="popup-item">
                            <div>Business Unit(s)</div>
                            <div>{result[0].data.clientIndustry}</div>
                        </div>
                        <div className="popup-item">
                            <div>Business Unit(s)</div>
                            <div>{result[0].data.scopeOfWork}</div>
                        </div>
                        <div className="popup-item">
                            <div>Business Unit(s)</div>
                            <div>{result[0].data.size}</div>
                        </div>
                        <div className="popup-item">
                            <div>Business Unit(s)</div>
                            <div>{result[0].data.partners}</div>
                        </div>
                        <div className="popup-item">
                            <div>Business Unit(s)</div>
                            <div>{result[0].data.services}</div>
                        </div>

                    </div>
                </header>

                <div id='content' className="content">
                    <div className="title">
                        <h1>{result[0].data.mainTitle}</h1>
                        <p>{result[0].data.mainText}</p>
                    </div>

                    <div className="text">

                        {result[0].data.picturePlusTextData &&
                            <PicturePlusText src={result[0].data.picturePlusTextData.imageUrl}>
                                <p>{result[0].data.picturePlusTextData.textContent}</p>
                            </PicturePlusText>
                        }

                    </div>

                    <div className="gallery">
                        <Slider sliderIndex={sliderIndex} setSliderIndex={setSliderIndex} rootArray={result[0].data.galleryArrayForSlider} />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    );
};

export default Project;