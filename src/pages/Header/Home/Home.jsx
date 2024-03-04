import React from 'react'
import "./style.scss"
import Carousel from 'react-bootstrap/Carousel';
import Ourservices from './Ourservices/Ourservices';
import Scope from '../../../compnents/Scope/Scope';



function Home() {
    return (
        <>
            <div className="fronth">
                <div className="cpart">
                    <Carousel className="my-carousel">
                        <Carousel.Item className="carousel-item" interval={1000}>
                            <img src="src/pages/Header/Home/Artboard 1.png" className="d-block w-100" alt />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img src="src/pages/Header/Home/person-working-html-computer (1).jpg" className="d-block w-100" alt />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="src/pages/Header/Home/person-working-html-computer.jpg" className="d-block w-100" alt />                              <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>

            </div>
            <div className="ourservicepart">
                <Ourservices />
            </div>
            <div className="scope-of-work">
            <Scope/>
            </div>

        </>
    )
}

export default Home
