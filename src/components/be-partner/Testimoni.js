import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Slider from 'react-slick'

import { imagePath } from '../../utils/assetUtils';

class Testimoni extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            arrows: false
        };
        return (
            <Container className="c-testimonial-seller-home mt-5">
                <Row className="justify-content-center">
                    <Col lg={12} mb={3} className="text-center">
                        <h1>Kisah penjual</h1>
                    </Col>
                    <Col lg={11}>
                        <div className="swiper-container text-dark swiper-seller-homepage swiper-container-initialized swiper-container-horizontal">
                            <div class="swiper-wrapper h-auto">
                                <div className="swiper-slide swiper-slide-duplicate swiper-active swiper-slide-prev">
                                    <Row className="justify-content-center mt-3 mt-md-4">

                                        <Col lg={9} className="text-center">
                                            <Slider {...settings}>
                                                <div>
                                                    <img src={imagePath('icon-4.png')} alt="" className="img-fluid d-block mx-auto mb-3" />
                                                    <h4>The heights by great men reached and kept were not attained by sudden flight, but they, while their companions slept, were toiling upward in the night.</h4>
                                                    <img src={imagePath('speaker.jpg')} alt="" className="img-profile img-fluid d-block mx-auto mt-4 mb-3 rounded-circle" />
                                                    <small>Product designer</small>
                                                </div>
                                                <div>
                                                    <img src={imagePath('icon-4.png')} alt="" className="img-fluid d-block mx-auto mb-3" />
                                                    <h4>The heights by great men reached and kept were not attained by sudden flight, but they, while their companions slept, were toiling upward in the night.</h4>
                                                    <img src={imagePath('speaker.jpg')} alt="" className="img-profile img-fluid d-block mx-auto mt-4 mb-3 rounded-circle" />
                                                    <small>Product designer</small>
                                                </div>
                                            </Slider>
                                        </Col>

                                    </Row>
                                </div>
                            </div>
                            {/* <div className="swiper-button-prev swiper-prev"></div>
                            <div className="swiper-button-next swiper-next"></div> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Testimoni;
