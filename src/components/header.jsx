import React, { Component, PropTypes } from 'react';
import { Navbar, Nav, NavItem, Row, Col, FormGroup, FormControl, Button } from 'react-bootstrap';

const Header = () =>
  (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          React Todo App
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Form pullRight>
          <FormGroup>
            <FormControl type="text" placeholder="Search" />
          </FormGroup>
          {' '}
          <Button type="button">Search</Button>
        </Navbar.Form>
      </Navbar.Collapse>
    </Navbar>
  );


export default Header;

