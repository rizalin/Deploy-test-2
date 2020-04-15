import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import { Row, Col, Card, Form } from 'react-bootstrap';

import HeaderNavbar from '../../components/header/HeaderNav';
import Head from './../../components/Head';
import Footer from '../../components/header/Footer';

export default class NotificationSetting extends Component {
  render() {
    return (
      <div>
        <Head title="Setting Notifikas" description="Description" />
        <HeaderNavbar />
        <div className="container-fluid setting-content">
          <div className="px-2 px-lg-5 mb-4">
            <Row>
              <Col xs={2} className="d-none d-lg-block">
                <p className="setting-sidebar-title">Pengaturan</p>
                <ul className="nav flex-column setting-sidebar-content">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/partner/pengaturan/biodata-diri"
                      style={{ color: '#131415' }}
                    >
                      Biodata Diri
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link font-weight-bold">
                      Notifikasi
                    </span>
                  </li>
                </ul>
              </Col>
              <Notification />
            </Row>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

class Notification extends Component {
  render() {
    return (
      <Col xs={12} lg={10}>
        <Card>
          <div className="card-body">
            <Form>
              <Row>
                <Col xs={12} md={6}>
                  <p className="fs-16 font-weight-bold">NOTIFIKASI</p>
                  <p>Atur Notifikasi yang ingin Anda terima disini</p>
                </Col>
                <Col xs={8} md={4}>
                  <p className="fs-16 font-weight-bold">TRANSAKSI</p>
                  <div>Transaksi Penjualan</div>
                  <div>Transaksi Pembelian</div>
                </Col>
                <Col xs={4} md={2}>
                  <p className="fs-16 font-weight-bold">EMAIL</p>
                  <div className="custom-control custom-checkbox mb3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name=""
                      id="notifPenjualan"
                    />
                    <label
                      className="custom-control-label center_custom_checkbox"
                      for="notifPenjualan"
                    ></label>
                  </div>
                  <div className="custom-control custom-checkbox mb3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name=""
                      id="notifPembelian"
                    />
                    <label
                      className="custom-control-label"
                      for="notifPembelian"
                    ></label>
                  </div>
                </Col>
                <Col>
                  <div className="form-group row mt-5">
                    <Col sm={12}>
                      <button
                        style={{ float: 'right' }}
                        className="text-capitalize btn btn-selesai"
                      >
                        simpan pengaturan
                      </button>
                    </Col>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </Card>
      </Col>
    );
  }
}
