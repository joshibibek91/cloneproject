import React from 'react'
import "./style.scss"

function Home() {
    return (
        <>

            <div className="home">
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

            </div>
        </>
    )
}

export default Home
