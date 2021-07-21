import { useEffect } from "react";
import styles from "../../styles/Project.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

import Aos from "aos";
import "aos/dist/aos.css";

function Project() {
  const router = useRouter();
  const webProjects = [
    {
      title: "Streamedia",
      subtitle: "Socialmedia for movies/series fans",
      image: "/images/Home.png",
      source: "https://streamedia.in/",
    },
    {
      title: "COVID Fighter",
      subtitle: "Get Help / Help Other to Fight against COVID",
      image: "/images/covidFighter.png",
      source: "http://covid-fighter.vercel.app/",
    },
    {
      title: "GhostDB",
      subtitle: "A Video games discovery website",
      image: "/images/ghost.png",
      source: "https://ghostdb.vercel.app/",
    },

    {
      title: "AI News Reader",
      subtitle: "Using Alan AI service",
      image: "/images/ai_reader.png",
      source: "https://github.com/red-star25/alan-ai",
    },
    {
      title: "Google",
      subtitle: "Using Google Search API",
      image: "/images/google_clone.png",
      source: "https://github.com/red-star25/google-clone",
    },
    {
      title: "Spotify",
      subtitle: "Spotify Clone with its Auth API and Media Player",
      image: "/images/spotify_clone.png",
      source: "https://github.com/red-star25/spotify-clone",
    },
    {
      title: "LinkedIn Clone",
      subtitle: "LinkedIn Clone with its Auth API",
      image: "/images/linkedInClone.png",
      source: "https://github.com/red-star25/LinkedIn-Clone",
    },
    {
      title: "Netflix",
      subtitle: "Netflix Clone",
      image: "/images/netflix_clone.png",
      source: "https://github.com/red-star25/netflix-clone",
    },

    {
      title: "Budget Tracker",
      subtitle: "A budget tracker for daily use",
      image: "/images/budget_tracker.png",
      source: "https://zealous-mclean-9f05f5.netlify.app/",
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
      source: "https://github.com/red-star25/pigGame",
    },
    {
      title: "Google Keeps Note",
      subtitle: "Daily notes taking web application",
      image: "/images/todo.png",
      source: "https://github.com/red-star25/todo-js",
    },
  ];
  const appProjects = [
    {
      title: "NRMed",
      subtitle: "An E-Commerce Medicine Application",
      image: "/images/NRMed.png",
      source:
        "https://www.linkedin.com/posts/dhruv-nakum-4b1054176_flutter-flutterdev-flutterappdevelopment-activity-6819283560608886784-152l",
    },
    {
      title: "RedCloud",
      subtitle: "A Cloud Storage Application",
      image: "/images/redcloud.png",
    },
    {
      title: "WorkoutGo",
      subtitle: "A Workout App",
      image: "/images/Workout.png",
      source:
        "https://play.google.com/store/apps/details?id=com.nakumsdtech.workout",
    },
    {
      title: "Inbrief",
      subtitle: "A short news app. Read news in seconds",
      image: "/images/inbrief.png",
      source:
        "https://play.google.com/store/apps/details?id=com.NakumsDtech.inbreif",
    },
    {
      title: "Waller",
      subtitle: "A Wallpaper app. Save & Set wallpapers in one click",
      image: "/images/waller.png",
      source:
        "https://play.google.com/store/apps/details?id=com.NakumsDtech.waller",
    },
    {
      title: "Wyck",
      subtitle: "A Weahter forcast app using 'openweatherapi'",
      image: "/images/weather.png",
      source:
        "https://play.google.com/store/apps/details?id=com.NakumsDtech.wyck",
    },
    {
      title: "Whatsapp",
      subtitle: "An UI clone of Whatsapp mobile application",
      image: "/images/whatsapp_mob.png",
    },
    {
      title: "Messanger",
      subtitle: "An UI clone of Facebook messanger mobile application",
      image: "/images/messanger_app.png",
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
          {webProjects.map((project, index) => {
            return (
              <div
                key={index}
                data-aos="zoom-in-up"
                style={{ cursor: project.source ? "pointer" : "default" }}
                className={styles.projectCard__main}
                onClick={() => {
                  if (project.source != null) router.push(project.source);
                }}
              >
                <div className={styles.projectCard}>
                  <Image
                    width={240}
                    height={140}
                    layout="responsive"
                    objectFit="cover"
                    src={project.image}
                    alt=""
                  />
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
              <div
                data-aos="zoom-in-up"
                style={{ cursor: project.source ? "pointer" : "default" }}
                className={styles.projectCard__main}
                onClick={() => {
                  if (project.source != null) router.push(project.source);
                }}
              >
                <div className={styles.projectCard}>
                  <Image
                    width={240}
                    height={140}
                    objectFit="cover"
                    src={project.image}
                    alt=""
                  />
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
