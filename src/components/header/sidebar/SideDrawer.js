import React, { Component } from 'react';
import { imagePath } from '../../../utils/assetUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Collapse, { Panel } from 'rc-collapse';

import './side-drawer.scss';
import { MainNav } from '../../dummy-data/nav';
import { NavLink } from 'react-router-dom';

class SideDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accordion: false
    };
  }

  render() {
    let drawerClasses = 'side-drawer';
    if (this.props.show) {
      drawerClasses = 'side-drawer open';
    }

    const headerNe = (
      <div className="accordion-link">
        <p>Kategori</p>
        <FontAwesomeIcon icon="chevron-right" />
      </div>
    );

    return (
      <nav className={drawerClasses}>
        <a href="/" className="mb-2 navbar-brand">
          <img src={imagePath('logo@3x.png')} alt="" className="img-fluid" />
        </a>
        <hr />
        <div className="sidebar-content">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink to="/menjadi-partner" className="nav-link">
                Menjadi Partner
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/tips-sukses" className="nav-link">
                Tips Sukses
              </NavLink>
            </li>
          </ul>

          <Collapse>
            <Panel
              header={headerNe}
              showArrow={false}
              headerClass="accordion__button"
            >
              {MainNav.filter(item => item.subcategory === 0).map(item => (
                <Collapse key={item.id}>
                  <Panel
                    header={
                      <div className="header-collapse">
                        <p>{item.title}</p>
                        <FontAwesomeIcon icon="chevron-right" />
                      </div>
                    }
                    showArrow={false}
                    headerClass="collapse-nested"
                  >
                    {MainNav.filter(data => data.subcategory === item.id).map(
                      item => (
                        <ul className="sub-categories" key={item.id}>
                          <li>
                            <a href="/">{item.title}</a>
                          </li>
                        </ul>
                      )
                    )}
                  </Panel>
                </Collapse>
              ))}
            </Panel>
          </Collapse>
        </div>
      </nav>
    );
  }
}

export default SideDrawer;

//
