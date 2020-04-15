import React from 'react'
import { Navbar, Col, Form } from 'react-bootstrap'
import { imagePath } from '../../../utils/assetUtils';

import './toolbar.scss'
import DrawerToggler from './drawerToggle'
import { Register } from '../../modal/register'
import { Login } from '../../modal/login';

const toolbar = props => (
    <div className="toolbar">
        <nav className="toolbar__navigation">
            <Navbar
                expand="lg"
                className="px-lg-4"
                id="navbarMain">

                <Navbar.Brand href="/" className="d-none d-lg-block">
                    <img src={imagePath('logo@3x.png')} alt="" style={{ maxWidth: '190px' }} />
                </Navbar.Brand>
                <div className="d-flex" id="main-navbar">

                    <DrawerToggler click={props.drawerClickHandler} />
                    <Col className="search-bar col-md mr-lg-3" lg={5}>
                        <Form inline className="my-2 my-lg-0">
                            <div className="flex-fill mr-lg-3">
                                <input type="search" className="form-control w-100" placeholder="Solusi apa yang kamu butuhkan?" />
                            </div>
                            <a href="/" className="btn-selesai btn my-2 my-sm-0 flex-fill d-none d-lg-block">Cari</a>
                        </Form>
                    </Col>
                    <ul className="navbar-nav ml-auto d-flex flex-row justify-content-end align-items center">
                        <li className="nav-item d-none d-lg-block">
                            <a href="/" className="nav-link px-xl-4 px-lg-3 px-sm-2 px-1 text-success">tips sukses</a>
                        </li>
                        <li className="nav-item d-none d-lg-block">
                            <a href="/" className="nav-link px-xl-4 px-lg-3 px-sm-2 px-1">menjadi partner</a>
                        </li>
                        <Login />
                    </ul>
                    <Register />
                </div>
            </Navbar>
        </nav>
    </div>
)

export default toolbar