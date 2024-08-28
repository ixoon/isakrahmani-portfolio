import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './album.module.css';
import quran from '../home/images/quran.jpg1.jpg';
import move from '../home/images/move-1.jpg';
import weather from '../home/images/dragas.jpg';
import rock from '../home/images/rock-win.jpg';
import etch from '../home/images/etch.jpg';
import comments from '../home/images/comments1.jpg';
import clock from '../home/images/clock.jpg';
import delivery from '../home/images/delivery.jpg';
import temperature from '../home/images/temp.jpg';
import calculator from '../home/images/calculator.jpg';

const Album = () => {
  return (
    <div className={` container ${styles.container}`}>
      <h1 className={styles.h1}>PROJECTS<span>.</span></h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className={styles.card}>
            <img src={quran} className={styles.cardImage} alt="Naziv Projekta 1" />
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>Quran app</h2>
              <p className={styles.cardText}>A Quran app for everyone to read easily!</p>
              <a href="/projects/quranapp" className={styles.button}>View more</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className={styles.card}>
            <img src={move} className={styles.cardImage} alt="Naziv Projekta 2" />
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>Move it!</h2>
              <p className={styles.cardText}>You are planning a move, no problem!</p>
              <a href="/projects/moveitapp" className={styles.button}>View more</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className={styles.card}>
            <img src={weather} className={styles.cardImage} alt="Naziv Projekta 3" />
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>Weather app</h2>
              <p className={styles.cardText}>Get real-time weather updates and forecasts for your location.</p>
              <a href="/projects/weatherapp" className={styles.button}>View more</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className={styles.card}>
            <img src={rock} className={styles.cardImage} alt="Naziv Projekta 4" />
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>Rock-paper-scissors</h2>
              <p className={styles.cardText}>Play the classic Rock Paper Scissors game with an interactive interface.</p>
              <a href="/projects/rock-paper-scissors" className={styles.button}>View more</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className={styles.card}>
            <img src={etch} className={styles.cardImage} alt="Naziv Projekta 2" />
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>Etch a Sketch</h2>
              <p className={styles.cardText}>Draw and sketch using a digital Etch A Sketch for a nostalgic, creative experience.</p>
              <a href="/projects/etchasketch" className={styles.button}>View more</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className={styles.card}>
            <img src={comments} className={styles.cardImage} alt="Naziv Projekta 2" />
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>Comment app</h2>
              <p className={styles.cardText}>An app designed for expressing thoughts and sharing feedback in a simple, user-friendly way.</p>
              <a href="/projects/commentapp" className={styles.button}>View more</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className={styles.card}>
            <img src={clock} className={styles.cardImage} alt="Naziv Projekta 2" />
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>Digital clock</h2>
              <p className={styles.cardText}>Simple and elegant digital clock for accurate timekeeping.</p>
              <a href="/projects/digitalclock" className={styles.button}>View more</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className={styles.card}>
            <img src={delivery} className={styles.cardImage} alt="Naziv Projekta 2" />
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>Delivery app</h2>
              <p className={styles.cardText}>Manage deliveries seamlessly with our intuitive app.</p>
              <a href="/projects/deliveryapp" className={styles.button}>View more</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className={styles.card}>
            <img src={calculator} className={styles.cardImage} alt="Naziv Projekta 2" />
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>Calculator app</h2>
              <p className={styles.cardText}>A user-friendly calculator app for quick and accurate mathematical operations.</p>
              <a href="/projects/calculatorapp" className={styles.button}>View more</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className={styles.card}>
            <img src={temperature} className={styles.cardImage} alt="Naziv Projekta 2" />
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>Temperature-conversion app</h2>
              <p className={styles.cardText}>Easily convert between Celsius, Fahrenheit with this temperature conversion app.</p>
              <a href="/projects/temperatureapp" className={styles.button}>View more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;
