import React from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import "./styleotherheader.scss"

import { useState, useEffect } from 'react';

import SearchIcon from '../../compnents/Searchicon/Searchicon';


function Otherheader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 45);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <div className={`header2 ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container2">
                    <div className="left2"><img src="src/pages/Header/WhatsApp Image 2024-02-04 at 11.06.49 AM.jpeg" alt="" onClick={() => navigate('/')} style={{ cursor: 'pointer' }} /></div>
                    <div className="middle2">
                        <NavLink className="home" to="/" >Home</NavLink>
                        <Link className="services" to="/services" >Services</Link>
                        <Link className="aboutus" to="/aboutus" >About Us</Link>
                        <Link className="team" to="/team" >Team</Link>
                        <Link className="know" to="/know-us" >Know Us</Link>

                    </div>
                    <div className="right2">
                        <div className="search" >  <SearchIcon /></div>
                        <Link className="contact" to="/contact" > <button className="contact-button">Contact Us</button></Link>
                    </div> 
                </div> 
                <hr className="hr-line"/>
            </div>

        </>
    )
}

export default Otherheader;