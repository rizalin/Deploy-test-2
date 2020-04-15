import React, { Component } from 'react';
import { Modal, Button, Form, NavLink } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addModalShow: false
    };
  }

  render() {
    let addModalClose = () => this.setState({ addModalShow: false });
    return (
      <div className="">
        {' '}
        <button
          className="btn btn-register my-2 my-sm-0 flex-fill"
          onClick={() => this.setState({ addModalShow: true })}
        >
          Daftar
        </button>
        <RegisterModal show={this.state.addModalShow} onHide={addModalClose} />
      </div>
    );
  }
}

class RegisterModal extends Component {
  render() {
    return (
      <div>
        <Modal
          {...this.props}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header className="mx-auto pb-0 border-0">
            <Modal.Title>Bergabung dengan Harisenin</Modal.Title>
          </Modal.Header>
          <Modal.Body className="align-middle pl-4 pr-4 user-modal">
            <div>
              <Button className="form-control button-linkedin">
                <FontAwesomeIcon
                  icon={['fab', 'linkedin']}
                  style={{ fontSize: '28px' }}
                />
                <span
                  className="mt-1"
                  style={{ fontSize: '14px', marginLeft: '1rem' }}
                >
                  Lanjutkan dengan LinkedIn
                </span>
              </Button>
              <Button
                className="form-control button-google"
                style={{ padding: '7px 7px' }}
              >
                <div className="align-middle">
                  <img
                    src="https://pngimg.com/uploads/google/google_PNG19635.png"
                    alt="google"
                    height="28px"
                    width="28px"
                  />
                  <span style={{ color: '#545870', marginLeft: '1.1rem' }}>
                    Lanjutkan dengan Google
                  </span>
                </div>
              </Button>
              <div className="divider">
                <span>atau</span>
              </div>
            </div>
            <div className="sign-up-form">
              <Form.Control
                type="email"
                placeholder="Masukan e-mail anda"
                className="mb-3"
              ></Form.Control>
              <Form.Control
                type="text"
                placeholder="Masukan username anda"
                className="mb-3"
              ></Form.Control>
              <Form.Control
                type="password"
                placeholder="Masukan password anda"
                className="mb-3"
              ></Form.Control>
              <button
                className="btn-selesai mt-3 form-control text-white"
                type="submit"
              >
                Daftar Sekarang
              </button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="footer-daftar">
              <p style={{ margin: '0px', alignSelf: 'center' }}>Punya akun? </p>
              <NavLink to="/"> Masuk</NavLink>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
