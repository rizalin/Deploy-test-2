import React, { Component } from 'react';
import { Container, Col, Row, Accordion, Card } from 'react-bootstrap';


class Faq extends Component {
    render() {
        const dataFaq = [
            {
                id: 1,
                question: 'Apa Saja yang bisa dijual di harisenin.com?',
                answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.'
            },
            {
                id: 2,
                question: 'Bagaimana berjualan di harisenin.com?',
                answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.'
            },
            {
                id: 3,
                question: 'Berapa uang yang dapat saya hasilkan di harisenin.com?',
                answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.'
            },
            {
                id: 4,
                question: 'Bagaimana saya menilai harga dari keahlian saya?',
                answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.'
            },
            {
                id: 5,
                question: ' Bagaimana cara saya mendapatkan pembayaran saya?',
                answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.'
            },
            {
                id: 6,
                question: 'Apakah ada potongan apabila bergabung disini ?',
                answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.'
            },
        ]
        return (
            <div>

                <Container className="c-pertanyaan-seller-home mt-3 mb-5 pt-5 px-4">
                    <Row>
                        <Col className="pb-4 pb-md-5 text-center" lg={12}>
                            <h1>Pertanyaan dari mereka</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <Accordion defaultActiveKey="0">
                                {dataFaq.slice(0, 3).map((item, i) =>


                                    <div className="accordion" id="dropdownFAQ">
                                        <div className="card border-0 mb-4">
                                            <div className="card-header bg-white">
                                                <Accordion.Toggle className="btn btn-link" eventKey={`${i}`}>
                                                    <h5 className="mb-0" style={{ fontSize: '1.1rem' }}>{item.question}</h5>
                                                </Accordion.Toggle>
                                            </div>
                                            <div>
                                                <Accordion.Collapse eventKey={`${i}`}>
                                                    <div className="card-body border-0">
                                                        <Card.Body>
                                                            {item.answer}
                                                        </Card.Body>
                                                    </div>
                                                </Accordion.Collapse>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Accordion>
                        </Col>
                        <Col xs={12} md={6}>
                            <Accordion>
                                {dataFaq.slice(3, 6).map((item, i) =>

                                    <div className="accordion" id="dropdownFAQ">
                                        <div className="card border-0 mb-4">
                                            <div className="card-header bg-white">
                                                <Accordion.Toggle className="btn btn-link" eventKey={`${i}` + `${3}`}>
                                                    <h5 className="mb-0" style={{ fontSize: '1.1rem' }}>{item.question}</h5>
                                                </Accordion.Toggle>
                                            </div>
                                            <div>
                                                <Accordion.Collapse eventKey={`${i}` + `${3}`}>
                                                    <div className="card-body border-0">
                                                        <Card.Body>
                                                            {item.answer}
                                                        </Card.Body>
                                                    </div>
                                                </Accordion.Collapse>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Accordion>
                        </Col>
                    </Row>
                </Container >
            </div >
        );
    }
}
export default Faq;