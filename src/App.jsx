import React from 'react';
import {Outlet} from "react-router";
import Home from "./Sections/Home.jsx";
import Nav from "./Sections/Nav.jsx";
import Footer from "./Sections/Footer.jsx";

const App = () => {
    return (
        <div className=''>

            <Outlet/>

        </div>
    );
};

export default App;