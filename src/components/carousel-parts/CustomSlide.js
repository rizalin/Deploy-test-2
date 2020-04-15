import React, { Component } from 'react'
import { Col, Row, CardDeck, Card, } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { imagePath } from '../../utils/assetUtils';

export class CustomSlide extends Component {
    render() {
        const { index, name, testimoni, profession, img, ...props } = this.props;
        return (
            <div {...props}>
                <Row>
                    <Col md={6} className=" d-md-flex justify-content-center">
                        <img src={imagePath(`${img}`)} alt="" className="img-fluid" />
                    </Col>
                    <Col md={6} className="my-auto ">
                        <div className="">
                            <p>{testimoni}</p>
                            <h5>{name}</h5>
                            <p>{profession}</p>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export class CategorySlide extends Component {
    render() {
        const { index, title, category, profession, img, ...props } = this.props;
        return (
            <div {...props}>
                <CardDeck>
                    <Card>
                        <NavLink to="/service-list" className="mr-3">
                            <img src={imagePath(`${img}`)} alt="" className="card-img" />
                            <div className="card-img-overlay mr-3">
                                <h5 className="card-title">{category}</h5>
                                <p className="card-text">{title}</p>
                            </div>
                        </NavLink>
                    </Card>
                </CardDeck>
            </div>
        );
    }
}