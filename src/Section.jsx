import React from 'react';
import Home from './pages/Header/Home/Home';





import { Routes, Route } from 'react-router-dom'


import Ourteam from './pages/Header/Team/Ourteam';
import Aboutus from './pages/Header/Aboutus/Aboutus';


function Section() {
    return (
        <div style={{ display: "grid", gridTemplateRows: "auto 1fr auto" }}>



            <Routes>

                <Route path="/home" element={<Home />} />
                <Route path="/team" element={<Ourteam />} />
                <Route path="/aboutus" element={<Aboutus />} />

            </Routes>




        </div>
    )
}

export default Section
