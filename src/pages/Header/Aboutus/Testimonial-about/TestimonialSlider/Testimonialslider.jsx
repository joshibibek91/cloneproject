import React from 'react'
import Slider from 'react-slick';


import "./styletestimonialslider.scss"
import "./slick.scss"
import "./slick-theme.scss"

import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

const items = [
    { id: 1, firstname: "Anish", lastname: "Singh", title: 'CEO, Prime Inc.', imageUrl: 'src/pages/Header/Aboutus/Testimonial-about/TestimonialSlider/christopher-campbell-rDEOVtE7vOs-unsplash.jpg', text: 'Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this this wow manatee' },
    { id: 2, firstname: "Jayanti", lastname: "Singh", title: 'CEO, Prime Inc.', imageUrl: 'src/pages/Header/Aboutus/Testimonial-about/TestimonialSlider/christopher-campbell-rDEOVtE7vOs-unsplash.jpg', text: 'Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this this wow manatee' },
    // { id: 3, firstname: "Madhur", lastname: "Muskaan", title: 'CEO, Prime Inc.', imageUrl: 'src/pages/Header/Aboutus/Testimonial-about/TestimonialSlider/christopher-campbell-rDEOVtE7vOs-unsplash.jpg', text: 'Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this this wow manatee' },
];

function MultipleItems() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    }
    return (
        <>

            <Slider {...settings}>

                {/* <div className="cardt">
                    <div className="name">Bibek</div>
                    <div className="caste">Joshi</div>
                </div> */}
                {items.map((data) => (

                    <div className="carousel2" key={data.id}>
                        <div className='carousel2'>
                            <div className="cardt">

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
                    </div>
                ))}
            </Slider >




        </>
    )
}

export default MultipleItems
