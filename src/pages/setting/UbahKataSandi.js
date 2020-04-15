import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class UbahKataSandi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addModalShow: false,
      ModalSelesai: false
    };
  }

  render() {
    let addModalClose = () => this.setState({ addModalShow: false });
    // let CloseSelesai = () => this.setState({ ModalSelesai: false });
    let handleSaveChanges = () => {
      this.setState({
        addModalShow: false
        // ModalSelesai: true
      });
    };

    return (
      <div>
        <div>
          <div className="btn-kata-sandi mt-2 py-1 border rounded-lg justify-content-center text-center">
            <button
              style={{ color: '#979797' }}
              onClick={() => this.setState({ addModalShow: true })}
              href="#"
            >
              Ubah kata sandi
            </button>
          </div>
          <ModalUbahKataSandi
            show={this.state.addModalShow}
            onHide={addModalClose}
            saveChanges={handleSaveChanges}
          />
        </div>
        {/* <div>
                    <div className="btn-kata-sandi mt-2 py-1 border rounded-lg justify-content-center text-center">
                        <a style={{ color: '#979797' }} onClick={() => this.setState({ ModalSelesai: true })} href="#">Cek sandi</a>
                    </div>
                    <Selesai show={this.state.ModalSelesai} onHide={CloseSelesai} />
                </div> */}
      </div>
    );
  }
}

class ModalUbahKataSandi extends Component {
  render() {
    return (
      // <div>
      <Modal
        {...this.props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="align-middle pl-4 pr-4">
          <div style={{ textAlign: 'center' }}>
            <h3 class="mb-2 mt-4">Ubah Kata Sandi</h3>
            <p>
              Mengubah kata sandi secara berkala dapat membantu menjaga keamanan
              akun anda di harisenin.com
            </p>
          </div>

          <small>Masukan Kata Sandi</small>
          <input type="password" className="form-control" />
          <small>Ulangi Kata Sandi</small>
          <input type="password" className="form-control" />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide} variant="outline-secondary">
            Batal
          </Button>
          <button onClick={this.props.saveChanges} className="btn btn-selesai">
            Simpan Perubahan
          </button>
        </Modal.Footer>
      </Modal>
      // </div>
    );
  }
}

// class Selesai extends Component {
//   render() {
//     return (
//       <Modal
//         {...this.props}
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Body className="align-middle pl-4 pr-4">
//           Kata Sandi Berhasil Dibuat
//         </Modal.Body>
//         <Modal.Footer>
//           {/* <Button onClick={this.props.onHide} variant="outline-secondary">Batal</Button> */}
//           {/* <button onClick={this.props.saveChanges} className="btn btn-selesai">Simpan Perubahan</button> */}
//         </Modal.Footer>
//       </Modal>
//     );
//   }
// }
