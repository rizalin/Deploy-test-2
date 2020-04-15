import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

export class ModalPersonalInfo extends Component {
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
          className="btn btn-selesai btn-lg text-white d-block mt-3 d-md-inline-block"
          style={{
            fontSize: '14px',
            display: 'flex',
            flexDirection: 'row',
            float: 'right'
          }}
          onClick={() => this.setState({ addModalShow: true })}
        >
          Simpan dan lanjutkan
        </button>
        <ModalPersonalInfomodal
          show={this.state.addModalShow}
          onHide={addModalClose}
        />
      </div>
    );
  }
}

class ModalPersonalInfomodal extends Component {
  render() {
    return (
      // <div>
      <Modal
        {...this.props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body
          className="align-middle pl-4 pr-4"
          style={{ textAlign: 'center' }}
        >
          {/* <Row> */}
          {/* <Col md={4}></Col> */}
          {/* <Col md={4}> */}
          <FontAwesomeIcon icon={['far', 'gem']} size="3x" className="mt-4" />
          {/* </Col> */}
          {/* <Col md={3}></Col> */}
          {/* </Row> */}
          <h3 className="mb-4">All Done!</h3>
          <p style={{ textAlign: 'center' }}>
            Akun kamu akan aktif dalam 24 Jam setelah tim kami melakukan
            validasi
          </p>
          <NavLink
            to="/partner/dashboard"
            className="btn btn-selesai btn-md text-white"
          >
            Finished
          </NavLink>
        </Modal.Body>
      </Modal>
      // </div>
    );
  }
}
