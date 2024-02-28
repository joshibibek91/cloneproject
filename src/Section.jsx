import React from 'react';

import { Routes, Route } from 'react-router-dom'

import Home from './pages/Header/Home/Home';
import Ourteam from './pages/Header/Team/Ourteam';
import Aboutus from './pages/Header/Aboutus/Aboutus';
import Services from './pages/Header/Services/Services';
import Contact from './pages/Header/Contact/Contact';


function Section() {
    return (
        <div style={{ display: "grid", gridTemplateRows: "auto 1fr auto" }}>



            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/team" element={<Ourteam />} />
                <Route path="/aboutus" element={<Aboutus />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />

            </Routes>




        </div>
    )
}

export default Section
