import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Media,
  Form,
  Accordion,
  useAccordionToggle
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

import Head from '../../components/Head';
import HeaderCreateGawean from '../../components/header/HeaderCreateGawean';
import HeaderGawean from '../../components/header/HeaderPartner-3';
import Footer from '../../components/header/Footer';

export default class StepDeskripsi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: '',
      answer: '',
      faqList: [],
      index: 1,
      addFaq: false
    };
  }

  onSubmitHandle = () => {
    if (this.state.question === '' || this.state.answer === '') {
      alert('All field required');
    } else {
      this.setState({
        faqList: [
          ...this.state.faqList,
          {
            id: this.state.index++,
            question: this.state.question,
            answer: this.state.answer
          }
        ]
      });

      this.setState({
        question: '',
        answer: ''
      });
    }
  };

  handleAddFaq = () => {
    this.setState({
      addFaq: true
    });
  };

  handleCloseFaqAdd = () => {
    this.setState({
      addFaq: false
    });
  };

  handleDelete = id => {
    this.setState({
      faqList: this.state.faqList.filter(item => item.id !== id)
    });
  };

  handleEditFaq = (i, id) => {
    const arr = {
      id: id,
      question: this.state.question,
      answer: this.state.answer
    };
    this.state.faqList.splice(i, 1, arr);

    this.setState({
      question: '',
      answer: ''
    });
  };

  handleCancel = () => {
    this.setState({
      question: '',
      answer: ''
    });
  };

  render() {
    console.log(this.state.faqList);
    return (
      <div>
        <Head
          title="Deskripsi dan FAQ - Posting Gawean"
          description="Detail order"
        />
        <HeaderGawean />
        <HeaderCreateGawean step={3} />
        <Container className="c-content-desc">
          <Row>
            <Col md={8}>
              <div className="content-header mb-3">
                <Row>
                  <Col xs={12} className="px-0">
                    <Media>
                      <Media.Body>
                        <h3>Deskripsi</h3>
                      </Media.Body>
                    </Media>
                  </Col>
                </Row>
              </div>
              <div className="mb-0">
                <Row className="pb-5">
                  <Col xs={12} className="px-0">
                    <Media>
                      <Media.Body className="description-faq">
                        <p className="text-dark">
                          Jelaskan secara singkat Gig anda
                        </p>
                        <textarea rows="6" className="w-100"></textarea>
                        <div className="clearfix description-faq__input-character mt-2">
                          <span className="float-left">Min.120</span>
                          <span className="float-right">0/1200 Karakter</span>
                        </div>
                      </Media.Body>
                    </Media>
                  </Col>
                </Row>
              </div>
              <div className="content-header mb-md-3 pt-md-3 pb-1">
                <Row>
                  <Col xs={12} className="px-0">
                    <Media>
                      <Media.Body className="d-flex justify-content-between add-faq__header">
                        <h3>FAQ</h3>
                        <span onClick={this.handleAddFaq}>Tambah</span>
                      </Media.Body>
                    </Media>
                  </Col>
                </Row>
              </div>
              <div className="mb-0">
                <Row className="pb-5">
                  <Col xs={12} className="px-0">
                    <Media>
                      <Media.Body className="FAQ-header">
                        <p className="text-dark">
                          Tambahkan Pertanyaan & Jawaban untuk klien Anda.
                        </p>
                        <p
                          className="text-dark"
                          style={{
                            display: this.state.addFaq ? 'none' : 'block'
                          }}
                          onClick={this.handleAddFaq}
                        >
                          + Tambah
                        </p>
                      </Media.Body>
                    </Media>
                    <Form
                      className="add-faq__input"
                      style={{ display: this.state.addFaq ? 'block' : 'none' }}
                    >
                      <Form.Control
                        type="input"
                        placeholder="Tambahkan Pertanyaan untuk klienmu"
                        value={this.state.question}
                        onChange={e => {
                          this.setState({
                            question: e.target.value
                          });
                        }}
                      />
                      <Form.Control
                        as="textarea"
                        placeholder="Tambahkan Jawaban untuk pertanyaan diatas"
                        rows="3"
                        className="mt-3"
                        value={this.state.answer}
                        onChange={e => {
                          this.setState({
                            answer: e.target.value
                          });
                        }}
                      />
                      <div className="clearfix description-faq__input-character mt-2">
                        <span className="float-right">0/300 Karakter</span>
                      </div>
                      <div className="btn-control">
                        <span onClick={this.handleCloseFaqAdd}>Batal</span>
                        <span onClick={this.onSubmitHandle}>Tambah</span>
                      </div>
                    </Form>
                    <Accordion
                      className="add-faq__accordion"
                      defaultActiveKey="1"
                    >
                      {this.state.faqList.map((item, i) => (
                        <div key={i} className="mb-3">
                          <FaqToggle eventKey={i}>{item.question}</FaqToggle>
                          <Accordion.Collapse eventKey={i}>
                            <div className="accordion-content">
                              <Form.Control
                                type="input"
                                placeholder={item.question}
                                onFocus={() => {
                                  if (this.state.question === '') {
                                    this.setState({ question: item.question });
                                  }
                                }}
                                value={this.state.question}
                                onChange={e => {
                                  this.setState({
                                    question: e.target.value
                                  });
                                }}
                              />
                              <Form.Control
                                as="textarea"
                                placeholder={item.answer}
                                rows="3"
                                className="mt-3"
                                onFocus={() => {
                                  if (this.state.answer === '') {
                                    this.setState({ answer: item.answer });
                                  }
                                }}
                                value={this.state.answer}
                                onChange={e => {
                                  this.setState({
                                    answer: e.target.value
                                  });
                                }}
                              />
                              <div className="clearfix description-faq__input-character mt-2">
                                <span className="float-right">
                                  0/300 Karakter
                                </span>
                              </div>
                              <div className="btn-control">
                                <div
                                  className="delete-btn"
                                  onClick={() => this.handleDelete(item.id)}
                                >
                                  <span>
                                    <FontAwesomeIcon
                                      icon={['far', 'trash-alt']}
                                      className="mr-2"
                                    />
                                  </span>
                                  <span>Hapus</span>
                                </div>
                                <div>
                                  <span
                                    className="buttons first"
                                    onClick={this.handleCancel}
                                  >
                                    Batal
                                  </span>
                                  <span
                                    className="buttons second"
                                    onClick={() =>
                                      this.handleEditFaq(i, item.id)
                                    }
                                  >
                                    Update
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Accordion.Collapse>
                        </div>
                      ))}
                    </Accordion>
                  </Col>
                  <Col sm={12} className="px-0">
                    <div className="btn-overview mt-4 mb-5">
                      <div className="spacer"></div>
                      <div className="btn-group">
                        <NavLink
                          to="/posting-gawean/harga"
                          className="btn btn-batalkan"
                        >
                          Kembali
                        </NavLink>
                        <NavLink
                          to="/posting-gawean/detail-gawean"
                          className="btn btn-selesai"
                        >
                          Lanjutkan
                        </NavLink>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

function FaqToggle({ children, eventKey }) {
  const OnClick = useAccordionToggle(eventKey);

  return (
    <div className="accordion-header" onClick={OnClick}>
      <span>{children}</span>{' '}
      <span>
        <FontAwesomeIcon icon="chevron-down" />{' '}
      </span>
    </div>
  );
}
