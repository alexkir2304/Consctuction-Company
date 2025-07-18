import React from 'react';
import {Outlet} from "react-router";
// import {useGSAP} from "@gsap/react";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const ScrollSmootherLayout = () => {

    useGSAP(() => {

        ScrollSmoother.create({
            // wrapper: '#wrapper',
            content: '#project',
            smooth: 2, // how long (in seconds) it takes to "catch up" to the native scroll position
            effects: true, // looks for data-speed and data-lag attributes on elements
            smoothTouch: 0.1,

        });

    }, [])




    return (
        <div id='project'>

            <Outlet/>
        </div>
    );
};

export default ScrollSmootherLayout;