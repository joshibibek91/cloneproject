import React from 'react'
import "./style.scss"
import Carousel from 'react-bootstrap/Carousel';



function Home() {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img src="src\pages\Header\Home\Travel.avif" classname="d-block w-100" alt />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img src="src\pages\Header\Home\Travel.avif" classname="d-block w-100" alt />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="src\pages\Header\Home\Travel.avif" classname="d-block w-100" alt />                              <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* <div className="home">
                <div classname="container">
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div>
                                    <img src="src\pages\Header\Home\Travel.avif" classname="d-block w-100" alt />
                                    <div classname="carousel-item">
                                        <img src="src\pages\Header\Home\ecommerce.avif" classname="d-block w-100" alt />
                                    </div>
                                    <div classname="carousel-item">
                                        <img src="src\pages\Header\Home\Travel.avif" classname="d-block w-100" alt />
                                    </div></div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

            </div> */}
        </>
    )
}

export default Home
