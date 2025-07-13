import Nav from "./Nav.jsx";
import {Outlet} from "react-router";
import Footer from "./Footer.jsx";

export const MainLayout = () => {
    return (

        <>
            <Nav/>
            <Outlet/>
            <Footer/>
        </>

    )
}
