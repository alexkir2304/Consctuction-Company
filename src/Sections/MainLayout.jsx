import Nav from "./Nav.jsx";
import {Outlet, ScrollRestoration} from "react-router";
import Footer from "./Footer.jsx";
import Gridlines from "../Components/Gridlines.jsx";
import React, {useEffect} from "react";

export const MainLayout = () => {




    // const navBarScroll = () => {
    //
    //     const el = document.getElementsByClassName("navbar");
    //
    //     let lastScrollY = window.scrollY;
    //
    //     window.onscroll = () => {
    //
    //         let currentScrollY = window.scrollY;
    //
    //         if (currentScrollY < lastScrollY) {                                     //the user is scrolling up
    //             el[0].classList.remove("navbar-hidden")
    //             window.scrollY >= 200 ?  el[0].classList.add("nabvar-scrolled-up") : el[0].classList.remove("nabvar-scrolled-up")
    //         } else {                                                                //the user is scrolling down
    //             if (window.scrollY >= 200 )  {
    //                 el[0].classList.remove("nabvar-scrolled-up")
    //                 el[0].classList.add("navbar-hidden")
    //             } else if (window.scrollY >= 100 && window.scrollY < 200)  {
    //                 el[0].classList.add("navbar-hidden");
    //             }
    //         }
    //
    //         lastScrollY = currentScrollY;
    //     }
    // }
    //
    // useEffect(() => {
    //     navBarScroll()
    // },[])




    const handleScroll = () => {

        const el = document.getElementsByClassName("navbar");
        let lastScrollY = window.scrollY;



        // window.onscroll = () => {
        //
        //     let currentScrollY = window.scrollY;
        //
        //     if (currentScrollY < lastScrollY) {                                     //the user is scrolling up
        //         el[0].classList.remove("navbar-hidden")
        //         window.scrollY >= 200 ?  el[0].classList.add("nabvar-scrolled-up") : el[0].classList.remove("nabvar-scrolled-up")
        //     } else {                                                                //the user is scrolling down
        //         if (window.scrollY >= 200 )  {
        //             el[0].classList.remove("nabvar-scrolled-up")
        //             el[0].classList.add("navbar-hidden")
        //         } else if (window.scrollY >= 100 && window.scrollY < 200)  {
        //             el[0].classList.add("navbar-hidden");
        //         }
        //     }
        //
        //     lastScrollY = currentScrollY;
        //
        //     const lazyLoading = () => {
        //         const loadingTriggerHeight = document.documentElement.clientHeight/2;   //the middle of the screen (Y axis)
        //
        //
        //         const lazyParams =  ['newsCard', 'newsCard2']
        //
        //         lazyParams.forEach((myClass) => {
        //             const cards = document.getElementsByClassName(myClass);
        //             const cards2 = Array.from(cards);
        //
        //
        //             cards2.forEach((card, index) => {
        //                 const coordsY = card.getBoundingClientRect().y;
        //
        //                 if (coordsY <= loadingTriggerHeight)  {
        //                     cards[index].classList.add('lazyLoading-visible');
        //                 }
        //
        //             })
        //
        //         })
        //     }
        //
        //     lazyLoading()
        // }
    }



    useEffect(() => {
        handleScroll()
    },[])


    return (

        <>
            <Nav/>
            <Outlet/>
        </>

    )
}
