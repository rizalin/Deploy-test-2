import React, { Component } from 'react';
import { Modal, Row, Col, Form } from 'react-bootstrap';
import Select from 'react-select';

import { NavLink } from 'react-router-dom';
import { imagePath } from '../../utils/assetUtils';

const CODE_LENGTH = new Array(6).fill(0);

export class AddBank extends Component {
  otpInput = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      addBankOpened: false,
      thisBankOpened: false,
      verificationOpened: false,
      doneNotification: false,
      value: '',
      focused: false
    };
  }

  handleClick = () => {
    this.otpInput.current.focus();
  };
  handleFocus = () => {
    this.setState({ focused: true });
  };
  handleBlur = () => {
    this.setState({
      focused: false
    });
  };

  handleKeyUp = e => {
    if (e.key === 'Backspace') {
      this.setState(state => {
        return {
          value: state.value.slice(0, state.value.length - 1)
        };
      });
    }
  };

  handleChange = e => {
    const value = e.target.value;

    this.setState(state => {
      if (state.value.length >= CODE_LENGTH.length) return null;
      return {
        value: (state.value + value).slice(0, CODE_LENGTH.length)
      };
    });
  };

  openModal = modalType => () => {
    switch (modalType) {
      case 'addBank':
        this.setState({
          addBankOpened: true
        });
        break;
      case 'thisBank':
        this.setState({
          thisBankOpened: true,
          addBankOpened: false
        });
        break;
      case 'verification':
        this.setState({
          addBankOpened: false,
          thisBankOpened: false,
          verificationOpened: true
        });
        break;
      case 'done':
        this.setState({
          verificationOpened: false,
          doneNotification: true
        });
        break;
      default:
        break;
    }
  };

  closeModal = modalType => () => {
    switch (modalType) {
      case 'addBank':
        this.setState({
          addBankOpened: false
        });
        break;
      case 'thisBank':
        this.setState({
          addBankOpened: true,
          thisBankOpened: false
        });
        break;
      case 'verification':
        this.setState({
          verificationOpened: false
        });
        break;
      default:
        break;
    }
  };

  render() {
    const { value, focused } = this.state;
    const otpValues = value.split('');

    const selectedIndex =
      otpValues.length < CODE_LENGTH.length
        ? otpValues.length
        : CODE_LENGTH.length - 1;

    const hideInput = !(otpValues.length < CODE_LENGTH.length);
    console.log(this.state.value);

    let hideAllModal = () =>
      this.setState({
        addBankOpened: false,
        thisBankOpened: false,
        verificationOpened: false,
        doneNotification: false
      });
    let bank = [
      {
        value: 1,
        label: 'BCA'
      },
      {
        value: 2,
        label: 'Mandiri'
      },
      {
        value: 3,
        label: 'BNI'
      }
    ];

    return (
      <div style={{ width: 'fit-content' }}>
        <button
          className="btn btn-aktif mr-2"
          onClick={this.openModal('addBank')}
        >
          Tambah Rekening
        </button>
        <Modal
          show={this.state.addBankOpened}
          onHide={hideAllModal}
          centered
          className="add-bank__modal"
        >
          <Modal.Body>
            <Col className="text-center">
              <h4 className="font-weight-bold">Tambah Rekening Bank</h4>
              <p>
                Rekening bank yang kamu tambahkan bisa kamu gunakan untuk
                penarikan saldo
              </p>
            </Col>
            <Col>
              <p className="font-weight-bold">Nama Bank</p>
              <Select
                placeholder="Pilih Nama Bank"
                options={bank}
                classNamePrefix="select3"
              />
            </Col>
            <Col>
              <p className="font-weight-bold">Nomor Rekening</p>
              <Form>
                <Form.Group as={Row}>
                  <Col sm={9} className="pl-0 pb-2">
                    <Form.Control
                      as="input"
                      type="number"
                      placeholder="Isi nomor rekening"
                    />
                  </Col>
                  <Col sm={3} className="px-0">
                    <button className="btn btn-selesai w-100">Periksa</button>
                  </Col>
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <p className="font-weight-bold">Nama pemilik rekening</p>
              <Form>
                <Form.Group>
                  <Form.Control as="input" />
                </Form.Group>
              </Form>
            </Col>
            <Row>
              <Col sm={9} className="pl-0 pb-2">
                Dengan melanjutkan, kamu menyetujui{' '}
                <NavLink to="/">Syarat & Ketentuan</NavLink> yang berlaku{' '}
              </Col>
              <Col sm={3} className="px-0">
                <button
                  className="btn btn-selesai w-100"
                  onClick={this.openModal('thisBank')}
                >
                  Simpan
                </button>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
        <Modal show={this.state.thisBankOpened} onHide={hideAllModal} centered>
          <Modal.Body>
            <Col className="text-center">
              <h4 className="font-weight-bold">Tambah Rekening Bank</h4>
              <p>
                Kamu akan menambahkan rekening dengan Nomor 1207355314 a.n John
                Doe
              </p>
            </Col>
            <p className="text-center">
              Kami akan mengirimkan kode verifikasi ke email anda
            </p>
            <Row className="mx-auto btn-bank">
              <button
                className="btn btn-white"
                onClick={this.closeModal('thisBank')}
              >
                Batal
              </button>
              <button
                className="btn btn-selesai"
                onClick={this.openModal('verification')}
              >
                Kirim
              </button>
            </Row>
          </Modal.Body>
        </Modal>
        <Modal
          show={this.state.verificationOpened}
          onHide={hideAllModal}
          centered
        >
          <Modal.Body>
            <Col className="text-center">
              <h4 className="font-weight-bold">Masukkan kode verifikasi</h4>
              <p>
                Kode verifikasi telah dikirimkan melalui email ke
                johndoe@gmail.com
              </p>
              <small>Kode verifikasi</small>
              <div className="otp-wrap" onClick={this.handleClick}>
                <input
                  value=""
                  ref={this.otpInput}
                  onChange={this.handleChange}
                  onKeyUp={this.handleKeyUp}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  className="otp-input"
                  type="number"
                  style={{
                    width: '32px',
                    top: '0px',
                    bottom: '0px',
                    left: `${selectedIndex * 32}px`,
                    opacity: hideInput ? 0 : 1
                  }}
                />
                {CODE_LENGTH.map((v, index) => {
                  const selected = otpValues.length === index;
                  const filled =
                    otpValues.length === CODE_LENGTH.length &&
                    index === CODE_LENGTH.length - 1;

                  return (
                    <div className="otp-display">
                      {otpValues[index]}
                      {(selected || filled) && focused && (
                        <div className="otp-shadows" />
                      )}
                    </div>
                  );
                })}
              </div>
              <div>
                <button
                  className="btn btn-selesai w-100 mb-2"
                  onClick={this.openModal('done')}
                >
                  Verifikasi
                </button>
              </div>
              <small>
                Belum terima kode? <br />{' '}
                <NavLink to="/">Kirim ulang kode</NavLink>
              </small>
              <small></small>
            </Col>
          </Modal.Body>
        </Modal>
        <Modal show={this.state.doneNotification} onHide={hideAllModal}>
          <Modal.Body className="modal-done">
            <img
              src={imagePath(`check.png`)}
              alt=""
              style={{ maxHeight: '100px' }}
              className="img-fluid"
            />
            <h4 className="mt-2">Rekening baru berhasil ditambahkan</h4>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
