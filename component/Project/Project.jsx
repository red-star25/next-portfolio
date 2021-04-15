import React, { useEffect } from "react";
import styles from "../../styles/Project.module.css";
// import netflix from "/images/netflix_clone.jfif";
// import google from "/images/google_clone.jfif";
// import spotify from "/images/spotify_clone.jfif";
// import aiReader from "/images/ai_reader.png";
// import budgetTracker from "/images/budget_tracker.png";
// import forkify from "/images/forkify.png";
// import pigGame from "/images/pig_game.png";
// import todo from "/images/todo.jfif";

// import workout from "/images/Workout.png";
// import inbrief from "/images/inbrief.png";
// import waller from "/images/waller.png";
// import wyck from "/images/weather.png";
// import whatsapp from "/images/whatsapp_mob.jfif";
// import messanger from "/images/messanger_app.jfif";
// import covidTracker from "/images/covid_tracker_mob.jfif";
// import mediaPlayer from "/images/media_player_mob.jfif";

import Aos from "aos";
import "aos/dist/aos.css";

function Project() {
  const webProjects = [
    {
      title: "Netflix",
      subtitle: "With video functionality and authentication",
      image: "/images/netflix_clone.jfif",
    },
    {
      title: "Google",
      subtitle: "Using Google Search API",
      image: "/images/google_clone.jfif",
    },
    {
      title: "Spotify",
      subtitle: "Using Spotify Authentication and Media Player",
      image: "/images/spotify_clone.jfif",
    },
    {
      title: "AI News Reader",
      subtitle: "Using Alan AI service",
      image: "/images/ai_reader.png",
    },
    {
      title: "Budget Tracker",
      subtitle: "A budget tracker for daily use",
      image: "/images/budget_tracker.png",
    },
    {
      title: "Forkify",
      subtitle: "An Online Recipe Search Web Application using JavaScript ",
      image: "/images/forkify.png",
    },
    {
      title: "Pig Game",
      subtitle: "High score dice rolling game for two player",
      image: "/images/pig_game.png",
    },
    {
      title: "Google Keeps Note",
      subtitle: "Daily notes taking web application",
      image: "/images/todo.jfif",
    },
  ];
  const appProjects = [
    {
      title: "WorkoutGo",
      subtitle: "A Workout App",
      image: "/images/Workout.png",
    },
    {
      title: "Inbrief",
      subtitle: "A short news app. Read news in seconds",
      image: "/images/inbrief.png",
    },
    {
      title: "Waller",
      subtitle: "A Wallpaper app. Save & Set wallpapers in one click",
      image: "/images/waller.png",
    },
    {
      title: "Wyck",
      subtitle: "A Weahter forcast app using 'openweatherapi'",
      image: "/images/weather.png",
    },
    {
      title: "Whatsapp",
      subtitle: "An UI clone of Whatsapp mobile application",
      image: "/images/whatsapp_mob.jfif",
    },
    {
      title: "Messanger",
      subtitle: "An UI clone of Facebook messanger mobile application",
      image: "/images/messanger_app.jfif",
    },
    {
      title: "Covid Tracker",
      subtitle: "App to track Covid-19 cases from all over the world",
      image: "/images/covid_tracker_mob.jfif",
    },
    {
      title: "Media Player Neumorphic Design",
      subtitle: "An Neumorphic design of Media Player ",
      image: "/images/media_player_mob.jfif",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className={styles.project}>
      <h1 data-aos="zoom-in">Projects</h1>
      <div data-aos="zoom-in" className={styles.project__seperator}></div>
      <div className={styles.project__web}>
        <h2>Website Development Projects</h2>
        <div className={styles.project__listOfProject}>
          {webProjects.map((project) => {
            return (
              <div data-aos="zoom-in-up" className={styles.projectCard__main}>
                <div className={styles.projectCard}>
                  <img src={project.image} alt="" />
                </div>
                <div className={styles.projectCard__title}>
                  <h2>{project.title}</h2>
                </div>
                <div className={styles.projectCard__subTitle}>
                  <p>{project.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.project__mobile}>
        <h2>Application Development Projects</h2>
        <div className={styles.project__listOfProject}>
          {appProjects.map((project) => {
            return (
              <div data-aos="zoom-in-up" className={styles.projectCard__main}>
                <div className={styles.projectCard}>
                  <img src={project.image} alt="" />
                </div>
                <div className={styles.projectCard__title}>
                  <h2>{project.title}</h2>
                </div>
                <div className={styles.projectCard__subTitle}>
                  <p>{project.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;
