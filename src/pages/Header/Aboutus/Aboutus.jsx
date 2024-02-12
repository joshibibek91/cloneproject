import React from 'react'
import { Link } from 'react-router-dom'
import "./style.scss"
import Scope from '../../../compnents/Scope/scope'
import Testimonial from '../../../compnents/Testimonial/Testimonial'
import Experts from '../../../compnents/Expert/Experts'

function Aboutus() {
  return (
    <>
      <div className="aboutus1">
        <div className="frame">
          <div className="container1">
            <div className="main">About Us</div>
            <div className="click"><Link className="home" to="/home" >Home</Link>
              <p>/About Us</p>
            </div>
          </div>
        </div>
        <div className="frame2">
          <div className="container2">
            <div className="left">
              <div className="image1">
                <img src="src/pages/Header/Aboutus/arif-riyanto-vJP-wZ6hGBg-unsplash (2).jpg" alt="" />
              </div>
              <div className="image2">
                <img src="src/pages/Header/Aboutus/markus-spiske-1LLh8k2_YFk-unsplash (1).jpg" alt="" />
              </div>
            </div>
            <div className="right">
              <div className="whoweare">WHO WE ARE </div>
              <div className="highly">Highly Tailored IT Design, Management & Support Services.</div>
              <div className="desc"><p>Shades N Shadows Media Technology (P) Ltd. is established to cater the needs of small business enterprises to go online. We wanted to start slow yet not fall back in the pecking order. 10 years fast forward, after going through multiple ups and downs, we have managed to survive bewildering storms but have not got derailed from our mission. We have always believed in hearing what our perspective customers have to say and learn about their needs. Until we hear them, we cannot give them a proper solution.</p></div>

              <div className="down">
                <div className="left2">
                  <div className="head1">Our Mission</div>
                  <div className="write">Accelerate innovation with world-class tech teams. We help businesses elevate their value.</div>
                </div>
                <div className="right2">
                  <div className="head2">Custom Code</div>
                  <div className="write">Accelerate innovation with world-class tech teams. We help businesses elevate their value.</div>
                </div>
              </div>



            </div>
          </div>
          <div className="lastline">
            "It is all about making your ideas real. You just need the right company that trusts you and believes in the idea."
          </div>
        </div>

        <div className="status">
          <div className="box">
            <div className="completedprojects">
              <div className="numbers"> 354+ </div> <div className="span">Projects Completed</div></div>
            <div className="websiteanalyse"><div className="numbers"> 99% </div><div className="span"> Web Site Analyse</div></div>
            <div className="workhrs"><div className="numbers">168+</div> <div className="span">Hours of Work/Month</div></div>
            <div className="satisfiedclients"><div className="numbers">35+</div> <div className="span">Clients Support Done</div></div>

          </div>
        </div>
      <Scope/>
      <Experts/>
      <Testimonial/>

      </div>

    </>
  )
}

export default Aboutus
