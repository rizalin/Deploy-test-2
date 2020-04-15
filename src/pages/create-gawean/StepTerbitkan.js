import React, { Component } from 'react';
import { Container, Row, Col, Media } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import Head from '../../components/Head';
import HeaderCreateGawean from '../../components/header/HeaderCreateGawean';
import HeaderGawean from '../../components/header/HeaderPartner-3';
import Footer from '../../components/header/Footer';
import { imagePath } from '../../utils/assetUtils';

export default class StepTerbitkan extends Component {
  render() {
    return (
      <div>
        <Head title="Terbitkan - Posting Gawean" ddescription="Detail order" />
        <HeaderGawean />
        <HeaderCreateGawean step={6} />
        <Container>
          <Row>
            <Col md={12}>
              <div className="content-body border-bottom-0 mt-5 pt-5">
                <Row className="justify-content-center mt-5">
                  <Col lg={7} md={8} sm={9}>
                    <Media className="justify-content-center">
                      <img
                        src={imagePath('party-popper.png')}
                        alt="party popper"
                        className="img-fluid mr-3"
                      />
                      <div>
                        <h3 className="mb-1">Selamat !</h3>
                        <br />
                        <p className="fs-16">
                          Anda hampir selesai membuat gawean anda
                        </p>
                      </div>
                    </Media>
                    <Media className="text-center mb-5 pb-5 justify-content-center mt-5">
                      <NavLink
                        className="btn btn-lg btn-selesai text-light"
                        to="/partner/dashboard"
                      >
                        Publikasikan Sekarang
                      </NavLink>
                    </Media>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
