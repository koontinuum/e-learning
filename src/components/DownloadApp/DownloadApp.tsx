import scss from "./DownloadApp.module.scss";
import img1 from "../../images/DownloadApp/scan.svg";
import app from "../../images/DownloadApp/AppStore.svg";
import play from "../../images/DownloadApp/playMarket.svg";
import change from "../../images/DownloadApp/change.svg";
import { useTranslation } from "react-i18next";
function DownloadApp() {
  const { t } = useTranslation();
  return (
    <div className={scss.wrapper}>
      <div className={scss.left}>
        <h1>{t("DownloadApp.titleApp")}</h1>
        <p className={scss.left__text}>{t("DownloadApp.titleTextP2")}</p>
        <div className={scss.left__scann}>
          <div className={scss.wrapper__scan}>
            <img src={img1} alt="width 40px" />
            <p>{t("DownloadApp.titleAppTextP")}</p>
          </div>
          <div className={scss.wrapper__play}>
            <img src={app} alt="" />
            <img src={play} alt="" />
          </div>
        </div>
      </div>
      <img className={scss.right__img} src={change} alt="" />
    </div>
  );
}

export default DownloadApp;
