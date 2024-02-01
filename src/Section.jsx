import React from 'react';
import Home from './pages/Header/Home/Home';





import { Routes, Route } from 'react-router-dom'
import Ourteam from './compnents/Team/Ourteam';
import About from './pages/Header/About/About';


function Section() {
    return (
        <>

            <Routes>

                <Route path="/home" element={<Home />} />
                <Route path="/team" element={<Ourteam />} />
                <Route path="/about" element={<About />} />

            </Routes>




        </>
    )
}

export default Section
