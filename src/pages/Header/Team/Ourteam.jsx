import React from 'react'
import "./style.scss"
import { Link, NavLink } from 'react-router-dom'
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";


const cardsData = [
    { id: 1, firstname: "Chandra", lastname: "Ghimire", title: 'Project Manager, S&S', backgroundImage: 'linear-gradient(180deg, rgba(249, 80, 0, 0) 35%, rgba(14, 14, 14, 0.89) 78%), url("src/pages/Header/Team/dami.jpg")', facebooklink: 'https://www.facebook.com/', instalink: 'https://www.instagram.com/', mailme: 'https://www.gmail.com/' },
    { id: 2, firstname: "Bibek", lastname: "Joshi", title: 'Project Manager, S&S', backgroundImage: 'linear-gradient(180deg, rgba(249, 80, 0, 0) 35%, rgba(14, 14, 14, 0.89) 78%), url("src/pages/Header/Team/dami.jpg")', facebooklink: 'www.facebook.com', instalink: 'https://www.instagram.com/', mailme: 'https://www.gmail.com/' },
    { id: 3, firstname: "Ashim", lastname: "Poudyal", title: 'Project Manager, S&S', backgroundImage: 'linear-gradient(180deg, rgba(249, 80, 0, 0) 35%, rgba(14, 14, 14, 0.89) 78%), url("src/pages/Header/Team/dami.jpg")', facebooklink: 'www.facebook.com', instalink: 'https://www.instagram.com/', mailme: 'https://www.gmail.com/' },
    { id: 4, firstname: "Skanda", lastname: "Aryal", title: 'Project Manager, S&S', backgroundImage: 'linear-gradient(180deg, rgba(249, 80, 0, 0) 35%, rgba(14, 14, 14, 0.89) 78%), url("src/pages/Header/Team/dami.jpg")', facebooklink: 'www.facebook.com', instalink: 'https://www.instagram.com/', mailme: 'https://www.gmail.com/' },
    { id: 5, firstname: "Kritan", lastname: "Pandey", title: 'Project Manager, S&S', backgroundImage: 'linear-gradient(180deg, rgba(249, 80, 0, 0) 35%, rgba(14, 14, 14, 0.89) 78%), url("src/pages/Header/Team/dami.jpg")', facebooklink: 'www.facebook.com', instalink: 'https://www.instagram.com/', mailme: 'https://www.gmail.com/' },
    { id: 6, firstname: "Aaviskar", lastname: "Pokharel", title: 'Project Manager, S&S', backgroundImage: 'linear-gradient(180deg, rgba(249, 80, 0, 0) 35%, rgba(14, 14, 14, 0.89) 78%), url("src/pages/Header/Team/dami.jpg")', facebooklink: 'www.facebook.com', instalink: 'https://www.instagram.com/', mailme: 'https://www.gmail.com/' },


];


function Ourteam() {
    return (
        <>
            <div className="ourteam">
                <div className="ourteam1">
                    <div className="container1">
                        <div className="main">Our Team</div>
                        <div className="click"><Link className="home" to="/" >Home</Link>
                            <p>/Our Team</p>
                        </div>

                    </div>
                </div>
                <div className="grid">
                    {
                        cardsData.map((data) => (
                            <div className="card" key={data.id} style={{ backgroundImage: data.backgroundImage, filter: data.filter }}>

                                <div className="name">{data.firstname} <br /> {data.lastname}</div>
                                <div className="post">{data.title}</div>
                                <div className="logos">
                                    <a href={data.facebooklink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                        <GrFacebookOption size={19.5} color="white" style={{ marginTop: '10px', marginLeft: '-4px' }} />
                                    </a>
                                    <a href={data.instalink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>

                                        <FaInstagram size={20} color="white" style={{ marginTop: "10px", marginLeft: "10px" }} />
                                    </a>
                                    <a href={data.mailme} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                        <MdOutlineMailOutline size={23} color="white" style={{ marginTop: "10px", marginLeft: "15px" }} />
                                    </a>
                                </div>
                            </div>
                        ))
                    }

                </div>


            </div>

        </>
    )
}

export default Ourteam
