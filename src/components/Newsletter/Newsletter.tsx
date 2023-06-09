import scss from './Newsletter.module.scss'
import image from '../../images/NewsletterIcon/image.svg'
import { useTranslation } from 'react-i18next';

function Newsletter() {

  const { t } = useTranslation();


  return (
    <div className={scss.wrapper}>
        <div className={scss.box}>
            <div className={scss.box__action}>
                <div className={scss.action_text}>
                    <h3>{t("Newsletter.Newsletter__title")}</h3>
                    <p>{t("Newsletter.Newsletter__txt")}</p>
                </div>
                <div className={scss.action_input}>
                    <input type="text" placeholder='Enter your email'/>
                    <button>Register</button>
                </div>
            </div>
            <img src={image} alt="" />
        </div>
    </div>
  )
}

export default Newsletter