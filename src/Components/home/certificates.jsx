import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './certificates.module.css';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

const Certificates = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const certificationsElement = document.getElementById('certifications');
        if (certificationsElement) {
            const rect = certificationsElement.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Proveri da li je element u vidnom delu ekrana
            if (rect.top <= windowHeight && rect.bottom >= 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Proveri stanje odmah pri učitavanju
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className={`container ${styles.container}`}>
                <h1
                    id="certifications"
                    className={`${styles.certifications} ${isVisible ? styles.visible : styles.hidden}`}
                >
                    Certifications<span>.</span>
                </h1>
                <a className={styles.link} href="https://www.udemy.com/certificate/UC-c3c6bcfd-7f27-40a9-98c8-a8a9b799212f/">
                    <h3><CardGiftcardIcon /> Full-Stack Web Developer</h3>
                </a>
            </div>
            <hr />
        </>
    );
}

export default Certificates;
