import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AppButton } from "../button";
import "./styles.scss";

export const Header = () => {
  return (
    <Navbar fixed="top" expand="lg" className="nav-bar">
      <Container>
        <Navbar.Brand className="fw-bold" as={NavLink} to="/">
          CRUD
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" className="d-flex align-items-center">
              Home
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/about"
              className="d-flex align-items-center"
            >
              About
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
              className="d-flex align-items-center"
            >
              Contact
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login">
              <AppButton>login</AppButton>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
