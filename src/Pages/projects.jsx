import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import navbarCSS from '../Components/home/navbar.module.css';
import Logo from '../Components/home/logo';
import ChatIcon from '@mui/icons-material/Chat';
import styles from './projects.module.css';
import footer from '../Components/home/footer.module.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import working from '../Components/home/working.module.css';


export default function Projects() {
    return(
    <>
        <Navbar className={navbarCSS.navbarFixed} bg="light" expand="lg">
      <Container>
        <Navbar.Brand><Logo /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className={navbarCSS.navCenter}>
            <Nav.Link className={navbarCSS.navlink} href="/home"><span>Home</span></Nav.Link>
            <Nav.Link className={navbarCSS.navlink} href="/projects">Projects</Nav.Link>
            <Nav.Link className={navbarCSS.navlink} href="/about">About</Nav.Link>
            <Nav.Link className={navbarCSS.chat}    href="/contact"><ChatIcon /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div className={styles.sorryContainer}>
        <h1 className={styles.sorryText}>STILL WORKING ON THIS...SORRY🥺</h1>
    </div>

    <footer className={`container-fluid ${footer.footer}`}>
      <div className="row">
        <div className="col-md-6">
          <ul className={footer.navList}>
            <li><a href="/home"><span>Home</span></a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className='col-md-6 text-center text-md-right'>
          <a href="https://instagram.com/isak_rahmani" className={footer.socialIcon} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          <a href="https://www.facebook.com/isak.rahmani.3/" className={footer.socialIcon} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </a>
          <a href="https://www.github.com/ixoon" className={footer.socialIcon} aria-label="Github" target="_blank" rel="noopener noreferrer">
            <GitHubIcon/>
          </a>
        </div>
      </div>
    </footer>

    <div className={working.container}>
        <h2 className='working'>Interested in working together<span>?</span></h2>
        <a href='/contact'>
        <button className={working.getInTouch}>Get In Touch</button>
        </a>
        <a href='/projects'>
        <button className={working.projects}>Browse Projects</button>
        </a>
        <p className={working.signature}><Logo /></p>
    </div>
    </>

)

}