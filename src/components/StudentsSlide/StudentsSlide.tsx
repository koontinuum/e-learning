import styles from "./StudentsSlide.module.scss";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { students } from "../../objects/StudentsSlide";
import arrowPrev from "../../images/StudentsSlide/arrow.svg";
import arrowNext from "../../images/StudentsSlide/arrow2.svg";
import { useTranslation } from "react-i18next";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function StudentsSlide() {
  const { t } = useTranslation();
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  function CustomPrevArrow(props: ArrowProps) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styles.customPrevArrow}`}
        style={{ ...style }}
        onClick={onClick}
      >
        <img src={arrowPrev} alt="Previous" />
      </div>
    );
  }

  function CustomNextArrow(props: ArrowProps) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styles.customNextArrow}`}
        style={{ ...style }}
        onClick={onClick}
      >
        <img src={arrowNext} alt="Next" />
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.slide__wrapper}>
        <h1> {t("students.h1")}</h1>
        <Slider {...settings}>
          {students.map((item) => (
            <div className={styles.sliderContent} key={item.id}>
              <img src={item.img} alt="vector" />
              <h2>{t("students.h2")}</h2>
              <div className={styles.slider__avatars}>
                <img src={item.img1} alt="avatar" />
                <img src={item.img2} alt="avatar" />
                <img src={item.img3} alt="avatar" />
                <img src={item.img4} alt="avatar" />
                <img src={item.img5} alt="avatar" />
              </div>
              <b>{item.name}</b>
              <p>{item.work}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default StudentsSlide;
