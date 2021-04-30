import React, { useEffect } from "react";
import styles from "../../styles/Connect.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
function Connect() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className={styles.connect}>
      <h1 data-aos="zoom-in">Connect</h1>
      <div data-aos="zoom-in" className={styles.connect__seperator}></div>
      <div className={styles.connect__details}>
        <div data-aos="fade-right" className={styles.connectDetails__1}>
          <h1 id={styles.name}>DHRUV NAKUM</h1>
          <p id={styles.profession}>Mobile and Web Developer</p>
          <span id={styles.residency}>• India</span>
        </div>
        <div data-aos="fade-right" className={styles.connectDetails__2}>
          <p id={styles.connectText}>
            If you are thinking about hiring me or would like to discuss a
            project, get in touch with me at
          </p>
          <p id={styles.email}>nakumdhruv123@gmail.com</p>
        </div>
        <div className={styles.connect__social}>
          <a
            href="https://www.linkedin.com/in/dhruv-nakum-4b1054176/"
            target="_blank"
          >
            LINKED IN
          </a>
          <p>/</p>

          <a href="https://twitter.com/dhruv_nakum" target="_blank">
            TWITTER
          </a>
          <p>/</p>

          <a href="https://github.com/red-star25" target="_blank">
            GITHUB
          </a>
        </div>
      </div>
    </div>
  );
}

export default Connect;
