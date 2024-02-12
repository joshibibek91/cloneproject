import React from 'react'
import "./stylescope.scss"
import { MdOutlineWebhook } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { AiOutlineSolution } from "react-icons/ai";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa6";
function Scope() {
    return (
        <>
            <div className="scopeofwork">
                <div className="container3">
                    <div className="top">REASON TO CHOOSE US</div>
                    <div className="middle">We provide truly prominent IT solutions.</div>
                    <div className="cards">
                        <div className="box1">
                            <div className="icon"><MdOutlineWebhook size={50} /></div>
                            <div className="field">API Integration</div>
                            <div className="write">API is commonly referred to as third party services or external platforms. We integrate such kinds of API.</div>
                        </div>
                        <div className="box1">
                            <div className="icon"><MdPayments size={50} /></div>
                            <div className="field">Payment API Integration</div>
                            <div className="write">Accepting payments online for every sales would boost every business. At SnS, we help your business reach out to such prospects.</div>
                        </div>
                        <div className="box1">
                            <div className="icon"><MdDateRange size={50} /></div>
                            <div className="field">Business Consultation</div>
                            <div className="write">As a service provider who gives business consultation, we help you with the technical solution to take your business online.</div>
                        </div>
                        <div className="box1">
                            <div className="icon"><AiOutlineSolution size={50} /></div>
                            <div className="field">Proper Online Solution</div>
                            <div className="write">At SnS, we give you all the online service you need. We also help you through the technical transition to eliminate the hassle.</div>
                        </div>
                        <div className="box1">
                            <div className="icon"><MdOutlineBrandingWatermark size={50} /></div>
                            <div className="field">Branding And Printing</div>
                            <div className="write">Our support and service also goes beyond the web. We provide branding solutions to keep your company image new and fresh.</div>
                        </div>
                        <div className="box1">
                            <div className="icon"><FaMobileAlt  size={35} /><FaLaptop size={50}/></div>
                            <div className="field">Responsive Design</div>
                            <div className="write">Our designs are not just responsive online but they are also responsive offline for different purposes for printing purpose.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Scope

