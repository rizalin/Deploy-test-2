import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

import { imagePath } from '../../utils/assetUtils';

export default class Footer extends Component {
  render() {
    return (
      <div className="container-fluid p-sm-5 c-footer">
        <Row className="justify-content-center pt-md-5 mb-md-5 pb-lg-5 text-capitalize">
          <Col className="d-none d-lg-block" xs={6} sm={4} lg={3}>
            <img
              src={imagePath('logo@3x.png')}
              alt="harisenin.com logo"
              style={{ maxWidth: '190px' }}
            />
            <small className="d-block mt-3 text-muted">© 2017-2019</small>
          </Col>
          <Col xs={6} sm={4} lg={2}>
            <h5>tentang kami</h5>
            <ul className="list-unstyled text-small">
              <li>
                <NavLink to="/" className="text-muted">
                  Karir
                </NavLink>
              </li>
              <li>
                <NavLink to="/kebijakan-privasi" className="text-muted">
                  Kebijakan Privasi
                </NavLink>
              </li>
              <li>
                <NavLink to="/syarat-ketentuan" className="text-muted">
                  Syarat dan Ketentuan
                </NavLink>
              </li>
            </ul>
          </Col>
          <Col xs={6} sm={4} lg={2}>
            <h5>bantuan</h5>
            <ul className="list-unstyled text-small">
              <li>
                <NavLink to="/" className="text-muted">
                  Bantuan & FAQ{' '}
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="text-muted">
                  Berjualan di harisenin.com
                </NavLink>
              </li>
            </ul>
          </Col>
          <Col xs={6} sm={4} lg={2}>
            <h5>komunitas</h5>
            <ul className="list-unstyled text-small">
              <li>
                <NavLink to="/" className="text-muted">
                  Event
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="text-muted">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="text-muted">
                  Forum
                </NavLink>
              </li>
            </ul>
          </Col>
          <Col xs={6} sm={4} lg={2}>
            <h5 className="d-none d-lg-block">sosial media</h5>
            <Row className="pt-50-d-none -d-lg-flex" noGutters>
              <Col lg={3} xs={3}>
                <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" />
              </Col>
              <Col lg={3} xs={3}>
                <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
              </Col>
              <Col lg={3} xs={3}>
                <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
              </Col>
              <Col lg={3} xs={3}>
                <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
              </Col>
            </Row>
          </Col>
          <Col className="d-lg-none" xs={12}></Col>
        </Row>
      </div>
    );
  }
}
