import React from "react";
import scss from "./CardsOurTeachers.module.scss";
type CardsOurTeachersProps = {
  name: string;
  specialist: string;
  foto: string;
};
const CardsOurTeachers:React.FC<CardsOurTeachersProps> = ({
  name,
  specialist,
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
     <div className={scss.wrapper__cardsContainer}>
        <img src={foto} alt="foto" />
      </div>
    </div>
  );
};

export default CardsOurTeachers;
