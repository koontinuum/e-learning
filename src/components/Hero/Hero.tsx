import scss from './Hero.module.scss'
import strelka from '../../images/heroIcon/strelka.svg'
import pause from '../../images/heroIcon/pause.svg'
import image from '../../images/heroIcon/image.svg'
import { useTranslation } from 'react-i18next';

function Hero() {

    const { t } = useTranslation();

  return (
    <div className={scss.wrapper}>
        <div className={scss.box}>
            <div className={scss.box__left}>
                <h2>{t("Hero.Hero__h2")} <span>{t("Hero.Hero_span1")}</span> <span className={scss.decoration}>{t("Hero.Hero_span2")}</span> {t("Hero.Hero__h21")}</h2>
                <div className={scss.left__text}>
                    <p>{t("Hero.Hero__txt")}</p>
                </div>
                <div className={scss.left__btn}>
                    <button>{t("Hero.Hero__btn")} <img src={strelka} alt="" /></button>
                    <div className={scss.btn__text}>
                        <div><img src={pause} alt="" /></div>
                        <h6>{t("Hero.Hero__h6")}</h6>
                    </div>
                </div>
                <div className={scss.line}></div>
                <div className={scss.left__infa}>
                    <div className={scss.learners}>
                        <div>
                            <h3>14k+</h3>
                            <p>{t("Hero.Hero__p1")}</p>
                        </div>
                    </div>
                    <div className={scss.courses}>
                        <div>
                            <h3>1,05k+</h3>
                            <p>{t("Hero.Hero__p2")}</p>
                        </div>
                    </div>
                    <div className={scss.graduates}>
                        <div>
                            <h3>59k+</h3>
                            <p>{t("Hero.Hero__p3")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={scss.box__right}>
                <img src={image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero