import React from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import "./style.scss"

import { useState, useEffect } from 'react';

import SearchIcon from '../../compnents/Searchicon/Searchicon';


function Header() {
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
            <div className={`headera ${isScrolled ? 'scrolled' : ''}`}>
                <div className="containera">
                    <div className="left"><img src="src/pages/Header/b1a44848-1a18-4ddc-9d1b-c0eedfefd2fb.png" alt="" onClick={() => navigate('/')} style={{ cursor: 'pointer' }} /></div>
                    <div className="middle">
                        <NavLink className="home" to="/" >Home</NavLink>
                        <Link className="services" to="/services" >Services</Link>
                        <Link className="aboutus" to="/aboutus" >About Us</Link>
                        <Link className="team" to="/team" >Team</Link>
                        <Link className="know" to="/know-us" >Know Us</Link>

                    </div>
                    <div className="right">
                        <div className="search" >  <SearchIcon /></div>
                        <Link className="contact" to="/contact" > <button className="contact-button">Contact Us</button></Link>
                    </div> 
                </div> 
                <hr className="hr-line"/>
            </div>

        </>
    )
}

export default Header;




// function Header() {
//     const location = useLocation();
//     const [isHomePage, setIsHomePage] = useState(location.pathname === '/');

//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollPosition = window.scrollY;
//             const isScrolled = scrollPosition > 300;
//             setIsHomePage(isScrolled);
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);


//     return (
//         <>
//             <div className={`header${isHomePage ? ' home-header' : ''}`}>
//                 <div className="container">
//                     <div className="left"><img src="src/pages/Header/WhatsApp Image 2024-02-04 at 11.06.49 AM.jpeg" alt="" onClick={() => navigate('/')} style={{ cursor: 'pointer' }} /></div>
//                     <div className="middle">
//                         <NavLink className="home" to="/" >Home</NavLink>
//                         <Link className="services" to="/services" >Services</Link>
//                         <Link className="aboutus" to="/aboutus" >About Us</Link>
//                         <Link className="team" to="/team" >Team</Link>
//                         <Link className="know" to="/know-us" >Know Us</Link>

//                     </div>
//                     <div className="right">
//                         <div className="search" >  <SearchIcon /></div>
//                         <Link className="contact" to="/contact" > <button className="contact-button">Contact Us</button></Link>
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default Header;
