import React from 'react';
import {Outlet} from "react-router";
import Home from "./Components/Home.jsx";

const App = () => {
    return (
        <div className=''>
            <Home/>
            <Outlet/>
        </div>
    );
};

export default App;