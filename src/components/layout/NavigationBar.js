import React from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';

function NavigationBar() {
  return (
    <div>
    <Navbar
      color="light"
      expand="md"
      light
    >
    
      <NavbarBrand href="/">
        reactstrap
      </NavbarBrand>
      <Collapse navbar>
        <div className='container'>
        <Nav
          className="me-auto"
          navbar
        >
          <NavItem>
            <NavLink href="/components/">
              Components
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              GitHub
            </NavLink>
          </NavItem>
        </Nav>
        </div>

      </Collapse>
    </Navbar>
  </div>
  )
}

export default NavigationBar
