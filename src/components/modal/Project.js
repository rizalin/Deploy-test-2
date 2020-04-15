import React, { Component } from 'react';
import { Modal, Container, Row, Col } from 'react-bootstrap';

import { imagePath } from '../../utils/assetUtils';
import { NavLink } from 'react-router-dom';

export class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addModalShow: false
    };
  }

  render() {
    let addModalClose = () => this.setState({ addModalShow: false });
    // let isLogin = localStorage.getItem("isLogin")
    // console.log(localStorage)
    return (
      <div className="d-flex flex-row-reverse justify-content-center justify-content-md-start mt-4">
        {/* <a
          href="#"
          className="btn btn-aktif text-white"
          onClick={() => this.setState({ addModalShow: true })}
        >
          Kirim Detail
        </a> */}
        <span
          href="#"
          className="btn btn-aktif text-white"
          onClick={() => this.setState({ addModalShow: true })}
        >
          Kirim Detail
        </span>
        <LoginModal show={this.state.addModalShow} onHide={addModalClose} />
      </div>
    );
  }
}

class LoginModal extends Component {
  handleLogin = () => {
    window.location = '/';
  };

  render() {
    return (
      <div>
        <Modal
          {...this.props}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body className="align-middle pl-4 pr-4 user-modal">
            <Container>
              <Row className="text-center">
                <Col className="pt-3 pb-3" xs={12}>
                  <img
                    src={imagePath(`check.png`)}
                    alt=""
                    style={{ maxHeight: '100px' }}
                    className="img-fluid"
                  />
                </Col>
                <Col className="text-dark font-weight-bold" xs={12}>
                  <p style={{ fontSize: '16px' }}>
                    Terima kasih <br></br> Partner kami akan segera bekerja
                  </p>
                  <NavLink
                    to="/buyer-order-detail"
                    className="btn btn-aktif w-50 mb-3"
                  >
                    Lanjutkan
                  </NavLink>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
