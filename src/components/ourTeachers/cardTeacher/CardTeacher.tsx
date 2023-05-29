import React from "react";
import scss from "./CardTeacher.module.scss";
type CardTeacherProps = {
  name: string;
  specialist: string;
  shape: string;
  foto: string;
};
const CardTeacher: React.FC<CardTeacherProps> = ({
  name,
  specialist,
  shape,
  foto,
}) => {
  return (
    <div className={scss.wrapper}>
      <div className={scss.wrapper__title}>
        <h2>{name}</h2>
      </div>
      <div className={scss.wrapper__p}>
        <p>{specialist}</p>
      </div>
      <div>
        <img src={shape} alt="shape" />
      </div>
      <div className={scss.wrapper__cardsContainer}>
        <img src={foto} alt="foto" />
      </div>
    </div>
  );
};

export default CardTeacher;
