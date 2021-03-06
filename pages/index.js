import styles from "../styles/App.module.css";
import Header from "../component/Header/Header";
import Home from "../component/Home/Home";
import Project from "../component/Project/Project";
import Skills from "../component/Skills/Skills";
import Connect from "../component/Connect/Connect";
import Experience from "../component/Experience/Experience";
import Head from "next/head";

export default function App() {
  return (
    <div className={styles.app}>
      {/* Header */}
      <div className={styles.app__header}>
        <Header />
      </div>
      {/* Home */}
      <div id="home" className={styles.app__home}>
        <Home />
      </div>
      {/* Scroll Icon */}
      <div className={styles.app__scrollDownIndicator}>
        <img src="/images/down-arrow.svg" alt="scrollIcon" />,
      </div>
      {/* Project */}
      <div id="project" className={styles.app__project}>
        <Project />
      </div>
      {/* Skills */}
      <div id="skills">
        <Skills />
      </div>
      {/* Experience */}
      <div id="experience" className={styles.app__skills}>
        <Experience />
      </div>
      {/* Connect */}
      <div id="connect" className={styles.app__skills}>
        <Connect />
      </div>
    </div>
  );
}
