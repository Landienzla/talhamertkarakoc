import React from "react";
import logo from "../logo.svg";
import { Navbar, Container, Nav } from "react-bootstrap";
export default function Navbar_() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}Landienzla
          </Navbar.Brand>
          <Nav className="d-flex justify-content-end">
            <Nav.Link href="">Ben Kimim?</Nav.Link>
            <Nav.Link href="">Şu An Ne Yapıyorum?</Nav.Link>
            <Nav.Link href="">Şu Ana Kadar Neler Yaptım?</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
