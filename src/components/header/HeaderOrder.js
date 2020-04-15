import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

export default class HeaderOrder extends Component {
  render() {
    let class1 = '';
    let class2 = '';
    let class3 = '';
    let class4 = '';
    let step1 = false;

    switch (this.props.step) {
      case 1:
        class1 = 'done';
        break;
      case 2:
        class1 = 'done';
        class2 = 'done';
        step1 = true;
        break;
      case 3:
        class1 = 'done';
        class2 = 'done';
        class3 = 'done';
        break;
      case 4:
        class1 = 'done';
        class2 = 'done';
        class3 = 'done';
        class4 = 'done';
        break;
      default:
        break;
    }
    return (
      <div className="header-order">
        <Container fluid className="d-flex align-items-center">
          <div className="breadcrumb-order">
            <li className={class1}>
              <span>
                <span className="step__number">1</span>
                {step1 ? (
                  <NavLink className="step__desc" to="/detail-order">
                    Detail Order
                  </NavLink>
                ) : (
                  <span className="step__desc">Detail Order</span>
                )}
              </span>
              <FontAwesomeIcon icon="chevron-right" />
            </li>
            <li className={class2}>
              <span>
                <span className="step__number">2</span>
                <span className="step__desc">Metode Pembayaran</span>
              </span>
              <FontAwesomeIcon icon="chevron-right" />
            </li>
            <li className={class3}>
              <span>
                <span className="step__number">3</span>
                <span className="step__desc">Konfirmasi Pembayaran</span>
              </span>
              <FontAwesomeIcon icon="chevron-right" />
            </li>
            <li className={class4}>
              <span>
                <span className="step__number">4</span>
                <span className="step__desc">Isi Detail Gawean</span>
              </span>
            </li>
          </div>
        </Container>
      </div>
    );
  }
}
