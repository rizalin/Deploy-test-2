import React, { Component } from 'react';
import { Card, Container, Col, Form, Row, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Collapse, { Panel } from 'rc-collapse';

import { imagePath } from '../../utils/assetUtils';
import { bank } from '../../components/dummy-data/nav';
import Head from '../../components/Head';
import HeaderOrder from '../../components/header/HeaderOrder';
import { NavLink } from 'react-router-dom';
import HeaderBlank from '../../components/header/HeaderBlank';

class PaymentOption extends Component {
  constructor(props) {
    super(props);

    this.state = {
      radioValue: 1
    };
  }
  render() {
    return (
      <div>
        <Head title="Metode Pembayaran" description="Detail order" />
        <HeaderBlank />
        <HeaderOrder step={2} />
        <Container className="ml-0">
          <Col xs={12} lg={8}>
            <Card className="c-card-payment mt-3 mb-5">
              <Card.Body>
                <h5 className="pb-3">Pilih Metode Pembayaran</h5>
                {/* Virtual account option */}
                <Form.Check inline>
                  <div className="custom-control custom-radio custom-radio-filter">
                    <input
                      type="radio"
                      id="option1"
                      name="radio1"
                      className="custom-control-input"
                      checked={this.state.radioValue === 1}
                      onChange={() => this.setState({ radioValue: 1 })}
                    />
                    <label
                      class="custom-control-label font-weight-bolder pl-3 text-dark"
                      for="option1"
                    >
                      Pembayaran lewat virtual account
                    </label>
                  </div>
                </Form.Check>

                {/* Accordion */}

                <Collapse accordion={true} className="bank-accordion">
                  {bank.map(item => (
                    <Panel
                      header={
                        <div className="FAQ-link">
                          <img src={imagePath(`${item.image}`)} alt="" />
                          <FontAwesomeIcon icon="chevron-right" />
                        </div>
                      }
                      showArrow={false}
                      headerClass="FAQ__button"
                      style={{ borderBottom: 'solid 0.25px #979797' }}
                    >
                      <p>{item.method}</p>
                    </Panel>
                  ))}
                </Collapse>
                <Form.Check inline className="mt-5">
                  {' '}
                  <div className="custom-control custom-radio custom-radio-filter">
                    <input
                      type="radio"
                      id="option2"
                      name="radio1"
                      className="custom-control-input"
                      checked={this.state.radioValue === 2}
                      onChange={() => this.setState({ radioValue: 2 })}
                    />
                    <label
                      class="custom-control-label font-weight-bolder pl-3 text-dark"
                      for="option2"
                    >
                      Kartu Kredit
                    </label>
                  </div>
                </Form.Check>
                <form>
                  <Row className="mt-2 ml-3">
                    <Col xs={12} lg={'auto'}>
                      <label>Card Number</label>
                      <input
                        type="text"
                        name="card-number"
                        id="1"
                        placeholder="Card Number"
                        maxLength="19"
                        className="form-control"
                      />
                    </Col>
                    <Col xs={12} lg={4} className="pt-4 pt-md-0">
                      <label>Expiration Date</label>
                      <input
                        type="text"
                        name="exp-date"
                        id="2"
                        placeholder="MM/YY"
                        maxLength="5"
                        className="form-control"
                      />
                    </Col>
                    <Col xs={12} lg={3} className="pt-4 pt-md-0">
                      <label>Security Code</label>
                      <input
                        type="password"
                        name="exp-date"
                        id="2"
                        maxLength="3"
                        className="form-control"
                      />
                    </Col>
                  </Row>
                </form>

                {/* Credit card option */}
                <Form.Check inline className="mt-5">
                  {' '}
                  <div className="custom-control custom-radio custom-radio-filter">
                    <input
                      type="radio"
                      id="option3"
                      name="radio1"
                      className="custom-control-input"
                      checked={this.state.radioValue === 3}
                      onChange={() => this.setState({ radioValue: 3 })}
                    />
                    <label
                      class="custom-control-label font-weight-bolder pl-3 text-dark"
                      for="option3"
                    >
                      Pembayaran lewat E-Wallet
                    </label>
                  </div>
                </Form.Check>

                {/* E-wallet options */}

                <Nav
                  variant="pills"
                  defaultActiveKey="link-1"
                  className="mb-3 ml-4 mt-3"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="link-1">
                      <img
                        src={imagePath(`ovo.png`)}
                        alt=""
                        style={{ maxHeight: '57px' }}
                      />
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-2">
                      <img
                        src={imagePath(`dana.jpg`)}
                        alt=""
                        style={{ maxHeight: '57px' }}
                      />
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <div className="d-flex flex-row-reverse mt-4">
                  <NavLink
                    to="/order/order-id/payment-confirm"
                    className="btn btn-aktif"
                  >
                    Bayar
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

export default PaymentOption;
