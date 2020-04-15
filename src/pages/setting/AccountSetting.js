import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { Row, Col, Card, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import HeaderNavbar from '../../components/header/HeaderNav';
import Head from './../../components/Head';
import Footer from '../../components/header/Footer';
import { imagePath } from '../../utils/assetUtils';
import { UbahKataSandi } from './UbahKataSandi';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios'

class AccountSetting extends Component {
  constructor(props) {
    super(props);
    // this.state = {};
    this.state = { isAuthenticated: false, user: null, token: '' };
  }

  logout = () => {
    this.setState({ isAuthenticated: false, token: '', user: null })
  };


  googleResponse = (response) => {
    // console.log(response);
    const tokenBlob = new Blob([JSON.stringify({ access_token: response.accessToken }, null, 2)], { type: 'application/json' });
    const options = {
      method: 'POST',
      body: tokenBlob,
      mode: 'cors',
      cache: 'default'
    };
    fetch('http://localhost:4000/api/v1/auth/google', options).then(r => {
      const token = r.headers.get('x-auth-token');
      r.json().then(user => {
        if (token) {
          this.setState({ isAuthenticated: true, user, token })
        }
      });
    })
    console.log(response)
  };
  onFailure = (error) => {
    alert(error);
  };
  testLogin = () => {
    axios.get('http://localhost:3333/login/google')
      .then(response =>
        console.log(response))
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <div>
        <Head title="Setting Akun" description="Description" />
        <HeaderNavbar />

        <div className="container-fluid setting-content">
          <div className="px-2 px-lg-5 mb-4">
            <Row>
              <Col xs={2} className="d-none d-lg-block">
                <p className="setting-sidebar-title">Pengaturan</p>
                <ul className="nav flex-column setting-sidebar-content">
                  <li className="nav-item">
                    <span className="nav-link font-weight-bold">
                      Biodata Diri
                    </span>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/partner/pengaturan/notifikasi"
                      style={{ color: '#131415' }}
                    >
                      Notifikasi
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <a href="#"
                      className="nav-link"
                      style={{ color: '#131415' }}
                      onClick={this.testLogin}
                    >
                      Test Login
                    </a>
                  </li>
                  <li className="nav-item">

                    <GoogleLogin
                      clientId={'478635685677-gqjvi156geefi36qh4bibm86r5f0oi7c.apps.googleusercontent.com'}
                      buttonText="Login"
                      onSuccess={this.googleResponse}
                      onFailure={this.onFailure}
                    />
                  </li>
                </ul>
              </Col>

              <BiodataDiri />

            </Row>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default AccountSetting;

class BiodataDiri extends Component {
  render() {
    return (
      <Col xs={12} lg={10}>
        <Card>
          <div className="card-body">
            <Row>
              <Col lg={4}>
                <div className="card-profile border rounded-lg">
                  <div className="d-flex justify-content-center text-center">
                    <div className="p-1">
                      <img
                        src={imagePath('img-avatar.png')}
                        alt=""
                        className="img-fluid rounded-circle mt-4 mb-4"
                      />

                      <div className="border rounded-lg custom-file-upload">
                        <label
                          for="file-upload"
                          className="justify-content-center"
                        >
                          Pilih Foto
                        </label>
                        <input
                          type="file"
                          name="pilih-photo"
                          id="file-upload"
                        />
                      </div>
                      <p>
                        Besar file maksimum 5MB
                        <br />
                        File: .JPG, .JPEG, .PNG
                      </p>
                    </div>
                  </div>
                </div>
                <UbahKataSandi />
              </Col>
              <Col lg={8}>
                <p className="text-akun">Biodata Diri</p>
                <Form>
                  <div className="form-group row mt-3">
                    <Col sm={3}>
                      <label
                        for="inputName"
                        className="text-akun col-form-label"
                      >
                        Nama
                      </label>
                    </Col>
                    <Col sm={6}>
                      <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        value="Jhon Doe"
                      />
                    </Col>
                  </div>
                  <div className="form-group row mt-3">
                    <Col sm={3}>
                      <label
                        for="inputEmail"
                        className="text-akun col-form-label"
                      >
                        Email
                      </label>
                    </Col>
                    <Col sm={6}>
                      <input
                        type="email"
                        disabled
                        className="form-control"
                        id="inputEmail"
                        value="jhondoe@gmail.com"
                      />
                    </Col>
                    <Col sm={3}>
                      <button
                        className="btn"
                        disabled
                        style={{
                          minHeight: '1rem',
                          opacity: '1',
                          backgroundColor: '#0dad8e',
                          color: '#ffffff'
                        }}
                      >
                        Terverifikasi
                      </button>
                    </Col>
                  </div>
                  <div className="form-group row mt-3">
                    <Col sm={3}>
                      <label
                        for="inputNoHp"
                        className="text-akun col-form-label"
                      >
                        No. HP
                      </label>
                    </Col>
                    <Col sm={6}>
                      <input
                        type="text"
                        className="form-control"
                        id="inputNoHp"
                        value="085311232427"
                      />
                      {/* <small className="text-capitalize">Untuk kelancaran transaksi, Silahkan verifikasi nomor Ponsel Anda</small> */}
                    </Col>
                  </div>
                  <div className="form-group row mt-3 ">
                    <Col sm={3}>
                      <label
                        for="inputStatus"
                        className="text-akun col-form-label"
                      >
                        Status &nbsp;
                        <FontAwesomeIcon
                          icon={['fas', 'circle']}
                          style={{ color: '#0dad8e', fontSize: '10px' }}
                        />
                      </label>
                    </Col>
                    <Col sm={4}>
                      <select className="form-control custom-select w-100">
                        <option>Atur Offline untuk</option>
                        <option>1 jam</option>
                        <option>1 hari</option>
                        <option>1 minggu</option>
                        <option>Selamanya</option>
                      </select>
                    </Col>
                  </div>
                  <div className="form-group row mt-3">
                    <Col sm={12}>
                      <button
                        style={{ float: 'right' }}
                        className="text-capitalize btn btn-selesai"
                      >
                        simpan pengaturan
                      </button>
                    </Col>
                  </div>
                </Form>
              </Col>
            </Row>
          </div>
        </Card>
      </Col>
    );
  }
}
