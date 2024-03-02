import React from "react";
import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" className="mb-4" style={{ height: "3.75rem" }}>
      <Container>
        <h2>
          <Link to="/" className="link-light text-decoration-none">
            ChatApp
          </Link>
        </h2>
        <span className="text-warning">Logged in as rohan</span>
        <Nav>
          <Stack direction="horizontal" gap={4}>
            <Link className="link-light text-decoration-none" to="/login">
              Login
            </Link>
            <Link className="link-light text-decoration-none" to="/register">
              Register
            </Link>
          </Stack>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
