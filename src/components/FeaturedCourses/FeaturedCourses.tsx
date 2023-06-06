import { featuredCourses } from "../../objects/FeaturedCourses/FeaturedCourses";
import scss from "./FeaturedCourses.module.scss";
import star from "../../images/FeaturedCourses/zvezda.svg";
import avatar from "../../images/FeaturedCourses/profil.svg";
import time from "../../images/FeaturedCourses/watch.svg";
import stat from "../../images/FeaturedCourses/ic_skill_level_intermediate.svg";
import React, { useState, useEffect } from 'react'
import { useTranslation } from "react-i18next";
function FeaturedCourses() {
  const { t } = useTranslation();
  const [windowSize, setWindowSize] = useState<{ width: number }>({
    width: window.innerWidth
});

useEffect(() => {
    const handleResize = () => {
        setWindowSize({ width: window.innerWidth });
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);

const index: number = windowSize.width < 900 ? -1 : 0;
  return (
    <div className={scss.wrapper}>
      <h1 className={scss.curs__textP}>{t("FeaturedCourses.titleCourses")}</h1>
      <p className={scss.curs__textH1}>{t("FeaturedCourses.titleLoremP")}</p>
      <div className={scss.img__block}>
        {featuredCourses.slice(index).map((item) => (
          <div className={scss.cards}>
            <img src={item.img} alt={item.title} />
            <div className={scss.wrapper__price}>
              <div className={scss.prices}>
                <b>{t("FeaturedCourses.titletextB")}</b>
                <strong>${item.price}</strong>
              </div>
              <h4>{item.title}</h4>
              <div className={scss.grade}>
                <div className={scss.grade__right}>
                  <img src={star} alt="star" />
                  <b>4.8</b>
                  <strong>(1,089)</strong>
                </div>
                <div className={scss.grade__left}>
                  <b>180k</b>
                  <strong> {t("FeaturedCourses.titletextStrong")}</strong>
                </div>
              </div>
              <div className={scss.info__students}>
                <img src={avatar} alt="avatar" />
                <h5>{item.name}</h5>
                <b>{item.descrip}</b>
              </div>
            </div>
            <div className={scss.cardsfooter}>
              <div className={scss.hours}>
                <img src={time} alt="" />
                <b>100 hours</b>
              </div>
              <div className={scss.textstat}>
                <img src={stat} alt="" />
                <b>Beginner</b>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedCourses;
