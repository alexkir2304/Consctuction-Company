import Nav from "./Nav.jsx";
import {Outlet} from "react-router";
import Footer from "./Footer.jsx";
import Gridlines from "../Components/Gridlines.jsx";

export const MainLayout = () => {
    return (

        <>
            <Gridlines/>
            <Nav/>
            <Outlet/>
            <Footer/>
        </>

    )
}
