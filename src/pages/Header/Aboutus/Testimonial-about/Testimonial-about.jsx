import React from 'react'
// import Slider from 'react-slick';


import "./styletestimonial-about.scss"
// import "./slick.scss"
// import "./slick-theme.scss"

import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import MultipleItems from './TestimonialSlider/Testimonialslider';
// import MultipleItems from '../../../../compnents/Teamslider/Teamslider';




// const items = [
//     { id: 1, firstname: "Anish", lastname: "Singh", title: 'CEO, Prime Inc.', imageUrl: 'src/pages/Header/Aboutus/Testimonial-about/christopher-campbell-rDEOVtE7vOs-unsplash.jpg', text: 'Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this this wow manatee' },
//     { id: 2, firstname: "Jayanti", lastname: "Singh", title: 'CEO, Prime Inc.', imageUrl: 'src/pages/Header/Aboutus/Testimonial-about/christopher-campbell-rDEOVtE7vOs-unsplash.jpg', text: 'Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this this wow manatee' },
//     // { id: 3, firstname: "Madhur", lastname: "Muskaan", title: 'CEO, Prime Inc.', imageUrl: 'src/pages/Header/Aboutus/Testimonial-about/christopher-campbell-rDEOVtE7vOs-unsplash.jpg', text: 'Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this this wow manatee' },
// ];

function Testimonialabout() {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    // }
    return (
        <>
            <div className="testimonialabout">
                <div className="top">TESTIMONIAL</div>
                <div className="middle">20k+ satisfied clients worldwide</div>
                <div className="bottom">
                    <div className="slider">
                        <div className="carousel1">
                            <MultipleItems />
                            {/* <Slider {...settings}>
                            {items.map((data) => (

                                <div className="cardt" key={data.id}>
                                    <div className='cardt'>

                                        <div className="left">
                                            <div className="image"><img src={data.imageUrl} alt={data.firstname} /></div>
                                        </div>
                                        <div className="right">
                                            <div className="bubble"><HiOutlineChatBubbleLeftRight size={50} color='#086AD8' /></div>
                                            <div className="desc">{data.text} </div>
                                            <div className="post">{data.firstname} {data.lastname} <span> / {data.title}</span></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider > */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Testimonialabout
