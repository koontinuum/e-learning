import styles from "./Maximize.module.scss";
import mainImg from "../../images/MaximizeImages/mainImg.svg";
import author from "../../images/StudentsSlide/student.svg";
import search from "../../images/MaximizeImages/Vector.svg";
import { useTranslation } from "react-i18next";

function Maximize() {
  const { t } = useTranslation();

  return (
    <div className={styles.main}>
      <div className={styles.main__search}>
        <img src={search} alt="search" />
        <input type="search" placeholder="Search..." />
      </div>
      <img src={mainImg} alt="main-image" />
      <div className={styles.main__content}>
        <div className={styles.first__content}>
          <b className={styles.main__date}>{t("Maximize.main__date")}</b>
          <h1 className={styles.main__title}>{t("Maximize.main__title")}</h1>
          <p className={styles.main__info}>{t("Maximize.main__info")}</p>
        </div>
        <div className={styles.second__content}>
          <img src={author} alt="author" />
          <b className={styles.author}>{t("Maximize.author")}</b>
        </div>
      </div>
    </div>
  );
}

export default Maximize;
