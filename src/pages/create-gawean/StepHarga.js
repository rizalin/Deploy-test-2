import React, { Component } from 'react';
import Head from '../../components/Head';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Select from 'react-select';
import { NavLink } from 'react-router-dom';

import HeaderCreateGawean from '../../components/header/HeaderCreateGawean';
import HeaderGawean from '../../components/header/HeaderPartner-3';
import { deliveryTime, revisions } from '../../components/dummy-data/nav';
import Footer from '../../components/header/Footer';

export default class StepHarga extends Component {
  constructor(props) {
    super(props);

    this.state = {
      package: true
    };
  }

  packageHandler = () => {
    this.setState(prevState => ({
      package: !prevState.package
    }));
  };

  render() {
    console.log(this.state.package);
    return (
      <div>
        <Head title="Harga - Posting Gawean" ddescription="Detail order" />
        <HeaderGawean />
        <HeaderCreateGawean step={2} />
        <Container>
          <Row className="price-step">
            <Col lg={8} className="mt-2">
              <Form>
                <Row className="mb-4 mb-sm-5">
                  <Col className="mt-3 pr-4 pl-0" sm={6}>
                    <h3 className="mb-0 pl-md-3 pl-lg-0">Lingkup & Harga</h3>
                  </Col>
                  <Col
                    sm={6}
                    className="d-flex justify-content-start justify-content-lg-end px-0 px-lg-3 mt-3"
                  >
                    <div className="custom-control custom-switch d-flex pl-0">
                      <p className="pr-3 mt-1 mb-0 fs-16 font-weight-bold">
                        {this.state.package ? 3 : 1} Paket
                      </p>
                      <label class="switch-custom">
                        <input type="checkbox" onClick={this.packageHandler} />
                        <span class="slider-round"></span>
                      </label>
                    </div>
                  </Col>
                </Row>
                <div>
                  <div
                    className="overlay-package"
                    style={{ display: this.state.package ? 'none' : 'flex' }}
                  >
                    <p>Buat paket untuk gaweanmu sekarang</p>
                  </div>
                  <Form.Group className="row mb-2 p-3 p-lg-0">
                    <p className="col-md-3 d-none d-md-block px-4">Paket</p>

                    {/* Standard */}
                    <Col sm={4} md={3} className="px-sm-1 px-2">
                      <p className="fs-16 font-weight-bold text-center">
                        STANDARD
                      </p>
                      <textarea
                        name=""
                        id=""
                        rows="2"
                        className="ta-border mb-2"
                        placeholder="Isi nama paket"
                      />
                      <textarea
                        name=""
                        id=""
                        rows="5"
                        className="ta-border mb-2"
                        placeholder="Jelaskan detail penawaran anda"
                      />
                      <Select
                        placeholder="Waktu pengiriman"
                        options={deliveryTime}
                        className="mb-2"
                      />
                      <Select
                        placeholder="Revisi"
                        options={revisions}
                        className={'none'}
                      />
                      <Form.Control
                        type="number"
                        placeholder="Harga"
                        className="none"
                      />
                    </Col>

                    {/* Medium */}
                    <Col sm={8} md={6} className="px-0">
                      <Row>
                        <Col
                          sm={6}
                          md={6}
                          className={
                            this.state.package
                              ? 'pt-4 pt-sm-0 px-sm-1 px-2'
                              : 'pt-4 pt-sm-0 px-sm-1 px-2 package-none'
                          }
                        >
                          <p className="fs-16 font-weight-bold text-center">
                            MEDIUM
                          </p>
                          <textarea
                            name=""
                            id=""
                            rows="2"
                            className="ta-border mb-2"
                            placeholder="Isi nama paket"
                          />
                          <textarea
                            name=""
                            id=""
                            rows="5"
                            className="ta-border mb-2"
                            placeholder="Jelaskan detail penawaran anda"
                          />
                          <Select
                            placeholder="Waktu pengiriman"
                            options={deliveryTime}
                            className="mb-2"
                          />
                          <Select
                            placeholder="Revisi"
                            options={revisions}
                            className={'none'}
                          />
                          <Form.Control
                            type="number"
                            placeholder="Harga"
                            className="none"
                          />
                        </Col>

                        {/* Top */}
                        <Col
                          sm={6}
                          md={6}
                          className={
                            this.state.package
                              ? 'pt-4 pt-sm-0 px-sm-1 px-2'
                              : 'pt-4 pt-sm-0 px-sm-1 px-2 package-none'
                          }
                        >
                          <p className="fs-16 font-weight-bold text-center">
                            TOP
                          </p>
                          <textarea
                            name=""
                            id=""
                            rows="2"
                            className="ta-border mb-2"
                            placeholder="Isi nama paket"
                          />
                          <textarea
                            name=""
                            id=""
                            rows="5"
                            className="ta-border mb-2"
                            placeholder="Jelaskan detail penawaran anda"
                          />
                          <Select
                            placeholder="Waktu pengiriman"
                            options={deliveryTime}
                            className="mb-2"
                          />
                          <Select
                            placeholder="Revisi"
                            options={revisions}
                            className={'none'}
                          />
                          <Form.Control
                            type="number"
                            placeholder="Harga"
                            className="none"
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Form.Group>

                  {/* Revisions */}
                  <Form.Group className="row px-4 px-lg-0 c-pricing-revisi">
                    <Row className="my-lg-4 px-3 px-lg-0 w-100">
                      <p className="col-sm-3 px-4">Revisi</p>
                      <Col className="px-1" sm={3}>
                        <Select placeholder="Pilih" options={revisions} />
                      </Col>
                      <Col className="px-1" sm={3}>
                        <Select placeholder="Pilih" options={revisions} />
                      </Col>
                      <Col className="px-1" sm={3}>
                        <Select placeholder="Pilih" options={revisions} />
                      </Col>
                    </Row>
                  </Form.Group>

                  {/* Price */}
                  <Form.Group className="row px-4 px-lg-0 c-pricing-revisi">
                    <Row className="my-lg-4 px-3 px-lg-0 w-100">
                      <p className="col-sm-3 px-4">Harga</p>
                      <Col className="px-1" sm={3}>
                        <Form.Control type="number" placeholder="Harga" />
                      </Col>
                      <Col className="px-1" sm={3}>
                        <Form.Control type="number" placeholder="Harga" />
                      </Col>
                      <Col className="px-1" sm={3}>
                        <Form.Control type="number" placeholder="Harga" />
                      </Col>
                    </Row>
                  </Form.Group>
                </div>

                {/* Bottom button */}
                <Col sm={12}>
                  <div className="btn-overview btn-pricing mt-4">
                    <div className="spacer"></div>
                    <div className="btn-group">
                      <NavLink
                        to="/posting-gawean/tinjauan"
                        className="btn btn-batalkan left"
                      >
                        Kembali
                      </NavLink>
                      <NavLink
                        to="/posting-gawean/deskripsi-FAQ"
                        className="btn btn-selesai right"
                      >
                        Lanjutkan
                      </NavLink>
                    </div>
                  </div>
                </Col>
              </Form>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
