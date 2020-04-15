import React, { Component } from 'react';
import { Container, Row, Media, Col, Card, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Head from '../../components/Head';
import HeaderCreateGawean from '../../components/header/HeaderCreateGawean';
import HeaderGawean from '../../components/header/HeaderPartner-3';
import Footer from '../../components/header/Footer';

export default class StepDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: '',
      detailList: [],
      editForm: false,
      index: 1,
      postForm: true,
      editData: [],
      preEditIndex: 0,
      editId: 0
    };
  }

  onSubmitHandle = () => {
    if (this.state.detail === '') {
      alert('All field required');
    } else {
      this.setState({
        detailList: [
          ...this.state.detailList,
          {
            id: this.state.index++,
            detail: this.state.detail
          }
        ]
      });

      this.setState({
        detail: '',
        postForm: false,
        editForm: false
      });
    }
  };

  handleDelete = id => {
    this.setState({
      detailList: this.state.detailList.filter(item => item.id !== id),
      index: this.state.index - 1
    });

    if (this.state.detail === 0) {
      this.setState({ postForm: true });
    }
  };

  handleCancel = () => {
    this.setState({ editForm: false, postForm: false });
  };

  handleGetEdit = item => {
    const id = this.state.detailList.indexOf(item);
    this.setState({
      detail: item.detail,
      preEditIndex: this.state.index
    });

    const arr = {
      id: item.id,
      detail: item.detail
    };

    this.setState({
      editData: arr,
      index: item.id,
      editForm: true,
      editId: id
    });
  };

  handleEdit = id => {
    const arr = {
      id: this.state.editData.id,
      detail: this.state.detail
    };
    this.state.detailList.splice(id, 1, arr);
    this.setState({ editForm: false });
  };

  handleCancelEdit = () => {
    this.setState({
      detail: '',
      index: this.state.preEditIndex,
      editForm: false
    });
  };

  render() {
    // console.log(this.state.index);
    return (
      <div>
        <Head
          title="Detail Gawean - Posting Gawean"
          description="Detail order"
        />
        <HeaderGawean />
        <HeaderCreateGawean step={4} />
        <Container>
          <Row>
            <Col md={8}>
              <div className="content-body border-bottom-0 mt-4">
                <Media>
                  <Media.Body className="description-faq">
                    <p className="fs-16 mb-4 pb-2 font-weight-bold">
                      Beri tahu klien Anda informasi apa saja yang anda perlukan
                      untuk memulai pekerjaan.
                    </p>
                    {this.state.detailList.map((item, i) => (
                      <Card className="mb-4">
                        <Card.Body>
                          <Row className="pb-lg-0" key={i}>
                            <Col lg={8} className="pl-0">
                              <p className="text-dark">{item.detail}</p>
                            </Col>
                            <Col lg={4} className="pr-0">
                              <Row className="pb-lg-0 icon-deskripsi">
                                <FontAwesomeIcon
                                  icon={['far', 'edit']}
                                  onClick={() => this.handleGetEdit(item)}
                                />
                                <FontAwesomeIcon
                                  icon="trash-alt"
                                  onClick={() => this.handleDelete(item.id)}
                                />
                              </Row>
                            </Col>
                          </Row>
                          <div className="mb-3 mb-lg-0 example-input">
                            <input
                              className="text-dark input-custom"
                              placeholder="Masukan file atau gambar anda di sini."
                              value=""
                            />
                            <FontAwesomeIcon icon="paperclip" />
                          </div>
                        </Card.Body>
                      </Card>
                    ))}
                    <p
                      className="add-detail"
                      style={{
                        display: this.state.postForm ? 'none' : 'block'
                      }}
                      onClick={() =>
                        this.setState({
                          postForm: true
                        })
                      }
                    >
                      + Tambahkan persyaratan lain
                    </p>
                    <Card
                      className="mb-4"
                      style={{
                        display:
                          this.state.editForm === false &&
                          this.state.postForm === false
                            ? 'none'
                            : 'block'
                      }}
                    >
                      <Card.Body>
                        <p className="text-dark">
                          Detail yang diperlukan #{this.state.index}
                        </p>
                        <Form.Control
                          as="textarea"
                          rows="3"
                          className="w-100"
                          placeholder="Contoh: logo style, topik, bidang usaha, dll."
                          value={this.state.detail}
                          onChange={e => {
                            this.setState({
                              detail: e.target.value
                            });
                          }}
                        />
                        <div className="clearfix description-faq__input-character mt-2 mb-4">
                          <span className="float-left">Min.20</span>
                          <span className="float-right">0/1200 Karakter</span>
                        </div>
                        <div>
                          <input
                            class="styled-checkbox"
                            id="styled-checkbox-1"
                            type="checkbox"
                            value="value1"
                          />
                          <label for="styled-checkbox-1">
                            Pertanyaan wajib di isi
                          </label>
                        </div>
                        <div className="add__description">
                          {this.state.editForm ? (
                            <span onClick={this.handleCancelEdit}>Batal</span>
                          ) : (
                            <span onClick={this.handleCancel}>Batal</span>
                          )}
                          {this.state.postForm ? (
                            <span onClick={this.onSubmitHandle}>Tambah</span>
                          ) : this.state.editForm ? (
                            <span
                              onClick={() => this.handleEdit(this.state.editId)}
                            >
                              Edit
                            </span>
                          ) : null}
                        </div>
                      </Card.Body>
                    </Card>
                    <Col sm={12} className="px-0">
                      <div className="btn-overview">
                        <div className="spacer"></div>
                        <div className="btn-group">
                          <NavLink
                            to="/posting-gawean/deskripsi-FAQ"
                            className="btn btn-batalkan"
                          >
                            Kembali
                          </NavLink>
                          <NavLink
                            to="/posting-gawean/galeri"
                            className="btn btn-selesai"
                          >
                            Lanjutkan
                          </NavLink>
                        </div>
                      </div>
                    </Col>
                  </Media.Body>
                </Media>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
