import React, { Component } from 'react';
import { Container, Navbar, Col, Card, Row } from 'react-bootstrap';
import Select from 'react-select';

import Head from '../../components/Head';
import { NavLink } from 'react-router-dom';
import HeaderLogin from '../../components/header/HeaderLogin';
import { bulan, partnerBank, filter1 } from '../../components/dummy-data/nav';
import { AddBank } from '../../components/modal/AddBank';
import { Withdraw } from '../../components/modal/Withdraw';

export default class BuyerSaldo extends Component {
  render() {
    let options = partnerBank.map(item => {
      return { value: item.rekNo, label: item.bank + ' a/n ' + item.name };
    });
    let year = [
      {
        value: 1,
        label: 2020
      }
    ];

    let month = bulan.map(item => {
      return { value: item.id, label: item.title };
    });

    return (
      <div>
        <Head title="Saldo Buyer" description="Description" />
        <HeaderLogin />
        <div className="dashboard__partner">
          <Container fluid className="nav__menu d-none d-lg-block">
            <Navbar className="p-0 navbar-expand-md">
              <ul className="navbar-nav mr-auto">
                <li className="navlink-seller">
                  <NavLink to="/buyer/orderan">Orderan</NavLink>
                </li>
                <li className="navlink-seller">
                  <NavLink to="/buyer/inbox">Inbox</NavLink>
                </li>
                <li className="navlink-seller aktif">
                  <span>Saldo</span>
                </li>
              </ul>
            </Navbar>
          </Container>
          <Container className="c-seller-pendapatan mt-4 mt-lg-5 mb-3 px-4">
            <Col className="mr-auto text-capitalize pb-3 pl-0">
              <h2>saldo</h2>
            </Col>
            <Card>
              <Card.Body>
                <div className="list-seller-pendapatan mt-lg-3">
                  <ul className="header">
                    <li className="list-label">Pemasukan</li>
                    <li className="list-label">Ditarik</li>
                    <li className="list-label">Digunakan untuk membeli</li>
                    <li className="list-label">Proses pencairan</li>
                    <li className="list-label">Tersedia untuk penarikan</li>
                  </ul>
                  <ul className="mb-0">
                    <li data-label="Pemasukan">Rp1.000.000.000</li>
                    <li data-label="Ditarik	">Rp1.000.000.000</li>
                    <li data-label="Digunakan untuk membeli">
                      Rp1.000.000.000
                    </li>
                    <li data-label="Proses Pencairan">Rp1.000.000.000</li>
                    <li data-label="Tersedia untuk Penarikan">
                      Rp1.000.000.000
                    </li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Container>
          <Container
            className="c-seller-penarikan px-4"
            style={{ marginTop: '3rem' }}
          >
            <Row>
              <Col lg={2} md={3}>
                <h2>Penarikan</h2>
              </Col>
              <Col lg={4} md={4} className="ml-md-auto ml-lg-0 pb-3">
                <Select
                  placeholder="Pilih Bank"
                  options={options}
                  classNamePrefix="select1"
                />
              </Col>
              <Col md={5} className="ml-md-auto ml-lg-0 d-flex btn-penarikan">
                <AddBank />
                <Withdraw />
              </Col>
            </Row>
          </Container>
          <Container className="c-seller-riwayat px-4 mt-4 mb-5">
            <Row>
              <Col lg={2} md={3} xs={12}>
                <h2>Riwayat</h2>
              </Col>
              <Col
                lg={2}
                md={3}
                xs={12}
                className="ml-md-auto ml-lg-0 w-100 mb-3 "
              >
                <Select
                  placeholder="Semua"
                  options={filter1}
                  classNamePrefix="select2"
                  className="select2"
                />
              </Col>
              <Col lg={2} md={3} xs={6} className="ml-md-auto ml-lg-0">
                <Select
                  placeholder="Tahun"
                  options={year}
                  classNamePrefix="select2"
                  className="select2"
                />
              </Col>
              <Col lg={2} md={3} xs={6} className="ml-md-auto ml-lg-0">
                <Select
                  placeholder="Bulan"
                  options={month}
                  classNamePrefix="select2"
                  className="select2"
                />
              </Col>
            </Row>
            <Row className="c-seller-riwayat-table text-left mt-4 mt-lg-5 text-uppercase">
              <Col xs={3}>
                <h5>tanggal</h5>
              </Col>
              <Col xs={6}>
                <h5>detail</h5>
              </Col>
              <Col xs={3} className="text-center">
                <h5>jumlah</h5>
              </Col>
            </Row>
            <Row className="c-seller-riwayat-table-isi text-capitalized">
              <Col xs={3}>
                <h5>25 Juli 20</h5>
                <h5>25 Juli 20</h5>
              </Col>
              <Col xs={6}>
                <h5>Withdrawal Completed Successfully</h5>
                <h5>Withdrawal Initiated</h5>
              </Col>
              <Col xs={3} className="text-center">
                <h5>Rp.1.000.000</h5>
                <h5>Rp.1.000.000</h5>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
