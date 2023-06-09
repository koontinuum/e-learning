import { useMemo } from "react";
import scss from "./Teachers.module.scss";
import { useTranslation } from "react-i18next";
import CardsOurTeachers from "./CardsOurTeachers";
import CardsTeachersArr from "../../constants/CardsTeachersArr";


const Teachers: React.FC = () => {
  const { t } = useTranslation();
  const renderCardTeacher = useMemo(
    () => CardsTeachersArr.map((item) => <CardsOurTeachers {...item} />),
    []
  );
  return (
    <div className={scss.wrapper}>
      <div className={scss.wrapper__title}>
        <h2>{t("teachers.title")}</h2>
      </div>
      <div className={scss.wrapper__wrappCardsContainer}>
        <div className={scss.wrapper__cardsContainer}>{renderCardTeacher}</div>
      </div>
    </div>
  );
};

export default Teachers;
