import React, { Component } from 'react';
import { imagePath } from '../../utils/assetUtils';
import { Col, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import Backdrop from './sidebar/Backdrop';
import { Register } from '../modal/Register';
import { Login } from '../modal/Login';
import SideDrawer from './sidebar/SideDrawer';

export default class HeaderBlank extends Component {
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

    return (
      <div>
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
                <Col lg={5}></Col>
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
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
      </div>
    );
  }
}
