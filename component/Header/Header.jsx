import styles from "../../styles/Header.module.css";
import React, { useState } from "react";
import { motion } from "framer-motion";

function Header() {
  const [selectedLink, setSelectedLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerClass, setHeaderClass] = useState(styles.header);
  const [headerLogoClass, setHeaderLogoClass] = useState(styles.header__logo);

  const onLinkClicked = (linkName) => {
    if (linkName === "home") {
      window.scrollTo(0, 0);
    }
    setSelectedLink(linkName);
  };

  return (
    <div className={headerClass}>
      {headerClass === styles.header__mob ? (
        <div></div>
      ) : (
        <motion.h1
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
              type: "tween",
              delay: 0.2,
            },
          }}
          initial={{
            opacity: 0,
            x: -100,
          }}
          className={styles.header__logo}
        >
          {"<D>"}
        </motion.h1>
      )}

      <div
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
          if (headerClass === styles.header__mob) {
            setHeaderClass(styles.header);
          } else {
            setHeaderClass(styles.header__mob);
          }
          if (headerLogoClass === styles.header__logo) {
            setHeaderLogoClass(styles.header__logo__mob);
          } else {
            setHeaderLogoClass(styles.header__logo);
          }
          document
            .querySelector(".header__mobile__links")
            .classList.toggle(styles.open);
        }}
        className={`header__mobile__links ${styles.header__mobile__links} ${styles.header__logo__center} `}
      >
        <motion.img
          src={!isMenuOpen ? "/images/menu.png" : "/images/cancel.png"}
          alt=""
          animate={{
            opacity: 1,
            transition: {
              duration: 0.5,
              type: "tween",
            },
            x: 0,
          }}
          initial={{
            opacity: 0,
            x: +200,
          }}
        />
        {isMenuOpen ? (
          <div className={styles.menuLinks}>
            <ul>
              <li>
                <a
                  onClick={() => onLinkClicked("home")}
                  id={selectedLink === "home" ? styles.selectedLink : ""}
                  href="#home"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  onClick={() => onLinkClicked("project")}
                  id={selectedLink === "project" ? styles.selectedLink : ""}
                  href="#project"
                >
                  PROJECTS
                </a>
              </li>
              <li>
                <a
                  onClick={() => onLinkClicked("skills")}
                  id={selectedLink === "skills" ? styles.selectedLink : ""}
                  href="#skills"
                >
                  SKILLS
                </a>
              </li>
              <li>
                <a
                  onClick={() => onLinkClicked("connect")}
                  id={selectedLink === "connect" ? styles.selectedLink : ""}
                  href="#connect"
                >
                  CONNECT
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className={styles.header__links}>
        <motion.a
          animate={{
            opacity: 1,
            transition: {
              duration: 0.5,
              type: "tween",
            },
          }}
          initial={{
            opacity: 0,
          }}
          onClick={() => {
            onLinkClicked("home");
            window.scrollTo(0, 0);
          }}
          id={selectedLink === "home" ? styles.selectedLink : ""}
          href="#home"
        >
          HOME
        </motion.a>
        <motion.a
          animate={{
            opacity: 1,
            transition: {
              duration: 0.5,
              type: "tween",
              delay: 0.1,
            },
          }}
          initial={{
            opacity: 0,
          }}
          onClick={() => onLinkClicked("project")}
          id={selectedLink === "project" ? styles.selectedLink : ""}
          href="#project"
        >
          PROJECTS
        </motion.a>
        <motion.a
          animate={{
            opacity: 1,
            transition: {
              duration: 0.5,
              type: "tween",
              delay: 0.2,
            },
          }}
          initial={{
            opacity: 0,
          }}
          onClick={() => onLinkClicked("skills")}
          id={selectedLink === "skills" ? styles.selectedLink : ""}
          href="#skills"
        >
          SKILLS
        </motion.a>
        <motion.a
          animate={{
            opacity: 1,
            transition: {
              duration: 0.5,
              type: "tween",
              delay: 0.3,
            },
          }}
          initial={{
            opacity: 0,
          }}
          onClick={() => onLinkClicked("connect")}
          id={selectedLink === "connect" ? styles.selectedLink : ""}
          href="#connect"
        >
          CONNECT
        </motion.a>
      </div>
    </div>
  );
}

export default Header;
