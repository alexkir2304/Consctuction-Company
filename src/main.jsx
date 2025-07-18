import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Outlet, Route, Routes, ScrollRestoration} from "react-router";
import './index.css'
import App from './App.jsx'
import NoMatch from "./Sections/NoMatch.jsx";
import About from "./Sections/About.jsx";
import Services from "./Sections/Services.jsx";
import Projects from "./Sections/Projects.jsx";
import Careers from "./Sections/Careers.jsx";
import Subcontractors from "./Sections/Subcontractors.jsx";
import ProjectLayout from "./Sections/ProjectLayout.jsx";
import Project from "./Sections/Project.jsx";
import {MainLayout} from "./Sections/MainLayout.jsx";
import Home from "./Sections/Home.jsx";
import Nav from "./Sections/Nav.jsx";
import ScrollSmootherLayout from "./Sections/ScrollSmootherLayout.jsx";
import GridLinesLayout from "./Components/GridLinesLayout.jsx";
// import { ScrollRestoration } from "react-router-dom";


createRoot(document.getElementById('root')).render(

    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route element={<MainLayout />}>
                    <Route element={<ScrollSmootherLayout />}>
                        <Route element={<GridLinesLayout />}>
                            <Route index element={<Home />} />
                            <Route path="home" element={<Home/>}/>
                            <Route path="about" element={<About/>}/>
                            <Route path="services" element={<Services/>}/>
                            <Route path="projects" >
                                <Route index element={<Projects/>}/>
                                <Route path=':projectId' element={<Project/>}/>
                            </Route>
                            <Route path="careers" element={<Careers/>}/>
                            <Route path="subcontractors" element={<Subcontractors/>}/>
                        </Route>
                    </Route>
                </Route>
                <Route path="*" element={<NoMatch/>}/>
            </Route>
        </Routes>

    </BrowserRouter>



)
