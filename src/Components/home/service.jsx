import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './service.module.css';
import frontendImg from '../home/images/download.png';
import backendImg from '../home/images/images.png';

const Services = () => {
  return (
    <div className={styles.container}>
      <div style={{ height: '150px' }}></div>
      <h1 className={styles.serviceHeader}>Services<span>.</span></h1>
      <div className="row">
        <div className="col-md-6">
          <div className={styles.serviceCard}>
            <img src={frontendImg} alt="Frontend Development" className={styles.cardImage} />
            <div className={styles.cardBody}>
              <h5 className={styles.cardTitle}>Frontend Development</h5>
              <p className={styles.cardText}>
                Building responsive and interactive user interfaces using modern technologies like React, Bootstrap, and CSS.
              </p>
              <a href="mailto:isakrahmani2022@gmail.com" className={styles.orderButton}>Order Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className={styles.serviceCard}>
            <img src={backendImg} alt="Backend Development" className={styles.cardImage} />
            <div className={styles.cardBody}>
              <h5 className={styles.cardTitle}>Backend Development</h5>
              <p className={styles.cardText}>
                Developing robust backend solutions using Node.js, Express, and databases like MongoDB and SQL.
              </p>
              <a href="mailto:isakrahmani2022@gmail.com" className={styles.orderButton}>Order Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
