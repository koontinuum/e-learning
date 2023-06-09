import scss from './OnlineCourses.module.scss'
import icon from '../../images/OnlineCoursesIcon/illustration_courses_hero.svg'
import { useTranslation } from "react-i18next";

function OnlineCourses() {

  const { t } = useTranslation();


  return (
    <div className={scss.wrapper}>
        <div className={scss.left}>
            <div className={scss.left_text}>
                <h1>{t("OnlineCourses.OnlineCourses__title")}</h1>
                <p>{t("OnlineCourses.OnlineCourses__txt")}</p>
            </div>
            <button>{t("OnlineCourses.OnlineCourses__btn")}</button>
        </div>
        <img src={icon} alt="" />
    </div>
  )
}

export default OnlineCourses