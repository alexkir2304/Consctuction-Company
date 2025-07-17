import React from 'react';
import {Outlet} from "react-router";
import Gridlines from "./Gridlines.jsx";

const GridLinesLayout = () => {
    return (
        <div>
            <Gridlines/>
            <Outlet/>
        </div>
    );
};

export default GridLinesLayout;