import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './footer.module.css'; 
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <footer className={`container-fluid ${styles.footer}`}>
      <div className="row">
        <div className="col-md-6">
          <ul className={styles.navList}>
            <li><a href="/home"><span>Home</span></a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className='col-md-6 text-center text-md-right'>
          <a href="https://instagram.com/isak_rahmani" className={styles.socialIcon} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          <a href="https://www.facebook.com/isak.rahmani.3/" className={styles.socialIcon} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </a>
          <a href="https://www.github.com/ixoon" className={styles.socialIcon} aria-label="Github" target="_blank" rel="noopener noreferrer">
            <GitHubIcon/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
