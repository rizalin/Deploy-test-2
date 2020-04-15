import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import Head from '../../components/Head';
import Footer from '../../components/header/Footer';
import { imagePath } from '../../utils/assetUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderLogin from '../../components/header/HeaderLogin';
import { Link } from 'react-router-dom';

export default class ResolutionCenter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitOpen: false
    };
  }

  handleSubmit = () => {
    this.setState({ submitOpen: true });
  };

  render() {
    return (
      <div>
        <Head title="Ulasan" />
        <HeaderLogin />
        <Container className="mt-5 justify-content-between">
          <Row>
            {/* Form before submitting starts here */}
            <Col xs={12} lg={7} className="order-2 order-lg-1">
              <h2 className="font-weight-bold">Ulasan</h2>
              <p>Ulasan ini hanya akan terlihat oleh anda dan partner</p>
              <hr />
              <h5 style={{ fontWeight: '600' }}>Berikan Nilai</h5>
              <div className="mb-4">
                <FontAwesomeIcon icon={['far', 'star']} className="mr-2" />
                <FontAwesomeIcon icon={['far', 'star']} className="mr-2" />
                <FontAwesomeIcon icon={['far', 'star']} className="mr-2" />
                <FontAwesomeIcon icon={['far', 'star']} className="mr-2" />
                <FontAwesomeIcon icon={['far', 'star']} className="mr-2" />
              </div>
              <h5 style={{ fontWeight: '600' }}>Ulasan</h5>
              <textarea name="" id="" rows="5" className="w-100"></textarea>
              <div className="d-flex justify-content-between mb-4">
                <small>Minimal 50 karakter</small>
                <small>(0/50)</small>
              </div>
              <hr />
              <Link to="/" className="btn btn-lg btn-selesai float-right mb-5">
                Kirim Ulasan
              </Link>
            </Col>
            <Col lg={1} className="d-none d-lg-flex order-2 "></Col>

            {/* Right menu starts here */}
            <Col xs={12} lg={4} className="order-md-3 order-1 ">
              <Card className="card__custom_order p-4">
                <Card.Header className="border-0 bg-white p-0">
                  <p className="ringkasan-header">Ringkasan</p>
                </Card.Header>
                <Card.Body className="pl-0 pb-4">
                  <Row noGutters>
                    <Col xs={4} lg={4} className="pl-0 pr-0 mr-0">
                      <img
                        src={imagePath('beautiful.png')}
                        width="130px"
                        height="96px"
                        className="ringkasan-img"
                        alt="profile picture"
                      />
                    </Col>
                    <Col xs={8} lg={8}>
                      <Card.Text className="font-weight-bold ml-4 fs-16">
                        I will design an outstanding Web
                      </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
                <ul className="list-group list-group-fluh">
                  <li className="list-group-item d-flex justify-content-between border-0 pl-0 pr-0">
                    <span>Status</span>
                    <span className="badge__proses">Proses</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between border-0 pl-0 pr-0">
                    <span>Pesanan</span>
                    <span className="font-weight-bold">#FO81065CE55C2</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between border-0 pl-0 pr-0">
                    <span>Tanggal Pesanan</span>
                    <span className="font-weight-bold">11 Mar 2019</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between border-0 pl-0 pr-0">
                    <span>Harga</span>
                    <span className="font-weight-bold">Rp 250.000</span>
                  </li>
                </ul>
              </Card>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
