import Nav from "./Nav.jsx";
import {Outlet, ScrollRestoration} from "react-router";
import Footer from "./Footer.jsx";
import Gridlines from "../Components/Gridlines.jsx";
import React, {useEffect} from "react";

export const MainLayout = () => {



    //Lazy loading effect for all sections
    const handleScroll = (lazyElementsClasses) => {

        const lazyLoading = () => {

            const loadingTriggerHeight = document.documentElement.clientHeight*2/3;  //trigger point

            lazyElementsClasses.forEach((myClass) => {
                const cards = document.getElementsByClassName(myClass);
                const cards2 = Array.from(cards);

                let timeout = 0;

                cards2.forEach((card, index) => {
                    const coordsY = card.getBoundingClientRect().y;

                    console.log(timeout)

                    if (coordsY <= loadingTriggerHeight)  {
                        cards[index].classList.add('lazyLoading-visible');
                    }

                })
            })
        }
        window.addEventListener("wheel", lazyLoading);
        window.addEventListener("touchstart", lazyLoading);
    }

    useEffect(() => {
        handleScroll(['newsCard', 'newsCard2', 'content-location__image', 'content-location__title','picturePlusText__image', 'picturePlusText__title', 'projectCard'])
    },[])


    return (

        <>
            <Nav/>
            <Outlet/>
        </>

    )
}
