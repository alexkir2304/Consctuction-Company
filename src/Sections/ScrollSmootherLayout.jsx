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

        const lastscrollY = window.scrollY;
        const el = document.getElementsByClassName("navbar");

        ScrollSmoother.create({
            // wrapper: '#wrapper',
            content: '#home',
            smooth: 2, // how long (in seconds) it takes to "catch up" to the native scroll position
            effects: true, // looks for data-speed and data-lag attributes on elements
            smoothTouch: 0.1,

        });

    }, [])

    return (
        <div id='home'>

            <Outlet/>
        </div>
    );
};

export default ScrollSmootherLayout;