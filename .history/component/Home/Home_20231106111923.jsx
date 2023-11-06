import React from "react";

import { motion } from "framer-motion";

function Home() {
  return (
    <div className="home">
      <motion.div
        className="home__left"
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            type: "tween",
          },
        }}
        initial={{
          opacity: 0,
          x: -100,
        }}
      >
        <div className="home__title">
          <h1>
            Hello, I'm Dhruv
            <br />
            Nakum
          </h1>
        </div>
        <div className="home__subtitle">
          <p>Mobile and Web Developer from India.</p>
        </div>
        <div style={{ marginTop: "2em" }}></div>
        <div className="resume_btn">
          <a href="https://drive.google.com/file/d/1vIg0jRUwXptqm2S09jY5MFjWA6coCvS4/view?usp=sharing" download="Dhruv's Resume" target="_blank" rel="noreferrer">Download Resume</a>
        </div>
        <div style={{ marginTop: "2em" }}></div>
        <div className="blog_btn">
          <a href="https://dhruvnakum.xyz" target="_blank" rel="noreferrer">Visit Blog ↗</a>
        </div>
        <div className="separator"></div>
        <div className="home__subtitle2">
          <p>See the projects below, or check out some</p>
        </div>
      </motion.div>
      {/* <motion.div
        className="home__right"
        animate={{
          opacity: 1,
          transition: {
            duration: 1,
            type: "tween",
          },
        }}
        initial={{
          opacity: 0,
        }}
      >
        <img src={potrait} alt="" />
      </motion.div> */}
    </div>
  );
}

export default Home;
