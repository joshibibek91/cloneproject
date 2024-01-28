import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./style.scss"


function Header() {
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="left"><img src="https://www.logodee.com/wp-content/uploads/2023/01/Online-Custom-Free-Logo-Maker-Vector-Free-Download.jpg" alt="" /></div>
                    <div className="middle">
                        <NavLink className="home" to="/home" >Home</NavLink>
                        <Link className="services" to="/services" >Services</Link>
                        <Link className="about" to="/about-api" >About API</Link>
                        <Link className="travel" to="/travel-dom" >Travel DOME</Link>
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
