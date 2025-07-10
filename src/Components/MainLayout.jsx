import Nav from "../Sections/Nav.jsx";
import {Outlet} from "react-router";
import Footer from "../Sections/Footer.jsx";

export const MainLayout = () => {
    return (

        <>
            <Nav/>
            <Outlet/>
            <Footer/>
        </>

    )
}
