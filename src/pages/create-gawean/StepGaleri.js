import React, { Component } from 'react';
import { Container, Row, Col, Media } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

import Head from '../../components/Head';
import HeaderCreateGawean from '../../components/header/HeaderCreateGawean';
import HeaderGawean from '../../components/header/HeaderPartner-3';
import Footer from '../../components/header/Footer';

export default class StepGaleri extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: '',
      imagePreviewurl: '',
      className: 'mx-auto my-5'
    };
  }

  handlePreview = event => {
    event.preventDefault();
    var reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewurl: reader.result,
        className: 'mx-auto my-5 d-none'
      });
      console.log(file);
    };

    if (file === undefined) {
      return null;
    } else {
      reader.readAsDataURL(file);
    }
  };
  render() {
    let { imagePreviewurl } = this.state;
    let $imagePreview = null;
    if (imagePreviewurl) {
      $imagePreview = (
        <img className="mw-100 mh-100 mx-auto" src={imagePreviewurl} alt="" />
      );
    }
    return (
      <div>
        <Head title="Galeri - Posting Gawean" ddescription="Detail order" />
        <HeaderGawean />
        <HeaderCreateGawean step={5} />
        <Container>
          <Row>
            <Col lg={8} md={10}>
              <div className="content-header mb-3">
                <Row>
                  <Col>
                    <Media>
                      <Media.Body>
                        <h3>Bangun Galeri Gig Anda</h3>
                      </Media.Body>
                    </Media>
                  </Col>
                </Row>
              </div>
              <div className="content-body mb-0 pb-3">
                <Row>
                  <Col>
                    <Media>
                      <Media.Body>
                        <p className="text-dark mb-1">Foto Gig</p>
                        Unggah foto yang menggambarkan atau terkait dengan Gig
                        Anda.
                        <Row className="px-2 pt-4">
                          <Col className="px-2 pb-3 pb-md-0" lg={4}>
                            <div className="gallery_upload align-items-center d-flex">
                              <input
                                onChange={this.handlePreview}
                                type="file"
                                id="inputGambar"
                                name="img2"
                                accept="image/*"
                              />
                              {$imagePreview}
                              <FontAwesomeIcon
                                icon={['fas', 'camera']}
                                className={this.state.className}
                                style={{ fontSize: '3rem' }}
                              />
                            </div>
                          </Col>
                          <Col className="px-2 pb-3 pb-md-0" lg={4}>
                            <div className="gallery_upload align-items-center d-flex">
                              <input
                                onChange={this.handlePreview}
                                type="file"
                                id="inputGambar"
                                name="img2"
                                accept="image/*"
                              />
                              {$imagePreview}
                              <FontAwesomeIcon
                                icon={['fas', 'camera']}
                                className={this.state.className}
                                style={{ fontSize: '3rem' }}
                              />
                            </div>
                          </Col>
                          <Col className="px-2 pb-3 pb-md-0" lg={4}>
                            <div className="gallery_upload align-items-center d-flex">
                              <input
                                onChange={this.handlePreview}
                                type="file"
                                id="inputGambar"
                                name="img2"
                                accept="image/*"
                              />
                              {$imagePreview}
                              <FontAwesomeIcon
                                icon={['fas', 'camera']}
                                className={this.state.className}
                                style={{ fontSize: '3rem' }}
                              />
                            </div>
                          </Col>
                        </Row>
                      </Media.Body>
                    </Media>
                  </Col>
                </Row>
              </div>
              <div className="content-footer mb-5 pb-5">
                <Row className="mb-3">
                  <Col sm={12} className="px-0">
                    <div className="btn-overview mt-5">
                      <div className="spacer"></div>
                      <div className="btn-group">
                        <NavLink
                          to="/posting-gawean/deskripsi-FAQ"
                          className="btn btn-batalkan"
                        >
                          Kembali
                        </NavLink>
                        <NavLink
                          to="/posting-gawean/terbitkan"
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
