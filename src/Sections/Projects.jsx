import React, {useEffect} from 'react';
import {Link, Outlet, useParams} from "react-router";
import {projects} from "../constants/index.js";
import MainImageOrVideo from "../Components/MainImageOrVideo.jsx";
import MainTitle from "../Components/MainTitle.jsx";
import SimpleImage from "../Components/SimpleImage.jsx";
import Footer from "./Footer.jsx";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Projects = () => {

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
            <div className="projects">
                <header>
                    <div className="header-image">
                        <MainImageOrVideo type={'image'}
                                          src={'/images/projects/Lester-Community-Center-1_thumb-projects-featured-header.jpg'}/>
                    </div>

                    <MainTitle mainTextOrange={'What Matters'} mainText={'Delivering On'}/>
                </header>

                <div className="projectsList">
                    {projects.map((item, index) => (
                        <div className="projectCard lazyLoading-hidden-right" key={index}>
                            <div className="h-3/5">
                                <SimpleImage src={item.data.mainImage}/>
                            </div>

                            <div className=" flex flex-col h-2/5">
                                <span>{item.data.location}</span>
                                <Link to={`/projects/${item.id}`}>{item.title}</Link>
                            </div>

                        </div>
                    ))}
                </div>

            </div>


            {/*<div className="flex-center-col mt-60 ml-30 gap-5">*/}
            {/*    {projects.map((project) => (*/}
            {/*        <li key={project.id}>*/}
            {/*            <Link to={`/projects/${project.id}`}>{project.fullName}</Link>*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*</div>*/}

            {/*<Outlet/>*/}

            <Footer/>
        </div>

    );
};

export default Projects;