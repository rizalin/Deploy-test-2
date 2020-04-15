import React, { Component } from 'react';
import { Navbar, OverlayTrigger, Col, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { imagePath } from '../../utils/assetUtils';
import SideDrawer from './sidebar/SideDrawer';
import Backdrop from './sidebar/Backdrop';
import { PopoverNotification, AccountPopover } from './PopoverNotif';

import './sidebar/drawerToggle.scss';
import CategoryBar from './CategoryBar';

export default class HeaderPartner extends Component {
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
              {/* Image large view */}

              <NavLink to="/" className="d-none d-lg-block">
                <img
                  src={imagePath('logo@3x.png')}
                  alt=""
                  style={{ maxWidth: '190px' }}
                />
              </NavLink>
              <div className="d-flex" id="main-navbar">
                {/* Sidebar responsive button toggler */}

                <button
                  className="toggle-button"
                  onClick={this.drawerOpenHandler}
                >
                  <div className="toggle-button__line"></div>
                  <div className="toggle-button__line"></div>
                  <div className="toggle-button__line"></div>
                </button>

                {/* Header from search bar */}
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
                <ul className="navbar-nav navbar-login">
                  <li className="nav-item d-none d-lg-block">
                    <NavLink
                      to="/tips-sukses"
                      className="nav-link px-lg-3 px-sm-2 px-1 text-success"
                    >
                      tips sukses
                    </NavLink>
                  </li>

                  {/* Notification */}
                  <li className="nav-item">
                    <OverlayTrigger
                      trigger="click"
                      placement="bottom"
                      overlay={PopoverNotification}
                    >
                      <div className="dropdown px-lg-3 px-md-2 px-1">
                        <span className="badge badge-pill">5</span>
                        <FontAwesomeIcon
                          icon={['far', 'bell']}
                          className="text-warning"
                        />
                      </div>
                    </OverlayTrigger>
                  </li>
                  <li className="nav-item hasDivider">
                    <div className="dropdown px-lg-3 px-md-2 px-1">
                      <span className="badge badge-pill">5</span>
                      <FontAwesomeIcon
                        icon={['far', 'envelope']}
                        className="text-primary"
                      />
                    </div>
                  </li>

                  {/* Link to dashboard */}
                  <li className="nav-item d-none d-lg-block">
                    <NavLink
                      to="/partner/dashboard"
                      className="nav-link px-lg-3 px-sm-2 px-1"
                    >
                      <img
                        src={imagePath(`harisenin-icon.jpg`)}
                        alt=""
                        className="img-fluid rounded-circle nav-img-avatar mr-2"
                      />
                      Partner
                    </NavLink>
                  </li>

                  {/* Account popover */}
                  <li className="nav-item d-none d-lg-block">
                    <OverlayTrigger
                      trigger="click"
                      placement="bottom"
                      overlay={AccountPopover}
                    >
                      <img
                        src={imagePath(`speaker.jpg`)}
                        alt=""
                        className="img-fluid rounded-circle nav-img-avatar"
                        style={{ maxHeight: '46px' }}
                      />
                    </OverlayTrigger>
                  </li>
                </ul>
              </div>
            </Navbar>
          </nav>
        </div>
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <CategoryBar />
      </div>
    );
  }
}
