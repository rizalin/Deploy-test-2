import React, { Component } from 'react';
import { Modal, Row, Col, Form } from 'react-bootstrap';

export class Withdraw extends Component {
  otpInput = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      withdrawOpened: false,
      processOpened: false
    };
  }

  openModal = modalType => () => {
    switch (modalType) {
      case 'addBank':
        this.setState({
          withdrawOpened: true
        });
        break;
      case 'process':
        this.setState({
          processOpened: true,
          withdrawOpened: false
        });
        break;
      default:
        break;
    }
  };

  render() {
    let hideAllModal = () =>
      this.setState({
        withdrawOpened: false,
        processOpened: false
      });

    return (
      <div style={{ width: 'fit-content' }}>
        <button className="btn btn-selesai" onClick={this.openModal('addBank')}>
          Tarik Dana
        </button>
        <Modal
          show={this.state.withdrawOpened}
          onHide={hideAllModal}
          centered
          className="add-bank__modal"
        >
          <Modal.Body>
            <Col className="text-center">
              <h4 className="font-weight-bold">Tarik dana</h4>
              <p>
                Permintaan Tarik dana akan diproses dalam waktu 1x24 jam hari
                kerja Bank (Tidak termasuk hari Sabtu/Minggu/Libur)
              </p>
            </Col>
            <Col className>
              <p className="font-weight-bold">
                Dana yang tersedia untuk ditarik
              </p>
              <Form.Control plaintext readOnly defaultValue="Rp1.000.000.000" />
            </Col>
            <Col>
              <p className="font-weight-bold">
                Dana yang tersedia untuk ditarik
              </p>
              <Form.Control
                as="input"
                type="number"
                placeholder="Minimal Rp.100.000"
              />
            </Col>
            <Col>
              <p className="font-weight-bold">Nomor Rekening</p>
              <Form.Control
                plaintext
                readOnly
                defaultValue="999999999 a.n John Doe"
              />
            </Col>
            <p>
              Demi kelancaran proses pencairan dana mohon pastikan nama dan
              nomor rekening yang dicantumkan sudah sesuai dengan buku tabungan
              Anda
            </p>
            <Col>
              <p className="font-weight-bold ">Verifikasi OTP Melalui</p>
              <Form>
                <Form.Group as={Row} className="justify-content-between">
                  <Col sm={7} className="pl-0 pb-2">
                    <Form.Control
                      as="input"
                      type="number"
                      placeholder="_ _ _ _ _ _"
                    />
                  </Col>
                  <Col sm={4} className="px-0">
                    <button className="btn btn-selesai w-100">
                      Kirim Kode
                    </button>
                  </Col>
                </Form.Group>
              </Form>
              <small>
                Klik tombol "kirim kode" dan masukkan 6 digit kode OTP yang anda
                terima
              </small>
            </Col>

            <Row className="btn-withdraw">
              <Col className="d-flex justify-content-start">
                <button className="btn btn-batalkan" onClick={hideAllModal}>
                  Batal
                </button>
              </Col>
              <Col className="d-flex justify-content-end">
                <button
                  className="btn btn-selesai"
                  onClick={this.openModal('process')}
                >
                  Tarik
                </button>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
        <Modal show={this.state.processOpened} onHide={hideAllModal} size="md">
          <Modal.Body className="modal-done">
            <h4 className="mt-2 font-weight-bold">Tarik Dana</h4>
            <p>
              Mohon tunggu paling lambat 1x24 jam dana Anda akan masuk ke
              rekening Anda.
            </p>
            <button className="btn btn-selesai w-50" onClick={hideAllModal}>
              Selesai
            </button>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
