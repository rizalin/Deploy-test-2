import React, { Component } from 'react';
import { Card, Container, Row, Col, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Collapse, { Panel } from 'rc-collapse';

// import { imagePath } from '../../utils/assetUtils';
import Head from '../../components/Head';
import { Project } from '../../components/modal/Project';
import HeaderOrder from '../../components/header/HeaderOrder';
import HeaderBlank from '../../components/header/HeaderBlank';

class GaweanDetail extends Component {
  render() {
    return (
      <div>
        <Head title="Detail Gawean" description="Detail order" />
        <HeaderBlank />
        <HeaderOrder step={4} />
        <Container className="ml-0">
          <Col lg={8} xs={12}>
            <Card className="c-card-payment mt-3 mb-5">
              <Card.Body>
                <Row className="c-card-payment-headers text-center">
                  <Col xs={12}>
                    <FontAwesomeIcon
                      icon="briefcase"
                      className="pb-3"
                      size="5x"
                      color="#003bde"
                    />
                  </Col>
                  <Col xs={12}>
                    <h5>DETAIL GAWEAN</h5>
                  </Col>
                  <Col xs={12}>
                    <p>
                      Partner kami membutuhkan informasi dibawah ini untuk
                      memulai gawean
                    </p>
                  </Col>
                </Row>
                <hr />
                <div className="c-card-payment-form mt-4">
                  <form>
                    <Form.Group>
                      <label for="formText" className="pb-2">
                        Halo, silahkan isi style design yang kamu mau
                      </label>
                      <textarea
                        className="form-control"
                        id="formText"
                        rows="3"
                      ></textarea>
                      <label for="uploadFile" className="pt-4 pb-1">
                        Atau upload contoh desain ( Ukuran file Max. 20 mb )
                      </label>
                      <input type="file" id="uploadFile" />
                    </Form.Group>
                  </form>
                  <hr />
                </div>
                <Project />
              </Card.Body>
            </Card>
          </Col>
        </Container>
      </div>
    );
  }
}

export default GaweanDetail;
