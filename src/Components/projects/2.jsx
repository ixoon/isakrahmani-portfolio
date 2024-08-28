import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Moveit from '../home/images/move-1.jpg';
import Moveit2 from '../home/images/move-2.jpg';
import Moveit3 from '../home/images/move-3.jpg';
import styles from './3.module.css'; 
import { Navbar, Nav, Container } from 'react-bootstrap';
import navbarCSS from '../home/navbar.module.css';
import Logo from '../home/logo';
import ChatIcon from '@mui/icons-material/Chat';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import footer from './3.module.css';
import working from '../home/working.module.css';

const Move = () => {
    return (
        <>
        <div>
        <Navbar className={navbarCSS.navbarFixed} bg="light" expand="lg">
          <Container>
            <Navbar.Brand><Logo /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav">
              <Nav className={navbarCSS.navCenter}>
                <Nav.Link className={navbarCSS.navlink} href="/home"><span>Home</span></Nav.Link>
                <Nav.Link className={navbarCSS.navlink} href="/projects">Projects</Nav.Link>
                <Nav.Link className={navbarCSS.navlink} href="/about">About</Nav.Link>
                <Nav.Link className={navbarCSS.chat} href="/contact"><ChatIcon /></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div className={styles.carouselWrapper}>
      <Carousel id="carouselExampleInterval" className={styles.carousel} interval={10000}>
        <Carousel.Item className={styles.carouselItem}>
          <img src={Moveit} className={styles.carouselImage} alt="Slide 1" />
        </Carousel.Item>
        <Carousel.Item interval={2000} className={styles.carouselItem}>
          <img src={Moveit2} className={styles.carouselImage} alt="Slide 2" />
        </Carousel.Item>
        <Carousel.Item className={styles.carouselItem}>
          <img src={Moveit3} className={styles.carouselImage} alt="Slide 3" />
        </Carousel.Item>
      </Carousel>
    </div>
      <div>
        <h1 className={styles.header}>Move it!</h1>
        <p className={styles.description}>Move it app built in HTML, CSS, JavaScript and React!</p>
      </div>

      <footer className={`container-fluid ${footer.footer}`}>
        <div className="row">
          <div className="col-md-6">
            <ul className={footer.navList}>
              <li><a href="/home"><span>Home</span></a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className='col-md-6 text-center text-md-right'>
            <a href="https://instagram.com/isak_rahmani" className={footer.socialIcon} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/isak.rahmani.3/" className={footer.socialIcon} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </a>
            <a href="https://www.github.com/ixoon" className={footer.socialIcon} aria-label="Github" target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
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
    );
  }
  
  export default Move;
