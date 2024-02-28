import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Section from './Section';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';
import Otherheader from './pages/Header2/Otherheader';

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from './pages/Header/Home/Home';
import Ourteam from './pages/Header/Team/Ourteam';
import Aboutus from './pages/Header/Aboutus/Aboutus';
import Services from './pages/Header/Services/Services';
import Contact from './pages/Header/Contact/Contact';



function App() {
    return (
        <>

            {/* Render different headers based on route */}
            <Routes>
                <Route path="/" element={<Header />} />


                <Route path="/" element={<Otherheader />} />
                <Route path="/team" element={<Otherheader />} />
                <Route path="/aboutus" element={<Otherheader />} />
                <Route path="/services" element={<Otherheader />} />
                <Route path="/contact" element={<Otherheader />} />

            </Routes>

            <Section />
            <Footer />
        </>
    );
}

export default App;
