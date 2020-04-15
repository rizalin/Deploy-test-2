import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCookies } from 'react-cookie';

export function Login() {
  const [show, setShow] = useState(false);
  const [cookie, setCookie] = useCookies(['isLogin']);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLogin = () =>
    setCookie('isLogin', true, { path: '/', maxAge: 3600 });

  return (
    <li className="nav-item align-self-center">
      <span
        onClick={handleShow}
        className="nav-link px-xl-4 px-lg-3 px-sm-2 px-1 "
        style={{ cursor: 'pointer', color: '#131415', fontWeight: 600 }}
      >
        masuk
      </span>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header className="mx-auto pb-0 border-0">
          <Modal.Title>Masuk ke Harisenin</Modal.Title>
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
              placeholder="Masukan e-mail / username anda"
            ></Form.Control>
            <Form.Control
              type="password"
              placeholder="Masukan password anda"
              className="mt-3"
            ></Form.Control>
            <a
              className="btn-selesai mt-3 form-control text-white"
              style={{ textAlign: 'center' }}
              type="submit"
              onClick={handleLogin}
              href="/"
            >
              Masuk
            </a>
            <div className="d-flex justify-content-between mt-3">
              <Form.Check type="checkbox" label="Ingat Saya?" />
              <a href="/">Lupa Password?</a>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="footer-daftar">
            <p style={{ marginRight: '0.4rem' }}>Belum punya akun? </p>
            <a href="/"> Daftar</a>
          </div>
        </Modal.Footer>
      </Modal>
    </li>
  );
}
