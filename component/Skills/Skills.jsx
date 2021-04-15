import React, { useEffect } from "react";
import styles from "../../styles/Skills.module.css";
import { PieChart } from "react-minimal-pie-chart";
import Aos from "aos";
import "aos/dist/aos.css";

function Skills() {
  const skillsData = [
    {
      title: "Flutter",
      color: "#E38627",
      value: 20,
      width: "100%",
    },
    {
      title: "Dart",
      color: "#C13C37",
      value: 15,
      width: "90%",
    },
    {
      title: "React.js",
      color: "#6A2135",
      value: 10,
      width: "80%",
    },
  ];
  const skillsData2 = [
    {
      title: "Html",
      color: "#2b2e4a",
      value: 30,
      width: "100%",
    },
    {
      title: "Css",
      color: "#e84545",
      value: 30,
      width: "90%",
    },
    {
      title: "JavaScript",
      color: "#903749",
      value: 40,
      width: "90%",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className={styles.skills}>
      <h1 data-aos="zoom-in">Skills</h1>
      <div data-aos="zoom-in" className={styles.skills__seperator}></div>
      <div className={styles.skills__main1}>
        <div data-aos="fade-right" className={styles.skillsMain__left}>
          {skillsData.map((skill) => {
            return (
              <div className={styles.skillMain__item}>
                <h3>{skill.title}</h3>
                <div
                  className={styles.skillMain__counter}
                  style={{ width: skill.width, backgroundColor: skill.color }}
                ></div>
              </div>
            );
          })}
        </div>
        <div data-aos="fade-left" className={styles.skillsMain__right}>
          <PieChart className={styles.pie_chart} data={skillsData} />;
        </div>
      </div>
      <div className={styles.skills__main2}>
        <div data-aos="fade-right" className={styles.skillsMain__left}>
          <PieChart className={styles.pie_chart} data={skillsData2} />;
        </div>
        <div data-aos="fade-left" className={styles.skillsMain__right}>
          {skillsData2.map((skill) => {
            return (
              <div className={styles.skillMain2__item}>
                <h3>{skill.title}</h3>
                <div
                  className={styles.skillMain__counter}
                  style={{ width: skill.width, backgroundColor: skill.color }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
