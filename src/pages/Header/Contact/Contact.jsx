import React from 'react'
import "./stylecontact.scss"
import { useState } from 'react'

import { Link } from 'react-router-dom'
import Contactusform from '../../../compnents/Contact-us-form/contactusform'
import Googlemap from '../../../compnents/Map/Googlemap'

function Contact() {
    return (
        <>
            <div className="contact1">
                <div className="frame">
                    <div className="container1">
                        <div className="main">Contact</div>
                        <div className="click"><Link className="home" to="/" >Home</Link>
                            <p>/Contact</p>
                        </div>
                    </div>
                </div>
                <div className="container21">
                    <div className="up">
                        <div className="cardc">
                            <div className="box1">
                                <div className="phone">
                                    <img src="src/pages/Header/Contact/call.png" alt="" height={60} />
                                </div>
                                <div className="give">Give us a call</div>
                                <div className="num">+977-9803609034 <br />+977-9851131734</div>
                            </div>
                            <div className="box2">
                                <div className="env"><img src="src/pages/Header/Contact/envelope.png" alt="" height={60} /></div>
                                <div className="drop">Drop us a line</div>
                                <div className="site">
                                    contact@shadesnshadows.com.np <br />support@shadesnshadows.com.np</div>
                            </div>
                            <div className="box3">
                                <div className="pin"><img src="src/pages/Header/Contact/location.png" alt="" height={60} /></div>
                                <div className="visit">Visit our office</div>
                                <div className="add">Koteshwor-32 <br /> Kathmandu, Nepal</div>
                            </div>
                        </div>
                        <div className="request">
                            <div className="top">REQUEST A QUOTE</div>
                            <div className="middle">How May We Help You!</div>
                            <div className="form">
                                <Contactusform />
                            </div>

                        </div>
                    </div>

                </div>
                <div className="map">
                    <Googlemap />
                </div>
            </div>
        </>
    )
}

export default Contact
