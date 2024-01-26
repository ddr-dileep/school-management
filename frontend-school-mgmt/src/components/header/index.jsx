import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AppButton } from "../button";
import "./styles.scss";
import { Assets } from "../../utils/Assets";
import { useEffect, useState } from "react";

export const Header = () => {
  const [navBackgroundColor, setNavBackgroundColor] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setNavBackgroundColor(false);
      } else {
        setNavBackgroundColor(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      fixed="top"
      expand="lg"
      className={`${navBackgroundColor && "nav-bar-bg-black"} nav-bar`}
    >
      <Container>
        <Navbar.Brand className="fw-bold" as={NavLink} to="/">
          <img src={Assets.logoIcon} className="brand-logo" alt="logo-icon" />
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
