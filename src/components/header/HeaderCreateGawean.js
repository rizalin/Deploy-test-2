import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

export default class HeaderCreateGawean extends Component {
  render() {
    let class2 = 'step';
    let class3 = 'step';
    let class4 = 'step';
    let class5 = 'step';
    let class6 = 'step';

    let step1 = false;
    let step2 = false;
    let step3 = false;
    let step4 = false;
    let step5 = false;

    switch (this.props.step) {
      // case 1:
      //     class1 = 'done';
      //     break;
      case 2:
        class2 = 'step done';
        step1 = true;
        break;
      case 3:
        class2 = 'step done';
        class3 = 'step done';
        step1 = true;
        step2 = true;
        break;
      case 4:
        class2 = 'step done';
        class3 = 'step done';
        class4 = 'step done';
        step1 = true;
        step2 = true;
        step3 = true;
        break;
      case 5:
        class2 = 'step done';
        class3 = 'step done';
        class4 = 'step done';
        class5 = 'step done';
        step1 = true;
        step2 = true;
        step3 = true;
        step4 = true;
        break;
      case 6:
        class2 = 'step done';
        class3 = 'step done';
        class4 = 'step done';
        class5 = 'step done';
        class6 = 'step done';
        step1 = true;
        step2 = true;
        step3 = true;
        step4 = true;
        step5 = true;
        break;
      default:
        break;
    }
    return (
      <div>
        <Container fluid className="align-items-center header__create-gawean">
          <div className="d-flex">
            <li className="step done">
              <span>
                <span className="step__number">1</span>
                {step1 ? (
                  <NavLink className="step__desc" to="/posting-gawean/tinjauan">
                    Tinjauan
                  </NavLink>
                ) : (
                  <span className="step__desc">Tinjauan</span>
                )}
              </span>
              <FontAwesomeIcon icon="chevron-right" />
            </li>
            <li className={class2}>
              <span>
                <span className="step__number">2</span>
                {step2 ? (
                  <NavLink className="step__desc" to="/posting-gawean/harga">
                    Harga
                  </NavLink>
                ) : (
                  <span className="step__desc">Harga</span>
                )}
              </span>
              <FontAwesomeIcon icon="chevron-right" />
            </li>
            <li className={class3}>
              <span>
                <span className="step__number">3</span>
                {step3 ? (
                  <NavLink
                    className="step__desc"
                    to="/posting-gawean/deskripsi-FAQ"
                  >
                    Deskripsi dan FAQ
                  </NavLink>
                ) : (
                  <span className="step__desc">Deskripsi dan FAQ</span>
                )}
              </span>
              <FontAwesomeIcon icon="chevron-right" />
            </li>
            <li className={class4}>
              <span>
                <span className="step__number">4</span>
                {step4 ? (
                  <NavLink
                    className="step__desc"
                    to="/posting-gawean/detail-gawean"
                  >
                    Detail Gawean
                  </NavLink>
                ) : (
                  <span className="step__desc">Detail Gawean</span>
                )}
              </span>
              <FontAwesomeIcon icon="chevron-right" />
            </li>
            <li className={class5}>
              <span>
                <span className="step__number">5</span>
                {step5 ? (
                  <NavLink className="step__desc" to="/posting-gawean/galeri">
                    Galeri
                  </NavLink>
                ) : (
                  <span className="step__desc">Galeri</span>
                )}
              </span>
              <FontAwesomeIcon icon="chevron-right" />
            </li>
            <li className={class6}>
              <span>
                <span className="step__number">6</span>
                <span className="step__desc">Terbitkan</span>
              </span>
            </li>
          </div>
        </Container>
      </div>
    );
  }
}
