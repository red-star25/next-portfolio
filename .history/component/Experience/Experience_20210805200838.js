import React, { useEffect } from "react";
import styles from "../../styles/Experience.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
function Experience() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className={styles.experience}>
      <h1 data-aos="zoom-in">Experience</h1>
      <div data-aos="zoom-in" className={styles.experience__seperator}></div>
      <div className={styles.experience__data}>
        <ul data-aos="zoom-in" className={styles.company__info}>
          <h2 className={styles.company__name}>Aecor Technology PVT. LTD</h2>
          <li className={styles.company__position}>Lead Developer</li>
          <li>
            - Followed Agile standard practice across application development.
          </li>
          <li>
            - Assisted senior workers in debugging the code to improve
            performance and UX
          </li>
          <li>- Built over 80+ custom pages</li>
          <li className={styles.company__duration}>July 2020 - Jan 2021</li>
        </ul>
        <ul data-aos="zoom-in" className={styles.company__info}>
          <h2 className={styles.company__name}>NR Life Care</h2>
          <li className={styles.company__position}>Flutter Developer</li>
          <li>
            - Designed and Developed both Client and Admin Side Application
          </li>
          <li>
            - Created, maintained, and enforced front-end code and documentation
            standards
          </li>
          <li>
            - Implemented Payment Gateway, Internationalization, admin panel
          </li>
          <li className={styles.company__duration}>Jan 2020 - Jun 2020</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
