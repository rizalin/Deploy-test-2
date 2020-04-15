import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Row, Popover, Dropdown, Tab, Nav } from 'react-bootstrap';
import Cookies from 'js-cookie';

export const PopoverNotification = (
  <Popover id="popover-basic">
    <Popover.Content className="px-0">
      <Tab.Container defaultActiveKey="first">
        <Nav className="nav-fill w-100 notification-tabs">
          <Row>
            <Col>
              <Nav.Item>
                <Nav.Link eventKey="first">Transaksi</Nav.Link>
              </Nav.Item>
            </Col>
            <Col>
              <Nav.Item>
                <Nav.Link eventKey="second">Update</Nav.Link>
              </Nav.Item>
            </Col>
          </Row>
        </Nav>
        <Col className="px-0">
          <Tab.Content className="notification-content">
            <Tab.Pane eventKey="first">
              <div className="block-pembelian pt-4">
                <p className="fs-16 pl-3 mb-2">Nofif pembelian</p>
                <ul>
                  <li>
                    <NavLink to="/">Menunggu Pembayaran</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Menunggu Pengisian Detail Gawean</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Gawean Sedang Dikerjakan</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Menunggu Konfimasi Penyelesaian</NavLink>
                  </li>
                  <li className="active">
                    <NavLink to="/buyer/orderan">Daftar Pembelian</NavLink>
                  </li>
                </ul>
              </div>
              <div className="block-partner pt-4">
                <p className="fs-16 pl-3 mb-2">Nofif Penjualan</p>
                <ul>
                  <li>
                    <NavLink to="/">Gawean Baru</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Gawean Selesai</NavLink>
                  </li>
                  <li className="active">
                    <NavLink to="/partner/orderan" className="active">
                      Daftar Penjualan
                    </NavLink>
                  </li>
                </ul>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <div className="update-notification">Belum ada notifikasi</div>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Tab.Container>
    </Popover.Content>
  </Popover>
);

const deleteCookies = () => {
  Cookies.remove('isLogin');
  window.location = '/';
};

export const AccountPopover = (
  <Popover id="popover-basic">
    <Popover.Content className="dropdown-profile">
      <Dropdown.Item>
        <NavLink to="/">Profil</NavLink>
      </Dropdown.Item>
      <Dropdown.Item>
        <NavLink to="/partner/pengaturan/biodata-diri">Pengaturan</NavLink>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={deleteCookies}>Logout</Dropdown.Item>
    </Popover.Content>
  </Popover>
);

// export function AccountPopover() {
//   const [cookie, removeCookie] = useCookies(['isLogin']);

//   return (
//     <Popover id="popover-basic">
//       <Popover.Content className="dropdown-profile">
//         <Dropdown.Item>
//           <NavLink to="/">Profil</NavLink>
//         </Dropdown.Item>
//         <Dropdown.Item>
//           <NavLink to="/partner/pengaturan/biodata-diri">Pengaturan</NavLink>
//         </Dropdown.Item>
//         <Dropdown.Divider />
//         <Dropdown.Item>Logout</Dropdown.Item>
//       </Popover.Content>
//     </Popover>
//   );
// }
