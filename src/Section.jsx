import React from 'react';
import Home from './pages/Header/Home/Home';




import { Routes, Route } from 'react-router-dom'


function Section() {
    return (
        <>

            <Routes>

                <Route path="/home" element={<Home />} />

            </Routes>




        </>
    )
}

export default Section
