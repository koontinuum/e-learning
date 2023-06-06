import React from "react";
import scss from "./CoursesCard.module.scss";
type CoursesCardProps = {
  foto: string;
  spec: string;
  cenac?: string;
  cena: string;
  courses: string;
  text: string;
  star: string;
  teacher: string,
  time: string;
};
const CoursesCard: React.FC<CoursesCardProps> = ({
  foto,
  spec,
  cenac,
  cena,
  courses,
  text,
  star,
  teacher,
  time,
}) => {
  return (
    <div className={scss.wrapper}>
      <div className={scss.wrapper__foto}>
        <img src={foto} alt="foto" />
      </div>
      <div className={scss.wrapper__right}>
        <div className={scss.wrapper__title}>
          <h2>{spec}</h2>
          <p style={{ opacity: 0.3 }}>{cenac}</p><p>{cena}</p>
        </div>
        <div className={scss.wrapper__h6}>
          <h6>{courses}</h6>
        </div>
        <div className={scss.wrapper__p}>
          <p>{text}</p>
        </div>
        <div className={scss.wrapper__star}>
          <img src={star} alt="star" />
        </div>
        <div className={scss.wrapper__teacher}>
          <img src={teacher} alt="teacher" />
        </div>
        <div className={scss.wrapper__time}>
          <img src={time} alt="time" />
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
