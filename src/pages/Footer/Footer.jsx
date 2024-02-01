import React from 'react'
import "./style.scss"
import { Link, NavLink } from 'react-router-dom'

import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaCircle } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";


function Footer() {
    return (
        <>
            <div className="footer">
                <div className="containerf">
                    <div className="sns">
                        <div className="logo"><img src="https://www.logodee.com/wp-content/uploads/2023/01/Online-Custom-Free-Logo-Maker-Vector-Free-Download.jpg" alt="" />Shades and Shadows</div>
                        <div className="ph">Accelerate innovation with world-class tech teams We'll match you to an entire remote team of incredible freelance talent.</div>
                        <div className="medias">
                            <div className="facebook">
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="facebook-link"><i class="fa-brands fa-facebook-f"></i></a></div>
                            <div className="twitter"><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="twitter-link"><i class="fa-brands fa-twitter"></i></a></div>
                            <div className="linkedin"><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="likedin-link"><i class="fab fa-linkedin-in"></i></a></div>
                        </div>
                    </div>
                    <div className="useful">
                        <div className="head">Useful Links</div>
                        <div className="col">
                            <div className="row">Terms & Conditions</div>
                            <Link className="row" to="/about">About Company</Link>
                            <div className="row">Payment Gatway</div>
                            <div className="row">Policy</div>
                        </div>
                    </div>
                    <div className="ourservices">
                        <div className="head">Our Services</div>
                        <div className="col">
                            <div className="row">Data Security</div>
                            <div className="row">IT Managment</div>
                            <div className="row">Outsourcing</div>
                            <div className="row">Networking</div>
                        </div>
                    </div>
                    <div className="contact">
                        <div className="head">Contact Information</div>
                        <div className="col">
                            <div className="rowh">
                                <div className="icon"><i class="fa-solid fa-phone-volume"></i></div>
                                <div className="number">+97795546822</div>
                            </div>
                            <div className="rowh">
                                <div className="icon"><i class="far fa-envelope-open"></i></div>

                                <a href="{`mailto:${emailAddress}`}" classname="email-link">biz.bibek@gmail.com</a>


                            </div>
                            <div className="rowh">
                                <div className="icon"><i class="bi bi-geo-alt-fill"></i></div>
                                <div className="location">Mahadevsthan, Kathmandu, Nepal</div>

                            </div>


                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Footer
