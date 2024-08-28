import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './working.module.css';
import Logo from './logo';
const Working = () => {
    return(
    <div className={styles.container}>
        <h2 className='working'>Interested in working together<span>?</span></h2>
        <a href='/contact'>
        <button className={styles.getInTouch}>Get In Touch</button>
        </a>
        <a href='/projects'>
        <button className={styles.projects}>Browse Projects</button>
        </a>
        <p className={styles.signature}><Logo /></p>
    </div>
    
);
}

export default Working;

