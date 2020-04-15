import React, { Component } from 'react'
import Slider from 'react-slick';

import { imagePath } from '../../utils/assetUtils';
import { carouselHeader, popularCategory, testimonial } from '../dummy-data/nav'
import { CategorySlide, CustomSlide } from './CustomSlide'

export class TopCarousel extends Component {
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
            <div>
                <Slider {...settings}>
                    {carouselHeader.map(item => (
                        <div id={item.id} key={item.id}>
                            <img
                                src={imagePath(`${item.image}`)}
                                alt="carousel"
                                style={{ borderRadius: '15px', width: 'inherit' }}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        )
    }
}

export class CategoryCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    render() {
        const settings2 = {
            dots: false,
            infinite: true,
            slidesToShow: this.state.width > 768 ? 5 : this.state.width < 420 ? 1 : 2,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            arrows: true
        };

        return (
            <Slider {...settings2}>
                {popularCategory.map(item => (
                    <CategorySlide
                        key={item.id}
                        index={item.id}
                        title={item.title}
                        category={item.category}
                        img={item.img}
                    />
                ))}
            </Slider>
        )
    }
}

export class TestimonialCarousel extends Component {

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
            <div>
                <Slider {...settings}>
                    {testimonial.map(item => (
                        <CustomSlide
                            key={item.id}
                            index={item.id}
                            name={item.name}
                            testimoni={item.testimonial}
                            profession={item.profession}
                            img={item.img}
                        />
                    ))}
                </Slider>
            </div>
        )
    }
}