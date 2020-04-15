import React, { Component } from 'react';
import { Container, Row, Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Head from '../../components/Head';
import Footer from '../../components/header/Footer';
import Header from '../../components/header/Header';
import { imagePath } from '../../utils/assetUtils';
import { NavLink } from 'react-router-dom';

export default class PartnerProfile extends Component {
  render() {
    return (
      <div>
        <Head title="Profile" />
        <Header />
        <div className="dashboard__partner">
          <Container>
            <Row className="mt-5 justify-content-between">
              <Col lg={3} className="c-profile__left">
                <Card className="c-profile__left-top mb-3">
                  <Card.Body className="p-4">
                    <div className="user-image">
                      <img
                        src={imagePath('speaker.jpg')}
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                      <h5 className="font-weight-bold">John Doe</h5>
                      <p>
                        Junior Partner{' '}
                        <span>
                          <FontAwesomeIcon
                            icon="star"
                            className="text-warning mx-1"
                          />
                        </span>
                        4.5
                      </p>
                      <div className="justify-content-center d-flex">
                        <NavLink
                          to="/partner/inbox"
                          className="btn btn-selesai"
                        >
                          Chat
                        </NavLink>
                      </div>
                      <hr />
                      <Row noGutters className="user-desc mb-2">
                        <Col lg={7} className="px-0 fs-16">
                          Domisili
                        </Col>
                        <Col lg={5} className="px-0 px-0 fs-16">
                          Jakarta
                        </Col>
                      </Row>
                      <Row noGutters className="user-desc mb-2">
                        <Col lg={7} className="px-0 fs-16">
                          Partner Sejak
                        </Col>
                        <Col lg={5} className="px-0 px-0 fs-16">
                          Januari 2020
                        </Col>
                      </Row>
                      <Row noGutters className="user-desc">
                        <Col lg={7} className="px-0 fs-16">
                          Avg Respon
                        </Col>
                        <Col lg={5} className="px-0 px-0 fs-16">
                          1 Jam
                        </Col>
                      </Row>
                    </div>
                  </Card.Body>
                </Card>
                <Card className="c-profile__left-bottom mb-5">
                  <Card.Body className="p-4">
                    <p className="font-weight-bold">Deskripsi</p>
                    <p>
                      Clear thought - clear communication, good judgement about
                      people (good eq), strong personal integrity & commitment
                    </p>
                    <hr />
                    <p className="font-weight-bold">Keahlian</p>
                    <p>
                      Design - Mahir <br /> Keuangan - Menengah
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={9} className="c-profile__right ">
                <h2 className="mb-5">Daftar Gawean John Doe</h2>
                <div>
                  <div className="media mb-5 gawean-card">
                    <div className="img-media img-fluid">
                      <img
                        src="https://i.kym-cdn.com/entries/icons/facebook/000/021/807/ig9OoyenpxqdCQyABmOQBZDI0duHk2QZZmWg2Hxd4ro.jpg"
                        alt="service-img"
                        className="gawean-img"
                      />
                    </div>
                    <div className="media-body">
                      <Row className="align-items-center">
                        <Col
                          className="pr-lg-0 px-lg-4 px-0 mh-150"
                          xs={12}
                          lg={8}
                        >
                          <div className="media mb-3">
                            <div className="img-avatar img-fluid mr-2">
                              <img
                                src={imagePath('speaker.jpg')}
                                alt=""
                                className="profile-img rounded-circle"
                              />
                            </div>
                            <div className="media-body">
                              <Row className="d-flex align-items-center">
                                <Col>
                                  <p className="mt-1 mb-0">John Doe</p>
                                  <span style={{ fontSize: '0.8rem' }}>
                                    Junior Partner
                                  </span>
                                </Col>
                                <Col className="d-flex justify-content-between justify-content-xl-end mt-2 mt-xl-0">
                                  <div className="">
                                    <FontAwesomeIcon
                                      icon="heart"
                                      className="fs-18 ml-2"
                                    />
                                    <FontAwesomeIcon
                                      icon="star"
                                      className="fs-18 ml-2 mr-1"
                                    />
                                    <span>4.5</span>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </div>
                          <p style={{ color: '#393c43', fontWeight: '600' }}>
                            Saya bisa membuat landing page
                          </p>
                          <span>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Molestias optio corrupti debitis explicabo
                          </span>
                        </Col>
                        <Col xs={12} lg={4} className="px-0 px-lg-2">
                          <Row>
                            <Col
                              className="d-flex flex-column px-0 px-lg-2 "
                              xs={6}
                              lg={12}
                            >
                              <div className="mt-3 mt-lg-0 text-success price__box">
                                <p className="from">Dari Rp </p>
                                <p className="price">200.000</p>
                              </div>
                            </Col>
                            <Col
                              className="d-flex flex-column px-2 align-self-center"
                              xs={6}
                              lg={12}
                            >
                              <NavLink
                                to="/detail-service"
                                className="btn-rekrut btn-selesai btn-block"
                                style={{ textTransform: 'capitalize' }}
                              >
                                rekrut{' '}
                              </NavLink>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}
