import React, { Component } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { MainNav } from '../dummy-data/nav';

export default class CategoryBar extends Component {
  render() {
    return (
      <Container fluid className="nav__menu d-none d-lg-block">
        {/* <Navbar expand="md" className="p-0">
          <ul className="navbar-nav nav-fill w-100">
            {MainNav.filter(item => item.subcategory === 0).map(item => (
              <li className="nav-item mr-0">
                <NavLink to="/category/subcategory" className="">
                  {item.title}
                </NavLink>
                <div className="sub-category">
                  <NavLink to="/category/subcategory">Satu</NavLink>
                  <NavLink to="/category/subcategory">Dua</NavLink>
                </div>
              </li>
            ))}
          </ul>
        </Navbar> */}
        <Navbar expand="md" className="p-0">
          <ul className="navbar_category w-100">
            {MainNav.filter(item => item.subcategory === 0).map(item => (
              <li className="category-wrapper mr-0" key={item.id}>
                <NavLink to="/category/subcategory" className="category-link">
                  {item.title}
                </NavLink>
                <div className="sub-category_link">
                  {MainNav.filter(data => data.subcategory === item.id).map(
                    data => (
                      <NavLink to="/category/subcategory">{data.title}</NavLink>
                    )
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Navbar>
      </Container>
    );
  }
}
