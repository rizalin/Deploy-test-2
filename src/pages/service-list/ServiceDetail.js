import React, { Component } from 'react';
import { Card, Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Collapse, { Panel } from 'rc-collapse';
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';

import { imagePath } from '../../utils/assetUtils';
import {
  carouselHeader,
  gaweanPackage,
  FAQs,
  recomendation
} from '../../components/dummy-data/nav';
import Head from '../../components/Head';
import HeaderNav from '../../components/header/HeaderNav';
import Footer from '../../components/header/Footer';

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button className="slick-nex btn" onClick={onClick}>
      <FontAwesomeIcon icon="chevron-right" />{' '}
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="prev-arrow btn" onClick={onClick}>
      <FontAwesomeIcon icon="chevron-left" />{' '}
    </button>
  );
}

class ServiceDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      package: 3
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    // Big carousel setting
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      arrows: true
    };

    // Small carousel setting
    const settings2 = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      speed: 1000,
      arrows: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      focusOnSelect: true
    };

    const settings3 = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      speed: 1000,
      arrows: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      focusOnSelect: true
    };

    return (
      <div>
        <Head title="Detail Service" description="list of service" />
        <HeaderNav />
        <Container fluid className="nav__menu-detail-service d-lg-block">
          {/* Sticky nav header */}
          <nav className="navbar justify-content-between">
            <div className="navbar-nav head-nav">
              <div className="nav-item">
                <a
                  href="#gambaran"
                  className="nav-link"
                  // onClick={this.setState({ currentId: 1 })}
                >
                  Gambaran
                </a>
              </div>
              <div className="nav-item">
                <a href="#deskripsi" className="nav-link">
                  Deskripsi
                </a>
              </div>
              <div className="nav-item">
                <a href="#partner" className="nav-link">
                  Tentang Partner
                </a>
              </div>
              <div className="nav-item">
                <a href="#rekomendasi" className="nav-link">
                  Rekomendasi
                </a>
              </div>
              <div className="nav-item">
                <a href="#ulasan" className="nav-link">
                  Ulasan
                </a>
              </div>
            </div>
            <div className="d-flex align-items-center _right-btn">
              <a href="#deskripsi" className="btn btn-selesai mr-3">
                <FontAwesomeIcon icon="heart" className="fs-18 mr-2" />
                Wishlist
              </a>
              <a className="btn btn-primary" href="#deskripsi">
                <FontAwesomeIcon icon="share-alt" className="fs-18 mr-2" />
                Share
              </a>
            </div>
          </nav>
        </Container>
        <Container className="detail-service-container mt-4 mt-lg-0">
          {/* Content starts here */}

          {/* Header content */}
          <Row className="position-relative d-flex">
            <Col className="px-4 px-lg-0" lg={7}>
              <div className="breadcrumb-link">
                <NavLink to="/service-list" className="mr-3">
                  Design
                </NavLink>
                <FontAwesomeIcon icon="chevron-right" />
                <NavLink to="/service-list" className="ml-3">
                  Logo Design
                </NavLink>
              </div>
              <h2 className="font-weight-bold mb-4">
                Saya bisa mendesign logo terbaik untuk anda
              </h2>
              <Row className="worker-profile">
                <div style={{ display: 'contents' }}>
                  <img
                    src={imagePath(`girl.jpg`)}
                    alt=""
                    className="img-fluid rounded-circle mr-2"
                  />
                  <NavLink
                    to="/user/partner/profile"
                    className="fs-18 font-weight-bold"
                  >
                    Albert Einstein
                  </NavLink>
                </div>
                <div>
                  <span className="spacer">|</span>Junior Partner
                  <span className="spacer">|</span>
                </div>
                <div>
                  {' '}
                  <FontAwesomeIcon
                    icon="star"
                    className="text-warning fs-18 mr-1 ml-2"
                  />
                  <span>4.75(120 Reviews)</span>
                </div>
              </Row>

              {/* Gallery slider */}

              <div className="big-slider mb-4 pb-2" id="gambaran">
                <Slider
                  {...settings}
                  asNavFor={this.state.nav2}
                  ref={slider => (this.slider1 = slider)}
                >
                  {carouselHeader.map(item => (
                    <div id={item.id}>
                      <img
                        src={imagePath(`${item.image}`)}
                        alt="carousel"
                        style={{ borderRadius: '15px', width: 'inherit' }}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="mh-100 mw-100">
                <Slider
                  {...settings2}
                  asNavFor={this.state.nav1}
                  ref={slider => (this.slider2 = slider)}
                >
                  {carouselHeader.map(item => (
                    <div id={item.id}>
                      <img
                        src={imagePath(`${item.image}`)}
                        alt="carousel"
                        style={{ borderRadius: '15px', width: 'inherit' }}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </Col>

            {/* Package starts here */}

            <Col
              className="px-0 mb-2 service-package-content h-100 mt-3 mt-lg-0"
              lg={4}
            >
              {this.state.package === 3 ? threePackage : onePackage}
            </Col>

            {/* Description starts here */}
            <Col className="px-4 px-lg-0" lg={7}>
              <div className="ref-point" id="deskripsi"></div>
              <h5
                className="font-weight-bold gawean-desc-title mb-3"
                style={{ color: '#393c43' }}
              >
                Deskripsi Gawean
              </h5>
              <p className="gawean desc-content fs-16 mb-5">
                Halo, Aku adalah anak gembala selalu riang serta gembira. Lebih
                lanjut aku akan membuat sebuah logo untuk mu. <br></br>
                <br></br> I will embed your YTB video into hundreds web 2.0
                private properties so you can be sure! <br></br>
                <br></br> The number and quality of embeds is the most important
                YTB ranking factor. What are you gonna receive? <br></br> ✔
                High-quality YTB Embeds <br></br> ✔ Backlinks to Your Video With
                Median DA of 40+ <br></br> ✔ Unlimited Number of Keywords{' '}
                <br></br> ✔ Drip-feeding <br></br> ✔ Detailed Report
              </p>

              {/* FAQ start here */}

              <h5
                className="font-weight-bold gawean-desc-title mb-3"
                style={{ color: '#393c43' }}
              >
                FAQ
              </h5>
              <Collapse accordion={true}>
                {FAQs.map(item => (
                  <Panel
                    header={
                      <div className="FAQ-link">
                        <p>{item.question}</p>
                        <FontAwesomeIcon icon="chevron-right" />
                      </div>
                    }
                    showArrow={false}
                    headerClass="FAQ__button"
                    style={{ borderBottom: 'solid 0.25px #979797' }}
                  >
                    <p>{item.answer}</p>
                  </Panel>
                ))}
              </Collapse>

              {/* About starts here */}
              <div className="ref-point" id="partner"></div>
              <h5 className="font-weight-bold gawean-desc-media mb-4">
                Tentang Partner
              </h5>
              <div className="media d-flex align-items-center gawean-desc-media mb-4">
                <img
                  src={imagePath(`speaker.jpg`)}
                  alt=""
                  className="img-fluid rounded-circle"
                />
                <div className="media-body">
                  <p className="fs-18 font-weight-bold gawean-desc-title mb-1">
                    <NavLink to="/user/partner/profile">
                      Albert Einstein
                    </NavLink>
                  </p>
                  <p>Jagonya buat logo</p>
                  <div className="mb-2">
                    <FontAwesomeIcon
                      icon="star"
                      className="text-warning fs-18 mr-1"
                    />
                    <span>4.75 (120 Reviews)</span>
                  </div>
                </div>
              </div>
              <Card className="card__gawean-desc">
                <Card.Body className="p-4">
                  <div className="list-seller-pendapatan">
                    <ul className="header">
                      <li className="list-label pb-1 text-left">Asal</li>
                      <li className="list-label pb-1 text-left">
                        Anggota Sejak
                      </li>
                      <li className="list-label pb-1 text-left">
                        Avg.Waktu Respon
                      </li>
                      <li className="list-label pb-1 text-left">
                        Gawean Sukses
                      </li>
                    </ul>
                    <ul className="mb-0">
                      <li className="pb-1 text-left" data-label="Asal">
                        Indonesia
                      </li>
                      <li className="pb-1 text-left" data-label="Anggota Sejak">
                        Agt 2019
                      </li>
                      <li
                        className="pb-1 text-left"
                        data-label="Avg.Waktu Respon"
                      >
                        2 Jam
                      </li>
                      <li className="pb-1 text-left" data-label="Gawean Sukses">
                        100
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <p className="fs-16 mb-0">
                    Aku adalah anak gembala selalu riang serta gembira, karena
                    aku senang bekerja tak pernah malas ataupun Lelah. la la la
                    la la la
                  </p>
                </Card.Body>
              </Card>

              {/* Recommendation starts here */}
              <div className="d-block pt-5 mt-2 pb-4 pb-lg-5 mb-2">
                <div className="ref-point" id="rekomendasi"></div>
                <h5 className="text-capitalize font-weight-bold gawean-desc-title pb-4 mb-1">
                  Rekomendasi jasa serupa
                </h5>
                <Slider {...settings3}>
                  {recomendation.map(item => (
                    <Row className="recommendation-slide">
                      <Row className="media detail-service-media-slide konten-post mb-0">
                        <Col xs={12} md={6} lg={5} className="card-img px-0">
                          {' '}
                          <img
                            src={item.img}
                            alt=""
                            className="img-fluid h-1 "
                          />
                        </Col>
                        <Col
                          xs={12}
                          md={6}
                          lg={7}
                          className="px-xs-0 px-lg-2 right-col"
                        >
                          <div className="media-card">
                            <div className="media media-profile mb-3 d-flex align-items-center">
                              <img
                                src={imagePath(`${item.avatar}`)}
                                alt=""
                                className="img-fluid rounded-circle"
                              />
                              <div className="media-body">
                                <div className="clearfix">
                                  <span className="worker-name float-left">
                                    {item.name}
                                  </span>
                                  <div className="float-right">
                                    <FontAwesomeIcon
                                      icon="star"
                                      className="text-warning fs-18 mr-1"
                                    />
                                    <span>
                                      {item.reviewAvg} ({item.reviewFrom}{' '}
                                      Reviews)
                                    </span>
                                  </div>
                                </div>
                                <p className="worker-desc mb-0">{item.level}</p>
                              </div>
                            </div>
                            <p>Saya bisa {item.briefDesc.substr(0, 100)}</p>
                            <div className="d-flex align-items-center price-range">
                              <p className="price-range">
                                Dari Rp.<br></br>
                                <span style={{ fontWeight: '700' }}>
                                  {item.priceRange}
                                </span>
                              </p>
                              <NavLink to="/" className="btn btn-aktif px-5">
                                Rekrut
                              </NavLink>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Row>
                  ))}
                </Slider>
              </div>

              {/* Review starts here */}
              <div className="ref-point" id="ulasan"></div>
              <h5 className="font-weight-bold d-inline-block mr-3 gawean-desc-title">
                Ulasan
              </h5>
              <hr />
              <div className="media detail-service-review-media mb-4">
                <img
                  src={imagePath(`speaker.jpg`)}
                  alt=""
                  className="img-fluid rounded-circle"
                />
                <div className="media-body">
                  <div className="clearfix mt-2 pt-1 mb-2 pb-1">
                    <span className="fs-16 mr-2 font-weight-bold">Aminah</span>
                    <FontAwesomeIcon
                      icon="star"
                      className="text-warning fs-18 mr-1"
                    />
                    <FontAwesomeIcon
                      icon="star"
                      className="text-warning fs-18 mr-1"
                    />
                    <FontAwesomeIcon
                      icon="star"
                      className="text-warning fs-18 mr-1"
                    />
                    <FontAwesomeIcon
                      icon="star"
                      className="text-warning fs-18 mr-1"
                    />
                    <FontAwesomeIcon
                      icon="star"
                      className="text-warning fs-18 mr-1"
                    />
                  </div>
                  <p className="fs-16">
                    Aku adalah anak gembala selalu riang serta gembira, karena
                    aku senang bekerja tak pernah malas ataupun Lelah. la la la
                    la la la
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default ServiceDetail;

const threePackage = (
  <Tab.Container defaultActiveKey="1">
    <Nav className="nav-right-detail-service nav-fill">
      {gaweanPackage.map(item => (
        <Nav.Item>
          <Nav.Link eventKey={item.id}>{item.type}</Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
    <Col className="detail-service-tab-content">
      <Tab.Content>
        {gaweanPackage.map(item => (
          <Tab.Pane eventKey={item.id}>
            <div className="px-2 px-sm-3 py-4">
              <div className="clearfix mb-1">
                <h5 className="float-left font-weight-bold text-uppercase">
                  {item.name}
                </h5>
                <h5 className="float-right font-weight-bold text-uppercase">
                  rp {item.price}
                </h5>
              </div>
              <p className="fs-18">{item.desc}</p>
              <div>
                <div className="package-detail">
                  <div>
                    <FontAwesomeIcon icon={['far', 'clock']} className="mr-2" />
                    Waktu Pengerjaan
                  </div>
                  <div>{item.time} hari </div>
                </div>
                <div className="package-detail">
                  <div>
                    <FontAwesomeIcon icon="sync-alt" className="mr-2" />
                    Revisi
                  </div>
                  <div>{item.revision} kali</div>
                </div>
                <div className="package-detail">
                  <div>
                    <FontAwesomeIcon icon={['far', 'file']} className="mr-2" />
                    Source File
                  </div>
                  <div>{item.sourceFile ? 'Termasuk' : 'Tidak Termasuk'}</div>
                </div>
              </div>
            </div>
            <div className="btn-footer px-4 px-sm-0">
              <NavLink
                className="btn btn-aktif"
                to="/order/order-id/detail"
                style={{ color: '#fff', cursor: 'pointer' }}
              >
                Lanjutkan
              </NavLink>
              <button className="btn btn-white">Hubungi Partner</button>
            </div>
          </Tab.Pane>
        ))}
      </Tab.Content>
    </Col>
  </Tab.Container>
);

const onePackage = (
  <Tab.Container id="left-tabs-example" defaultActiveKey="1">
    <Nav className="nav-right-detail-service nav-fill">
      <Nav.Item>
        <Nav.Link style={{ backgroundColor: '#0dad8e', color: 'white' }}>
          Standard
        </Nav.Link>
      </Nav.Item>
    </Nav>
    <Col className="detail-service-tab-content">
      <div>
        <div className="py-4">
          <div className="clearfix mb-1">
            <h5 className="float-left font-weight-bold text-uppercase">
              Paket All in one
            </h5>
            <h5 className="float-right font-weight-bold text-uppercase">
              Rp 250.000
            </h5>
          </div>
          <p className="fs-18">
            Logo premium terbaik untuk Anda. Format yang diberikan adalah
            PNG+PSD. Anda mendapatkan 3 referensi logo.
          </p>
          <div>
            <div className="package-detail">
              <div>
                <FontAwesomeIcon icon={['far', 'clock']} className="mr-2" />
                Waktu Pengerjaan
              </div>
              <div>1 hari </div>
            </div>
            <div className="package-detail">
              <div>
                <FontAwesomeIcon icon="sync-alt" className="mr-2" />
                Revisi
              </div>
              <div>3 kali</div>
            </div>
            <div className="package-detail">
              <div>
                <FontAwesomeIcon icon={['far', 'file']} className="mr-2" />
                Source File
              </div>
              <div>Tidak Termasuk</div>
            </div>
          </div>
        </div>
        <div className="btn-footer px-4 px-sm-0">
          <NavLink
            className="btn btn-aktif"
            to="/detail-order"
            style={{ color: '#fff', cursor: 'pointer' }}
          >
            Lanjutkan
          </NavLink>
          <button className="btn btn-white">Hubungi Partner</button>
        </div>
      </div>
    </Col>
  </Tab.Container>
);
