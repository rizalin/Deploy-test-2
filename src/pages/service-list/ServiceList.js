import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Collapse, { Panel } from 'rc-collapse';

import { imagePath } from '../../utils/assetUtils';
import {
  subcategory,
  professionalType,
  revision,
  estimatedTime,
  gawean
} from '../../components/dummy-data/nav';
import Head from '../../components/Head';
import HeaderNav from '../../components/header/HeaderNav';
import Footer from '../../components/header/Footer';

const filterOption = ['Harga tinggi ke rendah', 'Harga rendah ke tinggi'];
const ratingFilter = [
  'Bintang 5',
  'Bintang 4.6 - Bintang 5',
  'Bintang 4 - Bintang 4.5',
  'Bintang 4 ke bawah'
];

class ServiceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      sideDrawerOpen: false,
      focus: 0,
      partner: '',
      time: 0,
      revision: 0,
      filterOpen: false
    };
  }

  handleBlur = () => {
    this.setState({ focus: 0 });
  };

  handleZero = () => {
    this.setState({ partner: 0 });
    this.setState({ time: 0 });
    this.setState({ revision: 0 });
  };

  handlePartner = e => {
    this.setState({ partner: e.target.value });
  };

  handleTime = e => {
    this.setState({ time: e.target.value });
  };

  handleRevision = e => {
    this.setState({ revision: e.target.value });
  };

  handleOpenResponsiveFilter = () => {
    this.setState({ filterOpen: true });
  };

  handleCloseResponsiveFilter = () => {
    this.setState({ filterOpen: false });
  };

  render() {
    console.log(this.state.partner);
    return (
      <div>
        <Head title="List of Service" description="List of service" />
        <HeaderNav />
        <Container>
          <Row style={{ marginTop: '3rem' }}>
            {/* Filter starts here */}

            <Col
              className="hide-filter d-lg-block filter-sidebar bg-white"
              lg={3}
            >
              <div className="mb-3 mx-4 mx-lg-0">
                <h5 className="font-weight-bold pb-1 d-none d-lg-block">
                  Filter
                </h5>
              </div>
              <hr className="mt-0 mb-4 mx-4 mx-lg-0" />
              <div className="mb-3 mx-4 mx-lg-0">
                <p className="fs-18 font-weight-bold">Urut berdasarkan</p>
                <select>
                  {filterOption.map((item, i) => (
                    <option key={i}>{item}</option>
                  ))}
                </select>
              </div>
              <div className="mb-2 mx-4 mx-lg-0 category__list">
                {/* Category accordion */}
                <h5 className="font-weight-bold pb-1 d-none d-lg-block mt-2">
                  Kategori
                </h5>
                <Collapse className="mt-2">
                  <Panel
                    header={
                      <div className="header-collapse">
                        <p>Web Design</p>
                        <FontAwesomeIcon icon="chevron-right" />
                      </div>
                    }
                    showArrow={false}
                    headerClass="collapse-nested"
                  >
                    {subcategory.map(item => (
                      <ul className="sub-categories">
                        <li>
                          <NavLink to="/">{item.title}</NavLink>
                        </li>
                      </ul>
                    ))}
                  </Panel>
                </Collapse>
              </div>
              <hr className="mt-0 mb-4 mx-4 mx-lg-0" />

              {/* Level filter */}

              <Form>
                <div className="mb-2 mx-4 mx-lg-0">
                  <p className="fs-18 font-weight-bold">Level Partner</p>
                  {professionalType.map(item => (
                    <div className="">
                      <input
                        type="radio"
                        id={`professional${item.id}`}
                        name="radio1"
                        value={item.id}
                        checked={this.state.partner === item.id}
                        onChange={this.handlePartner}
                      />
                      <label htmlFor={`professional${item.id}`}>
                        {item.type}
                      </label>
                    </div>
                  ))}
                </div>
                <hr className="mt-0 mb-4 mx-4 mx-lg-0" />

                {/* Price filter */}

                <div className="mb-2 mx-4 mx-lg-0">
                  <p className="fs-18 font-weight-bold">Harga</p>
                  <div
                    className={
                      this.state.focus === 1
                        ? 'custom__input-box focus'
                        : 'custom__input-box'
                    }
                  >
                    <div className="side-text">
                      <span>Rp</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Minimum"
                      className="input__box"
                      onFocus={() => {
                        this.setState({ focus: 1 });
                      }}
                      onBlur={this.handleBlur}
                    />
                  </div>
                  <div
                    className={
                      this.state.focus === 2
                        ? 'custom__input-box focus'
                        : 'custom__input-box'
                    }
                  >
                    <div className="side-text">
                      <span>Rp</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Minimum"
                      className="input__box"
                      onFocus={() => {
                        this.setState({ focus: 2 });
                      }}
                      onBlur={this.handleBlur}
                    />
                  </div>
                </div>
                <hr className="mt-0 mb-4 mx-4 mx-lg-0" />

                {/* Time filter */}

                <div className="mb-2 mx-4 mx-lg-0">
                  <p className="fs-18 font-weight-bold">Waktu Pengerjaan</p>
                  {estimatedTime.map(item => (
                    <div className="">
                      <input
                        type="radio"
                        id={`time${item.id}`}
                        name="radio2"
                        value={item.id}
                        checked={this.state.time === item.id}
                        onChange={this.handleTime}
                      />
                      <label htmlFor={`time${item.id}`}>{item.type}</label>
                    </div>
                  ))}
                </div>
                <hr className="mt-0 mb-4 mx-4 mx-lg-0" />

                {/* Revision filter */}

                <div className="mb-2 mx-4 mx-lg-0">
                  <p className="fs-18 font-weight-bold">Jumlah Revisi</p>
                  {revision.map(item => (
                    <div className="">
                      <input
                        type="radio"
                        id={`revision${item.id}`}
                        name="radio3"
                        value={item.id}
                        checked={this.state.revision === item.id}
                        onChange={this.handleRevision}
                      />
                      <label htmlFor={`revision${item.id}`}>{item.type}</label>
                    </div>
                  ))}
                </div>
                <hr className="mt-0 mb-4 mx-4 mx-lg-0" />

                {/* Review filter */}
                <div className="mb-3 mx-4 mx-lg-0">
                  <p className="fs-18 font-weight-bold">Urut berdasarkan</p>
                  <Form.Control as="select">
                    {ratingFilter.map(item => (
                      <option value="descending">{item}</option>
                    ))}
                  </Form.Control>
                </div>
                <div className="mt-4 pt-2 mb-5 submitFilterButtonContainer">
                  <Button
                    className="btn-aktif w-100 font-weight-bold"
                    onClick={this.handleZero}
                  >
                    Reset Filter
                  </Button>
                </div>
              </Form>
            </Col>
            {/* Filter ends here */}

            {/* Gawean list starts here */}
            <Col className="px-4 content-list-of-service" lg={9}>
              {gawean.map(item => (
                <div className="media mb-5">
                  <div className="img-media img-fluid">
                    <img
                      src={item.img}
                      alt="service-img"
                      className="mw-100 mh-100"
                    />
                  </div>
                  <div className="media-body">
                    <Row className="align-items-center">
                      <Col
                        className="pr-lg-0 px-lg-2 px-0 mh-150"
                        xs={12}
                        lg={8}
                      >
                        <div className="media mb-3">
                          <div className="img-avatar img-fluid mr-2">
                            <img
                              src={imagePath(`${item.avatar}`)}
                              alt=""
                              className="mw-100 mh-100 rounded-circle"
                            />
                          </div>
                          <div className="media-body">
                            <Row className="d-flex align-items-center">
                              <Col>
                                <p className="mt-1 mb-0">{item.name}</p>
                                {item.level}
                              </Col>
                              <Col className="d-flex justify-content-between justify-content-xl-end mt-2 mt-xl-0">
                                <div className="">
                                  <FontAwesomeIcon
                                    icon="heart"
                                    className="fs-18 ml-2"
                                  />
                                  <FontAwesomeIcon
                                    icon="star"
                                    className="fs-18 ml-2 mr-1"
                                  />
                                  <span>{item.rating}</span>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </div>
                        <p style={{ color: '#393c43', fontWeight: '600' }}>
                          Saya bisa {item.title}
                        </p>
                        <span>{item.desc}</span>
                      </Col>
                      <Col xs={12} lg={4} className="px-0 px-lg-2">
                        <Row>
                          <Col
                            className="d-flex flex-column px-0 px-lg-2 "
                            xs={6}
                            lg={12}
                          >
                            <div className="mt-3 mt-lg-0 text-success price__box">
                              <p className="from">Dari Rp </p>
                              <p className="price">{item.price}</p>
                            </div>
                          </Col>
                          <Col
                            className="d-flex flex-column px-2 align-self-center"
                            xs={6}
                            lg={12}
                          >
                            <NavLink
                              to="/user/detail-gawean"
                              className="btn-rekrut btn-selesai btn-block"
                              style={{ textTransform: 'capitalize' }}
                            >
                              rekrut{' '}
                            </NavLink>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </div>
              ))}
            </Col>
            {/* End of gawean list */}
            <button
              className="filter-button-mobile"
              onClick={this.handleOpenResponsiveFilter}
            >
              <FontAwesomeIcon icon="filter" />
              Filter
            </button>
          </Row>
        </Container>

        {/* Filter responsive starts here */}
        <div
          className={
            this.state.filterOpen
              ? 'filter-responsive open'
              : 'filter-responsive'
          }
        >
          {/* Header */}
          <div className="header-filter">
            <h5>Filter</h5>
            <button onClick={this.handleCloseResponsiveFilter} />
          </div>
          {/* Body */}
          <div className="filter-body">
            <Col className="filter-sidebar bg-white" lg={3}>
              <div className="mb-3 mx-4 mx-lg-0">
                <p className="fs-18 font-weight-bold">Urut berdasarkan</p>
                <select>
                  {filterOption.map((item, i) => (
                    <option key={i}>{item}</option>
                  ))}
                </select>
              </div>
              <div className="mb-2 mx-4 mx-lg-0 category__list">
                {/* Category accordion */}
                <h5 className="font-weight-bold pb-1 d-none d-lg-block mt-2">
                  Kategori
                </h5>
                <Collapse className="mt-2">
                  <Panel
                    header={
                      <div className="header-collapse">
                        <p>Web Design</p>
                        <FontAwesomeIcon icon="chevron-right" />
                      </div>
                    }
                    showArrow={false}
                    headerClass="collapse-nested"
                  >
                    {subcategory.map(item => (
                      <ul className="sub-categories">
                        <li>
                          <NavLink to="/">{item.title}</NavLink>
                        </li>
                      </ul>
                    ))}
                  </Panel>
                </Collapse>
              </div>
              <hr className="mt-0 mb-4 mx-4 mx-lg-0" />

              {/* Level filter */}

              <Form>
                <div className="mb-2 mx-4 mx-lg-0">
                  <p className="fs-18 font-weight-bold">Level Partner</p>
                  {professionalType.map(item => (
                    <div className="">
                      <input
                        type="radio"
                        id={`professional${item.id}`}
                        name="radio1"
                        value={item.id}
                        checked={this.state.partner === item.id}
                        onChange={this.handlePartner}
                      />
                      <label htmlFor={`professional${item.id}`}>
                        {item.type}
                      </label>
                    </div>
                  ))}
                </div>
                <hr className="mt-0 mb-4 mx-4 mx-lg-0" />

                {/* Price filter */}

                <div className="mb-2 mx-4 mx-lg-0">
                  <p className="fs-18 font-weight-bold">Harga</p>
                  <div
                    className={
                      this.state.focus === 1
                        ? 'custom__input-box focus'
                        : 'custom__input-box'
                    }
                  >
                    <div className="side-text">
                      <span>Rp</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Minimum"
                      className="input__box"
                      onFocus={() => {
                        this.setState({ focus: 1 });
                      }}
                      onBlur={this.handleBlur}
                    />
                  </div>
                  <div
                    className={
                      this.state.focus === 2
                        ? 'custom__input-box focus'
                        : 'custom__input-box'
                    }
                  >
                    <div className="side-text">
                      <span>Rp</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Minimum"
                      className="input__box"
                      onFocus={() => {
                        this.setState({ focus: 2 });
                      }}
                      onBlur={this.handleBlur}
                    />
                  </div>
                </div>
                <hr className="mt-0 mb-4 mx-4 mx-lg-0" />

                {/* Time filter */}

                <div className="mb-2 mx-4 mx-lg-0">
                  <p className="fs-18 font-weight-bold">Waktu Pengerjaan</p>
                  {estimatedTime.map(item => (
                    <div className="">
                      <input
                        type="radio"
                        id={`time${item.id}`}
                        name="radio2"
                        value={item.id}
                        checked={this.state.time === item.id}
                        onChange={this.handleTime}
                      />
                      <label htmlFor={`time${item.id}`}>{item.type}</label>
                    </div>
                  ))}
                </div>
                <hr className="mt-0 mb-4 mx-4 mx-lg-0" />

                {/* Revision filter */}

                <div className="mb-2 mx-4 mx-lg-0">
                  <p className="fs-18 font-weight-bold">Jumlah Revisi</p>
                  {revision.map(item => (
                    <div className="">
                      <input
                        type="radio"
                        id={`revision${item.id}`}
                        name="radio3"
                        value={item.id}
                        checked={this.state.revision === item.id}
                        onChange={this.handleRevision}
                      />
                      <label htmlFor={`revision${item.id}`}>{item.type}</label>
                    </div>
                  ))}
                </div>
                <hr className="mt-0 mb-4 mx-4 mx-lg-0" />

                {/* Review filter */}
                <div className="mb-3 mx-4 mx-lg-0">
                  <p className="fs-18 font-weight-bold">Urut berdasarkan</p>
                  <Form.Control as="select">
                    {ratingFilter.map(item => (
                      <option value="descending">{item}</option>
                    ))}
                  </Form.Control>
                </div>
              </Form>
            </Col>
          </div>
          {/* End of filter body */}

          <div className="filter-footer">
            <button
              className="btn btn-aktif"
              onClick={this.handleCloseResponsiveFilter}
            >
              Terapkan Filter
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ServiceList;
