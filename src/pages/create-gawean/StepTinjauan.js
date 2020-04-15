import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';

import Head from '../../components/Head';
import HeaderCreateGawean from '../../components/header/HeaderCreateGawean';
import HeaderGawean from '../../components/header/HeaderPartner-3';
import Footer from '../../components/header/Footer';
import { MainNav, tag } from '../../components/dummy-data/nav';
import { NavLink } from 'react-router-dom';

export default class StepTinjauan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subCategory: null,
      judul: 'Saya bisa...'
    };
  }

  setSubCategory = selectedOption => {
    this.setState({ subCategory: selectedOption.value });
  };

  handleCheckInput = () => {
    if (this.state.judul === '') {
      this.setState({
        judul: 'Saya bisa'
      });
    }
  };

  handleChangeTitle = e => {
    this.setState({
      judul: e.target.value
    });
  };

  render() {
    let category = MainNav.filter(item => item.subcategory === 0).map(item => {
      return { value: item.id, label: item.title };
    });
    let subCategory = MainNav.filter(
      item => item.subcategory === this.state.subCategory
    ).map(item => {
      return { value: item.id, label: item.title };
    });
    console.log(this.state.subCategory);
    return (
      <div>
        <Head title="Tinjauan - Posting Gawean" ddescription="Detail order" />
        <HeaderGawean />
        <HeaderCreateGawean step={1} />
        <Container>
          <Row>
            <Col className="mt-4 mb-5 pb-5" lg={8} md={10}>
              <Form>
                <Form.Group as={Row} className="mb-4 pb-3">
                  <h3 className="col-sm-4">Judul Gawean</h3>
                  <Col sm={8}>
                    <Form.Control
                      as="textarea"
                      rows={6}
                      placeholder="Saya bisa membuat sesuatu untuk anda"
                      className="ta-border"
                      value={this.state.judul}
                      onChange={this.handleChangeTitle}
                      onFocus={this.handleCheckInput}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-4 pb-3">
                  <h3 className="col-sm-4">Kategori*</h3>
                  <Col sm={4}>
                    <Select
                      placeholder="Pilih Kategori"
                      options={category}
                      onChange={this.setSubCategory}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-4 pb-3">
                  <h3 className="col-sm-4">Sub Kategori*</h3>
                  <Col sm={4}>
                    <Select
                      placeholder="Pilih Sub Kategori"
                      options={subCategory}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-5">
                  <h3 className="col-sm-4">Tag</h3>
                  <Col sm={8}>
                    <CreatableSelect
                      placeholder="#Design"
                      options={tag}
                      isMulti
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Col sm={12}>
                    <div className="btn-overview mt-4">
                      <div className="spacer"></div>
                      <div className="btn-group">
                        <button className="btn btn-batalkan left">
                          Batalkan
                        </button>
                        <NavLink
                          to="/posting-gawean/harga"
                          className="btn btn-selesai right"
                        >
                          Lanjutkan
                        </NavLink>
                      </div>
                    </div>
                  </Col>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
