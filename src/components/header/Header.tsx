/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../images/header/logo.svg";
import search from "../../images/header/search.svg";
import lang from "../../images/header/lang.svg";
import "../../i18n";
import { useTranslation } from "react-i18next";
function Header() {
  const [showNav, setShowNav] = useState(false);
  const { i18n } = useTranslation();
  let handleClick = (lang: string ) => {
    i18n.changeLanguage(lang);
   };
  const showNavbar = () => {
    setShowNav(!showNav);
  };

  return (
    <div className={styles.header__contents}>
      <header className={styles.header}>
        <a href="/#" className={styles.logo}>
          <img alt="" src={logo} />
        </a>
        <a className={styles.header__links} href="#">
          Home
        </a>
        <a className={styles.header__links} href="#">
          Components
        </a>
        <a className={styles.header__links} href="#">
          Pages
        </a>
        <a className={styles.header__links} href="#">
          Documentation
        </a>
        <nav
          className={`${styles.nav} ${showNav ? styles.responsive_nav : ""}`}
        >
          <Link to="/" className={styles.navLink}>
            Courses-Landing
          </Link>
          <Link to="/Courses-List" className={styles.navLink}>
            Courses-List
          </Link>
          <Link to="/Courses-Details" className={styles.navLink}>
            Courses-Details
          </Link>
          <Link to="/Courses-Blog" className={styles.navLink}>
            Courses-Blog
          </Link>
          <Link to="/Courses-Blog-Details" className={styles.navLink}>
            Courses-Blog-Details
          </Link>
          <Link to="/Courses-About" className={styles.navLink}>
            Courses-About
          </Link>
          <Link to="/Courses-Contact" className={styles.navLink}>
            Courses-Contact
          </Link>
          <button
            className={`${styles.navBtn} ${showNav ? styles.visible : ""} ${
              styles.navCloseBtn
            }`}
            onClick={showNavbar}
          >
            <FaTimes />
          </button>
        </nav>
        <button className={styles.navBtn} onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
      <div className={styles.header__buttons}>
        <button className={styles.search__button}>
          <img src={search} alt="search" />
        </button>
        <button className={styles.lang__button}>
          <img 
          src={lang} 
          alt="lang"
          onClick={() =>
            handleClick(i18n.language === "ru" ? "en" : "ru")
          }
          />
        </button>
        <button className={styles.login__button}>Login</button>
        <button className={styles.joinUs__button}>Join Us</button>
      </div>
    </div>
  );
}

export default Header;
