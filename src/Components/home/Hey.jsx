import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import profileimg from '../home/images/profile.jpg';
import styles from './hey.module.css'; // Koristi CSS module

const Hey = () => {
    return (
        <div className={styles.container}>
            <div className={styles.Welcome}>
               <h2> Hey, I'm <span>Isak👋</span></h2>
                <h1 className={styles.heyheader}><span>Web</span> Developer</h1><br/>
                <p className={styles.heyparagraph}>I'll help you build beautiful websites your users will love.</p>
                <a href="/contact">
                <button className={styles.getInTouch}>Get In Touch</button>
                </a>
                <a href="/projects">
                <button className={styles.projects}>Browse Projects</button>
                </a>
            </div>

            <div className={styles.myPhoto}>
                <img src={profileimg} className={styles.round} alt="profile"/>
            </div>
        </div>
    );
}

export default Hey;
