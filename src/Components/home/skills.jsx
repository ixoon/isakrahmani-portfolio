import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './skills.module.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const skillsElement = document.getElementById('skills');
    if (skillsElement) {
      const rect = skillsElement.getBoundingClientRect();
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
    <div className={`container ${styles.container2}`}>
      <h1
        id="skills"
        className={`${styles.skills} ${isVisible ? styles.visible : styles.hidden}`}
      >
        Skills<span>.</span>
      </h1>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          HTML
          <span className="badge bg-success rounded-pill">✓</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          CSS
          <span className="badge bg-success rounded-pill">✓</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          JavaScript
          <span className="badge bg-success rounded-pill">✓</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Bootstrap
          <span className="badge bg-success rounded-pill">✓</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          React
          <span className="badge bg-success rounded-pill">✓</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Node.js
          <span className="badge bg-success rounded-pill">✓</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Express.js
          <span className="badge bg-success rounded-pill">✓</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          PostgreSQL
          <span className="badge bg-success rounded-pill">✓</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Firebase
          <span className="badge bg-success rounded-pill">✓</span>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
