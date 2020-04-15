import React, { Component } from 'react';
import { Container, Navbar, Tab, Nav, Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import Head from '../../components/Head';
import HeaderPartnerDashboard from '../../components/header/HeaderPartner-2';
import { imagePath } from '../../utils/assetUtils';
import { orderan } from '../../components/dummy-data/nav';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../../components/header/Footer';

export default class PartnerOrderan extends Component {
  render() {
    function formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    }

    const prioritas = (
      <span className="btn btn-sm btn-block btn-prioritas">Prioritas</span>
    );
    const aktif = <span className="btn btn-sm btn-block btn-aktif">Aktif</span>;
    const terlambat = (
      <span className="btn btn-sm btn-block btn-terlambat">Terlambat</span>
    );
    const selesai = (
      <span className="btn btn-sm btn-block btn-selesai">Selesai</span>
    );
    const dikirim = (
      <span className="btn btn-sm btn-block btn-dikirim">Dikirim</span>
    );
    const orderBatal = (
      <span className="btn btn-sm btn-block btn-order_batal">Order Batal</span>
    );

    const headerList = (
      <ul className="header">
        <li className="list-label">klien</li>
        <li className="list-label">gawean</li>
        <li className="list-label txt-center nowrap">tgl mulai</li>
        <li className="list-label txt-center">deadline</li>
        <li className="list-label txt-center">harga</li>
        <li className="list-label">catatan</li>
        <li className="list-label txt-center">status</li>
      </ul>
    );

    const nothingHere = (
      <div className="blank-status">
        <img src={imagePath('harisenin.png')} alt="hari-senin" />
        <div> Belum ada orderan di status ini</div>
      </div>
    );

    function findObject(arr, cond) {
      if (arr.some(item => item.status === cond)) {
        return (
          <div className="list-daftar-orderan">
            {headerList}
            {arr
              .filter(item => item.status === cond)
              .map(item => {
                let status;
                switch (item.status) {
                  case 1:
                    status = prioritas;
                    break;
                  case 2:
                    status = aktif;
                    break;
                  case 3:
                    status = terlambat;
                    break;
                  case 4:
                    status = selesai;
                    break;
                  case 5:
                    status = dikirim;
                    break;
                  case 6:
                    status = orderBatal;
                    break;
                  default:
                }

                return (
                  <ul className="mb-4">
                    <li data-label="klien">
                      <img
                        src={imagePath(`${item.image}`)}
                        alt=""
                        className="rounded-circle"
                      />
                      {item.name}
                    </li>
                    <li data-label="gawean">
                      <NavLink to="/partner/orderan/detail-order">
                        {item.gawean}
                      </NavLink>
                    </li>
                    <li data-label="tgl mulai" className="txt-center">
                      {item.startDate}
                    </li>
                    <li className="txt-center" data-label="deadline">
                      {item.endDate}
                    </li>
                    <li className="txt-center" data-label="harga">
                      Rp{formatNumber(item.price)}
                    </li>
                    <li data-label="catatan">-</li>
                    <li className="txt-center" data-label="status">
                      {status}
                    </li>
                  </ul>
                );
              })}
          </div>
        );
      } else {
        return nothingHere;
      }
    }

    let orderanList = orderan.map(item => {
      let status;
      switch (item.status) {
        case 1:
          status = prioritas;
          break;
        case 2:
          status = aktif;
          break;
        case 3:
          status = terlambat;
          break;
        case 4:
          status = selesai;
          break;
        case 5:
          status = dikirim;
          break;
        case 6:
          status = orderBatal;
          break;
        default:
      }

      return (
        <ul className="mb-4">
          <li data-label="klien">
            <img
              src={imagePath(`${item.image}`)}
              alt=""
              className="rounded-circle"
            />
            {item.name}
          </li>
          <li data-label="gawean">
            <NavLink to="/partner/orderan/detail-order">{item.gawean}</NavLink>
          </li>
          <li data-label="tgl mulai" className="txt-center">
            {item.startDate}
          </li>
          <li className="txt-center" data-label="deadline">
            {item.endDate}
          </li>
          <li className="txt-center" data-label="harga">
            Rp{formatNumber(item.price)}
          </li>
          <li data-label="catatan">-</li>
          <li className="txt-center" data-label="status">
            {status}
          </li>
        </ul>
      );
    });

    return (
      <div>
        <Head title="Orderan Partner" description="Description" />
        <HeaderPartnerDashboard />
        <div className="dashboard__partner">
          <Container fluid className="nav__menu d-none d-lg-block">
            <Navbar className="p-0 navbar-expand-md">
              <ul className="navbar-nav mr-auto">
                <li className="navlink-seller">
                  <NavLink to="/partner/dashboard">Dashboard</NavLink>
                </li>
                <li className="navlink-seller">
                  <NavLink to="/partner/inbox">Inbox</NavLink>
                </li>
                <li className="navlink-seller aktif">
                  <span>Orderan</span>
                </li>
                <li className="navlink-seller">
                  <NavLink to="/partner/gawean">Gawean</NavLink>
                </li>
                <li className="navlink-seller">
                  <NavLink to="/partner/saldo">Saldo</NavLink>
                </li>
                <li className="navlink-seller">
                  <NavLink to="/partner/setting">Pengaturan Partner</NavLink>
                </li>
              </ul>
            </Navbar>
          </Container>
          <div className="mt-4 mt-lg-5">
            <Tab.Container defaultActiveKey="0">
              <h2 className="mb-3 container-fluid ml-2 ml-lg-0 d-lg-block d-md-block d-none">
                Daftar Orderan
              </h2>
              <Container
                fluid
                className="tab-orderan d-lg-block d-md-block d-none"
              >
                <Nav className="navbar-expand-md pb-0 ">
                  <Nav.Item>
                    <Nav.Link eventKey="0">semua</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="1">prioritas</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="2">aktif</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="3">terlambat</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="4">dikirim</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="5">selesai</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="6">order batal</Nav.Link>
                  </Nav.Item>
                  {/* <Nav.Item>
                    <Nav.Link eventKey="7">permintaan klien</Nav.Link>
                  </Nav.Item> */}
                </Nav>
              </Container>
              <Container fluid className="mx-2 mx-md-4 mt-4 d-lg-none">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="outline-secondary"
                    id="dropdown-basic"
                  >
                    Daftar Orderan
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="0">Semua</Dropdown.Item>
                    <Dropdown.Item eventKey="1">Prioritas</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Aktif</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Terlambat</Dropdown.Item>
                    <Dropdown.Item eventKey="4">Dikirim</Dropdown.Item>
                    <Dropdown.Item eventKey="5">Selesai</Dropdown.Item>
                    <Dropdown.Item eventKey="6">Order Batal</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Container>
              <Tab.Content
                className="container-fluid"
                style={{ minHeight: '100vh' }}
              >
                <Tab.Pane
                  className="px-2 px-lg-0 px-md-4 mt-4 mt-md-1 mb-5 pb-4 pt-0 pt-md-3"
                  eventKey="0"
                >
                  <div className="list-daftar-orderan">
                    {headerList}
                    {orderanList}
                  </div>
                </Tab.Pane>
                <Tab.Pane
                  className="px-2 px-lg-0 px-md-4 mt-4 mt-md-1 mb-5 pb-4 pt-0 pt-md-3"
                  eventKey="1"
                >
                  {findObject(orderan, 1)}
                </Tab.Pane>
                <Tab.Pane
                  className="px-2 px-lg-0 px-md-4 mt-4 mt-md-1 mb-5 pb-4 pt-0 pt-md-3"
                  eventKey="2"
                >
                  {findObject(orderan, 2)}
                </Tab.Pane>
                <Tab.Pane
                  className="px-2 px-lg-0 px-md-4 mt-4 mt-md-1 mb-5 pb-4 pt-0 pt-md-3"
                  eventKey="3"
                >
                  {findObject(orderan, 3)}
                </Tab.Pane>
                <Tab.Pane
                  className="px-2 px-lg-0 px-md-4 mt-4 mt-md-1 mb-5 pb-4 pt-0 pt-md-3"
                  eventKey="4"
                >
                  {findObject(orderan, 4)}
                </Tab.Pane>{' '}
                <Tab.Pane
                  className="px-2 px-lg-0 px-md-4 mt-4 mt-md-1 mb-5 pb-4 pt-0 pt-md-3"
                  eventKey="5"
                >
                  {findObject(orderan, 5)}
                </Tab.Pane>
                <Tab.Pane
                  className="px-2 px-lg-0 px-md-4 mt-4 mt-md-1 mb-5 pb-4 pt-0 pt-md-3"
                  eventKey="6"
                >
                  {findObject(orderan, 6)}
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
