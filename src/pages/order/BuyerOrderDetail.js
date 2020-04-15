import React, { Component } from 'react';
import {
  Card,
  Container,
  Row,
  Col,
  Media,
  Accordion,
  Form
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

import { imagePath } from '../../utils/assetUtils';
import Head from '../../components/Head';
import HeaderNav from '../../components/header/HeaderNav';
import Footer from '../../components/header/Footer';
import { InboxToggle } from '../../components/parts/Dropdown';

export default class BuyerOrderDetail extends Component {
  constructor() {
    super();
    this.state = { time: {}, seconds: 259200 };
    this.timer = 0;
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs) {
    let days = Math.floor(secs / 86400);

    let divisor_for_hour = secs % 86400;
    let hours = Math.floor(divisor_for_hour / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      d: days,
      h: hours,
      m: minutes,
      s: seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });

    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds
    });

    // Check if we're at zero.
    if (seconds === 0) {
      clearInterval(this.timer);
    }
  }

  render() {
    let day = this.state.time.d;
    let hour = this.state.time.h;
    let minute = this.state.time.m;
    let second = this.state.time.s;
    function pad(n) {
      return n < 10 ? '0' + n : n;
    }
    return (
      <div>
        <Head title="Order Detail (Buyer) " description="Detail order" />
        <HeaderNav />
        <Container fluid>
          <Row className="justify-content-center mt-5">
            <Col
              className="offset-lg-2 pb-3 mb-3 pb-lg-5 mb-lg-5"
              lg={7}
              md={10}
              xs={12}
            >
              {/* Order information */}
              <Card className="card__custom_order">
                <Card.Body className="px-0">
                  <div className="card__custom_order_header p-4 p-md-4 m-md-2">
                    <h3 className="row m-0 justify-content-between">
                      <Col className="p-0" xs={12} lg={8}>
                        Pesanan #HS81065CE55C2
                      </Col>
                      <Col
                        className="p-0 text-lg-center text-left"
                        xs={12}
                        lg={4}
                      >
                        Rp 1.000.000
                      </Col>
                    </h3>
                    <p className="mb-0">Pembeli: Wingerstore | July 30, 2019</p>
                  </div>
                  <div className="list-order-delivered">
                    <div className="header-total">
                      <div className="total-left">Item</div>
                      <div className="total-right">Jumlah</div>
                    </div>
                    <ul className="mb-0 body">
                      <li className="list-detail w-100">
                        <div className="job-title">
                          Design Logo terbaik untuk anda
                        </div>
                        <div className="job-title">Basic</div>
                        <div className="job-list my-2">
                          <ul className="px-2">
                            <li>
                              {' '}
                              <FontAwesomeIcon
                                icon={['far', 'clock']}
                                className="mr-3"
                              />
                              waktu pengerjaan 1 hari
                            </li>
                            <li>
                              {' '}
                              <FontAwesomeIcon
                                icon="sync-alt"
                                className="mr-3"
                              />
                              maksimal revisi 3 kali
                            </li>
                            <li>
                              <FontAwesomeIcon
                                icon={['far', 'file']}
                                style={{ marginRight: '1.2rem' }}
                              />
                              source file disediakan
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="table-right d-none d-lg-flex"></li>
                    </ul>
                  </div>
                  <div className="footer-total">
                    <div className="total-left">Total</div>
                    <div className="total-right">1.000.000</div>
                  </div>
                </Card.Body>
              </Card>

              {/* Deadline countdown starts here */}
              <div className="card__custom_countdown px-0">
                <div className="text-center">
                  <h3>Batas Deadline Pengerjaan</h3>
                  <ul>
                    <li>
                      <div>
                        <span>{pad(day)}</span>
                        <p>Hari</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>{pad(hour)}</span>
                        <p>Jam</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>{pad(minute)}</span>
                        <p>Menit</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>{pad(second)}</span>
                        <p>Detik</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Detail Gawean */}
              <Accordion>
                <Card className="card__custom_order mt-5">
                  <Card.Body>
                    <div className="card__custom_order_global text-center display__center">
                      <img
                        src={imagePath('work_outline.png')}
                        alt="work"
                        className="mb-2"
                      />
                      <h3 className="mb-3 text-uppercase">detail gawean</h3>
                      <p>Pembeli Anda telah mengisi detail gawean</p>
                      <InboxToggle eventKey="1">Lihat Detail</InboxToggle>
                    </div>
                  </Card.Body>
                </Card>
                <Accordion.Collapse eventKey="1">
                  <Card className="card__custom_order card__inbox">
                    <Card.Body className="p-3">
                      <p className="text-dark">
                        Halo, silahkan isi style design yang kamu mau atau
                        lampirkan file tersebut?
                      </p>
                      <Form.Control
                        type="input"
                        placeholder="Aku ingin menjadi ultraman Gaia dan saint saiya pegasus"
                        value=""
                      />
                      <p className="attachment__detail">
                        <FontAwesomeIcon icon="paperclip" />
                        Contoh_logo.png
                      </p>
                    </Card.Body>
                  </Card>
                </Accordion.Collapse>
              </Accordion>

              {/* Message */}
              <Accordion>
                <Card className="card__custom_order mt-5">
                  <Card.Body>
                    <div className="card__custom_order_global text-center display__center">
                      <FontAwesomeIcon
                        icon={['far', 'envelope']}
                        size="3x"
                        color="#003BDE"
                        className="mb-2"
                      />
                      <h3 className="mb-3 text-uppercase">inbox</h3>
                      <p>
                        Lihat percakapan kotak masuk terbaru Anda dengan
                        wingerstore
                      </p>
                      <InboxToggle eventKey="1">Lihat Pesan</InboxToggle>
                    </div>
                  </Card.Body>
                </Card>
                <Accordion.Collapse eventKey="1">
                  <Card className="card__custom_order card__inbox">
                    <Card.Body>
                      <div className="card__custom_order_inbox">
                        <Media className="pl-4 pl-lg-5">
                          <img
                            src={imagePath('speaker.jpg')}
                            alt=""
                            className="align-self-start rounded-circle"
                          />
                          <Media.Body>
                            <p className="people-name">John Doe</p>
                            <p>
                              Hello, there. <br /> Thank you for ordering from
                              us. We will send an update to you very soon.
                              <br />
                              <br />
                              Sincerely, Noacraft
                            </p>
                            <p>11:31 July 30, 2019</p>
                          </Media.Body>
                        </Media>
                        <Media className="pl-4 pl-lg-5">
                          <img
                            src={imagePath('girl.jpg')}
                            alt=""
                            className="align-self-start rounded-circle"
                          />
                          <Media.Body>
                            <p className="people-name">John Doe</p>
                            <p>Don't forget to update the progress</p>
                            <p>11:31 July 30, 2019</p>
                          </Media.Body>
                        </Media>
                      </div>
                    </Card.Body>
                  </Card>
                  {/* <Card className="card__custom_order">
                    <Card.Body>
                      <div className="card__custom_order_new_message">
                        <textarea
                          name=""
                          id=""
                          rows="2"
                          className="mb-5"
                          placeholder="Ketik pesanmu di sini..."
                        />
                        <div className="clearfix">
                          <a href="/" className="float-right pt-2">
                            Tawarkan Lainnya
                          </a>
                          <button className="btn btn-selesai text-white float-right">
                            Kirim
                          </button>
                        </div>
                      </div>
                    </Card.Body>
                  </Card> */}
                </Accordion.Collapse>
              </Accordion>

              {/* Gawean done */}
              <Card className="mt-5 mb-5 card__custom_order">
                <Card.Body className="p-3">
                  <div className="text-center">
                    <FontAwesomeIcon
                      icon="paperclip"
                      size="3x"
                      color="#003BDE"
                      className="mt-3"
                    />
                  </div>
                  <h4 className="mt-3 text-center font-weight-bold text-uppercase">
                    yes, gaweanmu sudah selesai!
                  </h4>
                  <p className="mt-3 text-center">
                    Silahkan review dan ajukan revisi , atau gawean ini dianggap
                    selesai dalam waktu 2 hari.
                  </p>
                  <Media className="px-5 pt-3">
                    <img
                      src={imagePath('speaker.jpg')}
                      alt=""
                      className="mr-3 rounded-circle"
                      style={{ maxHeight: '46px' }}
                    />
                    <Media.Body>
                      <h5 className="mt-0">John Doe</h5>
                      <p>
                        Hello, there. Gaweanmu sudah selesai silahkan review dan
                        apabila ada revisi please info. Apabila sudah ok
                        silahkan click order sudah selesai.
                        <br />
                        <br />
                        Sincerely, Jhon Doe
                      </p>
                    </Media.Body>
                  </Media>
                  <Row className="px-5 pt-3">
                    <Col lg={7}>
                      <p className="text-uppercase font-weight-bolder">
                        preview
                      </p>
                      <img
                        src={imagePath('upload_sample.jpg')}
                        alt="sample"
                        className="img-fluid"
                      />
                    </Col>
                    <Col lg={5}>
                      <p className="text-uppercase font-weight-bolder">
                        file terkirim
                      </p>
                      <p className="fs-18">
                        <FontAwesomeIcon
                          icon="cloud-download-alt"
                          color="#003BDE"
                          className="mr-2"
                        />
                        image-sample.jpg (1 MB)
                      </p>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer style={{ backgroundColor: '#fff' }}>
                  <div>
                    <NavLink
                      to="/order/order-id/review"
                      className="btn btn-selesai text-white float-right ml-3"
                    >
                      Selesai
                    </NavLink>
                    <NavLink
                      to="/"
                      className="btn btn-aktif text-white float-right ml-3"
                    >
                      Ajukan Revisi
                    </NavLink>
                  </div>
                </Card.Footer>
              </Card>
            </Col>

            {/* Partner request */}

            <Col className="p-3 p-lg-0 mb-3" xs={12} md={10} lg={2}>
              <Card className="card__custom_order p-4">
                <h5 className="font-weight-bold text-center">
                  Permintaan Partner
                </h5>
                <p className="text-center">
                  Mohon Maaf, Partner kami mengajukan Pembatalan orderan kamu
                  karena: <br />
                  <span className="font-weight-bold">
                    Sedang ada urusan keluarga mendadak.
                  </span>{' '}
                  <br />
                  <br />
                  Uang Anda dapat Anda tarik 100%
                </p>
                <div className="btn__order-right">
                  <button className="terima">Terima</button>
                  <button className="tolak">Tolak</button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
