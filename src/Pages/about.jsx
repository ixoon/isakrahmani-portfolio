import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import navbarCSS from '../Components/home/navbar.module.css';
import Logo from '../Components/home/logo';
import ChatIcon from '@mui/icons-material/Chat';
import styles from './about.module.css';
import picture from '../Components/home/images/profilepic.jpg'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import footer from '../Components/home/footer.module.css';
import working from '../Components/home/working.module.css';

export default function About() {
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

        <div className={styles.aboutHeader}>
            <h1 className={styles.aboutH1}>ABOUT ME</h1>
        </div>

        <div className={styles.imageContainer}>
            <img src={picture} className={styles.img}/>
        </div>

        <div className={styles.aboutTextContainer}>
            <h1 className={styles.aboutMeHeader}>About me</h1>
            <p className={styles.aboutText}>I am Isak Rahmani, a full-stack web developer from Gora, Kosovo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum!</p> <br />
            <p className={styles.aboutText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                nihil, eveniet aliquid culpa officia aut!</p>
                <div className={styles.infoContainer}>
                    <div className={styles.infoRow}>
                        <span className={styles.label}>Name:</span>
                        <span className={styles.value1}>Isak Rahmani</span>
                    </div>
                    <div className={styles.infoRow}>
                        <span className={styles.label}>Date of Birth:</span>
                        <span className={styles.value2}>November 13, 2007</span>
                    </div>
                    <div className={styles.infoRow}>
                        <span className={styles.label}>Email:</span>
                        <span className={styles.value3}>isakrahmani2022@gmail.com</span>
                    </div>
                    <div className={styles.infoRow}>
                        <span className={styles.label}>Phone:</span>
                        <span className={styles.value4}>+383 49 254 243</span>
                    </div>
                </div>
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