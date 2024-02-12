import React from 'react'
import "./styleexpert.scss"

import MultipleItems from '../Teamslider/Teamslider'
// import Responsive from '../Teamslider/Teamslider'


function Experts() {
    return (
        <>
            <div className="expert">
                <div className="containers">
                    <div className="top">OUR EXPERT TEAM</div>
                    <div className="middle">We have world expert team</div>
                    <div className="bottom">
                        <div className="carousel">

                            <MultipleItems/>
                            {/* <Responsive /> */}

                        </div></div>

                </div>

            </div>
        </>
    )
}

export default Experts
