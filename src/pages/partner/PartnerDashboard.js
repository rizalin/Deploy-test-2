import React, { Component } from 'react';
import {
  Container,
  Navbar,
  Row,
  Card,
  ProgressBar,
  Col,
  Media,
  Badge
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import Head from '../../components/Head';
import HeaderPartnerDashboard from '../../components/header/HeaderPartner-2';
import { imagePath } from '../../utils/assetUtils';
import Countdown from '../../components/Countdown';

export default class PartnerDashboard extends Component {
  render() {
    return (
      <div>
        <Head title="Dashboard Partner" description="Description" />
        <HeaderPartnerDashboard />

        {/* Partner tabs */}
        <div className="dashboard__partner">
          <Container fluid className="nav__menu d-none d-lg-block">
            <Navbar className="p-0 navbar-expand-md">
              <div className="navbar-nav mr-auto">
                <li className="navlink-seller aktif">
                  <span>Dashboard</span>
                </li>
                <li className="navlink-seller">
                  <NavLink to="/partner/inbox">Inbox</NavLink>
                </li>
                <li className="navlink-seller">
                  <NavLink to="/partner/orderan">Orderan</NavLink>
                </li>
                <li className="navlink-seller">
                  <NavLink to="/partner/gawean">Gawean</NavLink>
                </li>
                <li className="navlink-seller">
                  <NavLink to="/partner/saldo">Saldo</NavLink>
                </li>
                <li className="navlink-seller">
                  <NavLink to="/partner/setting">Pengaturan Partner</NavLink>
                </li>
              </div>
            </Navbar>
          </Container>

          {/* Content starts here */}
          <Container fluid className="mt-4 mt-lg-5">
            <Row>
              {/* Left content starts here  */}

              <Col className="mb-4 pl-0" lg={3}>
                <Row>
                  {/* Profile starts here */}
                  <Col
                    xs={12}
                    md={6}
                    lg={12}
                    className="d-flex flex-column mb-4 mb-md-0 mb-lg-4 pl-0"
                  >
                    <Card className="c-profile card__custom_order h-100 mb-0">
                      <Card.Body>
                        <div className="card__custom_order_global">
                          <div className="d-flex flex-row-reverse">
                            <NavLink
                              className="badge badge-success"
                              style={{ padding: '10px', fontSize: '15px' }}
                              to="/"
                            >
                              Online
                            </NavLink>
                          </div>
                          <div className="d-flex justify-content-center text-center">
                            <div className="p-1">
                              <img
                                src={imagePath('img-avatar.png')}
                                alt="user avatar"
                                className="img-fluid rounded-circle"
                                style={{ height: '80px' }}
                              />
                              <h4 className="text-capitalize font-weight-bolder pt-3">
                                Sutinim Doe
                              </h4>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between align-items-center text-capitalize pt-2">
                            <div>
                              <h5 className="mb-0">Tingkat Respon</h5>
                            </div>
                            <div style={{ minWidth: '125px' }}>
                              <ProgressBar now={80} label={'80%'} />
                            </div>
                          </div>
                          <div className="d-flex justify-content-between align-items-center text-capitalize pt-3">
                            <div>
                              <h5 className="mb-0">Tepat Waktu</h5>
                            </div>
                            <div style={{ minWidth: '125px' }}>
                              <ProgressBar now={80} label={'80%'} />
                            </div>
                          </div>
                          <div className="d-flex justify-content-between align-items-center text-capitalize pt-3">
                            <div>
                              <h5 className="mb-0">Penyelesaian</h5>
                            </div>
                            <div style={{ minWidth: '125px' }}>
                              <ProgressBar now={100} label={'100%'} />
                            </div>
                          </div>
                          <div className="d-flex pt-4">
                            <div>
                              <h5>Pendapatan bulan ini</h5>
                            </div>
                            <div style={{ paddingLeft: '1rem' }}>
                              <h5>Rp.120.000.000</h5>
                            </div>
                          </div>
                          <div className="d-flex pt-1">
                            <div>
                              <h5>Avg. Waktu respon</h5>
                            </div>
                            <div style={{ paddingLeft: '1.7rem' }}>
                              <h5>3 Hari</h5>
                            </div>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>

                  {/* Message starts here */}
                  <Col
                    xs={12}
                    md={6}
                    lg={12}
                    className="d-flex flex-column mb-4 mb-md-0 mb-lg-4 pl-0"
                  >
                    <Card className="c-pesan card__custom_order h-100 mb-0 pl-0">
                      <Card.Body>
                        <div className="card__custom_order_global">
                          <Row>
                            <Col className="text-left text-capitalize" xs={6}>
                              <h5>Pesan</h5>
                            </Col>
                            <Col
                              className="text-right text-capitalize pr-lg-0 pr-2"
                              xs={6}
                            >
                              <NavLink to="/">Lihat Semua</NavLink>
                            </Col>
                          </Row>
                          <Media className="pt-4">
                            <img
                              src={imagePath('img-avatar.png')}
                              alt=""
                              className="mr-3 img-fluid rounded-circle"
                              style={{ height: '56px' }}
                            />
                            <Media.Body>
                              <h5 className="mt-0" style={{ fontSize: '16px' }}>
                                Sugimin
                              </h5>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit.
                            </Media.Body>
                          </Media>
                          <Media className="pt-4">
                            <img
                              src={imagePath('img-avatar.png')}
                              alt=""
                              className="mr-3 img-fluid rounded-circle"
                              style={{ height: '56px' }}
                            />
                            <Media.Body>
                              <h5 className="mt-0" style={{ fontSize: '16px' }}>
                                Sugimin
                              </h5>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit.
                            </Media.Body>
                          </Media>
                          <Media className="pt-4">
                            <img
                              src={imagePath('img-avatar.png')}
                              alt=""
                              className="mr-3 img-fluid rounded-circle"
                              style={{ height: '56px' }}
                            />
                            <Media.Body>
                              <h5 className="mt-0" style={{ fontSize: '16px' }}>
                                Sugimin
                              </h5>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit.
                            </Media.Body>
                          </Media>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>

              {/* Right content starts here */}
              <Col className="px-4 mb-4 right-content" lg={9}>
                <Col
                  lg={3}
                  xs={8}
                  className="ml-lg-auto mb-4 ml-auto mr-auto mr-lg-0"
                >
                  <NavLink
                    to="/posting-gawean/tinjauan"
                    className="btn btn-selesai text-capitalize btn-block"
                  >
                    Posting Gawean
                  </NavLink>
                </Col>

                {/* Priority starts here */}
                <Row className="mb-2">
                  <Col xs={12} className="px-0 border__top_left">
                    <h5>Orderan Prioritas</h5>
                  </Col>
                  <Col xs={12} className="px-0 border__top_right">
                    <hr style={{ marginTop: '10px' }} />
                  </Col>
                </Row>
                <Card className="card__custom_order mt-4">
                  <Card.Body>
                    <div
                      className="card__custom_order_global py-0 px-lg-3 px-0 seller-pesanan-list"
                      style={{ minHeight: 'unset' }}
                    >
                      <Row>
                        <Col className="py-4 px-lg-0 px-sm-2" lg={4}>
                          <div className="d-flex align-items-center">
                            <img
                              src={imagePath('img-showcase.png')}
                              alt=""
                              className="img-fluid"
                              style={{ maxHeight: '100px' }}
                            />
                            <div className="pl-3">
                              <span className="text-capitalize fs-15 font-weight-bolder">
                                saya bisa desain produk...
                              </span>
                            </div>
                          </div>
                        </Col>
                        <Col className="pb-4 pt-lg-0 px-0" lg={8}>
                          <Row className="text-capitalize d-flex align-items-center h-100">
                            <Col className="pl-2 pr-0" lg={3}>
                              <Row>
                                <Col xs={6} lg={12}>
                                  <p className="mb-2 ml-0">Client</p>
                                </Col>
                                <Col xs={6} lg={12}>
                                  <h5 className="font-weight-bolder fs-15">
                                    Manunggal
                                  </h5>
                                </Col>
                              </Row>
                            </Col>
                            <Col className="pl-2 pr-0" lg={4}>
                              <Row>
                                <Col xs={6} lg={12}>
                                  <p className="mb-2 ml-0">Harga</p>
                                </Col>
                                <Col xs={6} lg={12}>
                                  <h5 className="font-weight-bolder fs-15">
                                    Rp 1.000.000.000
                                  </h5>
                                </Col>
                              </Row>
                            </Col>
                            <Col className="pl-2 pr-0" lg={3}>
                              <Row>
                                <Col xs={6} lg={12}>
                                  <p className="mb-2 ml-0">Berakhir Dalam</p>
                                </Col>
                                <Col xs={6} lg={12}>
                                  <h5 className="font-weight-bolder">
                                    <Countdown second={23000} />
                                  </h5>
                                </Col>
                              </Row>
                            </Col>
                            <Col className="pl-2 pr-0" lg={2}>
                              <Row>
                                <Col xs={6} lg={12} className="px-lg-0">
                                  <p className="mb-2 ml-0">Status</p>
                                </Col>
                                <Col xs={6} lg={12} className="px-lg-0">
                                  <Badge
                                    variant="warning"
                                    className="text-white px-3 py-2"
                                    style={{
                                      fontSize: '15px',
                                      backgroundColor: '#ff8a5c'
                                    }}
                                  >
                                    Prioritas
                                  </Badge>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </Card.Body>
                </Card>

                {/* Pending order starts here */}

                <Row className="mb-2">
                  <Col xs={12} className="px-0 border__top_left">
                    <h5>Orderan Masuk</h5>
                  </Col>
                  <Col xs={12} className="px-0 border__top_right">
                    <hr style={{ marginTop: '10px' }} />
                  </Col>
                </Row>
                <Card className="card__custom_order mt-4">
                  <Card.Body>
                    <div
                      className="card__custom_order_global py-0 px-lg-3 px-0 seller-pesanan-list"
                      style={{ minHeight: 'unset' }}
                    >
                      <Row>
                        <Col className="py-4 px-lg-0 px-sm-2" lg={4}>
                          <div className="d-flex align-items-center">
                            <img
                              src={imagePath('img-showcase.png')}
                              alt=""
                              className="img-fluid"
                              style={{ maxHeight: '100px' }}
                            />
                            <div className="pl-3">
                              <span className="text-capitalize fs-15 font-weight-bolder">
                                saya bisa desain produk...
                              </span>
                            </div>
                          </div>
                        </Col>
                        <Col className="pb-4 pt-lg-0 px-0" lg={8}>
                          <Row className="text-capitalize d-flex align-items-center h-100">
                            <Col className="pl-lg-2 pl-0 pr-0" lg={3}>
                              <Row>
                                <Col xs={6} lg={12}>
                                  <p className="mb-2 ml-0">Client</p>
                                </Col>
                                <Col xs={6} lg={12}>
                                  <h5 className="font-weight-bolder fs-15">
                                    Manunggal
                                  </h5>
                                </Col>
                              </Row>
                            </Col>
                            <Col className="pl-lg-2 pl-0 pr-0" lg={4}>
                              <Row>
                                <Col xs={6} lg={12}>
                                  <p className="mb-2 ml-0">Harga</p>
                                </Col>
                                <Col xs={6} lg={12}>
                                  <h5 className="font-weight-bolder fs-15">
                                    Rp 1.000.000.000
                                  </h5>
                                </Col>
                              </Row>
                            </Col>
                            <Col className="pl-lg-2 pl-0 pr-0" lg={3}>
                              <Row>
                                <Col xs={6} lg={12}>
                                  <p className="mb-2 ml-0">Sisa Waktu</p>
                                </Col>
                                <Col xs={6} lg={12}>
                                  <h5 className="font-weight-bolder">
                                    <Countdown second={3000} />
                                  </h5>
                                </Col>
                              </Row>
                            </Col>
                            <Col className="pl-2 pr-0" lg={2}>
                              <Row>
                                <Col
                                  xs={6}
                                  lg={12}
                                  className="px-lg-0 mx-auto d-flex justify-content-center mt-2 mt-lg-0"
                                >
                                  <NavLink
                                    to="/partner/orderan-detail/index"
                                    className="start__button"
                                  >
                                    Mulai
                                  </NavLink>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
