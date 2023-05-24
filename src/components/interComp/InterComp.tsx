/* eslint-disable jsx-a11y/alt-text */
import scss from "./InterComp.module.scss";
import imgInterComp from "../../images/interComp/IMG.svg";
import line from "../../images/interComp/Rectangle 530.svg";
import { useTranslation } from "react-i18next";

const InterComp:React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={scss.wrapper}>
      <div className="container">
        <div className={scss.wrapper__title}>
          <h5 className={scss.title__h5}>{t("interComp.titleInter")}</h5>
        </div>
        <div className={scss.wrapper__main}>
          <div className={scss.main__img}>
            <img src={imgInterComp} alt="user" />
          </div>
          <div className={scss.main__title}>
            <div>
              <h6 className={scss.title__h6}>{t("interComp.titleInterH6")}</h6>
            </div>
            <div className={scss.title__p}>
              <p>{t("interComp.titleInterText")}</p>
            </div>
            <div className={scss.title__description}>
              <div className={scss.description__left}>
                <img className={scss.description__img} src={line} alt="line" />
                <p>{t("interComp.titleInterTextP")}</p>
              </div>
              <div className={scss.description__right}>
                <img className={scss.description__img} src={line} alt="line" />
                <p>{t("interComp.titleInterTextP")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterComp;
