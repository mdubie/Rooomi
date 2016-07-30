import React from 'react';
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';


export const PageNav = ({ username, roommates, house }) => {
  return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/home">Roomi</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem href="/logout">{username}</NavItem>
          <NavItem eventKey={2} href="/home">{house}</NavItem>
          <NavDropdown eventKey={3} title="See Roomates" id="basic-nav-dropdown">
            {roommates.map((roommate) => (<MenuItem key={roommate}>{roommate}</MenuItem>))}
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={4} href="/logout">Logout</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
