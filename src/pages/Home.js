import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Card, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withCookies } from 'react-cookie';
// import { connect } from 'react-redux';
// import axios from 'axios';

import { imagePath } from '../utils/assetUtils';
// import { getUsers } from '../redux/actions/users';
import { blogPost, work, category } from '../components/dummy-data/nav';
import Head from '../components/Head';
import HeaderNav from '../components/header/HeaderNav';
import HeaderLogin from '../components/header/HeaderLogin';
import HeaderPartner from '../components/header/HeaderPartner';
import Footer from '../components/header/Footer';
import {
  TopCarousel,
  CategoryCarousel,
  TestimonialCarousel
} from '../components/carousel-parts/HomeCarousel';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      sideDrawerOpen: false,
      loginSession: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    // axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
    //   this.props.dispatch(getUsers(res.data)); //Fire ACT FULLFILED
    // });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const { cookies } = this.props;
    let loginStatus = cookies.get('isLogin');
    console.log(loginStatus);

    return (
      <div>
        <Head title="Homepage" description="Description" />
        {/* {this.state.loginSession === 0 ? (
          <HeaderNav />
        ) : this.state.loginSession === 1 ? (
          <HeaderLogin />
        ) : (
          <HeaderPartner />
        )} */}
        {loginStatus ? <HeaderLogin /> : <HeaderNav />}
        <div className="content">
          {/* Top Content */}

          <div className="c-homepage-header container p-sm-3 mt-sm-4 mt-md-5">
            <Row>
              <Col lg={7} className="mb-4 mb-md-5 slider-header">
                <TopCarousel />
              </Col>
              <Col lg={5} className="c-homepage-header-kanan">
                <div className="text-capitalize text-center font-weight-bolder">
                  <h4 className="border-bottom pb-3 mb-0">
                    <FontAwesomeIcon icon="rocket" /> tips sukses
                  </h4>
                </div>

                {/* BlogList */}

                <div className="content">
                  {blogPost.map(item => (
                    <div
                      className="card mt-4 row no-gutters mb-sm-3"
                      key={item.id}
                    >
                      <Col lg={5} md={4} className="pr-0 pl-0 left-card-blog">
                        <img src={imagePath(`${item.img}`)} alt="" />
                      </Col>
                      <Col lg={7} md={8} className="right-card-blog">
                        <p className="card-title text-capitalize category mb-1 ">
                          {item.category} - {item.subCategory}
                        </p>
                        <h5 className="card-text ct">
                          {item.title.substring(0, 50)}...
                        </h5>
                        <p className="card-title text-capitalize author">
                          {item.author}
                        </p>
                      </Col>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </div>

          {/* Populer start here */}

          <div className="c-homepage-bisnis container p-sm-3">
            <Row>
              <Col className="text-capitalize text-dark" lg={12}>
                <h2>solusi bisnis terpopuler</h2>
              </Col>
              <Col className="mt-4" lg={12}>
                <CategoryCarousel />
              </Col>
            </Row>
          </div>

          {/* Benefit Start Here */}

          <Container className="c-homepage-benefit text-center text-dark mt-5 p-4 p-sm-3">
            <Row className="justify-content-center">
              <Col className="mb-5" lg={12}>
                <img
                  src={imagePath('logo@3x.png')}
                  alt="harisenin.com"
                  className="mb-3"
                  style={{ height: '1.875rem' }}
                />
                <h2 className="font-weight-bolder">
                  menghubungkan Anda dengan professional terbaik di Indonesia
                </h2>
              </Col>
              {work.map(item => (
                <Col sm={4} lg={3} id={item.id} key={item.id}>
                  <div className="mx-auto mb-3 d-flex justify-content-center align-items-center">
                    <img src={imagePath(`${item.img}`)} alt="" />
                  </div>
                  <h5 className="mb-3 font-weight-bolder">{item.title}</h5>
                  <p className="mx-auto">{item.sub}</p>
                </Col>
              ))}
            </Row>
          </Container>

          {/* All Category Start Here */}

          <div className="c-homepage-kategori container-fluid p-sm-3 mt-5 py-5 text-dark">
            <Container className="pb-5">
              <Row>
                <Col xs={12} className="mt-sm-4">
                  <h3>Eksplor Semua Kategori</h3>
                </Col>
                <Row>
                  {category.map(item => (
                    <Col
                      xs={6}
                      sm={4}
                      md={3}
                      lg={2}
                      className="mt-5"
                      key={item.id}
                    >
                      <NavLink exact to="/">
                        <Card>
                          <Card.Body id={item.id} className="responsive-card">
                            <img
                              src={imagePath(`${item.img}`)}
                              alt=""
                              className="d-block"
                              style={{ height: '50px' }}
                            />
                            <h5 className="pt-3">{item.title}</h5>
                          </Card.Body>
                        </Card>
                      </NavLink>
                    </Col>
                  ))}
                </Row>
              </Row>
            </Container>
          </div>

          {/* Why harisenin.com */}

          <Container className="c-homepage-why p-sm-3 mt-5 py-4 mb-5 text-dark">
            <Row>
              <Col className="my-auto" xs={12} lg={6}>
                <h5 className="bolder">
                  Profesional kami berpengalaman di berbagai start-up &
                  perusahaan top di Indonesia.
                </h5>
                <div className="pt-4">
                  <h5 className="mb-4">
                    <FontAwesomeIcon
                      icon="check"
                      className="mr-3 text-success"
                    />
                    Top 10 Talent & Profesional
                  </h5>
                  <h5 className="mb-4">
                    <FontAwesomeIcon
                      icon="check"
                      className="mr-3 text-success"
                    />
                    Full Background Check
                  </h5>
                  <h5 className="mb-4">
                    <FontAwesomeIcon
                      icon="check"
                      className="mr-3 text-success"
                    />
                    Berpengalaman Lebih Dari 5 Tahun
                  </h5>
                  <h5 className="mb-4">
                    <FontAwesomeIcon
                      icon="check"
                      className="mr-3 text-success"
                    />
                    Harga Transparan & Terjangkau
                  </h5>
                  <h5 className="mb-4">
                    <FontAwesomeIcon
                      icon="check"
                      className="mr-3 text-success"
                    />
                    Jaminan Hasil Terbaik & Memuaskan
                  </h5>
                </div>
              </Col>
              <Col className="d-none d-lg-block" xs={6}>
                <img
                  src={imagePath(`Group 619.png`)}
                  alt=""
                  className="img-fluid"
                />
              </Col>
            </Row>
          </Container>

          {/* How harisenin work */}

          <Container className="c-homepage-how text-center text-dark mt-5 p-sm-3">
            <Row className="justify-content-center">
              <Col className="mb-5" lg={12}>
                <h2 className="font-weight-bolder">
                  Bagaimana
                  <img
                    src={imagePath('logo@3x.png')}
                    alt=""
                    width="190px"
                    style={{ margin: '0rem 0.7rem 0.7rem' }}
                  />
                  bekerja{' '}
                </h2>
              </Col>
              <Row noGutters>
                <div className="how">
                  <div className="line"></div>
                  <div className="circle-number">1</div>
                  <div className="line"></div>
                  <div className="how-text">
                    <h3>Temukan Professional</h3>
                    <p>
                      Para ahli di bidangnya yang terkumpul dari pekerja paruh
                      waktu, agensi, dan konsultan
                    </p>
                  </div>
                </div>
                <div className="how">
                  <div className="circle-number">2</div>
                  <div className="line"></div>
                  <div className="how-text">
                    <h3>Bayar</h3>
                    <p>
                      Pembayaran anda akan kami hold sampai gawean selesai. 100%
                      uang kembali jika gawean tidak terdeliver kepada anda.
                    </p>
                  </div>
                </div>
                <div className="how">
                  <div className="circle-number">3</div>
                  <div className="line" style={{ opacity: '0.2' }}></div>
                  <div className="how-text">
                    <h3>Terima Hasil</h3>
                    <p>
                      Partner kami terdiri dari orang orang pilihan terbaik di
                      bidangnya. Hasil terbaik dan kepuasan menjadi jaminannya
                    </p>
                  </div>
                </div>
              </Row>
            </Row>
          </Container>

          {/* Testimonial start here */}

          <Container fluid="true" className="c-homepage-testimonial mt-5 py-5">
            <Row>
              <Container>
                <h2 className="text-capitalize text-left text-dark font-weight-bolder">
                  testimoni
                </h2>
                <TestimonialCarousel />
              </Container>
            </Row>
          </Container>
          <Container className="c-homepage-cta mt-5 text-dark text-center">
            <Row>
              <Col xs={12} sm={6} className="d-flex mb-5 flex-column">
                <div>
                  <FontAwesomeIcon
                    icon="search"
                    size="6x"
                    className="pb-4 text-success"
                  />
                </div>
                <h5 className="text-capitalize">temukan solusi bisnismu</h5>
                <p className="pt-2 pb-3">
                  Jangan tunda suksesmu. Segera temukan solusi yang paling tepat
                  untuk bisnismu
                </p>
                <NavLink
                  to="/"
                  className="btn btn-selesai px-3 px-md-5 align-self-center"
                >
                  Mulai Sekarang!
                </NavLink>
              </Col>
              <Col xs={12} sm={6} className="d-flex mb-5 flex-column">
                <div>
                  <FontAwesomeIcon
                    icon="handshake"
                    size="6x"
                    className="pb-4 text-blue"
                  />
                </div>
                <h5 className="text-capitalize">Menjadi Partner Kami</h5>
                <p className="pt-2 pb-3">
                  Bergabung dengan harisenin.com memberikan kamu kebebasan dalam
                  mengatur pekerjaanmu
                </p>
                <NavLink
                  className="btn btn-aktif px-3 px-md-5 align-self-center"
                  exact
                  to="/menjadi-partner"
                >
                  Menjadi Partner
                </NavLink>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withCookies(Home);

// const mapStateToProps = state => {
//   return {
//     users: state.users
//   };
// };

// export default connect(mapStateToProps)(Home);
