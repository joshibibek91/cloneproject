import React from 'react'
import "./style.scss"
import { Link, NavLink } from 'react-router-dom'
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";


function Ourteam() {
    return (
        <>
            <div className="ourteam">
                <div className="container1">
                    {/* <img src="src\compnents\Team\startup-team-collaborating-project-using-laptops.jpg" alt="" /> */}
                    <div className="main">Our Team</div>
                    <div className="click"><Link className="home" to="/home" >Home</Link>
                        <p>/Our Team</p>
                    </div>

                </div>
                <div className="grid">
                    <div className="card">
                        <div className="name">Chandra <br /> Ghimire</div>
                        <div className="post">Project Manager, S&S</div>
                        <div className="logos">
                            <GrFacebookOption size={19.5} color="white" style={{ marginTop: "10px", marginLeft: "--4px" }} />
                            <FaInstagram size={20} color="white" style={{ marginTop: "10px", marginLeft: "10px" }} />
                            <MdOutlineMailOutline size={23} color="white" style={{ marginTop: "10px", marginLeft: "15px" }} />
                        </div>
                    </div>
                    <div className="card">
                        <div className="name">Chandra <br /> Ghimire</div>
                        <div className="post">Project Manager, S&S</div>
                        <div className="logos">
                            <GrFacebookOption size={19.5} color="white" style={{ marginTop: "10px", marginLeft: "--4px" }} />
                            <FaInstagram size={20} color="white" style={{ marginTop: "10px", marginLeft: "10px" }} />
                            <MdOutlineMailOutline size={23} color="white" style={{ marginTop: "10px", marginLeft: "15px" }} />
                        </div>
                    </div>
                    <div className="card">
                        <div className="name">Chandra <br /> Ghimire</div>
                        <div className="post">Project Manager, S&S</div>
                        <div className="logos">
                            <GrFacebookOption size={19.5} color="white" style={{ marginTop: "10px", marginLeft: "--4px" }} />
                            <FaInstagram size={20} color="white" style={{ marginTop: "10px", marginLeft: "10px" }} />
                            <MdOutlineMailOutline size={23} color="white" style={{ marginTop: "10px", marginLeft: "15px" }} />
                        </div>
                    </div>
                    <div className="card">
                        <div className="name">Chandra <br /> Ghimire</div>
                        <div className="post">Project Manager, S&S</div>
                        <div className="logos">
                            <GrFacebookOption size={19.5} color="white" style={{ marginTop: "10px", marginLeft: "--4px" }} />
                            <FaInstagram size={20} color="white" style={{ marginTop: "10px", marginLeft: "10px" }} />
                            <MdOutlineMailOutline size={23} color="white" style={{ marginTop: "10px", marginLeft: "15px" }} />
                        </div>
                    </div>
                    <div className="card">
                        <div className="name">Chandra <br /> Ghimire</div>
                        <div className="post">Project Manager, S&S</div>
                        <div className="logos">
                            <GrFacebookOption size={19.5} color="white" style={{ marginTop: "10px", marginLeft: "--4px" }} />
                            <FaInstagram size={20} color="white" style={{ marginTop: "10px", marginLeft: "10px" }} />
                            <MdOutlineMailOutline size={23} color="white" style={{ marginTop: "10px", marginLeft: "15px" }} />
                        </div>
                    </div>
                    <div className="card">
                        <div className="name">Chandra <br /> Ghimire</div>
                        <div className="post">Project Manager, S&S</div>
                        <div className="logos">
                            <GrFacebookOption size={19.5} color="white" style={{ marginTop: "10px", marginLeft: "--4px" }} />
                            <FaInstagram size={20} color="white" style={{ marginTop: "10px", marginLeft: "10px" }} />
                            <MdOutlineMailOutline size={23} color="white" style={{ marginTop: "10px", marginLeft: "15px" }} />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Ourteam
