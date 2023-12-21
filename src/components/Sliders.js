

import React from 'react';

const Sliders = () => {
    return (
        <>
            <div id="carouselExampleRide" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="https://s3no.cashify.in/estore/ab0f8f2abc9d4899aba858e105cefea1.webp?p=default&s=lg"
                            className="d-block w-100"
                            alt="First slide"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://s3no.cashify.in/estore/92eded47b9e749b1b68cbaf21299d004.webp?p=default&s=lg"
                            className="d-block w-100"
                            alt="Second slide"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://s3no.cashify.in/estore/852a1846672e4dbbae864a77cc6b763c.webp?p=default&s=lg"
                            className="d-block w-100"
                            alt="Third slide"
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleRide"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleRide"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
};

export default Sliders;


