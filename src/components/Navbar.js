import React from "react";
import { Navbar, Nav, NavLink, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

//styles

export default function Navigation() {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const logoutHandler = () => {
    logout();
    console.log("logged out");
  };
  return (
    <>
      <Navbar
        className="navbar"
        bg="dark"
        variant="dark"
        expand="lg"
        collapseOnSelect
      >
        <Container className="navbar-container">
          <Navbar.Brand as={Link} to="/">
            KPI-MANAGER
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {!user && (
              <>
                <Nav className="mx-auto">
                  <NavLink as={Link} to="/teams">
                    TEAMS
                  </NavLink>
                  <NavLink as={Link} to="/kpi">
                    KPI
                  </NavLink>
                </Nav>
                <NavLink as={Link} to="/login">
                  LOGIN
                </NavLink>
              </>
            )}
          </Navbar.Collapse>
          {user && (
            <Button
              variant="light"
              className="logout-btn"
              onClick={logoutHandler}
            >
              LOGOUT
            </Button>
          )}
        </Container>
      </Navbar>
    </>
  );
}
