import React, { Component } from 'react';
import {
  Card,
  Container,
  Row,
  Col,
  Modal,
  Button,
  Form
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie';

// import { imagePath } from '../../utils/assetUtils';
import Head from '../../components/Head';
import HeaderOrder from '../../components/header/HeaderOrder';
import Header from '../../components/header/HeaderBlank';

class OrderDetail extends Component {
  render() {
    return (
      <div>
        <Head title="Detail order" description="Detail order" />
        <Header />
        <HeaderOrder step={1} />
        <Container>
          <Row className="mt-5">
            <Col className="px-4" lg={8}>
              <h2 className="font-weight-bold" style={{ color: '#393c43' }}>
                Detail Orderan
              </h2>

              {/* Detail Order */}
              <Row className="order-detail">
                <img
                  src="https://placehold.it/150x100"
                  alt=""
                  className="mr-3"
                />
                <div className="mt-3 mt-lg-0">
                  <p className="font-weight-bold">
                    Saya bisa mendesign logo terbaik untuk anda
                  </p>
                  <Row>
                    <FontAwesomeIcon
                      icon="star"
                      className="text-warning mr-2 "
                    />
                    <span className="font-weight-bold mr-1">5.0</span>(120
                    Reviews)
                  </Row>
                </div>
              </Row>

              {/* Package detail */}
              <div>
                <h5
                  className="font-weight-bold mt-5"
                  style={{ color: '#393c43' }}
                >
                  Paket Ninja
                </h5>
                <p>
                  Logo premium terbaik untuk Anda. Format yang diberikan adalah
                  PNG+PSD. Anda mendapatkan 3 referensi logo.
                </p>
                <div className="package-list">
                  <ul className="font-weight-bold">
                    <li>
                      <FontAwesomeIcon
                        icon={['far', 'clock']}
                        className="mr-2"
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon icon="sync-alt" className="mr-2" />{' '}
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={['far', 'file']}
                        className="mr-2"
                      />
                    </li>
                  </ul>
                  <ul>
                    <li>waktu pengerjaan 1 hari</li>
                    <li>maksimal revisi 3 kali</li>
                    <li>source file disediakan</li>
                  </ul>
                </div>
              </div>
            </Col>

            {/* Summary */}
            <Col className="px-4" lg={4}>
              <Card className="mb-3 mb-lg-0">
                <Card.Body>
                  <Card.Title
                    className="font-weight-bold"
                    style={{ color: '#393c43' }}
                  >
                    Ringkasan
                  </Card.Title>
                  <hr />
                  <Row>
                    <Col xs={6} className="pl-0 pl-lg-2">
                      Total Harga
                    </Col>
                    <Col xs={6} className="pr-0 pr-lg-2 text-right">
                      Rp.1.000.000
                    </Col>
                  </Row>
                  <hr />
                  <DetailOrder />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default OrderDetail;

class DetailOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addModalShow: false
    };
  }

  cookiesStatus = Cookies.get('isLogin');

  render() {
    let addModalClose = () => this.setState({ addModalShow: false });
    return (
      <div className="">
        {' '}
        {this.cookiesStatus ? (
          <NavLink
            to="/order/order-id/payment-option"
            className="btn btn-aktif d-flex text-white justify-content-center font-weight-bold"
          >
            Bayar Sekarang
          </NavLink>
        ) : (
          <button
            className="btn btn-aktif d-flex text-white justify-content-center font-weight-bold"
            onClick={() => this.setState({ addModalShow: true })}
            style={{ width: '100%' }}
          >
            Bayar Sekarang
          </button>
        )}
        <ModalLogin show={this.state.addModalShow} onHide={addModalClose} />
      </div>
    );
  }
}

class ModalLogin extends Component {
  render() {
    return (
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        {...this.props}
      >
        <Modal.Header className="mx-auto pb-0 border-0">
          <Modal.Title>Masuk ke Harisenin</Modal.Title>
        </Modal.Header>
        <Modal.Body className="align-middle pl-4 pr-4 user-modal">
          <div>
            <Button className="form-control button-linkedin">
              <FontAwesomeIcon
                icon={['fab', 'linkedin']}
                style={{ fontSize: '28px' }}
              />
              <span
                className="mt-1"
                style={{ fontSize: '14px', marginLeft: '1rem' }}
              >
                Lanjutkan dengan LinkedIn
              </span>
            </Button>
            <Button
              className="form-control button-google"
              style={{ padding: '7px 7px' }}
            >
              <div className="align-middle">
                <img
                  src="https://pngimg.com/uploads/google/google_PNG19635.png"
                  alt="google"
                  height="28px"
                  width="28px"
                />
                <span style={{ color: '#545870', marginLeft: '1.1rem' }}>
                  Lanjutkan dengan Google
                </span>
              </div>
            </Button>
            <div className="divider">
              <span>atau</span>
            </div>
          </div>
          <div className="sign-up-form">
            <Form.Control
              type="email"
              placeholder="Masukan e-mail / username anda"
            ></Form.Control>
            <Form.Control
              type="password"
              placeholder="Masukan password anda"
              className="mt-3"
            ></Form.Control>
            <a
              className="btn-selesai mt-3 form-control text-white"
              style={{ textAlign: 'center' }}
              type="submit"
              onClick={() => Cookies.set('isLogin', true)}
              href="/order/order-id/payment-option"
            >
              Masuk
            </a>
            <div className="d-flex justify-content-between mt-3">
              <Form.Check type="checkbox" label="Ingat Saya?" />
              <a href="/">Lupa Password?</a>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="footer-daftar">
            <p style={{ marginRight: '0.4rem' }}>Belum punya akun? </p>
            <a href="/"> Daftar</a>
          </div>
        </Modal.Footer>
      </Modal>
    );
  }
}
