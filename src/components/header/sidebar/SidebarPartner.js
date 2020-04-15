import React, { Component } from 'react';
import { imagePath } from '../../../utils/assetUtils';

import './side-drawer.scss';
import { NavLink } from 'react-router-dom';
import { Media } from 'react-bootstrap';

class SideDrawerPartner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accordion: false
    };
  }

  render() {
    let drawerClasses = 'side-drawer';
    if (this.props.show) {
      drawerClasses = 'side-drawer open';
    }

    return (
      <nav className={drawerClasses}>
        <a href="/" className="mb-2 navbar-brand">
          <img src={imagePath('logo@3x.png')} alt="" className="img-fluid" />
        </a>
        <hr />
        <div className="sidebar-content">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Media className="pb-0 d-flex align-items-center">
                <img
                  src={imagePath('speaker.jpg')}
                  alt="profile"
                  className="img-fluid rounded-circle mr-3"
                  width="45px"
                />
                <Media.Body>
                  <p className="mb-0">John Doe</p>
                  <p className="mb-0 small">Junior Partner</p>
                </Media.Body>
              </Media>
            </li>
            <li className="green">
              <NavLink to="/">tips sukses</NavLink>
            </li>
          </ul>
          <hr className="my-0" />
          <ul className="nav flex-column">
            <li>
              <NavLink to="/partner/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/partner/inbox">Inbox</NavLink>
            </li>
            <li>
              <NavLink to="/partner/orderan">Orderan</NavLink>
            </li>
            <li>
              <NavLink to="/partner/gawean">Gawean</NavLink>
            </li>
            <li>
              <NavLink to="/partner/saldo">saldo</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default SideDrawerPartner;

//
