import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Outlet, Route, Routes} from "react-router";
import './index.css'
import App from './App.jsx'
import NoMatch from "./Components/NoMatch.jsx";
import About from "./Components/About.jsx";
import Services from "./Components/Services.jsx";
import Projects from "./Components/Projects.jsx";
import Careers from "./Components/Careers.jsx";
import Subcontractors from "./Components/Subcontractors.jsx";
import ProjectLayout from "./Components/ProjectLayout.jsx";
import Project from "./Components/Project.jsx";
import {MainLayout} from "./Components/MainLayout.jsx";


createRoot(document.getElementById('root')).render(

    <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainLayout />} >
                <Route index element={<App />} />
                <Route path="home" element={<App/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="services" element={<Services/>}/>
                <Route path="projects" >
                    <Route index element={<Projects/>}/>
                    <Route element={<ProjectLayout/>}>
                        <Route path=':projectId' element={<Project/>}/>
                    </Route>
                </Route>
                <Route path="careers" element={<Careers/>}/>
                <Route path="subcontractors" element={<Subcontractors/>}/>
                <Route path="*" element={<NoMatch/>}/>
            </Route>
        </Routes>
    </BrowserRouter>

)
