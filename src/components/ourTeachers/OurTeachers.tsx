import { useMemo } from "react";
import scss from "./OurTeachers.module.scss";
import { useTranslation } from "react-i18next";
import CardTeacher from "./cardTeacher/CardTeacher";
import CardTeacherArr from "../../constants/CardTeacher";
import btnImg from "../../images/cardTeacher/Button.svg";

const OurTeachers:React.FC = () =>{
  const { t } = useTranslation();
  const renderCardTeacher = useMemo(
    () => CardTeacherArr.map((item) => <CardTeacher {...item} key={item.id} />),
    []
  );
  return (
    <div className={scss.wrapper}>
      <div className={scss.wrapper__title}>
        <h2>{t("teachers.h2")}</h2>
      </div>
      <div className={scss.wrapper__p}>
        <p>{t("teachers.p")}</p>
      </div>
      <div className={scss.wrapper__wrappCardsContainer}>
        <div className={scss.wrapper__cardsContainer}>{renderCardTeacher}</div>
      </div>
      <div className={scss.wrapper__btn}>
        <img src={btnImg} alt="btn" />
      </div>
    </div>
  );
}

export default OurTeachers;
