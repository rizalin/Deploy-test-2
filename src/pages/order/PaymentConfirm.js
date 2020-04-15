import React, { Component } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { imagePath } from '../../utils/assetUtils';
import Head from '../../components/Head';
import HeaderOrder from '../../components/header/HeaderOrder';
import { NavLink } from 'react-router-dom';
import HeaderBlank from '../../components/header/HeaderBlank';

class PaymentConfirmation extends Component {
  constructor() {
    super();
    this.state = { time: {}, seconds: 86400, code: '100700543910' };
    this.timer = 0;
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
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
    let hour = this.state.time.h;
    let minute = this.state.time.m;
    let second = this.state.time.s;
    function pad(n) {
      return n < 10 ? '0' + n : n;
    }

    return (
      <div>
        <Head title="Konfirmasi Pembayaran" description="" />
        <HeaderBlank />
        <HeaderOrder step={3} />
        <Container className="ml-0">
          <Col xs={12} lg={6}>
            <Card className="c-card-payment mt-3 mb-5">
              <Card.Body>
                <div className="card__custom_countdown_payment pl-0 pb-0">
                  <div className="text-left">
                    <h5 className="pb-3">Batas Pembayaran</h5>

                    {/* Countdown starts here */}

                    <div className="d-flex">
                      <div className="flex-row">
                        <ul className="pl-0 text-center">
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
                  </div>
                </div>

                {/* Bill number */}
                <h5 className="pb-2 pt-3">Nomor tagihan</h5>
                <p className="text-uppercase pb-2" style={{ fontSize: '20px' }}>
                  BL1913L6GFB9INV
                </p>

                {/* Money amount */}
                <h5 className="pb-2">Pembayaran via Virtual Account BCA</h5>
                <Row noGutters className="text-left align-items-center">
                  <Col xs={6} lg={4}>
                    <p style={{ fontSize: '16px' }}>Jumlah tagihan anda :</p>
                  </Col>
                  <Col lg={'auto'} xs={6}>
                    <h5>Rp 1.000.000</h5>
                  </Col>
                </Row>

                {/* Virtual account number */}
                <h5 className="pb-2 pt-3">Virtual Account</h5>
                <p className="text-uppercase pb-2" style={{ fontSize: '20px' }}>
                  {this.state.code}{' '}
                  <span>
                    <CopyToClipboard text={this.state.code}>
                      <FontAwesomeIcon
                        icon="copy"
                        className="ml-2"
                        style={{ cursor: 'pointer' }}
                      />
                    </CopyToClipboard>
                  </span>
                </p>
                <Row className="pt-3"></Row>
                <Row className="pt-3"></Row>
                <div className="d-flex flex-row-reverse mt-4">
                  <NavLink
                    to="/order/order-id/isi-detail-gawean"
                    className="btn btn-aktif w-50"
                  >
                    Saya telah membayar
                  </NavLink>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Container>
      </div>
    );
  }
}

export default PaymentConfirmation;
