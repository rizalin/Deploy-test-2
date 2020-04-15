import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import HeaderNav from '../../components/header/HeaderNav';
import HeaderLogin from '../../components/header/HeaderLogin';
import Footer from '../../components/header/Footer';
import Head from '../../components/Head';
import Faq from '../../components/be-partner/Faq';
import Testimoni from '../../components/be-partner/Testimoni';

import {
  dataCommunitas,
  dataList
} from '../../components/dummy-data/SellerHomePageData';

import { imagePath } from '../../utils/assetUtils';

class BePartner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusLogin: true
    };
  }
  render() {
    // const { index, name, testimoni, profession, img, ...props } = this.props;
    return (
      <div>
        <Head title="Seller Homepage" description="Description" />
        {this.state.statusLogin ? <HeaderLogin /> : <HeaderNav />}

        {/* HEADER START HERE */}
        <div className="c-header-seller-home d-flex justify-content-end">
          <Container className="px-4 home__background-image">
            <Row className="py-xl-5">
              <Col md={7} className="py-3 py-md-5 mb-md-5 py-lg-5 my-lg-5">
                <h1 className="display-5">Kerja Dengan Caramu Sendiri</h1>
                <p className="lead">
                  Tentukan waktu kerjamu sendiri dan dapatkan penghasilan dengan
                  mudah dan menyenangkan
                </p>
                <NavLink
                  to="/daftar-partner"
                  class="btn btn-selesai text-capitalize mt-2 btn-block col-md-6 col-lg-4"
                >
                  daftar
                </NavLink>
              </Col>
            </Row>
          </Container>
        </div>
        {/* HEADER END HERE */}

        {/* BERGABUNG START HERE */}
        <Container className="c-bergabung-seller-home mt-5 pt-lg-4 mb-3 px-4">
          <Col xs={12}>
            <h1>Bergabunglah dengan Komunitas Kami</h1>
          </Col>

          <Row className="mt-5 px-2">
            {dataCommunitas.slice(0, 3).map((item, i) => (
              <Col lg={3} key={i} className="d-none d-lg-block py-3 px-2">
                <div className="card text-white h-100">
                  <img
                    src={imagePath(`${item.imgages}`)}
                    className="card-img img-fluid"
                    alt=""
                  />
                  <div className="card-img-overlay">
                    <h5 className="card-title">{item.jobs}</h5>
                  </div>
                </div>
              </Col>
            ))}
            {dataCommunitas.slice(3, 7).map((item, i) => (
              <Col xs={6} md={4} lg={3} key={i} className="py-3 px-2">
                <div className="card text-white h-100">
                  <img
                    src={imagePath(`${item.imgages}`)}
                    className="card-img img-fluid"
                    alt=""
                  />
                  <div className="card-img-overlay">
                    <h5 className="card-title">{item.jobs}</h5>
                  </div>
                </div>
              </Col>
            ))}
            <Col md={4} lg={3} className="py-3 px-2">
              <div className="card h-100 mw-100">
                <div className="card-body-cta text-center my-auto h-100 d-flex">
                  <Row className="align-items-center py-3">
                    <Col xs={12}>
                      <h3 className="card-title mt-2">Apa Skill Anda?</h3>
                    </Col>
                    <Col xs={12}>
                      <NavLink
                        to="/daftar-partner"
                        className="btn btn-white text-capitalize"
                      >
                        gabung sekarang
                      </NavLink>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        {/* BERGABUNG END HERE */}

        {/* BAGAIMANA HARISENIN.COM MEMBANTUMU START HERE */}

        <Container>
          <div className="c-how-seller-home mt-5 px-4">
            <Row className="text-center">
              <Col lg={12}>
                <h1>Bagaimana harisenin.com akan membantumu</h1>
              </Col>
              {dataList.map((item, i) => (
                <Col md={4} className="mt-4 mt-md-5 px-4" key={i}>
                  <img
                    src={imagePath(`${item.images}`)}
                    alt="profile"
                    className="img-fluid d-block mx-auto"
                  />
                  <h5 className="pt-3">{item.title}</h5>
                  <p className="pt-2">{item.subTitle}</p>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
        {/* BAGAIMANA HARISENIN.COM MEMBANTUMU END HERE */}

        {/* TESTIMONI START HERE */}

        <Testimoni />

        {/* TESTIMONI END HERE */}

        {/* FAQ START HERE */}
        <Faq />
        {/* FAQ END HERE */}

        <Container className="c-cta-seller-home mt-5 pt-3 mb-5 pb-5">
          <Col className="mx-auto text-center">
            <h2>Dapatkan Pekerjaan Darimana Saja &amp; Kapan Saja</h2>

            <NavLink to="/daftar-partner" className="btn btn-selesai mt-3">
              Gabung Menjadi Partner Sekarang
            </NavLink>
          </Col>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default BePartner;
