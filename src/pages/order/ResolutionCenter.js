import React, { Component } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';

import HeaderGawean from '../../components/header/HeaderPartner-3';
import Head from '../../components/Head';
import Footer from '../../components/header/Footer';
import { imagePath } from '../../utils/assetUtils';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    let days = [
      { value: 1, label: '1 Hari' },
      { value: 2, label: '2 Hari' },
      { value: 3, label: '3 Hari' }
    ];
    return (
      <div>
        <Head title="Pusat Resolusi" />
        <HeaderGawean />
        <Container className="mt-5">
          <Row>
            {/* Form before submitting starts here */}
            <Col xs={12} lg={8} className="order-2">
              <Row style={{ display: this.state.submitOpen ? 'none' : 'flex' }}>
                <Col lg={12} className="mb-5 px-4 px-md-0 pb-5">
                  <h2>Pusat Resolusi</h2>
                  <p>
                    Di sini Anda dapat menyelesaikan masalah dan menyelesaikan
                    masalah tentang pesanan Anda
                  </p>
                  <hr />
                  <div className="mt-3 resolusi">
                    <p>Apa yang bisa kami bantu</p>
                    <fieldset id="group1">
                      <input type="radio" name="group1" id="1" />
                      <label htmlFor="1">Perpanjang waktu pengiriman</label>
                      <br />
                      <Select
                        placeholder="Hari"
                        options={days}
                        className="days_option"
                      />
                      <br />
                      <input type="radio" name="group1" id="2" />
                      <label htmlFor="2">
                        Minta pembeli untuk membatalkan pesanan ini
                      </label>
                    </fieldset>
                    <p>Alasan</p>
                    <fieldset id="group2">
                      <input type="radio" name="group2" id="3" />
                      <label htmlFor="3">Pembeli tidak merespon</label>
                      <br />
                      <input type="radio" name="group2" id="4" />
                      <label htmlFor="4">Pembeli akan memesan lagi</label>
                      <br />
                      <input type="radio" name="group2" id="5" />
                      <label htmlFor="5">
                        Saya terlalu sibuk untuk pekerjaan ini
                      </label>
                      <br />
                      <input type="radio" name="group2" id="6" />
                      <label htmlFor="6">
                        Kami tidak bisa menyetujui harganya
                      </label>
                      <br />
                      <input type="radio" name="group2" id="7" />
                      <label htmlFor="7">
                        Saya tidak menerima informasi yang cukup dari pembeli
                      </label>
                      <br />
                      <input type="radio" name="group2" id="8" />
                      <label htmlFor="8">Lainnya</label>
                      <br />
                      <Form.Control type="text" className="mx-4 w-75" />
                      <small className="mx-4">Maks 1500 karakter</small>
                      <br />
                    </fieldset>
                  </div>
                  <hr />
                  <div className="clearfix mt-4 pt-3">
                    <button
                      className="mt-4 float-right btn-selesai btn"
                      onClick={this.handleSubmit}
                      style={{ minWidth: '8rem' }}
                    >
                      Kirim
                    </button>
                  </div>
                </Col>
              </Row>

              {/* Done submitting display starts here */}
              <Card
                className="border-0 pl-2"
                style={{ display: this.state.submitOpen ? 'block' : 'none' }}
              >
                <Card.Header className="bg-white pl-0 pb-0">
                  <h2>Permintaan Terkirim</h2>
                </Card.Header>
                <Card.Body className="pl-0">
                  <Row noGutters>
                    <Col xs={2} lg={1} className="pl-0 pr-0 mr-0">
                      <div className="tanda">
                        <div className="tanda2">
                          <FontAwesomeIcon icon="check" />
                        </div>
                      </div>
                    </Col>
                    <Col xs={10} lg={11}>
                      <Card.Text>
                        Permintaan Anda, mengenai pesanan ini, telah dikirim.
                        GANASH memiliki waktu sehari untuk menerima atau
                        menolak.
                      </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            {/* Right menu starts here */}
            <Col xs={12} lg={4} className="order-md-2">
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
