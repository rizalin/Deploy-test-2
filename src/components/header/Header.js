import React, { Component } from 'react';
import { Navbar, Col, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { imagePath } from '../../utils/assetUtils';
import SideDrawer from './sidebar/SideDrawer';
import Backdrop from './sidebar/Backdrop';
import { Register } from '../modal/Register';
import { Login } from '../modal/Login';

import './sidebar/drawerToggle.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOpen: false
    };
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  drawerOpenHandler = () => {
    this.setState({ sideDrawerOpen: true });
  };
  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    const toolbar = (
      <div className="toolbar">
        <nav className="toolbar__navigation">
          <Navbar expand="lg" className="px-lg-4" id="navbarMain">
            <NavLink to="/" className="d-none d-lg-block">
              <img
                src={imagePath('logo@3x.png')}
                alt=""
                style={{ maxWidth: '190px' }}
              />
            </NavLink>
            <div className="d-flex" id="main-navbar">
              <button
                className="toggle-button"
                onClick={this.drawerOpenHandler}
              >
                <div className="toggle-button__line"></div>
                <div className="toggle-button__line"></div>
                <div className="toggle-button__line"></div>
              </button>
              <Col className="search-bar col-md mr-lg-3" lg={5}>
                <Form inline className="my-2 my-lg-0">
                  <div className="flex-fill mr-lg-3">
                    <input
                      type="search"
                      className="form-control w-100"
                      placeholder="Solusi apa yang kamu butuhkan?"
                    />
                  </div>
                  <NavLink
                    to="/"
                    className="btn-selesai btn my-2 my-sm-0 flex-fill d-none d-lg-block"
                  >
                    Cari
                  </NavLink>
                </Form>
              </Col>
              <ul className="navbar-nav ml-auto d-flex flex-row justify-content-end align-items center">
                <li className="nav-item d-none d-lg-block">
                  <NavLink
                    to="/tips-sukses"
                    className="nav-link px-xl-4 px-lg-3 px-sm-2 px-1 text-success"
                  >
                    tips sukses
                  </NavLink>
                </li>
                <li className="nav-item d-none d-lg-block">
                  <NavLink
                    to="/menjadi-partner"
                    className="nav-link px-xl-4 px-lg-3 px-sm-2 px-1"
                  >
                    menjadi partner
                  </NavLink>
                </li>
                <Login />
              </ul>
              <Register />
            </div>
          </Navbar>
        </nav>
      </div>
    );

    return (
      <div>
        {toolbar}
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
      </div>
    );
  }
}
