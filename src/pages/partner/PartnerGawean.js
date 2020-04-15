import React, { Component } from 'react';
import {
  Container,
  Navbar,
  Row,
  Col,
  Tab,
  Nav,
  Accordion,
  Media,
  Dropdown,
  DropdownButton,
  Form
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import Head from '../../components/Head';
import HeaderPartnerDashboard from '../../components/header/HeaderPartner-2';
import { imagePath } from '../../utils/assetUtils';
import Footer from '../../components/header/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CustomToggle } from '../../components/parts/Dropdown';
import { gaweanList } from '../../components/dummy-data/nav';

export default class PartnerGawean extends Component {
  render() {
    const nothingHere = (
      <div className="blank-status">
        <img src={imagePath('harisenin.png')} alt="hari-senin" />
        <div>Belum ada gawean</div>
      </div>
    );

    const activeStatusButton = (
      <div className="btn btn-selesai pt-0 pb-0 mt-2 button-aktif-gawean mx-auto">
        <span>Aktif</span>
      </div>
    );

    const notActiveStatusButton = (
      <div className="btn btn-selesai pt-0 pb-0 mt-2 button-aktif-gawean mx-auto">
        <span>Tidak Aktif</span>
      </div>
    );

    const dropdownGawean = (
      <DropdownButton alignRight variant="outline-secondary" title="">
        <Dropdown.Item>
          <NavLink to="/">Preview</NavLink>
        </Dropdown.Item>
        <Dropdown.Item>
          <NavLink to="/">Edit</NavLink>
        </Dropdown.Item>
        <Dropdown.Item>
          <NavLink to="/">Non-aktif</NavLink>
        </Dropdown.Item>
        <Dropdown.Item>
          <NavLink to="/">Hapus</NavLink>
        </Dropdown.Item>
      </DropdownButton>
    );

    const headerGawean = (
      <Row className="header">
        <Col lg={6}></Col>
        <Col lg={1}>
          <li className="list-label txt-center">impresi</li>
        </Col>
        <Col lg={1}>
          <li className="list-label txt-center">klik</li>
        </Col>
        <Col lg={1}>
          <li className="list-label txt-center">dilihat</li>
        </Col>
        <Col lg={1}>
          <li className="list-label txt-center">projek</li>
        </Col>
        <Col lg={1}>
          <li className="list-label txt-center">batal</li>
        </Col>
        <Col lg={1}>
          <li className="list-label"></li>
        </Col>
      </Row>
    );

    function gaweanMapping(arr, cond) {
      if (arr.some(item => item.status === cond)) {
        return (
          <div>
            {headerGawean}
            {arr
              .filter(item => item.status === cond)
              .map(item => (
                <div className="pb-4">
                  <Row className="body" key={item.id}>
                    <Col className="header-mobile">{dropdownGawean}</Col>
                    <Col lg={6} className="gawean">
                      <h5>Gawean</h5>
                      <Media className="align-items-center">
                        <img
                          src={imagePath(`${item.img}`)}
                          alt=""
                          className="align-self-center mr-3"
                          style={{ maxHeight: '75px' }}
                        />

                        <CustomToggle eventKey={`${item.id}`}>
                          {item.title}
                        </CustomToggle>
                      </Media>
                    </Col>
                    <Col lg={1}>
                      <Row className="pb-2 pb-lg-0 pt-4 pt-lg-0">
                        <Col md={3} xs={4} className="desc">
                          Impresi
                        </Col>
                        <Col md={9} xs={8} lg={12}>
                          {item.impression}
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={1}>
                      <Row className="py-2 py-lg-0">
                        <Col md={3} xs={4} className="desc">
                          Klik
                        </Col>
                        <Col md={9} xs={8} lg={12}>
                          {item.click}
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={1}>
                      <Row className="py-2 py-lg-0">
                        <Col md={3} xs={4} className="desc">
                          Dilihat
                        </Col>
                        <Col md={9} xs={8} lg={12}>
                          {item.seen}
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={1}>
                      <Row className="py-2 py-lg-0">
                        <Col md={3} xs={4} className="desc">
                          Projek
                        </Col>
                        <Col md={9} xs={8} lg={12}>
                          {item.project}
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={1}>
                      <Row className="py-2 py-lg-0">
                        <Col md={3} xs={4} className="desc">
                          Batal
                        </Col>
                        <Col md={9} xs={8} lg={12}>
                          {item.cancel}%
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={1} className="dropdown-web">
                      {dropdownGawean}
                    </Col>
                  </Row>
                  <Accordion.Collapse eventKey={`${item.id}`}>
                    <Row className="mx-0">
                      <Col lg={5}>
                        <Row className="border-bottom">
                          <Col
                            className="my-4 border-right text-capitalize text-center"
                            xs={4}
                          >
                            <h5>gawe status</h5>
                            {item.status === 1
                              ? activeStatusButton
                              : notActiveStatusButton}
                          </Col>
                          <Col xs={8} className="py-4">
                            <Row className="text-dark">
                              <Col xs={12}>
                                <h5>Info Gawe</h5>
                              </Col>
                              <Col xs={12}>
                                <Row className="mx-0 align-items-center">
                                  <Col className="px-0" sm={8}>
                                    Rata rata waktu pengiriman
                                  </Col>
                                  <Col
                                    className="font-weight-bold px-0 fs-18"
                                    sm={4}
                                  >
                                    {item.avgDelivery} Hari
                                  </Col>
                                </Row>
                              </Col>
                              <Col xs={12}>
                                <Row className="mx-0 align-items-center">
                                  <Col className="px-0" sm={8}>
                                    Pesanan tertunda
                                  </Col>
                                  <Col
                                    className="fs-18 px-0 font-weight-bold"
                                    sm={4}
                                  >
                                    {item.pendingOrder}
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="pb-3 px-3" xs={12}>
                            <div className="mx-1 mt-3">
                              <label className="switch-small">
                                <input type="checkbox" />
                                <span className="slider-small" />
                              </label>
                              <span className="ml-3">
                                Batasi pesanan dalam antrian
                              </span>
                            </div>
                            <Form inline>
                              <Form.Group className="px-1 d-flex flex-row align-items-center w-100 justify-content-start">
                                <Form.Label className="pl-0 justify-content-start">
                                  Maximum project untuk gawean ini
                                </Form.Label>
                                <Form.Control
                                  as="select"
                                  className="ml-2 d-inline"
                                >
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </Form.Control>
                              </Form.Group>
                            </Form>
                          </Col>
                        </Row>
                      </Col>
                      <Col className="px-2 mb-4 border-left mt-lg-4" lg={7}>
                        <Col xs={12}>
                          <h5>Ulasan</h5>
                          <FontAwesomeIcon icon={['far', 'star']} />
                          <FontAwesomeIcon icon={['far', 'star']} />
                          <FontAwesomeIcon icon={['far', 'star']} />
                          <FontAwesomeIcon icon={['far', 'star']} />
                          <FontAwesomeIcon icon={['far', 'star']} />
                          <span className="ml-2">
                            ({item.reviewAvg}/{item.reviewTotal})
                          </span>
                        </Col>
                      </Col>
                    </Row>
                  </Accordion.Collapse>
                </div>
              ))}
          </div>
        );
      } else {
        return nothingHere;
      }
    }

    return (
      <div>
        <Head title="Dashboard Partner" description="Description" />
        <HeaderPartnerDashboard />
        <div className="dashboard__partner">
          <Container fluid className="nav__menu d-none d-lg-block">
            <Navbar className="p-0 navbar-expand-md">
              <div className="navbar-nav mr-auto">
                <li className="navlink-seller">
                  <NavLink to="/partner/dashboard">Dashboard</NavLink>
                </li>
                <li className="navlink-seller">
                  <NavLink to="/partner/inbox">Inbox</NavLink>
                </li>
                <li className="navlink-seller">
                  <NavLink to="/partner/orderan">Orderan</NavLink>
                </li>
                <li className="navlink-seller aktif">
                  <span>Gawean</span>
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
          <Container fluid className="c-seller-gawean-header mt-4 mb-3">
            <Row className="align-items-center">
              <Col className="text-capitalize" xs={4}>
                <h2>Gawean</h2>
              </Col>
              <Col xs={8}>
                <Row>
                  <Col className="d-flex justify-content-end" xs={12}>
                    <div className="custom-control custom-switch d-flex">
                      <p className="pr-3 mt-1 mb-0 fs-16">Terima Order</p>
                      <label class="switch-custom">
                        <input type="checkbox" />
                        <span class="slider-round"></span>
                      </label>
                    </div>
                  </Col>
                  <Col className="d-flex justify-content-end mt-3" xs={12}>
                    <NavLink to="/" className="btn btn-selesai text-uppercase">
                      tambah gawean
                    </NavLink>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <Container fluid className="c-seller-gawean-content mt-4 mb-5 px-3">
            <Tab.Container defaultActiveKey="1">
              <Container fluid className=" d-block">
                <Nav className="navbar-expand-md pb-0 tab-orderan">
                  <Nav.Item>
                    <Nav.Link eventKey="1">aktif</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="2">non aktif</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Container>
              <Tab.Content
                className="container-fluid"
                style={{ minHeight: '100vh' }}
              >
                <Tab.Pane
                  className="px-2 px-lg-0 px-md-4 mt-4 mt-md-1 mb-5 pb-4 pt-0 pt-md-3"
                  eventKey="1"
                >
                  <Accordion>
                    <div className="list-daftar-gawean">
                      {gaweanMapping(gaweanList, 1)}
                    </div>
                  </Accordion>
                </Tab.Pane>
                <Tab.Pane
                  className="px-2 px-lg-0 px-md-4 mt-4 mt-md-1 mb-5 pb-4 pt-0 pt-md-3"
                  eventKey="2"
                >
                  <Accordion>
                    <div className="list-daftar-gawean">
                      {gaweanMapping(gaweanList, 2)}
                    </div>
                  </Accordion>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}
