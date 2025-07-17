import Nav from "./Nav.jsx";
import {Outlet} from "react-router";
import Footer from "./Footer.jsx";
import Gridlines from "../Components/Gridlines.jsx";
import React from "react";

export const MainLayout = () => {
    return (

        <>
            <Nav/>
            <Outlet/>
        </>

    )
}
