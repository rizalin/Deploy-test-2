import React, { Component } from 'react';
import { Modal, Row, Col, Form, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class SendGawean extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpened: false
    };
  }

  openModal = () => {
    this.setState({
      modalOpened: true
    });
  };

  render() {
    let hideModal = () =>
      this.setState({
        modalOpened: false
      });

    return (
      <div className="px-5 pt-2 pb-3">
        <button
          className={
            this.props.type === 'create'
              ? 'btn btn-selesai w-100'
              : 'btn btn-aktif w-100'
          }
          onClick={this.openModal}
        >
          {this.props.type === 'revision' ? 'Kirim Revisi' : 'Kirim Gawean'}
        </button>
        <Modal
          show={this.state.modalOpened}
          onHide={hideModal}
          centered
          size="lg"
        >
          <Modal.Header closeButton>
            <h4 className="px-2">
              Kirim {this.props.type === 'revision' ? 'Revisi' : 'Gawean'}
            </h4>
          </Modal.Header>
          <Modal.Body className="p-4">
            <p className="text-uppercase font-weight-bolder">
              unggah hasil gaweanmu
            </p>
            <Row>
              <Col lg={3} className="pl-0">
                <div className="upload__button">
                  <input type="file" name="" id="" />
                  Unggah Hasil
                </div>
              </Col>
              <p className="mb-0 d-flex align-items-center ml-4 fs-16">
                <FontAwesomeIcon
                  icon="cloud-download-alt"
                  color="#003BDE"
                  className="mr-2"
                />
                Gaweanmu...SVG (3 MB)
              </p>
            </Row>
            <p className="mt-3">Maksimal besar file 10 MB</p>
            <Row className="mt-3">
              <Col xs={12} lg={7}>
                <form>
                  <Form.Control
                    as="textarea"
                    rows="7"
                    placeholder="Jelaskan hasil kerja anda secara detail"
                  />
                </form>
              </Col>
              <Col xs={12} lg={5}>
                <Card>
                  <Card.Body style={{ backgroundColor: '#e1fff9' }}>
                    <p className="font-weight-bolder">
                      Tambahkan contoh portfolio
                    </p>
                    <p>
                      Kami sarankan untuk menyertakan setidaknya satu file PNG /
                      JPG / audio / video, yang ingin Anda tambahkan ke
                      portofolio.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer className="text-center">
            <div className="mx-auto">
              <button
                className="btn btn-selesai text-capitalize"
                style={{ color: '#fafafa', minWidth: '200px' }}
              >
                {this.props.type === 'revision'
                  ? 'Kirim Revisi'
                  : 'Kirim Gawean'}
              </button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export class SendRevision extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpened: false
    };
  }

  openModal = () => {
    this.setState({
      modalOpened: true
    });
  };

  render() {
    let hideModal = () =>
      this.setState({
        modalOpened: false
      });

    return (
      <div>
        <button
          className="btn btn-aktif text-white float-right ml-3"
          onClick={this.openModal}
        >
          Kirim Revisi
        </button>
        <Modal
          show={this.state.modalOpened}
          onHide={hideModal}
          centered
          size="lg"
        >
          <Modal.Header closeButton>
            <h4 className="px-2">Kirim Revisi</h4>
          </Modal.Header>
          <Modal.Body className="p-4">
            <p className="text-uppercase font-weight-bolder">
              unggah hasil gaweanmu
            </p>
            <Row>
              <Col lg={3} className="pl-0">
                <div className="upload__button">
                  <input type="file" name="" id="" />
                  Unggah Hasil
                </div>
              </Col>
              <p className="mb-0 d-flex align-items-center ml-4 fs-16">
                <FontAwesomeIcon
                  icon="cloud-download-alt"
                  color="#003BDE"
                  className="mr-2"
                />
                Gaweanmu...SVG (3 MB)
              </p>
            </Row>
            <p className="mt-3">Maksimal besar file 10 MB</p>
            <Row className="mt-3">
              <Col xs={12} lg={7}>
                <form>
                  <Form.Control
                    as="textarea"
                    rows="7"
                    placeholder="Jelaskan hasil kerja anda secara detail"
                  />
                </form>
              </Col>
              <Col xs={12} lg={5}>
                <Card>
                  <Card.Body style={{ backgroundColor: '#e1fff9' }}>
                    <p className="font-weight-bolder">
                      Tambahkan contoh portfolio
                    </p>
                    <p>
                      Kami sarankan untuk menyertakan setidaknya satu file PNG /
                      JPG / audio / video, yang ingin Anda tambahkan ke
                      portofolio.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer className="text-center">
            <div className="mx-auto">
              <button
                className="btn btn-selesai text-capitalize"
                style={{ color: '#fafafa', minWidth: '200px' }}
                onClick={hideModal}
              >
                Kirim Revisi
              </button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
