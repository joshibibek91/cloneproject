

import React from 'react';
import Slider from 'react-slick';

import "./styleteamslider.scss"

import './slick.scss';
import './slick-theme.scss';

import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import backgroundImage from '../Teamslider/dami.jpg'; // Importing the image

const cardsData = [
  { id: 1, firstname: "Chandra", lastname: "Ghimire", title: 'Project Manager, S&S', backgroundImage: `linear-gradient(180deg, rgba(249, 80, 0, 0) 35%, rgba(14, 14, 14, 0.89) 78%), url(${backgroundImage})`, facebooklink: 'https://www.facebook.com/', instalink: 'https://www.instagram.com/', mailme: 'https://www.gmail.com/' },
  { id: 2, firstname: "Bibek", lastname: "Joshi", title: 'Project Manager, S&S', backgroundImage: `linear-gradient(180deg, rgba(249, 80, 0, 0) 35%, rgba(14, 14, 14, 0.89) 78%), url(${backgroundImage})`, facebooklink: 'www.facebook.com', instalink: 'https://www.instagram.com/', mailme: 'https://www.gmail.com/' },
  { id: 3, firstname: "Ashim", lastname: "Poudyal", title: 'Project Manager, S&S', backgroundImage: `linear-gradient(180deg, rgba(249, 80, 0, 0) 35%, rgba(14, 14, 14, 0.89) 78%), url(${backgroundImage})`, facebooklink: 'www.facebook.com', instalink: 'https://www.instagram.com/', mailme: 'https://www.gmail.com/' },
  { id: 4, firstname: "hero", lastname: "Poudyal", title: 'Project Manager, S&S', backgroundImage: `linear-gradient(180deg, rgba(249, 80, 0, 0) 35%, rgba(14, 14, 14, 0.89) 78%), url(${backgroundImage})`, facebooklink: 'www.facebook.com', instalink: 'https://www.instagram.com/', mailme: 'https://www.gmail.com/' },
];

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        {cardsData.map((data) => (

          <div className="card" key={data.id} >
            <div style={{ backgroundImage: data.backgroundImage, }} className='card'>
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
          </div>
        ))}

        {/* <div className="box1"> Box1</div>
      <div className="box2">Box2</div> */}

      </Slider >
    </>





  );
}

export default MultipleItems;