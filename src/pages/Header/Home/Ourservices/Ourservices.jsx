import React from 'react'
import "./styleourservices.scss"

function Ourservices() {
    return (
        <>

            <div className="our-services">
                <div className="upperpart">
                    <div className="ups">Our Services</div>
                    <div className="downs">SERVICES YOU'LL LOVE</div>
                </div>
                <div className="tops">
                    <div className="leftt"><img src="src/pages/Header/Home/API.png" alt="" /></div>
                    <div className="rightt">
                        <div className="api-integration">API Integration
                        </div>
                        <div className="descapi">At SnS, we integrate different kinds of API in our clients' website as they require. API help us to make our work easier with less efforts. API help us to simplify the work hence, we recommed our clients to use such features to enhance their work feature and service.</div>
                        <div className="buttonl"><button>LEARN MORE</button></div>
                    </div>
                </div>
                <div className="middles">
                    <div className="leftm">
                        <div className="travel-dome">
                            Travel DOME

                        </div>
                        <div className="desctravel">Travel DOME is a customizable travel product for travel agenices which will help them to reach customers with their product. Travel dome helps travel agencies to integrate all of their products in a single platform which make their website a place to visit for the customers queries.</div>
                        <div className="buttonl"><button>LEARN MORE</button></div></div>
                    <div className="rightm"><img src="src/pages/Header/Home/Travel.png" alt="" /></div>
                </div>

                <div className="bottoms">
                    <div className="leftb"><img src="src/pages/Header/Home/WebD.png" alt="" /></div>

                    <div className="rightb">
                        <div className="web-design">Web Design
                        </div>
                        <div className="descweb">SNS specializes in creating custom websites that seamlessly blend creativity with functionality. With our focus on user-centric design and cutting-edge technology, we ensure your online presence not only looks impressive but also engages visitors effectively. Trust us to transform your vision into a captivating digital experience that sets your brand apart from the competition.</div>
                        <div className="buttonl"><button>LEARN MORE</button></div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Ourservices
