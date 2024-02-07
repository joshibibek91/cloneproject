import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./style.scss"


function Header() {
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="left"><img src="src/pages/Header/WhatsApp Image 2024-02-04 at 11.06.49 AM.jpeg" alt="" /></div>
                    <div className="middle">
                        <NavLink className="home" to="/home" >Home</NavLink>
                        <Link className="services" to="/services" >Services</Link>
                        <Link className="aboutus" to="/aboutus" >About Us</Link>
                        <Link className="team" to="/team" >Team</Link>
                        <Link className="know" to="/know-us" >Know Us</Link>

                    </div>
                    <div className="right">
                        <Link className="search" to="/search" > search button</Link>
                        <Link className="contact" to="/contact" > Contact button</Link>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Header
