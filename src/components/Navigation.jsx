import React, { Component } from "react";
import { Dropdown, Nav, Navbar } from "react-bootstrap";

class Navigation extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar bg="success" variant="dark" expand="lg">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={require("../assets/img/logo-nav2.png")}
              width="60"
              className="d-inline-block align-top align-middle"
            />{" "}
            Juan Marcelo Panasiti
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Acerca de mi</Nav.Link>
              <Nav.Link href="/experience">Experiencia</Nav.Link>
              <Nav.Link href="/education">Formación</Nav.Link>
              <Nav.Link href="/contact">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              ES
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/es">ES</Dropdown.Item>
              <Dropdown.Item href="#/en">EN</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Navigation;
