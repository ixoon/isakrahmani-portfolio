import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './mystory.module.css';

const MyStory = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const myStoryElement = document.getElementById('myStory');
        if (myStoryElement) {
            const rect = myStoryElement.getBoundingClientRect();
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
        <div className={`container ${styles.container}`}>
            <h1
                id="myStory"
                className={`${styles.mystory} ${isVisible ? styles.visible : styles.hidden}`}
            >
                My story<span>.</span>
            </h1>
            <br />
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur.</p>
            <br />
            <p className={styles.text}>Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut.</p>
            <br />
            <p className={styles.text}>Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid, reprehenderit, quia, quo neque error repudiandae fuga.</p>
            <br />
            <p className={styles.text}>Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint.</p>
            <br />
            <p className={styles.text}>Sed quibusdam recusandae alias error harum maxime adipisci amet laborum perspiciatis minima nesciunt dolorem.💜</p>
        </div>
    );
}

export default MyStory;
