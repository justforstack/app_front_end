import React from 'react'
import {Nav } from 'react-bootstrap'
import './CSS/Sidebar.css';

const Sidebar = props => {
  return (
    <>
      <Nav  className="d-none d-md-block text-light bg-dark sidebar"
            activeKey="/home"
            /* onSelect={selectedKey => alert(`selected ${selectedKey}`)}*/>
            <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link className="btn btn-secondary m-3" href="/dash-board">Dashboard</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="btn btn-secondary m-3" href="/">Accounts Details</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="btn btn-secondary m-3" href="/">Customer Details</Nav.Link>
            </Nav.Item>

      </Nav>
    </>
  )
}

export default Sidebar