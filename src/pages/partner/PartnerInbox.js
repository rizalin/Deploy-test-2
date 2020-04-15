import React, { Component } from 'react';
import {
  Container,
  Navbar,
  Row,
  Col,
  Form,
  Media,
  Card,
  Tab,
  Nav
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from 'react-select';

import { imagePath } from '../../utils/assetUtils';
import Head from '../../components/Head';
import HeaderPartnerDashboard from '../../components/header/HeaderPartner-2';
import Footer from '../../components/header/Footer';
import { leftChat, rightChat } from '../../components/dummy-data/dummy-chat';

export default class PartnerInbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatOpened: false,
      profileOpened: false
    };
  }

  render() {
    return (
      <div>
        <Head title="Inbox Partner" description="Description" />
        <HeaderPartnerDashboard />
        <div className="dashboard__partner">
          <Container fluid className="nav__menu d-none d-lg-block">
            {/* Partner content tab */}

            <Navbar className="p-0 navbar-expand-md">
              <div className="navbar-nav mr-auto">
                <li className="navlink-seller">
                  <NavLink to="/partner/dashboard">Dashboard</NavLink>
                </li>
                <li className="navlink-seller aktif">
                  <span>Inbox</span>
                </li>
                <li className="navlink-seller">
                  <NavLink to="/partner/orderan">Orderan</NavLink>
                </li>
                <li className="navlink-seller">
                  <NavLink to="/partner/gawean">Gawean</NavLink>
                </li>
                <li className="navlink-seller">
                  <NavLink to="/partner/saldo">Saldo</NavLink>
                </li>
                <li className="navlink-seller">
                  <NavLink to="/partner/setting">Pengaturan Partner</NavLink>
                </li>
              </div>
            </Navbar>
          </Container>
          <Container
            fluid
            className="mt-0 mt-lg-5 px-0 px-lg-5 c-content-inbox"
          >
            {/* Left content starts here */}

            <Tab.Container defaultActiveKey="0">
              {/* Filter chat */}

              <Row noGutters>
                <Col
                  lg={4}
                  className={
                    this.state.chatOpened
                      ? 'c-content-inbox-kiri view-hide'
                      : 'c-content-inbox-kiri'
                  }
                >
                  <Col className="px-4 px-lg-3 c-content-inbox-kiri-atas">
                    <form className="mb-0">
                      <Form.Group className="mb-0">
                        <Select placeholder="Semua Obrolan" />
                      </Form.Group>
                    </form>
                  </Col>

                  {/* Left chat selector */}

                  <Col className="c-content-inbox-kiri-bawah px-0">
                    <Nav>
                      {leftChat.map(item => (
                        <Nav.Item
                          className="p-0 w-100"
                          key={item.id}
                          onClick={() => this.setState({ chatOpened: true })}
                        >
                          <Nav.Link
                            eventKey={item.id}
                            className="px-0 py-3 w-100"
                          >
                            <Media className="px-4 px-lg-3 chatList-media">
                              <img
                                src={imagePath(`${item.img}`)}
                                alt=""
                                className="mr-3 rounded-circle align-self-top"
                              />
                              <Media.Body>
                                <div className="d-flex justify-content-between">
                                  <h5 className="mt-0">{item.name}</h5>
                                  <p>{item.time}</p>
                                </div>
                                <span className="font-weight-lighter">
                                  {item.chat.substring(0, 65)}
                                </span>
                              </Media.Body>
                            </Media>
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                  </Col>
                </Col>

                {/* Right tab */}

                <Col
                  lg={8}
                  className={
                    this.state.chatOpened
                      ? 'c-content-inbox-kanan view-chatDetail'
                      : 'c-content-inbox-kanan view-hide'
                  }
                >
                  <Tab.Content>
                    <div className="absolute-frame">
                      <Col className="pr-0 header"></Col>
                      <div className="body">
                        <div className="left-body"></div>
                        <div className="right-body"></div>
                      </div>
                    </div>
                    {rightChat.map(item => (
                      <Tab.Pane eventKey={item.id}>
                        {/* Right header */}
                        <Col className="c-content-inbox-kanan-atas pr-0">
                          <span
                            className="backChatlist d-lg-none"
                            onClick={() => this.setState({ chatOpened: false })}
                          >
                            <FontAwesomeIcon icon="arrow-left" />
                          </span>
                          <Row className="showProfile pl-lg-5 ml-lg-2">
                            <h5
                              className="col-12 p-0"
                              onClick={() =>
                                this.setState({ profileOpened: true })
                              }
                            >
                              {item.chatName}
                            </h5>
                            <Col lg={7} className="p-0">
                              <Row>
                                <Col md={6} className="px-0">
                                  Terakhir dilihat :{' '}
                                  <span>{item.lastSeen} lalu</span>
                                </Col>
                                <Col md={6} className="px-0">
                                  Waktu Lokal : <span>{item.time}</span>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                        {/* Rightbody */}
                        <Col className="px-0">
                          <Row>
                            {/* Right left body */}
                            <Col
                              lg={7}
                              className="c-content-inbox-kanan-bawah px-0"
                            >
                              <div className="clearfix chat-detail px-0">
                                {item.chat.map(item => (
                                  <Media className="px-4 px-lg-3 mt-4">
                                    <img
                                      src={imagePath(`${item.img}`)}
                                      alt=""
                                      className="mr-3 rounded-circle align-self-top"
                                    />
                                    <Media.Body>
                                      <span className="font-weight-lighter">
                                        {item.chat}
                                      </span>
                                    </Media.Body>
                                  </Media>
                                ))}
                              </div>
                              <div className="clearfix w-100 px-3 mt-3 chat-textarea">
                                <Card className="card__custom_order mb-3">
                                  <Card.Body>
                                    <form
                                      action=""
                                      className="card__custom_order_global p-2"
                                    >
                                      <div className="form-group">
                                        <textarea
                                          name=""
                                          id=""
                                          rows="2"
                                          className="form-control border-0"
                                          placeholder="Ketik pesanmu di sini"
                                          style={{ resize: 'none' }}
                                        />
                                      </div>
                                    </form>
                                  </Card.Body>
                                </Card>
                                <button className="btn btn-selesai w-25 text-capitalize float-right">
                                  Kirim
                                </button>
                              </div>
                            </Col>

                            {/*right body */}
                            <Col
                              lg={5}
                              className={
                                this.state.profileOpened
                                  ? 'c-content-inbox-kanan-samping view-profile'
                                  : 'c-content-inbox-kanan-samping view-hide'
                              }
                            >
                              <FontAwesomeIcon
                                icon={['far', 'times-circle']}
                                className="closeProfileView d-lg-none"
                                onClick={() =>
                                  this.setState({ profileOpened: false })
                                }
                              />
                              <h5 className="text-capitalize">tentang</h5>
                              <div className="d-flex justify-content-center mt-4">
                                <div>
                                  <img
                                    src={imagePath(`${item.img}`)}
                                    alt=""
                                    className="rounded-circle align-self-top"
                                  />
                                </div>
                              </div>
                              <h5 className="text-capitalize mt-3 text-center font-weight-bold">
                                {item.chatName}
                              </h5>
                              <div className="d-flex justify-content-between pt-4 stat">
                                <h5 className="font-weight-ligher text-capitalize">
                                  ulasan
                                </h5>
                                <h5 className="font-weight-ligher text-capitalize">
                                  <FontAwesomeIcon
                                    icon="star"
                                    color="#ffb810"
                                    className="mr-2"
                                  />
                                  {item.review}
                                </h5>
                              </div>
                              <div className="d-flex justify-content-between pt-4 stat">
                                <h5 className="font-weight-ligher text-capitalize">
                                  Avg. Waktu Respon
                                </h5>
                                <h5 className="font-weight-ligher text-capitalize">
                                  {item.avgResponseTime}
                                </h5>
                              </div>
                              <div className="d-flex justify-content-between pt-4 stat">
                                <h5 className="font-weight-ligher text-capitalize">
                                  Asal
                                </h5>
                                <h5 className="font-weight-ligher text-capitalize">
                                  {item.address}
                                </h5>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                  {/* End of right map */}
                </Col>
              </Row>
            </Tab.Container>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}
