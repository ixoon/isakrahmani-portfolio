import React from "react";
import styles from './getInTouch.module.css';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import profileimg from '../home/images/profile.jpg';
import working from '../home/working.module.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import navbarCSS from '../home/navbar.module.css';
import Logo from '../home/logo';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import ChatIcon from '@mui/icons-material/Chat';

const GetInTouch = () => {
    return (
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
                            <Nav.Link className={navbarCSS.chat} href="/contact"><ChatIcon /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className={styles.container}>
                <h1 className={styles.header}>Get In Touch<span>.</span></h1>
                <p className={styles.partners}>
                    Looking to partner or work together? <br />
                    Reach out through the form and I'll get back to you in the next 24 hours.
                </p>
                <br />
                <p className={styles.contact}>
                    <EmailIcon className={styles.icon} style={{ fontSize: '2rem' }} />
                    <a href="mailto:isakrahmani2022@gmail.com" className={styles.emailLink}>
                        isakrahmani2022@gmail.com
                    </a>
                </p>
                <p className={styles.contact}>
                    <LocalPhoneIcon className={styles.icon} style={{ fontSize: '2rem' }} />
                    +383 49 254 243
                </p>
            </div>

            <div className={styles.myPhoto}>
                <img src={profileimg} className={styles.round} alt="profile" />
            </div>

            <div className={styles.contactContainer}>
      <h2 className={styles.contactTitle}>Contact me via Email</h2>
      <form className={styles.contactForm}>
        <div className={styles.inputGroup}>
          <input type="text" name="name" placeholder="Name" className={styles.inputField} />
          <input type="email" name="email" placeholder="Email" className={styles.inputField} />
        </div>
        <div className={styles.inputGroup}>
          <input type="text" name="subject" placeholder="Subject" className={styles.inputField} />
          <textarea name="body" placeholder="Body" className={styles.textareaField}></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>
    </div>

            <footer className={`container-fluid ${styles.footer}`}>
                <div className="row">
                    <div className="col-md-6">
                        <ul className={styles.navList}>
                            <li><a href="/home">Home</a></li>
                            <li><a href="/projects">Projects</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="#"><span>Contact</span></a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 text-center text-md-right">
                        <a href="https://instagram.com/isak_rahmani" className={styles.socialIcon} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon />
                        </a>
                        <a href="https://www.facebook.com/isak.rahmani.3/" className={styles.socialIcon} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon />
                        </a>
                        <a href="https://www.github.com/ixoon" className={styles.socialIcon} aria-label="Github" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon />
                        </a>
                    </div>
                </div>
            </footer>

            <div className={working.container}>
                <h2 className={working.working}>Interested in working together<span>?</span></h2>
                <a href='/contact'>
                    <button className={working.getInTouch}>Get In Touch</button>
                </a>
                <a href='/projects'>
                    <button className={working.projects}>Browse Projects</button>
                </a>
                <p className={working.signature}><Logo/></p>
            </div>
        </>
    );
}

export default GetInTouch;
