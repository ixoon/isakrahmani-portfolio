import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import navbarCSS from './navbar.module.css';
import Logo from './logo';
import ChatIcon from '@mui/icons-material/Chat';


const MyNavbar = () => {
  return (
    <Navbar className={navbarCSS.navbarFixed} bg="light" expand="lg">
      <Container>
        <Navbar.Brand><Logo /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className={navbarCSS.navCenter}>
            <Nav.Link className={navbarCSS.navlink} href="#"><span>Home</span></Nav.Link>
            <Nav.Link className={navbarCSS.navlink} href="/projects">Projects</Nav.Link>
            <Nav.Link className={navbarCSS.navlink} href="/about">About</Nav.Link>
            <Nav.Link className={navbarCSS.chat}    href="/contact"><ChatIcon /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
